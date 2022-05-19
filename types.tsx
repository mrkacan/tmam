/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  WelcomeScreen: NavigatorScreenParams<undefined> | undefined;
  CaptureIDScreen: NavigatorScreenParams<undefined> | undefined;
  SelfieScreen: NavigatorScreenParams<undefined> | undefined;
  UploadScreen: NavigatorScreenParams<undefined> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;


export type RootTabScreenProps<Screen extends keyof RootStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
