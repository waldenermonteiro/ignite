import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";

import HistoryCard from "../../components/HistoryCard";

import { Container, Header, Title } from "./styles";
import { categories } from "../../utils/categories";

interface TransactionData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export default function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );
  const dataKey = "@gofinances:transactions";

  async function loadData() {
    const response = await AsyncStorage.getItem(dataKey);

    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) => expensive.type === "negative"
    );
    console.log('EXPENSIVES',expensives)

    const expensivesTotal = expensives.reduce(
      (acumullator: number, expensive: TransactionData) => {
        return acumullator + Number(expensive.amount);
      },
      0
    );

    console.log('expensivesTotal',expensivesTotal);

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {

      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key2) {
 
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const percent = `${((categorySum / expensivesTotal) * 100).toFixed(
          0
        )}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          total: categorySum,
          totalFormatted,
          color: category.color,
          percent,
        });
      }
    });
    setTotalByCategories(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <ScrollView
        contentContainerStyle={{ width: "100%", alignItems: "center" }}
        scrollEnabled={true}
      >
        <VictoryPie
          data={totalByCategories}
          x="percent"
          y="total"
          colorScale={totalByCategories.map((category) => category.color)}
          style={{labels: {fontSize: 18, fontWeight: 'bold', fill: 'white'}}}
          labelRadius={50}
        />
        {totalByCategories.map((item, index) => (
          <HistoryCard
            key={index}
            color={item.color}
            title={item.name}
            amount={item.totalFormatted}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
