//import liraries
import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch, Dimensions,TouchableOpacity, TextInput } from 'react-native';
import themeContext from '../../config/themeContext'
import EditSettingController from '../../ViewModel/EditSettingController'
const { width, height } = Dimensions.get('window');

// create a component
const EditPomodoro = ({ navigation }) => {
    const theme=useContext(themeContext);
    const {listParameter,handleUpdateParameter,handleAddParameter}=EditSettingController()
    const [timeOfTask, setTimeOfTask] = useState('');
    const [smallBreakTime, setSmallBreakTime] = useState('');
    const [bigBreakTime, setBigBreakTime] = useState('');
    const [phaseNumber, setPhaseNumber] = useState('');

    const logt=()=>{
        console.log(listParameter)
    }
    return (
        <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
            <SafeAreaView style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
                <View style={[styles.boxHeader,{backgroundColor:theme.backgroundColor}]}>
                    <TouchableOpacity style={{position:'absolute',left:5,top:17,paddingHorizontal:5}} onPress={()=>{navigation.goBack()}}>
                        <Text style={{color:'green',fontSize:15,fontWeight:'bold'}}>Back</Text>
                    </TouchableOpacity>
                    <Text style={[styles.txtHeader,{color:theme.color}]}>Edit Pomodoro</Text>
                </View>
                <View style={styles.body}>
                    <Text style={[styles.title,{color:theme.color}]}>Pomodoro</Text>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Time of task (mins):</Text>
                        <TextInput
                            style={[styles.input,{color:theme.color,backgroundColor:theme.backgroundColor}]}
                            value={timeOfTask}
                            onChangeText={(txt)=>{setTimeOfTask(txt)}}
                            keyboardType="numeric"
                            />
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Small break time (mins):</Text>
                        <TextInput
                            style={[styles.input,{color:theme.color,backgroundColor:theme.backgroundColor}]}
                            value={smallBreakTime}
                            onChangeText={(txt)=>{setSmallBreakTime(txt)}}
                            keyboardType="numeric"
                            />
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Long break time (mins):</Text>
                        <TextInput
                            style={[styles.input,{color:theme.color,backgroundColor:theme.backgroundColor}]}
                            value={bigBreakTime}
                            onChangeText={(txt)=>{setBigBreakTime(txt)}}
                            keyboardType="numeric"
                            />
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Phase number:</Text>
                        <TextInput
                            style={[styles.input,{color:theme.color,backgroundColor:theme.backgroundColor}]}
                            value={phaseNumber}
                            onChangeText={(txt)=>{setPhaseNumber(txt)}}
                            keyboardType="numeric"
                            />
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>{handleUpdateParameter(timeOfTask,smallBreakTime,phaseNumber,bigBreakTime)}}>
                    <Text style={styles.titlebtn}>Lưu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>{logt()}}>
                    <Text style={styles.titlebtn}>log</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input:{
        borderColor:'green',
        borderWidth:1,
        borderRadius:5,
        width:40
    },
    btn:{
        height:45,
        width:width-60,
        marginHorizontal:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        marginTop:30,
        borderRadius:10
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
    txtContent:{
        fontSize:16,
        color:'black',
    },
    lineContent:{
        marginHorizontal:10,
        paddingHorizontal:15,
        paddingVertical:7,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
});

export default EditPomodoro;
