import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  JjimContainer,
  IconWrap,
  CatTitle,
  ShopName,
  TextContainer,
} from "./home-jjimEle.style";

interface Props {
  categoryTitle : string;
  shopName : string;
}

export const HomeJjimEle = ({ categoryTitle, shopName } : Props): JSX.Element => {
  const navigation = useNavigation();
  const movePage = useCallback(
    () => navigation.navigate(shopName, { key: shopName }),
    []
  );

  return (
    <JjimContainer activeOpacity={0.8} onPress={movePage}>
      <IconWrap></IconWrap>
      <TextContainer>
        <CatTitle>{categoryTitle}</CatTitle>
        <ShopName numberOfLines={1}>{shopName}</ShopName>
      </TextContainer>
    </JjimContainer>
  );
};
