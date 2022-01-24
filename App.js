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
import { Dimensions } from "react-native";
import SwipeCards from "./SwipeCards.js";

const { width, height } = Dimensions.get("window");

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    "Sydney-Bold": require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

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
  swipeCards: {
    display: "flex",
    //flex: 1,
    //position: "relative",
    height: Platform.isPad ? "55%" : "48%",
    width: "95%",
    //display: "flex",
    //flexDirection: "column",
    //alignContent: "center",
    //padding: 10,
  },
  card: {
    width: "90%",
    height: "100%",
    margin: 10,
    display: "flex",
    alignSelf: "center",
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
  },
  name: {
    position: "absolute",
    fontFamily: "Sydney",
    fontSize: Platform.isPad ? 45 : 32,
    color: Themes.light.textSecondary,
    margin: 10,
    zIndex: 1,
  },
  caption: {
    position: "absolute",
    fontFamily: "Sydney",
    fontSize: Platform.isPad ? 24 : 18,
    color: Themes.light.textSecondary,
    margin: 10,
    zIndex: 1,
    bottom: 0,
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
  profileImage: {
    position: "absolute",
    top: 0,
    //flex: 1,
    //resizeMode: "contain",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    aspectRatio: 1 / 1.1,
  },
  audio: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 20,
    margin: 10,
    height: "40%",
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
  },
  wave: {
    //position: "absolute",

    resizeMode: "contain",
    height: "100%",
    width: "70%",

    //position: "absolute",
    //width: "90%",
  },
  play: {
    //position: "absolute",
    resizeMode: "contain",
    height: "100%",
    width: "25%",
    //position: "absolute",
    //width: "90%",
  },
  take: {
    fontSize: Platform.isPad ? 45 : 32,
    marginTop: 15,
    marginLeft: 15,
    fontFamily: "Sydney",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Themes.light.navigation,
    height: "10%",
    //height: 80,
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
  audioImages: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    height: "40%",
    alignItems: "center",
    marginTop: 15,
    //justifyContent: "space-between",
  },
});
