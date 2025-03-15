import Login from "@/components/Login";
import { Text, View } from "react-native";
import { auth } from "./../configs/FirebaseConfig";
import { Redirect } from "expo-router";

import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // 忽略所有日志

export default function Index() {
  const user = auth.currentUser;
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? <Redirect href={'/mytrip'} /> : <Login />}
    </View>
  );
}
