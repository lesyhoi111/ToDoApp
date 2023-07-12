import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Project from '../Screens/Project'
import Detail from '../Screens/Detail'
const Stack = createNativeStackNavigator();

function StackProject() {
  return (
    <Stack.Navigator initialRouteName="Project"  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Project" component={Project} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
export default StackProject;