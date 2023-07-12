import React, { Component, useState,useContext,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Pressable, TouchableOpacity, Modal, TextInput } from 'react-native';
import Search from './components/Search';
import Task from '../../model/taskModel';
import themeContext from '../../config/themeContext'
import { FAB } from '@rneui/themed';
import { CheckBox } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const { width, height } = Dimensions.get('window');



const Detail = ({ navigation }) => {
    const [checkboxes, setCheckboxes] = useState([
        false, // Checkbox 1
        false, // Checkbox 2
        false, // Checkbox 3
    ]);

    const [isvisibleAdd, setVisibleAdd] = useState(false);
    const [isvisibleMore, setVisibleMore] = useState(false);
    const {listTask,getLisst,addTask,updateTask,deleteTask}=Task();

    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    const showStartDatePicker = () => {
      setStartDatePickerVisibility(true);
    };
  
    const hideStartDatePicker = () => {
      setStartDatePickerVisibility(false);
    };
  
    const showEndDatePicker = () => {
      setEndDatePickerVisibility(true);
    };
  
    const hideEndDatePicker = () => {
      setEndDatePickerVisibility(false);
    };

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleStartDateConfirm = (date) => {
        if (date) {
          setStartDate(date);
        }
        hideStartDatePicker();
      };
    
      const handleEndDateConfirm = (date) => {
        if (date) {
          setEndDate(date);
        }
        hideEndDatePicker();
      };

    const handleCheckboxChange = (index) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = !newCheckboxes[index]; // Đảo ngược giá trị của checkbox
        setCheckboxes(newCheckboxes);
    };
    // const {listTask,getLisst,addTask,updateTask,deleteTask}=Task()
    const theme=useContext(themeContext);
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
            <View style={styles.boxHeader}>
                <Text style={styles.txtHeader}>Detail</Text>
                <TouchableOpacity 
                    style={styles.btnMore}  
                    onPress={()=>{
                        setVisibleMore(true);
                    }}        
                >
                    <Text style={{color:theme.color, fontSize:25}}>...</Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.txtTaskHeader}>On progress</Text>
            <View style={styles.listTask}>
                 <View style={styles.task}>
                    <CheckBox            
                        checked={checkboxes[0]}
                        onPress={() => handleCheckboxChange(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color: theme.color}} >List Item</Text>
                        <Text style={{fontSize:10, color: theme.color}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.task}>
                    <CheckBox 
                        checked={checkboxes[1]}
                        onPress={() => handleCheckboxChange(1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color: theme.color}} >List Item</Text>
                        <Text style={{fontSize:10, color: theme.color}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.task}>
                    <CheckBox 
                        checked={checkboxes[3]}
                        onPress={() => handleCheckboxChange(3)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color: theme.color}} >List Item</Text>
                        <Text style={{fontSize:10, color: theme.color}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
            </View>
            <Text style={styles.txtTaskHeader}>Completed</Text>
            <View style={styles.listTask}>
                 <View style={styles.task}>
                    <CheckBox 
                        checked={true}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color: theme.color}} >List Item</Text>
                        <Text style={{fontSize:10, color: theme.color}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.task}>
                    <CheckBox 
                        checked={true}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color: theme.color}} >List Item</Text>
                        <Text style={{fontSize:10, color: theme.color}} >Supporting Text</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.task}>
                    <CheckBox 
                        checked={true}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"></CheckBox>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{fontSize:15, color: theme.color}} >List Item</Text>
                        <Text style={{fontSize:10, color: theme.color}} >Supporting Text</Text>
                    </TouchableOpacity>
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
                visible={isvisibleMore}
                onBackButtonPress={()=>{
                    setVisibleMore(false);
                }}>
                    <View style={{ flex: 1, backgroundColor: '#000000AA' }}>
                        <Pressable
                            onPress={() => {
                                setVisibleMore(false);
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
                            backgroundColor: 'white',
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}>
                            <View style={styles.line}></View>
                            <TextInput style={styles.txtTask}
                                placeholder='New task'
                            ></TextInput>
                            <TextInput style={styles.txtTask}
                                placeholder='Description'
                            ></TextInput>
                            <View style={{flex:1,flexDirection:'column', marginStart: 20, marginEnd: 20, marginBottom: 50}}>
                                <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity styles={{justifyContent:'center', alignItems:'center'}} onPress={()=>{showStartDatePicker()}} >
                                        <Icon style= {{marginStart: 5, color:'black'}} size={20} name={"calendar"}></Icon>
                                        <Text style={{color: theme.color,marginBottom: 30}} >Start</Text>
                                    </TouchableOpacity>
                                    <Text style={{fontSize:20,color: theme.color, marginStart:15}}>
                                        {startDate ? startDate.toDateString().substring(4) : ''}
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row',marginBottom: 15}}>
                                    <TouchableOpacity styles={{justifyContent:'center', alignItems:'center'}}>
                                        <Icon style= {{marginStart: 5, color:'black'}} size={20} name={"calendar"} onPress={()=>{showEndDatePicker()}}></Icon>
                                        <Text style={{color: theme.color, marginStart:2}} >End</Text>
                                    </TouchableOpacity>
                                    <Text style={{fontSize:20,color: theme.color, marginStart:15}}>
                                        {endDate ? endDate.toDateString().substring(4) : ''}
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row',marginBottom: 10, alignItems:'center'}}>
                                    <View styles={{justifyContent:'center', alignItems:'center'}} >
                                        <Icon style= {{marginStart: 5, color:'black',}} size={20} name={"clock-o"}></Icon>
                                        <Text style={{color: theme.color}} >Time</Text>
                                    </View>
                                    <TextInput style={{        
                                        fontSize: 20,
                                        width: 'auto',
                                        textAlign:'center',
                                        marginStart:15,
                                        color: theme.color}} placeholder='Input time' keyboardType="numeric">
                                    </TextInput> 
                                    <Text style={{color: theme.color, fontSize:20, marginLeft:20}}>minute</Text>
                                </View>
           
                                <TouchableOpacity 
                                    style={{backgroundColor:'green',
                                    borderRadius:15,
                                    alignItems:'center', 
                                    height: 30, 
                                    width:70, 
                                    position: 'absolute',
                                    bottom: 1,
                                    right: 0, }}>
                                    <Text style={{fontSize:20, color:'white' }}>Save</Text>
                                </TouchableOpacity>
                               
                            </View>
                        </View>
                    </View>
                    <DateTimePickerModal
                        isVisible={isStartDatePickerVisible}
                        mode="date"
                        onConfirm={handleStartDateConfirm}
                        onCancel={hideStartDatePicker}
                    />
                    <DateTimePickerModal
                        isVisible={isEndDatePickerVisible}
                        mode="date"
                        onConfirm={handleEndDateConfirm}
                        onCancel={hideEndDatePicker}
                    />
   
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
    txtTask:{
        height: 50,
        fontSize: 20,
        // magrinTop: 20,
        marginStart: 20,
        marginBottom: 20
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
    },
    line:{
        width: 75,
        height: 4,
        backgroundColor:'grey',
        alignSelf:'center',
        marginVertical: 15,
        borderRadius: 2
    }
});

export default Detail;