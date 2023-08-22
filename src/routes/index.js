import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}