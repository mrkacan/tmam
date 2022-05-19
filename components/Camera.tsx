import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Camera, CameraProps, CameraType} from 'expo-camera';
import {widthPercentageToDP as wp} from "../constants/Layout";
import Button from './Button';

type CameraComponentProps = {
    isSelfie?: boolean;
    onProceedPress: () => void;
}

const CameraComponent: React.FC<CameraComponentProps> = ({isSelfie, onProceedPress}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [picture, setPicture] = useState("")
    const cameraRef = useRef<CameraProps>()
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

    const onCapturePress = async () => {
        const picture = await cameraRef.current.takePictureAsync()
        setPicture(picture?.uri)
    }

    const onReTakePress = async () => {
        setPicture("")
    }

    return (
        <View style={styles.container}>
            {
                picture ? <Image source={{uri: picture}} style={styles.capturedImage}/> :
                    <Camera ref={cameraRef} style={styles.camera}
                            type={isSelfie ? CameraType.front : CameraType.back}>
                        <View style={isSelfie ? styles.selfie : styles.card}>
                        </View>
                    </Camera>
            }
            {
                !picture ? <Button onPress={onCapturePress}>Capture</Button> :
                    <>
                        <Button onPress={onReTakePress}>Take again</Button>
                        <Button onPress={onProceedPress}>Confirm</Button>
                    </>
            }
        </View>
    );
}


const CAMERA_WIDTH = wp(90)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        width: wp(100),
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: CAMERA_WIDTH * 0.9,
        height: CAMERA_WIDTH * 0.9 * .65,
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
            {rotate: '90deg'},
            {scaleX: 2},
        ]
    },
    buttonContainer: {},
    button: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    capturedImage: {
        width: "100%",
        height: 500,
        resizeMode: "contain"
    },
});
export default CameraComponent
