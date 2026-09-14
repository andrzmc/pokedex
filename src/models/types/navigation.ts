import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string | number };
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};

export type ProfileStackParamList = {
  Home: undefined;
};
