import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from "../constants/Layout";

type ButtonProps = {
    children: string;
    fitContent?: boolean;
    onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({onPress, children, fitContent}) => {
    return (
        <TouchableOpacity onPress={onPress}
                          style={[styles.wrapper, fitContent && styles.fitContent]}>
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        margin: wp(5),
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "#088ab9",
        height: 48,
        marginBottom: 0
    },
    text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    fitContent: {
        width: 100,
        margin: 0
    }
});
export default Button
