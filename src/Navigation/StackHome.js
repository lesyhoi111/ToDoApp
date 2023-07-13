import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home'
import TaskDetail from '../Screens/TaskDetail'
import CountTime from '../Screens/CountTime'
const Stack = createNativeStackNavigator();

function StackHome() {
  return (
    <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TaskDetail" component={TaskDetail} />
      <Stack.Screen name="CountTime" component={CountTime} />
    </Stack.Navigator>
  );
}
export default StackHome;