import React, { Component, useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Pressable, TouchableOpacity, Modal, TextInput,Alert, ScrollView } from 'react-native';
import Search from './components/Search';
import Task from '../../model/taskModel';
import HomeController from '../../ViewModel/HomeController'
import themeContext from '../../config/themeContext'
import { FAB } from '@rneui/themed';
import { CheckBox, color } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const { width, height } = Dimensions.get('window');



const Home = ({ navigation }) => {
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


    const handleStartDateConfirm = (date) => {
        if (date) {
            setStartDate(date);
        }
        console.log(startDate)
        hideStartDatePicker();
    };

    const handleEndDateConfirm = (date) => {
        if (date) {
            setEndDate(date);
        }
        console.log(endDate)
        hideEndDatePicker();
    };
    const [loading, setLoading] = useState(false);
    const [isvisibleAdd, setVisibleAdd] = useState(false);
    const [isvisibleMore, setVisibleMore] = useState(false);
    const [nameTask, setNameTask] = useState('');
    const [description, setDescription] = useState('');
    const [longTime, setLongTime] = useState('');
    const [searchTXT, setSearchTXT] = useState('');
    const [tasks, setTasks] = useState([]);
    const [taskDis, setTaskDis] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [listCheck, setListCheck] = useState([]);

    const {listTask,
        getListTask,
        handleAddTask,
        handleDeleteTask,
        handleSearch,}=HomeController()

    const handleSave=(name,start_date,due_date,time_set,id_project,state,description)=>{
        if(name=="" || start_date==null||due_date==null||time_set==""){
            Alert.alert("Thông báo!","Mời nhập đầy đủ thông tin")
        }else{
            if(startDate>endDate){
                Alert.alert("Thông báo!","Ngày bắt đầu phải trước ngày kết thúc")
            }else{
            handleAddTask(name,start_date,due_date,time_set*60,id_project,state,description)
            Alert.alert("Thông báo!","Thêm thành công")
            setVisibleAdd(false)
            setNameTask('')
            setDescription('')
            setLongTime('')
            }
        }
    }

    const theme = useContext(themeContext);
    useEffect(() => {
        console.log(listTask)
        // listTask.forEach(t => {
        //     handleDeleteTask(t)
        // })
        const now=new Date();
        setTasks(listTask.filter((t)=> t.start_date<=now && now<=t.due_date))
        setTaskDis(listTask)
        tasks.forEach((i)=>{setListCheck([...listCheck,false])})
    }, [listTask])

    


  const handleCheckboxChange1 = (index,task) => {
    const newCheckboxes = [...listCheck];
    newCheckboxes[index] = !newCheckboxes[index]; // Đảo ngược giá trị của checkbox
    setListCheck(newCheckboxes);
    handleSelected(index,task)
  };
  const handleSelected=(index,task)=>{
    if (listCheck[index]==undefined ||listCheck[index]==false) {
        console.log('selecttask')
      setSelectedTasks([...selectedTasks, task]);
    } else {
        console.log('deletetask')
      const a=selectedTasks.filter((t) => t.id.toString() !== task.id.toString());
      setSelectedTasks(a)
    }
  }

  const handleDeleteListTasks = () => {
    // Xóa các task đã chọn khỏi danh sách tasks
    console.log(selectedTasks)
    
    if(selectedTasks.length==0){
        Alert.alert("Thông báo!","Mời chọn task cần xóa")
        return;
    }
    Alert.alert(
        'Confirm Deletion',
        `Bạn có chắc chắn xóa?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: () => {
                setLoading(true)
                selectedTasks.forEach((t)=>{
                    handleDeleteTask(t)
                })
                setTimeout(() => {
                    setSelectedTasks([])
                const lc=listCheck.filter(c=>c==false)
                setListCheck(lc)
                setVisibleMore(false)
                setLoading(false)
                }, 500);
            },
          },
        ],
        { cancelable: true }
      );
  }
  const DeleteTask = () => {
    // Xóa các task đã chọn khỏi danh sách tasks
    console.log(selectedTasks)
    if(selectedTasks.length==0){
        Alert.alert("Thông báo!","Mời chọn task cần xóa")
        return;
    }
    Alert.alert(
        'Confirm Deletion',
        `Bạn có chắc chắn xóa?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: () => {
                setLoading(true)
                selectedTasks.forEach((t)=>{
                    handleDeleteTask(t)
                })
                setTimeout(() => {
                    setSelectedTasks([])
                const lc=listCheck.filter(c=>c==false)
                setListCheck(lc)
                setVisibleMore(false)
                setLoading(false)
                }, 500);
            },
          },
        ],
        { cancelable: true }
      );
    
  }
  const changeSearch=(txt)=>{
    setSearchTXT(txt)
    setTasks(handleSearch(txt))
  }

    return (
        <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
            {loading==false?
            <SafeAreaView style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
                <View style={styles.boxHeader}>
                    <Text style={[styles.txtHeader,{color:theme.color}]}>Home</Text>
                    <TouchableOpacity
                        style={styles.btnMore}
                        onPress={() => {
                            setVisibleMore(true);
                        }}
                    >
                        <Text style={{ color: theme.color, fontSize: 25 }}>...</Text>
                    </TouchableOpacity>

                </View>
                <View>
                <TouchableOpacity style={styles.containerSearch} >
                    <Icon name={"search"} style={styles.iconSearch} size={20} />
                    <TextInput placeholder='Find a Task' style={styles.textInputSearch}
                        value={searchTXT}
                        onChangeText={(txt)=>{changeSearch(txt)}}
                    ></TextInput>
                </TouchableOpacity>
                </View>

                <Text style={[styles.txtTaskHeader,{color:theme.color}]}>ToDay</Text>
                <ScrollView style={styles.listTask}>
                {tasks.map((task,i) => (
                    <View style={styles.task} key={i}>
                    <CheckBox
                    containerStyle={{backgroundColor:theme.backgroundColor}}
                    key={i}
                    type="checkbox"
                    // value={task.id}
                    checked={listCheck[i]}
                    onPress={()=>{handleCheckboxChange1(i,task)}}
                    />
                
                  <TouchableOpacity style={{ flex: 1 }} onPress={()=>{navigation.navigate('TaskDetail',{task:task})}}>
                            <Text style={{ fontSize: 15, color: theme.color }} >{task.name}</Text>
                            <Text style={{ fontSize: 10, color: task.time_done==task.time_set?'green': theme.color }} >Progress: ({(task.time_done/60).toFixed(2)}/{task.time_set/60}) minutes</Text>
                        </TouchableOpacity>
                  </View>
                ))}
                
                </ScrollView>
                
                <FAB
                    icon={{ name: 'add', color: 'white' }}
                    color="green"
                    placement='right'
                    title="Add"
                    onPress={() => {
                        setVisibleAdd(true);
                    }}
                />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isvisibleMore}
                    onBackButtonPress={() => {
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
                            backgroundColor: theme.backgroundColor,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}>
                            <TouchableOpacity style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20 }} onPress={()=>{handleDeleteListTasks()}}>
                                <Text style={[styles.txtMore,{color:theme.color}]} >Delete all the completed task</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20 }} onPress={()=>{DeleteTask()}}>
                                <Text style={[styles.txtMore,{color:theme.color}]} >Delete task</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginBottom: 40, justifyContent: 'center', alignItems: 'center', marginTop: 20 }} onPress={()=>{setVisibleAdd(true);setVisibleMore(false)}}>
                                <Text style={[styles.txtMore,{color:theme.color}]} >New task</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isvisibleAdd}
                    onBackButtonPress={() => {
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
                            backgroundColor: theme.backgroundColor,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}>
                            <View style={styles.line}></View>
                            <TextInput style={[styles.txtTask,{color:'black',backgroundColor:'white'}]}
                                placeholder='New task'
                                // placeholderTextColor={theme.color}
                                value={nameTask}
                                onChangeText={(txt)=>{setNameTask(txt)}}
                            ></TextInput>
                            <TextInput style={[styles.txtTask,{color:'black',backgroundColor:'white'}]}
                                placeholder='Description'
                                value={description}
                                onChangeText={(txt)=>{setDescription(txt)}}
                            ></TextInput>
                            <View style={{ flex: 1, flexDirection: 'column', marginStart: 20, marginEnd: 20, marginBottom: 50 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity styles={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { showStartDatePicker() }} >
                                        <Icon style={{ marginStart: 5, color: theme.color }} size={20} name={"calendar"}></Icon>
                                        <Text style={{ color: 'black', marginBottom: 30 }} >Start</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 20, color: theme.color, marginStart: 15 }}>
                                        {startDate ? startDate.toDateString().substring(4) : ''}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <TouchableOpacity styles={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon style={{ marginStart: 5, color: theme.color }} size={20} name={"calendar"} onPress={() => { showEndDatePicker() }}></Icon>
                                        <Text style={{ color: theme.color, marginStart: 2 }} >End</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 20, color: theme.color, marginStart: 15 }}>
                                        {endDate ? endDate.toDateString().substring(4) : ''}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                                    <View styles={{ justifyContent: 'center', alignItems: 'center' }} >
                                        <Icon style={{ marginStart: 5, color: theme.color, }} size={20} name={"clock-o"}></Icon>
                                        <Text style={{ color: theme.color }} >Time</Text>
                                    </View>
                                    <TextInput style={{
                                        fontSize: 20,
                                        width: 'auto',
                                        textAlign: 'center',
                                        marginStart: 15,
                                        color: 'black',
                                        backgroundColor:'white'
                                    }} placeholder='Input time' keyboardType="numeric"
                                    value={longTime}
                                    onChangeText={(txt)=>{setLongTime(txt)}}>
                                    </TextInput>
                                    <Text style={{ color: theme.color, fontSize: 20, marginLeft: 20 }}>minutes</Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        backgroundColor: 'green',
                                        borderRadius: 15,
                                        alignItems: 'center',
                                        height: 30,
                                        width: 70,
                                        position: 'absolute',
                                        bottom: 1,
                                        right: 0,
                                    }}
                                    onPress={()=>{handleSave(nameTask,startDate,endDate,longTime,'','chưa hoàn thành',description)}}
                                    >
                                    <Text style={{ fontSize: 20, color: 'white' }}>Save</Text>
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
            :
            <View style={{alignItems:'center'}}>
                <Text style={styles.txtHeader}>Loading .....</Text>
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    boxHeader: {
        flexDirection: 'row',
        height: 55,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtHeader: {
        fontSize: 25,
        color: 'black',
    },
    txtTaskHeader: {
        textAlign: 'left',
        fontSize: 20,
        color: 'black',
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 20,
    },
    txtTask: {
        height: 50,
        fontSize: 20,
        borderRadius:10,
        marginStart: 20,
        marginBottom: 20,
        marginRight:10
    },
    txtMore: {
        color: '#000',
        fontSize: 18,
    },
    btnMore: {
        position: 'absolute',
        top: 1,
        right: 30,
        height: 50,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    listTask: {
        width: width,
        marginLeft: 40,
    },
    task: {
        flexDirection: 'row',
        width: width,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    floatingbutton: {
        position: "absolute",
        width: 80,
        height: 60,
        alignItems: "center",
        right: 30,
        bottom: 25,
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2
    },
    containerSearch: {
        marginHorizontal:30,
        borderRadius:10,
        flexDirection:'row',
        paddingVertical:7,
        paddingHorizontal:5,
        backgroundColor:'antiquewhite',
        marginVertical:10,
        elevation:5
    },
    iconSearch: {
        alignSelf:'center',
        marginHorizontal:5
    },
    textInputSearch: {
        color:'#333',
        fontSize:20,
        flex:1,
        paddingVertical:0,
    },

});

export default Home;