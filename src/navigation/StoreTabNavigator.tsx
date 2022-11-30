import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from "axios";

import StoreInfoTab from '../screens/StorePage/StoreInfoTab/StoreInfoTab.component';
import StoreMenuTab from '../screens/StorePage/StoreMenuTab/StoreMenuTab.component';
import StoreReviewTab from '../screens/StorePage/StoreReviewTab/StoreReviewTab.component';

const Tab = createMaterialTopTabNavigator();
interface Props {
    curStore : string;
}
const StoreTapNavigator = ({curStore} : Props) => {

    const [storeMenu, setStoreMenu] = useState([]);
    const getStore = async () => {
        await axios
          .get( "/l-categories/l/m-categories/m/stores/" + curStore + "/menu" )
          .then((res) => {
            setStoreMenu(res.data.list);
          })
          .catch((err) => {
            console.log("error");
            console.log(err);
          });
    };

    useEffect(() => {    
        getStore();
    }, []);

    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: {
                fontSize: 16,
            },
            indicatorStyle: {
                borderColor: '#ff9933',
                borderWidth: 2
            }
        }}>
            <Tab.Screen name="정보" component={StoreInfoTab} />
            {
                storeMenu.length != 0 && 
                <Tab.Screen name="메뉴" children={()=> <StoreMenuTab storeMenu={storeMenu} />} />
            }
            <Tab.Screen name="리뷰" component={StoreReviewTab} />
        </Tab.Navigator>
    );
}

export default StoreTapNavigator;
