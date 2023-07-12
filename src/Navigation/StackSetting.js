import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from '../Screens/Setting'
import EditPomodoro from '../Screens/EditPomodoro'
const Stack = createNativeStackNavigator();

function StackSetting() {
  return (
    <Stack.Navigator initialRouteName="Setting"  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="EditPomodoro" component={EditPomodoro} />
    </Stack.Navigator>
  );
}
export default StackSetting;