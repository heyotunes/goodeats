import { Platform } from "react-native";

const liveHost = "https://us-central1-hungry-7d670.cloudfunctions.net";
const localHost = "http://localhost:5001/hungry-7d670/us-central1";

export const isAndroid = Platform.OS === "android";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = !isDevelopment || isAndroid ? liveHost : localHost;
