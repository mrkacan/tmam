/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import {RootStackParamList} from '../types';
import WelcomeScreen from "../screens/WelcomeScreen";
import CaptureIDScreen from '../screens/CaptureIDScreen';
import SelfieScreen from '../screens/SelfieScreen';
import UploadScreen from '../screens/UploadScreen';

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CaptureIDScreen"
                component={CaptureIDScreen}
                options={{headerShown: true, headerTitle: "Capture ID"}}
            />
            <Stack.Screen
                name="SelfieScreen"
                component={SelfieScreen}
                options={{headerShown: true, headerTitle: "Take a Selfie"}}
            />
            <Stack.Screen
                name="UploadScreen"
                component={UploadScreen}
                options={{headerShown: true, headerTitle: "Images Are Uploading"}}
            />
        </Stack.Navigator>
    );
}
