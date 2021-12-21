import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import {
  Header,
  ListItem,
  Avatar,
  SearchBar,
  ScrollView,
} from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { information } from "../global/db";
import { colors, parameters } from "../global/styles";
import { color } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
    };
  }

  componentDidMount = () => {
    this.setState({
      info: information,
    });
  };
  render() {
    return (
      <View>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(255, 140, 82,1)"
        />
        <View style={styles.headerr}>
          <Header
            leftComponent={() => (
              <Feather name="arrow-left" size={32} color="#ffff" />
            )}
            backgroundColor="rgba(255, 140, 82,1)"
            centerComponent={{
              text: " THÔNG TIN CÁ NHÂN",
              style: { color: "white", fontWeight: "bold" },
            }}
            rightComponent={() => (
              <FontAwesome name="search" size={24} color="#ffff" />
            )}
          />
        </View>

        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={{
                uri: this.state.info.image,
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                marginLeft: 20,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                {this.state.info.name}
              </Text>
              <Text
                style={{ fontWeight: "bold", color: "#aaaaaa", marginTop: 5 }}
              >
                22 tuổi
              </Text>
              <Foundation
                style={{ marginTop: 5 }}
                name="male-symbol"
                size={24}
                color="black"
              />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 20 }}
          >
            <Text style={styles.fonttext}>Ngày sinh :</Text>
            <Text style={styles.fonttextinfor}>
              {" "}
              {this.state.info.birthday}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 20 }}
          >
            <Text style={styles.fonttext}>Giới tính :</Text>
            <Text style={styles.fonttextinfor}> {this.state.info.gender}</Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 20 }}
          >
            <Text style={styles.fonttext}>Nghề nghiệp:</Text>
            <Text style={styles.fonttextinfor}> {this.state.info.job}</Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 20 }}
          >
            <Text style={styles.fonttext}>Số CMND:</Text>
            <Text style={styles.fonttextinfor}> {this.state.info.ID}</Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 20 }}
          >
            <Text style={styles.fonttext}>Số điện thoại:</Text>
            <Text style={styles.fonttextinfor}>
              {" "}
              {this.state.info.phoneNumber}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 20 }}
          >
            <Text style={styles.fonttext}>Quê quán:</Text>
            <Text style={styles.fonttextinfor}> {this.state.info.address}</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
            style={styles.btnLogin}
          >
            <Text style={styles.textlogin}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 10,
    backgroundColor: colors.firebrick,
    marginTop: 25,
    justifyContent: "center",
  },
  textlogin: {
    textAlign: "center",
    color: "#ffff",
    fontWeight: "bold",
  },
  fonttext: {
    left: 30,
    fontWeight: "bold",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 17,
  },
  fonttextinfor: {
    left: 50,
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 17,
  },
  headerr: {
    backgroundColor: colors.white,
    paddingTop: 20,
  },
});
