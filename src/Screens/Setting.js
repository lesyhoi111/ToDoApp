//import liraries
import React, { useState,useContext,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch, Dimensions,TouchableOpacity } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../../config/themeContext'
import EditSettingController from '../../ViewModel/EditSettingController'
const { width, height } = Dimensions.get('window');

// create a component
const Setting = ({ navigation }) => {
    const {listParameter,getList,handleUpdateParameter,handleAddParameter}=EditSettingController()
    const theme=useContext(themeContext);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isFirst, setIsFirst] = useState(true);
    const [parameter, setParameter] = useState({
        init_time: 0,
            break_time: 0,
            long_break_after: 0,
            long_break_time: 0,
    });
    const toggleSwitch = () => {setIsEnabled(previousState => !previousState)
                                console.log(theme.backgroundColor)
                                EventRegister.emit("changetheme",!isEnabled)};
    useEffect(()=>{
        console.log(listParameter)
        setParameter({
            init_time:listParameter[0].init_time,
            break_time:listParameter[0].break_time,
            long_break_after:listParameter[0].long_break_after,
            long_break_time:listParameter[0].long_break_time,
        })
        setTimeout(()=>{
            setIsFirst(false)
        },1000)
    },[listParameter])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if(isFirst==false){
            setTimeout(()=>{
                console.log(listParameter)
                console.log("123")
                setParameter({
                    init_time:listParameter[0].init_time,
                    break_time:listParameter[0].break_time,
                    long_break_after:listParameter[0].long_break_after,
                    long_break_time:listParameter[0].long_break_time,
                })
            },3000)
        }
        });
        return unsubscribe;
    }, [navigation]);
    return (
        <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
            <SafeAreaView style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
                <View style={[styles.boxHeader,{backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.txtHeader,{color:theme.color}]}>Setting</Text>
                </View>
                <View style={styles.body}>
                    <Text style={[styles.title,{color:theme.color}]}>Theme</Text>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Dark mode:</Text>
                        <Switch  trackColor={{false: '#767577', true: '#767577'}}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            ></Switch>
                    </View>
                    <Text style={[styles.title,{color:theme.color}]}>Pomodoro</Text>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Time of task:</Text>
                        <Text style={[styles.txtContent,{color:theme.color}]}>{(parameter.init_time/60).toFixed(2)} mins</Text>
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Small break time:</Text>
                        <Text style={[styles.txtContent,{color:theme.color}]}>{(parameter.break_time/60).toFixed(2)} mins</Text>
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Big break time:</Text>
                        <Text style={[styles.txtContent,{color:theme.color}]}>{(parameter.long_break_time/60).toFixed(2)} mins</Text>
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Phase number:</Text>
                        <Text style={[styles.txtContent,{color:theme.color}]}>{(parameter.long_break_after/60).toFixed(2)} </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("EditPomodoro",{parameter:listParameter[0]})}}>
                    <Text style={styles.titlebtn}>Chỉnh sửa</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn:{
        height:45,
        width:width-60,
        marginHorizontal:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        marginTop:20,
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
        justifyContent:'space-between'
    },
});

export default Setting;
