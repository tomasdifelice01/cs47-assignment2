import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import { Themes, Icons, Profiles } from "./assets/Themes";

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
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image style={styles.logoImage} source={Icons.menu.light} />
        <Text style={styles.appName}> ensom</Text>
        <Image style={styles.logoImage} source={Icons.sun} />
      </View>
      <View style={styles.profile}>
        <View style={styles.card}>
          <Text style={styles.name}>MTL</Text>
          <Image style={styles.profileImage} source={Profiles.mtl.image} />
        </View>
        <View style={styles.audio}>
          <Image style={styles.audioImage} source={Icons.audioWave.light} />
        </View>
      </View>
      <View style={styles.bottomBar}></View>
    </View>
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
    width: "100%",
    marginTop: 60,
    paddingHorizontal: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    height: "40%",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  card: {
    width: "100%",
  },
  name: {
    position: "relative",
  },
  logoImage: {
    height: "90%",
    width: 40,
    resizeMode: "contain",
  },
  appName: {
    fontSize: 32,
    fontFamily: "Sydney-Bold",
  },
  profileImage: {
    position: "relative",
    top: 0,
    resizeMode: "contain",
    width: "90%",
  },
  audioImage: {
    resizeMode: "contain",
    width: "90%",
  },
});
