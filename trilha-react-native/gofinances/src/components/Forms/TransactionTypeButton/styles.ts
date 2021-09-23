import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface IconProps {
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)`
  width: 48%;
  flex-direction: row;
  align-items: center;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;
  justify-content: center;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attetion};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
