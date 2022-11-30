import styled from "styled-components/native";
import { Dimensions } from "react-native";
import theme from "../../style/theme";

const { width, height } = Dimensions.get('window');

export const Modal = styled.Modal`
        background-color : rgba(0,0,0,0.2);
`;

export const ModalView = styled.View`
    flex: 1;
    width : ${width}px;
    height : ${height / 2}px;
    justify-Content: center;
    align-Items: center;
    padding : 20px;
    border-radius : 10px;
    background-color : white;
`;

export const SubmitBtn = styled.TouchableOpacity`
    width: ${width * 0.8};
    height: 40px;
    background-color: ${theme.colors.main};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;
export const SubmitText = styled.Text`
    color : white;
    font-size: 16px;
`;
export const PickedStoreTouch = styled.TouchableHighlight`
    margin: 10px;
    border-radius: 10px;
`;
export const PickedStoreView = styled.View`
    background-color: ${theme.colors.BGColor1};
    width: ${width * 0.8}px;
    height: ${height / 5}px;
    border-radius: 5px;
    justify-content:center;
    align-items: center;
`;
export const PickedStoreText1 = styled.Text`
    font-size : 12px;
`;
export const PickedStoreText2 = styled.Text`
    font-size : 20px;
    margin : 10px 0;
`;

export const PickedStoreText3=  styled.Text`
    font-size : 16px;
`;