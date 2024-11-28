import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../views/Main';
import Home from '../views/Home';
import CreateBoard from '../views/CreateBoard';
import EditBoard from '../views/EditBoards';
import { Touchable, TouchableOpacity, Text } from 'react-native';

const Stack = createStackNavigator();


const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName=" ">
            <Stack.Screen name=" " component={Main} />
            <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
                title: 'Boards',
                headerRight: () => (
                    <TouchableOpacity
                    onPress={() => navigation.navigate('CreateBoard')}
                    style={{ marginRight: 20 }}
                    >
                        <Text style={{ fontSize: 35 }}>+</Text>
                    </TouchableOpacity>
                ),
            })} />
            <Stack.Screen name="EditBoard" component={EditBoard} options={{ title: 'Edit Board' }}/>
            <Stack.Screen name="CreateBoard" component={CreateBoard} options={{ title: 'Create New Board'}}/>
        </Stack.Navigator>
    </NavigationContainer>
);


export default Routes;