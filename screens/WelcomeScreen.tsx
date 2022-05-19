import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import {widthPercentageToDP as wp} from "../constants/Layout";
import {useNavigation} from "@react-navigation/native";

export default function App() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>Welcome to KYC Application</Text>
                <Text style={styles.description}>If you want to proceed to KYC application, please
                    click to next button</Text>
            </View>

            <Button onPress={() => navigation.navigate("CaptureIDScreen")}>Next</Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: wp(5),
        flexDirection: "column",
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
