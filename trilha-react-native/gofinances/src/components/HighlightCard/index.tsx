import React from "react";
import { View, Text } from "react-native";
import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
} from "./styles";

export default function HighlightCard() {
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle" />
            </Header>
            <Footer>
                <Amount>R$ 47.400,00</Amount>
                <LastTransaction>
                    Última entrada dia 13 de abril
                </LastTransaction>
            </Footer>
        </Container>
    );
}
