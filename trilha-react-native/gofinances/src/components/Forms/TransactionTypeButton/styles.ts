import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

interface IconProps {
  type: "up" | "down";
}
interface ContainerProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  border: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;
  justify-content: center;
  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light}; ;
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.attetion_light}; ;
    `}
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
