import { StyleSheet, Text, View } from "react-native";
import {Image} from "expo-image";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Link href="/(auth)/signup">Signup Page</Link>
      <Link href="/(auth)">LoginPage</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{color:"red"}
});
