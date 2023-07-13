//import liraries
import React, { useState,useContext,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch, Dimensions,TouchableOpacity, Modal, TextInput, Pressable, Alert } from 'react-native';
import themeContext from '../../config/themeContext';
import { FAB } from '@rneui/themed';
import ProjectController from '../../ViewModel/ProjectController'
const { width, height } = Dimensions.get('window');

// create a component
const Project = ({ navigation }) => {
    const {listProject,handleAddProject}=ProjectController()
    const theme=useContext(themeContext);
    const [isvisibleAdd, setVisibleAdd] = useState(false);
    const [listDis, setListDis] = useState([]);
    const [nameProject, setNameProject] = useState('');
    useEffect(() => {
        console.log(listProject)
        // listTask.forEach(task => {
        //     deleteTask(task)
        // })
        setListDis(listProject)

    }, [listProject])

    return (
        <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
            <SafeAreaView style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
                <View style={[styles.boxHeader,{backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.txtHeader,{color:theme.color}]}>Project</Text>
                </View>
                <View style={[styles.body, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.title,{color:theme.color}]}>List Project</Text>
                        <View style={[styles.listProject,{backgroundColor:theme.backgroundColor}]}>
                            {listDis.map((pro,i)=>(
                                <View key={i}>
                                <TouchableOpacity  style={[styles.projectContainer,{backgroundColor:'wheat', borderColor:theme.color,}]} 
                                onPress={()=>{navigation.navigate('Detail',{project:pro})}}>
                                    <Text style={{fontSize:20, color:'black'}} >{pro.project_name}</Text>
                                    {/* <Text style={{fontSize:15, color:theme.color}} >Supporting Text</Text> */}
                                </TouchableOpacity>
                                </View>
                            ))}
                                
                        </View>
                </View>
                <FAB
                    icon={{ name: 'add', color: 'white' }}
                    color="green"
                    placement='right'
                    title="Add"
                    onPress={()=>{
                        setVisibleAdd(true);
                    }}
                />
                <Modal 
                    animationType="fade"
                    transparent={true}
                    visible={isvisibleAdd}
                    onBackButtonPress={()=>{
                        setVisibleAdd(false);
                }}>
                    <View style={{ flex: 1, backgroundColor: '#000000AA' }}>
                        <Pressable
                            onPress={() => {
                                setVisibleAdd(false);
                            }}
                            style={{ flex: 1 }}>
                        </Pressable>
                        <View style={{
                            bottom: 0,
                            position: 'absolute',
                            width: '100%',
                            height: 150,
                            backgroundColor: theme.backgroundColor,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}>
                            <View style={styles.line}></View>
                                <TextInput style={[styles.txtInput,{color:theme.color}]}
                                    placeholder='New Project'
                                    placeholderTextColor={theme.color}
                                    value={nameProject}
                                    onChangeText={(txt)=>{setNameProject(txt)}}>
                                </TextInput>        
                            <TouchableOpacity 
                                style={{backgroundColor:'green',
                                borderRadius:15,
                                alignItems:'center', 
                                height: 30, 
                                width:70, 
                                position: 'absolute',
                                bottom: 1,
                                right: 20,
                                marginBottom: 20,
                                }}
                                onPress={()=>{handleAddProject(nameProject); setVisibleAdd(false) ;Alert.alert("Thông báo!","Thêm thành công")}}
                            >
                                <Text style={{fontSize:20, color:'white' }}>Save</Text>
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
    },
    txtInput:{
        height: 50,
        fontSize: 20,
        marginStart: 20,
        marginBottom: 20,
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
    listProject:{
        alignItems:'center',
        width:width,
        justifyContent:'center',
        backgroundColor:'black'
    },
    body:{ 
        flex:1,
        backgroundColor:'black',
     },
    titlebtn:{
        fontSize:20,
        fontWeight:'500',
        color:'white'
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
    title:{
        fontSize:18,
        color:'black',
        marginTop:15,
        marginLeft:10,
        fontWeight:'500'
    },
    line:{
        width: 75,
        height: 4,
        backgroundColor:'grey',
        alignSelf:'center',
        marginVertical: 15,
        borderRadius: 2
    },
    projectContainer:{
        justifyContent:'center',
        width:300,
        height:60,
        borderWidth: 1,
        borderRadius:15,
        alignItems:'center',
        marginTop:20,
        marginBottom:20,
    },
});

export default Project;