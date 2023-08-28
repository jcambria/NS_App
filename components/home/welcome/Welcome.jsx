import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Camera } from "expo-camera";

import styles from "./welcome.style"; // Assuming you have defined styles in welcome.style.js
import { icons, SIZES } from "../../../constants";

const appTypes = ["Count Pills", "Next Fill", "Follow Up"];

const Welcome = () => {
  const [activeAppType, setActiveAppType] = useState("Count Pills");
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const requestCameraPermission = async () => {
    const { status } = await Camera.getCameraPermissionsAsync();
    if (status === "granted") {
      setIsCameraOpen(true);
    } else {
      console.log("Camera permission denied");
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello,</Text>
        <Text style={styles.welcomeMessage}>Some Slogan Here</Text>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={appTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeAppType, item)}
              onPress={() => {
                if (item === "Count Pills") {
                  setActiveAppType(item);
                  requestCameraPermission();
                } else {
                  setActiveAppType(item);
                  setIsCameraOpen(false);
                  // Handle navigation or other logic for other options
                }
              }}
            >
              <Text style={styles.tabText(activeAppType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>

      {isCameraOpen ? (
        <Camera style={styles.cameraPreview} type={Camera.Constants.Type.back}>
          {/* Camera UI */}
        </Camera>
      ) : null}
    </View>
  );
};

export default Welcome;
