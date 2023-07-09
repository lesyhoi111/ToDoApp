//import liraries
import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch, Dimensions } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../../config/themeContext'
const { width, height } = Dimensions.get('window');

// create a component
const Setting = ({ navigation }) => {
    const theme=useContext(themeContext);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {setIsEnabled(previousState => !previousState)
                                console.log(theme.backgroundColor)
                                EventRegister.emit("changetheme",!isEnabled)};

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
                    <Text style={[styles.title,{color:theme.color}]}>Mongodoro</Text>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Time of task:</Text>
                        <Text style={[styles.txtContent,{color:theme.color}]}>10 mins</Text>
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Small break time:</Text>
                        <Text style={[styles.txtContent,{color:theme.color}]}>2 mins</Text>
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Big break time:</Text>
                        <Text style={[styles.txtContent,{color:theme.color}]}>15 mins</Text>
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={[styles.txtContent,{color:theme.color}]}>Phase number:</Text>
                        <Text style={[styles.txtContent,{color:theme.color}]}>10</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
