//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button } from 'react-native';


// create a component
const Home = ({ navigation }) => {

    const goToScreen = () => {
        navigation.navigate("Setting")
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ marginHorizontal: 24 }}>
                <Text>Home</Text>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;
