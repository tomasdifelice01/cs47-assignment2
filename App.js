import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import { Themes, Icons, Profiles } from "./assets/Themes";
import SwipeCards from "./SwipeCards.js";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    "Sydney-Bold": require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;
  StatusBar.setBarStyle(Themes.light.statusBar);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <Image style={styles.logoImage} source={Icons.menu.light} />
        <Text style={styles.appName}> ensom</Text>
        <Image style={styles.logoImage} source={Icons.sun} />
      </View>
      <View style={styles.swipeCards}>
        <SwipeCards />
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.bottomIcons}>
          <Image style={styles.bottomImage} source={Icons.discover.light} />
          <Text style={styles.bottomTexts}>Discover</Text>
        </View>
        <View style={styles.bottomIcons}>
          <Image style={styles.bottomImage} source={Icons.heart.light} />
          <Text style={styles.bottomTexts}>Matched</Text>
        </View>
        <View style={styles.bottomIcons}>
          <Image style={styles.bottomImage} source={Icons.messages.light} />
          <Text style={styles.bottomTexts}>DMs</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    flexDirection: "column",
    alignItems: "center",
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    height: Platform.OS === "ios" ? 41 : 54,
    width: "90%",
    marginTop: 5,
    marginBottom: 22,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoImage: {
    height: "100%",
    width: 40,
    resizeMode: "contain",
  },
  appName: {
    fontSize: 32,
    fontFamily: "Sydney-Bold",
  },
  swipeCards: {
    display: "flex",
    height: Platform.isPad ? "55%" : "48%",
    width: "95%",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Themes.light.navigation,
    height: "10%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
  },
  bottomIcons: {
    height: "50%",
    width: "17%",
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    margin: 5,
  },
  bottomTexts: {
    fontSize: 18,
    fontFamily: "Sydney",
    color: Themes.light.textSecondary,
  },
});
