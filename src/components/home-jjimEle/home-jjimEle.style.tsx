import styled from "styled-components/native";
import theme from "../../style/theme";

export const JjimContainer = styled.TouchableOpacity`
  width: ${theme.width * 0.85}px;
  height: ${theme.width * 0.4}px;
  background-color: ${theme.colors.BGColor1};
  border-radius: 10px;
  padding: 10px 10px 15px 15px;
  justify-content: space-around;
`;

export const IconWrap = styled.View`
  width: ${theme.width * 0.1}px;
  height: ${theme.width * 0.1}px;
  background-color: #a9cce3;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const TextContainer = styled.View`
  margin: 10px 0 0 7px;
`;

export const CatTitle = styled.Text`
  font-size: 14px;
  color: ${theme.colors.fontColor2};
  margin-bottom: 5px;
`;

export const ShopName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;
