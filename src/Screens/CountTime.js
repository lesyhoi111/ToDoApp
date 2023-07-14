import { color } from '@rneui/base';
import React, { useState, useRef,useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native';
import TaskController from '../../ViewModel/TaskController'
import themeContext from '../../config/themeContext'
const CountTime = (props) => {
    const { navigation, route } = props
    const { task } = route.params
    const theme = useContext(themeContext);
    const [timer, setTimer] = useState(0);
    const [timeremaining, setTimeremaining] = useState(task.time_set-task.time_done);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const countRef = useRef(null);// reference to the interval ID
    const {
      listTask,
      getListTask,
      handleAddTask,
      handleDeleteTask,
      handleSearch,
      handleUpdate,
  }=TaskController()
    const handleUpdateTime=(timecount)=>{
      if(timecount!=0){
      console.log(timecount)
      console.log(task.time_done+timecount)
      console.log('handleUpdateTime')
      handleUpdate(task,task.name,task.description,task.time_done+timecount)
      }else{
        handleUpdate(task,task.name,task.description,0)
      }
    }

    const handleStartBreak = () => {
      if ((task.time_set-task.time_done)==0) {
        Alert.alert("Thông báo!","Công việc đã hoàn thành")
        return 0;
      }else{
        setIsBreak(true)
      }
      countRef.current = setInterval(() => {
        setTimer((timer) => {
        if (timer >= task.break_time ) {
          handleResetBreak();
          return 0;
        }
        return timer + 1;
      });
      }, 1000);
    };
    const handleResetBreak = () => {
      clearInterval(countRef.current);
      setTimer(0);
      setIsBreak(false)
      handleStart();
    };

  const handleStart = () => {
    if ((task.time_set-task.time_done)==0) {
      Alert.alert("Thông báo!","Công việc đã hoàn thành")
      return 0;
    }
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => {
      if (timer >= task.count_time ) {
        handleReset(task.count_time);
        return 0;
      }
      if (timer>=(task.time_set-task.time_done)) {
        handleReset(task.time_set-task.time_done);
        return 0;
      }
      return timer + 1;
    });
    }, 1000);
  };
  // function to handle the pause button press
  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(true);
  };
// function to handle the continue button press
  const handleContinue = () => {
    if ((task.time_set-task.time_done)==0) {
      Alert.alert("Thông báo!","Công việc đã hoàn thành")
      return 0;
    }
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => {
        if (timer >= task.count_time ) {
          handleReset(task.count_time);
          return 0;
        }
        if (timer>=(task.time_set-task.time_done)) {
          handleReset(task.time_set-task.time_done);
          return 0;
        }
        return timer + 1;
      });
    }, 1000);
  };
// function to handle the reset button press
  const handleReset = (t) => {
    clearInterval(countRef.current);
    handleUpdateTime(t)
    setTimeremaining(timeremaining-t)
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
      handleStartBreak();

  };
  const handleEnd = (t) => {
    clearInterval(countRef.current);
    handleUpdateTime(t)
    setTimeremaining(timeremaining-t)
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
    
  };
  // calculate the time values for display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      {/* <TouchableOpacity style={{backgroundColor:'red'}} onPress={()=>{handleUpdateTime(0)}}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity> */}
      <Text style={{fontSize:23,color:theme.color,fontWeight:'500'}}>{task.name}</Text>
      <Text style={{fontSize:15,color:theme.color}}>Time: {task.time_set/60} minutes</Text>
      <Text style={{fontSize:15,color:theme.color,marginBottom:50}}>Time done: {(task.time_done/60).toFixed(2)} minutes</Text>
      {isBreak?
      <Text style={{fontSize:20,color:'red',marginBottom:10,fontWeight:'bold'}}>Break time</Text>
      :<Text style={{fontSize:20,color:'green',marginBottom:10,fontWeight:'bold'}}>Working time</Text>}
      <View style={[styles.timerContainer,{backgroundColor:theme.backgroundColor,borderColor:isActive&&!isPaused?'green':theme.color}]}>
        <Text style={[styles.timer,{color:theme.color}]}>{formatTime(timer)}</Text>
      </View>
      {!isBreak?
      <View style={styles.buttonContainer}>
        {!isActive && !isPaused ? (
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handlePause}>
              <Text style={styles.buttonText}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:'red'}]} onPress={()=>{handleEnd(timer)}}>
              <Text style={styles.buttonText}>End</Text>
            </TouchableOpacity>
            {isPaused && (
              <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
      :
      <View style={styles.buttonContainer}>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:40
  },
  timerContainer: {
    borderWidth: 4,
    borderColor: 'green',
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    marginBottom:20
  },
  timer: {
    fontSize: 55,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight:'500'
  },
});

export default CountTime;