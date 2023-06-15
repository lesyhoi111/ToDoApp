
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Button } from 'react-native';
import Search from './components/Search'
const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {

    const goToScreen = () => {
        navigation.navigate("Setting")
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
            <View style={styles.boxHeader}>
                    <Text style={styles.txtHeader}>Home</Text>
                </View>
            <View>
                <Search></Search>
            </View>
            <View style={styles.listTask}>
                <Text>No Task</Text>
            </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    boxHeader:{
        height:55,
        width:width,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    txtHeader:{
        fontSize:25,
        color:'black',
    },
    listTask:{
        alignItems:'center'
    }
});

export default Home;
