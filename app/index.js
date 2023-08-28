import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen

            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconsUrl={icons.menu} dimension="60%"/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconsUrl={images.profile} dimension="100%"  />
                    ),
                    headerTitle: "Next Script"
                }}

            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>

                    <Welcome />

                    
                    
                </View>
            </ScrollView>
        </SafeAreaView>
            
        
    )
}

export default Home;