import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../views/Main';
import Home from '../views/Home';
import Board from '../views/Board';
import CreateBoard from '../views/CreateBoard';
import CreateList from '../views/CreateList';
import Tasks from '../views/Task';
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
            <Stack.Screen name="CreateBoard" component={CreateBoard} options={{ title: 'Create New Board'}}/>
            <Stack.Screen name="Board" component={Board} options={({ route }) => ({title: route.params?.boardName || 'Board' })}/>
            <Stack.Screen
  name="CreateList"
  component={CreateList}
  options={{ title: 'Create New List' }}
/>
<Stack.Screen
  name="Tasks"
  component={Tasks}
  options={({ route }) => ({ title: route.params?.listName || 'Tasks' })} // Dynamically set title
/>


        </Stack.Navigator>
    </NavigationContainer>
);


export default Routes;