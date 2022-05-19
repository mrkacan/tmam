import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {RootTabScreenProps} from '../types';
import {useEffect, useState} from "react";

export default function UploadScreen({navigation}: RootTabScreenProps<'UploadScreen'>) {
    const [uploading, setUploading] = useState(true);

    useEffect(() => {
        setTimeout(() => setUploading(false), 2500)
    }, [])

    return (
        <View style={styles.container}>
            {uploading && <ActivityIndicator size={"large"} color={"#00a5e0"}/>}
            <Text
                style={[styles.title, !uploading && styles.uploadedText]}>{uploading ? 'Uploading' : 'Uploaded Successfully'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 20,
        color: "#00a5e0"
    },
    uploadedText: {
        color: "#208808"
    }
});
