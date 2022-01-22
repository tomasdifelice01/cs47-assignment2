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
          <Text style={styles.name}>{Profiles.mtl.name}</Text>
          <Text style={styles.caption}>{Profiles.mtl.caption}</Text>
          <Image style={styles.profileImage} source={Profiles.mtl.image} />
        </View>
        <View style={styles.audio}>
          <Text style={styles.take}>My hottest take</Text>
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
    width: "95%",
    marginTop: 60,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    position: "relative",
    height: "50%",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    //padding: 10,
  },
  card: {
    width: "95%",
    height: "90%",
    margin: 10,
  },
  name: {
    position: "absolute",
    fontFamily: "Sydney",
    fontSize: 32,
    color: Themes.light.textSecondary,
    margin: 10,
    zIndex: 1,
  },
  caption: {
    position: "absolute",
    fontFamily: "Sydney",
    fontSize: 18,
    color: Themes.light.textSecondary,
    margin: 10,
    zIndex: 1,
    bottom: 0,
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
    position: "absolute",
    top: 0,
    //resizeMode: "center",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    aspectRatio: 1 / 1.1,
  },
  audio: {
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 30,
    margin: 10,
  },
  audioImage: {
    resizeMode: "center",
    width: "90%",
  },
  take: {
    fontSize: 32,
    marginTop: 25,
    marginLeft: 20,
    fontFamily: "Sydney",
  },
});
