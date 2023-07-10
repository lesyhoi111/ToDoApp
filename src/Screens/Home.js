import React, { Component, useState,useContext,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Pressable, TouchableOpacity, Modal } from 'react-native';
import Search from './components/Search';
import Task from '../../model/taskModel';
import themeContext from '../../config/themeContext'
import { FAB } from '@rneui/themed';
import { CheckBox } from '@rneui/base';
const { width, height } = Dimensions.get('window');



const Home = ({ navigation }) => {

    const [isvisible, setVisible] = useState(false);
    const {listTask,getLisst,addTask,updateTask,deleteTask}=Task()
    const theme=useContext(themeContext);
    useEffect(()=>{
        // addTask("012123",new Date(),new Date(),1,"62bcf3f9b5b8c2277a4d5b6a","Đang thực hiện","lmao lmao lmao
        
            console.log(listTask)
    },[listTask])
    const goToScreen = () => {
        navigation.navigate("Setting");
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
            <View style={styles.boxHeader}>
                <Text style={styles.txtHeader}>Home</Text>
                <TouchableOpacity 
                    style={styles.btnMore}  
                    onPress={()=>{
                        setVisible(true);
                    }}        
                >
                    <Text style={{color:'black', fontSize:25}}>...</Text>
                </TouchableOpacity>

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
            <Modal 
                animationType="fade"
                transparent={true}
                visible={isvisible}
                onBackButtonPress={()=>{
                    setVisible(false);
                }}>
                    <View style={{ flex: 1, backgroundColor: '#000000AA' }}>
                        <Pressable
                            onPress={() => {
                                setVisible(false);
                            }}
                            style={{ flex: 1 }}>
                        </Pressable>
                        <View style={{
                            bottom: 0,
                            position: 'absolute',
                            width: '100%',
                            backgroundColor: 'white',
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}>
                            <TouchableOpacity style={{marginBottom: 20, justifyContent:'center', alignItems:'center', marginTop: 20}}>
                                <Text style={styles.txtMore} >Delete all the completed task</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginBottom: 20, justifyContent:'center', alignItems:'center', marginTop: 20}}>
                                <Text style={styles.txtMore} >Delete task</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginBottom: 40, justifyContent:'center', alignItems:'center', marginTop: 20}}>
                                <Text style={styles.txtMore} >New task</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

            </Modal>
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
        backgroundColor:'white',
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
    txtMore:{
        color: '#000',
        fontSize: 18,
    },
    btnMore:{
        position:'absolute',
        top: 1,
        right: 30,
        height: 50,
        width: 30,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems:'center',
        alignSelf:'flex-end',
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