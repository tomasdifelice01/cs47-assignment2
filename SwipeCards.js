// SwipeCards.js
"use strict";

import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

import React, { Component } from "react";
import { Themes, Icons, Profiles } from "./assets/Themes";

import SwipeCards from "react-native-swipe-cards";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.profile}>
        <View style={styles.card}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.caption}>{this.props.caption}</Text>
          <Image style={styles.profileImage} source={this.props.image} />
        </View>
        <View style={styles.audio}>
          <Text style={styles.take}>My hottest take</Text>
          <View style={styles.audioImages}>
            <Image style={styles.play} source={Icons.player.light} />
            <Image style={styles.wave} source={Icons.audioWave.light} />
          </View>
        </View>
      </View>
    );
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text style={styles.noMoreCardsText}>
          Looks like you ran out of swipes! Come back in 24 hours or venmo @tdf
          to upgrade your account and get more swipes :) (jk don't)
        </Text>
      </View>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          image: Profiles.mtl.image,
          name: "MTL",
          age: "63 years young",
          caption: "1 mile away",
        },
        {
          image: Profiles.drell.image,
          name: "Persis Drell",
          age: "66 years",
          caption: "2 miles away",
        },
        {
          image: Profiles.man.image,
          name: "Richard",
          age: "24",
          caption: "20 miles away",
        },
        {
          image: Profiles.woman.image,
          name: "Eve",
          age: "22",
          caption: "15 miles away",
        },
        {
          image: Profiles.brubakercole.image,
          name: "Susie Brubaker-Cole",
          age: "62", // Github Pilot's guess
          caption: "3 miles away",
        },
      ],
    };
  }

  handleYup(card) {
    console.log(`Yup for ${card.text}`);
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    );
  }
}

const maxWidth = 600;

const styles = StyleSheet.create({
  profile: {
    position: "relative",
    height: Platform.isPad ? "100%" : "100%",
    width: width * 0.95 > maxWidth ? maxWidth : width * 0.95,
    display: "flex",
    alignSelf: "center",
  },
  card: {
    width: "90%",
    height: "97%",
    margin: 10,
    marginBottom: "3%",
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
    marginLeft: "4%",
    marginTop: "2%",
    zIndex: 1,
  },
  caption: {
    position: "absolute",
    fontFamily: "Sydney",
    fontSize: Platform.isPad ? 24 : 18,
    color: Themes.light.textSecondary,
    marginLeft: "4%",
    marginBottom: "2%",
    zIndex: 1,
    bottom: 0,
  },
  profileImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    aspectRatio: 1 / 1.1,
  },
  audio: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 30,
    margin: 10,
    height: Platform.isPad ? "40%" : "42%",
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
  },
  wave: {
    resizeMode: "contain",
    height: "100%",
    width: "70%",
  },
  play: {
    resizeMode: "contain",
    height: "100%",
    width: "25%",
  },
  take: {
    fontSize: Platform.isPad ? 40 : 24,
    marginLeft: "7%",
    fontFamily: "Sydney",
  },
  noMoreCardsText: {
    display: "flex",
    fontSize: Platform.isPad ? 40 : 30,
    fontFamily: "Sydney",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  noMoreCards: {
    width: width * 0.85 > maxWidth ? maxWidth : width * 0.85,
    alignSelf: "center",
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 30,
    height: "80%",
    justifyContent: "center",
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
  },
  audioImages: {
    display: "flex",
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    height: "38%",
    alignItems: "center",
    marginTop: 15,
  },
});
