import React, { useState, useEffect } from "react";
import SafeAreaViewComp from "../../components/safeAreaViewComp/safeAreaViewComp";
import HeaderBar from "../../components/HeaderBar/HeaderBar.component";
import axios from "axios";
import { Container, MainContainer, CheckboxContainer, CatText, SubmitBtn, SubmitContainer, SubmitText } from "./Random.style"
import { Header } from "react-native/Libraries/NewAppScreen";
import { SvgXml } from "react-native-svg";
import { CheckBoxIcom, BlankBoxIcon } from "../../assets/icon/icons";
import { ScrollView } from "react-native";
import RandomMenuModal from "../../components/RandomMenuModal/RandomMenuModal.component";

type category = {
    name : String;
}

const Random = () => {
    const [catSelect, setCatSelect] = useState([]);
    const [pickedStore, setPickedStore] = useState({});
    const [isPossible, setIsPossible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const category = ["한식", "중식", "일식", "양식", "분식", "치킨/피자", "패스트푸드", "아시안", "기타"]

    useEffect(() => {
        catSelect.length != 0 ? setIsPossible(true) : setIsPossible(false)
    }, [catSelect])

    const onSelected = (selected: never) => {
        catSelect.includes(selected) ?
            setCatSelect(catSelect.filter(item => item !== selected)) :
            setCatSelect([...catSelect, selected]);
    }

    const onSubmit = async () => {
        await axios
            .post("/categories/random/",
                {
                    categoryList: catSelect
                }
            )
            .then((res) => {
                if (res.data.success) {
                    setPickedStore(res.data.store)
                }
            })
            .catch((err) => {
                console.log("error");
                console.log(err);
            });
    }
    console.log(pickedStore)
    return (
        <SafeAreaViewComp>
            <Container>
                <HeaderBar
                    title="메뉴 분류 선택"
                    left={true}                
                    center={false}
                >
                </HeaderBar>
                <MainContainer>
                    <ScrollView>
                        <CheckboxContainer color={catSelect.find((ele) => ele === "한식")} onPress={() => onSelected("한식")}>
                                {
                                    catSelect.find((ele) => ele === "한식") ?
                                        (<SvgXml xml={CheckBoxIcom} width="20px" height="20px" fill="#ff9933" />) :
                                        (<SvgXml xml={BlankBoxIcon} width="20px" height="20px" fill="#ff9933" />)
                                }
                                <CatText>
                                    한식
                                </CatText>
                        </CheckboxContainer>
                        <CheckboxContainer color={catSelect.find((ele) => ele === "중식")} onPress={() => onSelected("중식")}>
                                {
                                    catSelect.find((ele) => ele === "중식") ?
                                        (<SvgXml xml={CheckBoxIcom} width="20px" height="20px" fill="#ff9933" />) :
                                        (<SvgXml xml={BlankBoxIcon} width="20px" height="20px" fill="#ff9933" />)
                                }
                                <CatText>
                                    중식
                                </CatText>
                        </CheckboxContainer>
                        <CheckboxContainer color={catSelect.find((ele) => ele === "일식")} onPress={() => onSelected("일식")}>
                                {
                                    catSelect.find((ele) => ele === "일식") ?
                                        (<SvgXml xml={CheckBoxIcom} width="20px" height="20px" fill="#ff9933" />) :
                                        (<SvgXml xml={BlankBoxIcon} width="20px" height="20px" fill="#ff9933" />)
                                }
                                <CatText>
                                일식
                                </CatText>
                        </CheckboxContainer>
                        <CheckboxContainer color={catSelect.find((ele) => ele === "양식")} onPress={() => onSelected("양식")}>
                                {
                                    catSelect.find((ele) => ele === "양식") ?
                                        (<SvgXml xml={CheckBoxIcom} width="20px" height="20px" fill="#ff9933" />) :
                                        (<SvgXml xml={BlankBoxIcon} width="20px" height="20px" fill="#ff9933" />)
                                }
                                <CatText>
                                    양식
                                </CatText>
                        </CheckboxContainer>
                        <CheckboxContainer color={catSelect.find((ele) => ele === "분식")} onPress={() => onSelected("분식")}>
                                {
                                    catSelect.find((ele) => ele === "분식") ?
                                        (<SvgXml xml={CheckBoxIcom} width="20px" height="20px" fill="#ff9933" />) :
                                        (<SvgXml xml={BlankBoxIcon} width="20px" height="20px" fill="#ff9933" />)
                                }
                                <CatText>
                                    분식
                                </CatText>
                        </CheckboxContainer>
                        <CheckboxContainer color={catSelect.find((ele) => ele === "치킨/피자")} onPress={() => onSelected("치킨/피자")}>
                                {
                                    catSelect.find((ele) => ele === "치킨/피자") ?
                                        (<SvgXml xml={CheckBoxIcom} width="20px" height="20px" fill="#ff9933" />) :
                                        (<SvgXml xml={BlankBoxIcon} width="20px" height="20px" fill="#ff9933" />)
                                }
                                <CatText>
                                    치킨/피자
                                </CatText>
                        </CheckboxContainer>
                        <CheckboxContainer color={catSelect.find((ele) => ele === "패스트푸드")} onPress={() => onSelected("패스트푸드")}>
                                {
                                    catSelect.find((ele) => ele === "패스트푸드") ?
                                        (<SvgXml xml={CheckBoxIcom} width="20px" height="20px" fill="#ff9933" />) :
                                        (<SvgXml xml={BlankBoxIcon} width="20px" height="20px" fill="#ff9933" />)
                                }
                                <CatText>
                                    패스트푸드
                                </CatText>
                        </CheckboxContainer>
                        <CheckboxContainer color={catSelect.find((ele) => ele === "아시안")} onPress={() => onSelected("아시안")}>
                                {
                                    catSelect.find((ele) => ele === "아시안") ?
                                        (<SvgXml xml={CheckBoxIcom} width="20px" height="20px" fill="#ff9933" />) :
                                        (<SvgXml xml={BlankBoxIcon} width="20px" height="20px" fill="#ff9933" />)
                                }
                                <CatText>
                                    아시안
                                </CatText>
                        </CheckboxContainer>
                        <CheckboxContainer color={catSelect.find((ele) => ele === "기타")} onPress={() => onSelected("기타")}>
                                {
                                    catSelect.find((ele) => ele === "기타") ?
                                        (<SvgXml xml={CheckBoxIcom} width="20px" height="20px" fill="#ff9933" />) :
                                        (<SvgXml xml={BlankBoxIcon} width="20px" height="20px" fill="#ff9933" />)
                                }
                                <CatText>
                                    기타
                                </CatText>
                        </CheckboxContainer>
                    </ScrollView>   
                </MainContainer>
                <SubmitContainer>
                    <SubmitBtn 
                        color={isPossible} 
                        onPress={() => {
                            if (isPossible) {
                                onSubmit();
                                setModalVisible(true);
                            }
                        }}>
                        <SubmitText>메뉴 뽑기</SubmitText>
                    </SubmitBtn>
                </SubmitContainer>
            </Container>
            <RandomMenuModal 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                pickedStore={pickedStore}
            />
        </SafeAreaViewComp>
    )
}

export default Random;