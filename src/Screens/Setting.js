//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// create a component
const Setting = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.boxHeader}>
                    <Text style={styles.txtHeader}>Setting</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>Theme</Text>
                    <View style={styles.lineContent}>
                        <Text style={styles.txtContent}>Dark mode:</Text>
                        <Switch  trackColor={{false: '#767577', true: '#767577'}}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            ></Switch>
                    </View>
                    <Text style={styles.title}>Mongodoro</Text>
                    <View style={styles.lineContent}>
                        <Text style={styles.txtContent}>Time of task:</Text>
                        <Text style={styles.txtContent}>10 mins</Text>
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={styles.txtContent}>Small break time:</Text>
                        <Text style={styles.txtContent}>2 mins</Text>
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={styles.txtContent}>Big break time:</Text>
                        <Text style={styles.txtContent}>15 mins</Text>
                    </View>
                    <View style={styles.lineContent}>
                        <Text style={styles.txtContent}>Phase number:</Text>
                        <Text style={styles.txtContent}>10</Text>
                    </View>
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
