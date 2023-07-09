
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Button } from 'react-native';
import Search from './components/Search'
import Task from '../../model/taskModel';
import themeContext from '../../config/themeContext'
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
        <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
            <SafeAreaView style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
            <View style={[styles.boxHeader,{backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.txtHeader,{color:theme.color}]}>Home</Text>
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
