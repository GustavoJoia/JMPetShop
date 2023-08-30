import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Details from "../screens/Details";

export default function Routes(){
    const Stack = createStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home'>
                <Stack.Screen
                    name='home'
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='details'
                    component={Details}
                    options={{
                        title: 'Detalhes',
                        headerStyle:{
                            backgroundColor: '#E57C00',
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}