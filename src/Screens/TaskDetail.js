import { View, Text, StyleSheet, SafeAreaView, Switch, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState,useContext } from 'react';
import themeContext from '../../config/themeContext'
import { CheckBox, color } from '@rneui/base';
const { width, height } = Dimensions.get('window');
// import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


const TaskDetail = ({}) => {
    const theme=useContext(themeContext);
    const [selectedValue, setSelectedValue] = useState('');
    return (
        <View style={[styles.container, {backgroundColor:theme.backgroundColor}]}>
            <SafeAreaView style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
                <View style={styles.header}>
                    <TouchableOpacity style={[styles.left,{color:theme.color}]}>
                        <Icon name={"arrow-left"} style={styles.icon} size={30} />
                    </TouchableOpacity>

                    <View style={styles.right}>
                        <TouchableOpacity style={[styles.iconStar,{color:theme.color}]}>
                            <Icon name={"star"} style={styles.icon} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconTrash,{color:theme.color}]}>
                            <Icon name={"trash"} style={styles.icon} size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style = {styles.dropdownbox}>
                    <DropDownPicker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <DropDownPicker.Item label="Mục 1" value="item1" />
                            <DropDownPicker.Item label="Mục 2" value="item2" />
                            <DropDownPicker.Item label="Mục 3" value="item3" />
                    </DropDownPicker>
                </View> */}
                <View style = {styles.dropdownBox}>
                    <TouchableOpacity style = {styles.dropdownBoxContent}>
                        <Text style={[styles.txtDropdownBox,{color:theme.color}]}>work</Text>
                        <Icon name={"caret-down"} style={styles.icon} size={16} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View style={styles.taskDetailInfo}>
                        <Text style={[styles.txtTaskName, {color:theme.color}]}>TASK NAME</Text>
                        <TouchableOpacity style={styles.detail} >
                            <Icon name={"plus"} style={styles.icon} size={20} />
                            <TextInput placeholder='Add detail' style={styles.txtIDetail}></TextInput>
                        </TouchableOpacity>
                        <View style={[styles.calender, {alignItems:'center'}]}>
                            <View style={styles.iconCalender}>
                                <TouchableOpacity>
                                    <Icon name={"calendar"} style={styles.icon} size={20} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.detail} >
                                <Text style={styles.txtDate}>Wed, July 12</Text>
                                <Icon name={"close"} style={styles.icon} size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.subtasks}>
                        <Text style={[styles.txtSubtasks, {color:theme.color}]}>SUBTASKS</Text>
                        <View style={styles.task}>
                            <CheckBox checked={false}></CheckBox>
                            <TouchableOpacity style={{flex:1}}>
                                <Text style={{fontSize:15, color:'black'}}>Subtasks name</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.task}>
                            <CheckBox checked={false}></CheckBox>
                            <TouchableOpacity style={{flex:1}}>
                                <Text style={{fontSize:15, color:'black'}}>Subtasks name</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.addTask}>
                            <TouchableOpacity style={styles.addTaskBtn}>
                                <Icon name={"plus"} style={styles.icon} size={20} />
                                <Text style={{fontSize:15, color:'black', marginLeft: 10}}>Add subtasks</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        flexDirection: 'row',
        justifyContent:'space-between',
        margin: 15,

    },
    right:{
        flexDirection: 'row',
    },
    iconTrash:{
        marginLeft: 20
    },
    title:{
        fontSize:18,
        color:'black',
        marginHorizontal: 5,
        fontWeight:'400'
    },
    dropdownBox:{
        marginHorizontal: 15,
        marginVertical: 10
    },
    dropdownBoxContent:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    txtDropdownBox:{
        fontSize:16,
        color:'black',
        marginRight: 10
    },
    txtContent:{
        fontSize:16,
        color:'black',
    },
    body:{
        marginHorizontal:50
    },
    txtTaskName:{
        fontSize: 24,
        color:'black'
    },
    detail:{
        borderRadius:10,
        flexDirection:'row',
        paddingHorizontal:5,
        marginVertical:15,
        borderWidth: 0.5
    },
    calender:{
        flexDirection:'row',
    },
    txtDate:{
        paddingHorizontal: 10,
        paddingVertical: 5
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
    calender:{
        marginRight: 10,
        flexDirection: 'row'
    },
    subtasks:{
        marginTop: 15
    },
    txtSubtasks:{
        fontSize: 20,
        color:'black'
    },
    task:{
        flexDirection:'row',
        width:width,
        alignItems:'center',
        marginTop:5,
        marginBottom:5,
    },
    addTaskBtn:{
        flexDirection: 'row'
    }

})

export default TaskDetail;