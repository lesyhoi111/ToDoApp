import { color } from '@rneui/base';
import React, { useState, useRef,useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import themeContext from '../../config/themeContext'
const CountTime = (props) => {
    const { navigation, route } = props
    // const { task } = route.params
    const theme = useContext(themeContext);
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null);// reference to the interval ID

    // function to handle the start button press
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => {
      if (timer >= 10) {
        handleReset();
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
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => {
        if (timer >= 10) {
          handleReset();
          return 0;
        }
        return timer + 1;
      });
    }, 1000);
  };
// function to handle the reset button press
  const handleReset = () => {
    clearInterval(countRef.current);
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
      <Text style={{fontSize:23,color:theme.color,fontWeight:'500'}}>Stopwatch</Text>
      <Text style={{fontSize:15,color:theme.color}}>Time: 20 minutes</Text>
      <Text style={{fontSize:15,color:theme.color,marginBottom:50}}>Time done: 5 minutes</Text>
      <Text style={{fontSize:18,color:theme.color,marginBottom:10}}>Working time</Text>
      <View style={[styles.timerContainer,{backgroundColor:theme.backgroundColor,borderColor:isActive&&!isPaused?'green':theme.color}]}>
        <Text style={[styles.timer,{color:theme.color}]}>{formatTime(timer)}</Text>
      </View>
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
            <TouchableOpacity style={[styles.button,{backgroundColor:'red'}]} onPress={handleReset}>
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