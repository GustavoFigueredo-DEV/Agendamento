import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import SignUp from '../screens/SignUp';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();
export default function Routes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='TabRoutes' component={TabRoutes} />
        </Stack.Navigator>
    );
}