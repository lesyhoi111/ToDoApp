import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, Modal } from 'react-native';
import themeContext from '../../config/themeContext';
import { TextInput } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const TaskDetail = () => {

const handleEdit = () => {

};

  const [isEditVisible,setVisibleEdit] = useState(false);
  const [nameTask, setNameTask] = useState('name task');
  const [description, setDescription] = useState('description');
  const theme = useContext(themeContext);
  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
        <SafeAreaView style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
            <View style={[styles.boxHeader,{backgroundColor:theme.backgroundColor}]}>
                <Text style={[styles.txtHeader,{color:theme.color}]}>Task Information</Text>
            </View>
            <View style={[styles.container,{backgroundColor:theme.backgroundColor, marginTop:50, marginLeft: 30, marginRight:30}]}>
                <View style={[styles.infoContext,{backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.label,{color:theme.color}]}>Name:   </Text>
                    <Text style={[styles.text,{color:theme.color}]}>{nameTask}</Text>
                </View>
                <View style={[styles.infoContext,{backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.label,{color:theme.color}]}>Description:   </Text>
                    <Text style={[styles.text,{color:theme.color}]}>{description}</Text>
                </View>
                <View style={[styles.infoContext,{backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.label,{color:theme.color}]}>Start Date:   </Text>
                    <Text style={[styles.text,{color:theme.color}]}>01-01-2021</Text>
                </View>
                <View style={[styles.infoContext,{backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.label,{color:theme.color}]}>End Date:   </Text>
                    <Text style={[styles.text,{color:theme.color}]}>01-01-2022</Text>
                </View>
                <View style={[styles.infoContext,{backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.label,{color:theme.color}]}>Time:   </Text>
                    <Text style={[styles.text,{color:theme.color}]}>40 minutes</Text>
                </View>
                <View style={[styles.infoContext,{backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.label,{color:theme.color}]}>Time done:   </Text>
                    <Text style={[styles.text,{color:'red'}]}>50%</Text>
                </View>
            </View>
            <View style={[{backgroundColor:theme.backgroundColor,marginBottom:50 ,justifyContent:'space-around',flexDirection:'row'}]}>
                <TouchableOpacity style={styles.button}                    
                    onPress={() => {
                        setVisibleEdit(true);
                    }}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
            </View> 
            <Modal
                transparent={true}
                animationType='fade'
                visible={isEditVisible}
                onBackButtonPress={() => {
                    setVisibleEdit(false);
                }}>
                    <TouchableOpacity
                        disabled={true} 
                        style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'#000000AA'}}>
                        <View style={{height:'auto', width: width-80, paddingTop:10, backgroundColor:'white',borderRadius:15}}>
                            <View style={styles.lineContent}>
                                <Text style={[styles.label,{color:theme.color}]}>Name:</Text>
                                <TextInput 
                                placeholder='New name'
                                value={nameTask}
                                onChangeText={(txt)=>{setNameTask(txt)}}
                                style={[styles.text,{ alignItems:'center',}]}>
                                </TextInput>
                            </View>
                            <View style={styles.lineContent}>
                                <Text style={[styles.label,{color:theme.color}]}>Description:</Text>
                                <TextInput placeholder='New description'
                                value={description}
                                onChangeText={(txt)=>{setDescription(txt)}}
                                style={[styles.text,{ alignItems:'center',}]}>
                                </TextInput>
                            </View>
                            <View style={{width:'100%', flexDirection:'row',}}>
                                <TouchableOpacity onPress={()=>{setVisibleEdit(false)}}
                                    style={{flex:1, paddingVertical: 10, alignItems:'center'}}
                                >
                                <Text style={[styles.text, {color: 'blue'}]}> Save</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{setVisibleEdit(false)}}
                                    style={{flex:1, paddingVertical: 10, alignItems:'center'}}
                                >
                                <Text style={[styles.text, {color: 'blue'}]}> Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lineContent:{
    marginHorizontal:10,
    paddingHorizontal:15,
    paddingVertical:7,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
  text: {
    fontSize: 18,
    marginBottom: 5,
    left:0,
  },
  infoContext:{
    height: 40,
    width: 250,
    flexDirection: 'row',
    backgroundColor:'green',
    marginLeft: 70,
    marginBottom: 20,
    alignItems:'center',
  },
  button: {
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 15,
    marginTop: 20,
    width:80, 
    height:50
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
},
boxHeader: {
    flexDirection: 'row',
    height: 70,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
},
txtHeader: {
    fontSize: 25,
    color: 'black',
},
});

export default TaskDetail;
