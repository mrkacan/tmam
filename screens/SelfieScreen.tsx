import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from "../constants/Layout";
import CameraComponent from "../components/Camera";
import {useNavigation} from "@react-navigation/native";

export default function SelfieScreen() {
    const navigation = useNavigation();

    const onProceedPress = () => {
        navigation.navigate("UploadScreen")
    }
    return (
        <SafeAreaView style={styles.container}>
            <CameraComponent onProceedPress={onProceedPress} isSelfie/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: wp(10),
    },
    textWrapper: {
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: "center"
    },
    description: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: "center"
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
