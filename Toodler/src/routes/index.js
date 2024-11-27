import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Main from '../views/Main';
import Boards from '../views/Boards';

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName=" ">
            <Stack.Screen name=" " component={Main} />
            <Stack.Screen name="Boards" component={Boards} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;