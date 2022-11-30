import React from "react";

import { Container, Header, MiddleBlock, BottomBlock } from "./home.style";
import { LongBtn } from "../../components/longBtn/longBtn.component";
import { HomeJjimEle } from "../../components/home-jjimEle/home-jjimEle.component";
import SafeAreaViewComp from "../../components/safeAreaViewComp/safeAreaViewComp";
import { ScrollView } from "react-native-gesture-handler";
import LargeCatEle from "../../components/LargeCatEle/LargeCatEle.component";

import {
  FoodIcon,
  SalonIcon,
  HospitalIcon,
  CafeIcon,
  BeerIcon,
  ShopIcon,
  ServiceIcon,
  PlayIcon,
} from "../../assets/icon/icons";

const categoryList = [
  {
    name: "먹거리",
    icon: FoodIcon,
  },
  {
    name: "놀거리",
    icon: PlayIcon,
  },
  {
    name: "카페",
    icon: CafeIcon,
  },
  {
    name: "술집",
    icon: BeerIcon,
  },
  {
    name: "서비스",
    icon: ServiceIcon,
  },
  {
    name: "상점",
    icon: ShopIcon,
  },
  {
    name: "미용실",
    icon: SalonIcon,
  },
  {
    name: "랜덤뽑기",
    icon: HospitalIcon,
  },
];

const Home = (): JSX.Element => {
  return (
    <SafeAreaViewComp>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Container>
          <Header.Container>
            <Header.LogoText>우리대학거리</Header.LogoText>
            <Header.UnivText>인하대학교</Header.UnivText>
          </Header.Container>
          <MiddleBlock.Container>
            <MiddleBlock.CatWrap>
              {categoryList.map((item, index) => {
                return (
                  <LargeCatEle
                    key={index}
                    name={item.name}
                    icon={item.icon}
                  ></LargeCatEle>
                );
              })}
            </MiddleBlock.CatWrap>
            <LongBtn btnTitle="지도로 보기" pageTitle="Map" />
          </MiddleBlock.Container>
          <BottomBlock.Container>
            <HomeJjimEle categoryTitle="먹거리" shopName="맛사랑"></HomeJjimEle>
          </BottomBlock.Container>
        </Container>
      </ScrollView>
    </SafeAreaViewComp>
  );
};

export default Home;
