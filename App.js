import React from 'react';
import { View } from 'react-native';
import Route from './src/Navigation/Route';
import TaskDetail from './src/Screens/TaskDetail'

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <TaskDetail />
    </View>
  );
};

export default App;
