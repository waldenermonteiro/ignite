import React from "react";
import {RectButtonProps} from 'react-native-gesture-handler'

import { Container, Icon, Title } from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends RectButtonProps {
  type: "up" | "down";
  title: string;
  isActive: boolean;
}
export default function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: Props) {
  return (
    <Container {...rest} type={type} isActive={isActive} >
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
