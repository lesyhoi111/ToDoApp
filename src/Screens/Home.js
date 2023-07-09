
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Button, TouchableOpacity } from 'react-native';
import Search from './components/Search';
import { FAB } from '@rneui/themed';
import { CheckBox } from '@rneui/base';
const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
    const {listTask,getLisst,addTask,updateTask,deleteTask}=Task()
    const theme=useContext(themeContext);
    useEffect(()=>{
        // addTask("012123",new Date(),new Date(),1,"62bcf3f9b5b8c2277a4d5b6a","Đang thực hiện","lmao lmao lmao
        
            console.log(listTask)
    },[listTask])
    const goToScreen = () => {
        navigation.navigate("Setting")
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
            <View style={styles.boxHeader}>
                <Text style={styles.txtHeader}>Home</Text>
                <Button title="..." ></Button>
            </View>
            <View>
                <Search></Search>
            </View>

            <Text style={styles.txtTaskHeader}>On progress</Text>
            <View style={styles.listTask}>
                 <View style={styles.task}>
                    <CheckBox checked={false}></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color:'black'}} >List Item</Text>
                        <Text style={{fontSize:10, color:'black'}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.task}>
                    <CheckBox checked={false}></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color:'black'}} >List Item</Text>
                        <Text style={{fontSize:10, color:'black'}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.task}>
                    <CheckBox checked={false}></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color:'black'}} >List Item</Text>
                        <Text style={{fontSize:10, color:'black'}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
            </View>
            <Text style={styles.txtTaskHeader}>Completed</Text>
            <View style={styles.listTask}>
                 <View style={styles.task}>
                    <CheckBox checked={true}></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color:'black'}} >List Item</Text>
                        <Text style={{fontSize:10, color:'black'}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.task}>
                    <CheckBox checked={true}></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color:'black'}} >List Item</Text>
                        <Text style={{fontSize:10, color:'black'}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.task}>
                    <CheckBox checked={true}></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color:'black'}} >List Item</Text>
                        <Text style={{fontSize:10, color:'black'}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
            </View>
            <FAB
                icon={{ name: 'add', color: 'white' }}
                color="green"
                placement='right'
                title="Add"
            />
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
        flexDirection: 'row',
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
    txtTaskHeader:{
        textAlign:'left',
        fontSize:20,
        color:'black',
        marginLeft:30,
        marginTop:20,
        marginBottom:20,
    },

    listTask:{
        alignItems:'center',
        width:width,
        marginLeft:40,
    },
    task:{
        flexDirection:'row',
        width:width,
        alignItems:'center',
        marginTop:5,
        marginBottom:5,
    },
    floatingbutton:{
        position: "absolute",
        width: 80,
        height: 60,
        alignItems: "center",
        right:30,
        bottom:25,
    }
});

export default Home;
