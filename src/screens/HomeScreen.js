import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import { stationAround } from "../global/data";
import { mapStyle } from "../global/mapStyle";
import axios from "axios";
import { token } from "./token";

const SCREEN_WIDTH = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const [latlng, setLatLng] = useState({});

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const sendData = async () => {
    try {
      const URL = "http://localhost:5000";
      const formData = new FormData();
      formData.append("lat", location?.coords?.latitude);
      formData.append("lng", location?.coords?.longitude);
      const res = await axios.post(
        `${URL}/location`,
        {
          lat: location?.coords?.latitude,
          lng: location?.coords?.longitude,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === "granted") {
      const permission = await askPermission();
      return permission;
    }
    return true;
  };

  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status === "granted";
  };

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLatLng({ latitude: latitude, longitude: longitude });
    } catch (err) {}
  };

  const _map = useRef(1);

  useEffect(() => {
    checkPermission();
    getLocation();
    // console.log(latlng), [];
  });

  return (
    <View style={styles.container}>
      {/* <Text>{text}</Text> */}

      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(255, 140, 82,1)"
      />

      <HomeHeader navigation={navigation} />

      <ScrollView bounces={false}>
        <View style={styles.home}>
          <Text style={styles.text1}>C2SE.07</Text>
          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={styles.text2}>
                Fire and Rescue Management System
              </Text>
              <TouchableOpacity onPress={sendData}>
                <View style={styles.button1}>
                  <Text style={styles.button1Text}>FRMS</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={styles.image1}
                source={require("../../assets/fireStation.png")}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 20,
                justifyContent: "space-between",
              }}
            >
              <View style={styles.view2}>
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => {
                    navigation.navigate("ImageScreen");
                  }}
                >
                  <Image
                    source={require("../../assets/addImage.png")}
                    style={styles.image2}
                  />

                  <Text style={styles.title}>H??nh ???nh</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.view2}>
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => {
                    navigation.navigate("VideoCall");
                  }}
                >
                  <Image
                    source={require("../../assets/videoCall.png")}
                    style={styles.image2}
                  />
                  <Text style={styles.title}>Video Call</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.view3}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RequestScreen");
              }}
            >
              <Text style={styles.text3}> Tr???m c???u ho???? </Text>
            </TouchableOpacity>
            <View style={styles.view4}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>Now</Text>
              <Icon
                type="material-community"
                name="chevron-down"
                color={colors.grey1}
                size={26}
              />
            </View>
          </View>
          <View style={styles.view5}>
            <View style={styles.view6}>
              <View style={styles.view7}>
                <Icon
                  type="material-community"
                  name="map-marker"
                  color={colors.firebrick}
                  size={22}
                />
              </View>
              <View>
                <Text style={{ fontSize: 18, color: colors.black }}>
                  65 Tr???n T???n M???i
                </Text>
                <Text style={{ color: colors.grey3 }}>
                  Ho?? C?????ng B???c, H???i Ch??u, ???? N???ng
                </Text>
              </View>
            </View>
            <View>
              <Icon
                type="material-community"
                name="chevron-right"
                color={colors.grey}
                size={26}
              />
            </View>
          </View>

          <View style={{ ...styles.view5, borderBottomWidth: 0 }}>
            <View style={styles.view6}>
              <View style={styles.view7}>
                <Icon
                  type="material-community"
                  name="map-marker"
                  color={colors.firebrick}
                  size={22}
                />
              </View>
              <View>
                <Text style={{ fontSize: 18, color: colors.black }}>
                  114 Nguy???n Ho??ng
                </Text>
                <Text style={{ color: colors.grey3 }}>H???i Ch??u, ???? N???ng</Text>
              </View>
            </View>
            <View>
              <Icon
                type="material-community"
                name="chevron-right"
                color={colors.grey}
                size={26}
              />
            </View>
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}> Google Map</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 10,
          }}
        >
          <MapView
            ref={_map}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            showsMyLocationButton={true}
            followsUserLocation={true}
            initialRegion={{
              ...stationAround[0],
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
          >
            {stationAround.map((item, index) => (
              <MapView.Marker coordinate={item} key={index.toString()}>
                <Image
                  source={require("../../assets/placeHolder.png")}
                  style={styles.stationAround}
                  resizeMode="cover"
                />
              </MapView.Marker>
            ))}
          </MapView>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },

  image1: {
    height: 100,
    width: 100,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },

  image2: { height: 60, width: 60 },

  home: {
    backgroundColor: colors.statusbar,
    paddingLeft: 20,
  },

  text1: {
    color: colors.white,
    fontSize: 24,
    paddingBottom: 5,
    paddingTop: 5,
    fontWeight: "bold",
  },

  text2: {
    color: colors.white,
    fontSize: 17,
  },

  view1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },

  button1: {
    height: 40,
    width: 150,
    backgroundColor: colors.firebrick,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  button1Text: {
    color: colors.white,
    fontSize: 20,
    marginTop: -2,
    fontWeight: "bold",
  },
  card: {
    alignItems: "center",
    margin: SCREEN_WIDTH / 22,
  },
  button2: {
    height: 60,
    width: 90,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 10,
    height: 60,
    width: 60,
    resizeMode: "stretch",
  },

  view2: {
    marginHorizontal: 15,
    borderRadius: 15,
    backgroundColor: colors.grey6,
  },

  title: {
    color: colors.black,
    fontSize: 16,
  },
  view3: {
    flexDirection: "row",
    marginTop: 5,
    height: 50,
    backgroundColor: colors.grey6,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  text3: { marginLeft: 15, fontSize: 20, color: colors.black },

  view4: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
  },

  view5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 25,
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
    flex: 1,
  },

  view6: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
  },
  view7: {
    backgroundColor: colors.grey6,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },

  map: {
    height: 200,
    marginVertical: 0,
    width: SCREEN_WIDTH * 0.92,
  },

  text4: {
    fontSize: 20,
    color: colors.black,
    marginLeft: 20,
    marginBottom: 20,
  },

  icon1: { marginLeft: 10, marginTop: 5 },

  view8: { flex: 4, marginTop: -25 },
  stationAround: {
    width: 40,
    height: 40,
  },

  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },

  view9: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "white",
  },
  view10: {
    marginLeft: 20,
    marginRight: 20,
  },
  headerTextView: {
    backgroundColor: colors.white,
    paddingVertical: 3,
  },
  headerText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
