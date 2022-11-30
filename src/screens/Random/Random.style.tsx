import styled, { css } from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import theme from "../../style/theme";

const StatusBarHeight = StatusBar.currentHeight;

export const Container = styled.View`
    background-color: #fff;
    flex : 1;
    ${Platform.OS === "android"
        ? css`
        padding-top: ${StatusBarHeight + 15}px;
    `
        : undefined}
`;
export const MainContainer = styled.View`
    flex: 1;
    background-color: ${theme.colors.BGColor1};
`;
export const CheckboxContainer = styled.TouchableOpacity<{color : boolean}>`
    flex-Direction: row;
    align-items : center;
    padding: 10px;
    background-Color : ${props => props.color ? theme.colors.main : "white"};
`;
export const CatText = styled.Text`
    font-size : 20px;
    margin: 0 10px;
`;
export const SubmitContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;
export const SubmitBtn = styled.TouchableOpacity<{color : boolean}>`
    width: 90%;
    height: 40px;
    background-color: ${props => props.color ? theme.colors.main : '#999999'};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;
export const SubmitText = styled.Text`
    color : white;
    font-size: 16px;
`;