import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, Alert, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Search(props) {
    const {onChangeText,white} = props

    return (
        <TouchableOpacity style={styles.container} >
            <Icon name={"search"} style={styles.icon} size={20} />
            <TextInput placeholder='Find a Task' style={styles.textInput}></TextInput>
        </TouchableOpacity>
    )
};
export default Search;

const styles = StyleSheet.create({
    container: {
        marginHorizontal:30,
        borderRadius:10,
        flexDirection:'row',
        paddingVertical:7,
        paddingHorizontal:5,
        backgroundColor:'antiquewhite',
        marginVertical:10,
        elevation:5
    },
    icon: {
        alignSelf:'center',
        marginHorizontal:5
    },
    textInput: {
        color:'#333',
        fontSize:20,
        flex:1,
        paddingVertical:0,
    },

})