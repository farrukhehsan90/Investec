import { Dimensions, StatusBar } from "react-native";

export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height) - StatusBar.currentHeight;