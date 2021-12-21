import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Icon,
} from "react-native";
import { colors, parameters } from "../global/styles";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import CameraComponent from "../components/CameraComponent";
import { StatusBar } from "expo-status-bar";
import { Header } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function ImageScreen(navigation) {
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [useCamera, setUseCamera] = useState(false);
  const cameraRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Không kết nối với camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      console.log("in take picture");
      try {
        let photo = await cameraRef.current.takePictureAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        return photo;
      } catch (e) {
        console.log(e);
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      return result;
    }
  };

  return (
    <View style={styles.containerr}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(255, 140, 82,1)"
      />
      <Header
        leftComponent={() => (
          <Feather name="arrow-left" size={32} color="#ffff" />
        )}
        backgroundColor="rgba(255, 140, 82,1)"
        centerComponent={{
          text: "HÌNH ẢNH",
          style: { color: "white", fontWeight: "bold" },
        }}
        rightComponent={() => (
          <FontAwesome name="search" size={24} color="#ffff" />
        )}
      />
      {useCamera ? (
        <View style={{ width: "100%", height: "100%" }}>
          <CameraComponent />
        </View>
      ) : (
        <>
          <View style={{ width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={[styles.button]}
                onPress={async () => {
                  console.log("in pick photo");
                  const r = await pickImage();
                  if (!r.cancelled) {
                    setImage(r.uri);
                  }
                  console.log("response", JSON.stringify(r));
                }}
              >
                <Text style={styles.text}> THƯ VIỆN </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button]}
                onPress={async () => {
                  console.log("in pick camera");
                  setUseCamera(true);
                }}
              >
                <Text style={styles.text}> CAMERA </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%", alignItems: "center" }}>
              {true && (
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "grey",
                    marginTop: 200,
                  }}
                />
              )}
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    height: Dimensions.get("screen").height - 20,
    width: Dimensions.get("screen").width,
  },
  camera: {
    flex: 1,
  },
  images: {
    width: 150,
    height: 150,
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    minWidth: "100%",
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    margin: 8,
    backgroundColor: "grey",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  containerr: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
});
