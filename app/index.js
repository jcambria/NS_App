import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";

import { Stack, useRouter } from "expo-router";


import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome, Nearbyjobs, Popularjobs, } from "../components"; // Make sure you have the correct path to ScreenHeaderBtn


const Home = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.transparent }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={toggleMenu}>
              <ScreenHeaderBtn
                iconsUrl={icons.menu}
                dimension="60%"
                handlePress={toggleMenu}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconsUrl={images.menu} dimension="100%" />
          ),
          headerTitle: "Next Script",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          
        </View>
      </ScrollView>

      {/* Overlay or Menu */}
      <Modal
    visible={isMenuOpen}
    animationType="slide"
    transparent={true}
>
    <View style={overlayStyle}>
        <View style={menuStyle}>
            <FlatList
                data={['Learn More', 'Contact', 'Go Back']}
                renderItem={({ item }) => (
                    <TouchableOpacity style={menuItemStyle} onPress={() => console.log(item)}>
                        <Text style={menuItemTextStyle}>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
            />

            <TouchableOpacity style={closeButtonStyle} onPress={toggleMenu}>
                <Text style={closeButtonTextStyle}>Close Menu</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>

      
    </SafeAreaView>
    
  );
};
const overlayStyle = {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
};

const menuStyle = {
    backgroundColor: COLORS.gray2,
    padding: 20,
    borderRadius: 10,
    width: '80%',
};

const menuItemStyle = {
    paddingVertical: 10,
};

const menuItemTextStyle = {
    fontSize: 18,
    color: COLORS.black,
};

const closeButtonStyle = {
    marginTop: 20,
    alignSelf: 'flex-end',
};

const closeButtonTextStyle = {
    fontSize: 16,
    color: COLORS.primary,
};


export default Home;
