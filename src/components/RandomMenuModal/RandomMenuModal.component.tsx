import React, { SetStateAction } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/index.hooks";
import { Modal, ModalView, PickedStoreText1, PickedStoreText2, PickedStoreText3, PickedStoreTouch, PickedStoreView, SubmitBtn, SubmitText } from "./RandomMenuModal.style";
import { useNavigation } from "@react-navigation/native";
import { setCurStore } from "../../store/slice/curStateSlice";

interface Props {
    modalVisible : SetStateAction<boolean>;
    setModalVisible : (T : boolean) => void;
    pickedStore : Array<string>;
}
const RandomMemuModal = ({modalVisible, setModalVisible, pickedStore } : Props) => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}
        >
            <ModalView>
                <PickedStoreTouch onPress={(() => {
                    navigation.navigate('StorePage');
                    dispatch(setCurStore(pickedStore.store));
                    setModalVisible(!modalVisible);
                })}>
                    <PickedStoreView>
                        <PickedStoreText1>
                            {pickedStore.category}
                        </PickedStoreText1>
                        <PickedStoreText2>
                            {pickedStore.store}
                        </PickedStoreText2>
                        <PickedStoreText3>
                            {pickedStore.main_menu}
                        </PickedStoreText3>
                    </PickedStoreView>
                </PickedStoreTouch>
                <SubmitBtn onPress={() => {
                    setModalVisible(!modalVisible)
                }}>
                    <SubmitText>다시 뽑기</SubmitText>
                </SubmitBtn>
            </ModalView>
        </Modal>
    )
}

export default RandomMemuModal;