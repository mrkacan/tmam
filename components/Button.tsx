import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Camera, CameraType} from 'expo-camera';
import {widthPercentageToDP as wp} from "../constants/Layout";

type CameraProps = {
    isSelfie?: boolean
}

const CameraComponent: React.FC<CameraProps> = ({isSelfie}) => {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={isSelfie ? CameraType.front : CameraType.back}>

                <View style={isSelfie ? styles.selfie : styles.card}>
                </View>
            </Camera>
        </View>
    );
}


const CAMERA_WIDTH = wp(90)
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        width: CAMERA_WIDTH,
        height: "80%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: CAMERA_WIDTH * 0.9,
        height: CAMERA_WIDTH * 0.9 *.65,
        borderWidth: 4,
        borderStyle: 'dotted',
        borderColor: "#105067",
    },
    selfie: {
        width: CAMERA_WIDTH * 0.3,
        height: CAMERA_WIDTH * 0.4,
        borderRadius: CAMERA_WIDTH * 0.2,
        borderWidth: 4,
        borderStyle: 'dotted',
        borderColor: "#105067",
        transform: [
            {rotate:'90deg'},
            {scaleX: 2},
        ]
    },
    buttonContainer: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
export default CameraComponent
