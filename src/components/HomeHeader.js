import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Icon, withBadge } from "react-native-elements";
import { colors, parameters } from "../global/styles";
import { TouchableOpacity } from "react-native";

export default function HomeHeader({ title, type, navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.icon1}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Icon
            type="material-community"
            name="menu"
            color={colors.white}
            size={40}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon1: { marginLeft: 10, marginTop: 5 },
  header: {
    backgroundColor: colors.statusbar,
    height: parameters.headerHeight,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
