import React, { useState, useEffect } from "react";
import { Container } from "./StoreMenuTab.style";
import { ScrollView } from "react-native-gesture-handler";
import MenuEle from "../../../components/MenuEle/MenuEle.component";

interface store {
    image_url : string;
    menu_name : string;
    price : string; 
}
interface Props {
    storeMenu : store[];
}
const StoreMenuTab = ({storeMenu} : Props):JSX.Element => {
    type StoreMenu = {
        menu_name : string;
        price : string;
    }

    return (
        <Container>
            <ScrollView>
            {storeMenu &&
                storeMenu.map(({menu_name, price}, index) => {
                    return (
                        <MenuEle
                            key={index}
                            menuName={menu_name}
                            menuPrice={price} 
                            menuDes={""}
                        />
                    );
            })}
            </ScrollView>
        </Container>
    )
}
export default StoreMenuTab;