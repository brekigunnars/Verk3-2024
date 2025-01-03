import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../views/Main';
import Home from '../views/Home';
import Board from '../views/Board';
import CreateBoard from '../views/CreateBoard';
import EditBoard from '../views/EditBoards';
import CreateList from '../views/CreateList';
import CreateTask from '../views/CreateTasks';
import EditList from '../views/EditList';
import EditTask from '../views/EditTask';
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
            <Stack.Screen name="EditBoard" component={EditBoard} options={{ title: 'Edit Board' }}/>
            <Stack.Screen name="EditList" component={EditList} options={{ title: 'Edit List' }}/>
            <Stack.Screen name="EditTask" component={EditTask} options={{ title: 'Edit Task' }}/>
            <Stack.Screen name="CreateBoard" component={CreateBoard} options={{ title: 'Create New Board'}}/>
            <Stack.Screen name="Board" component={Board} options={({ route }) => ({title: route.params?.boardName || 'Board' })}/>
            <Stack.Screen name="CreateList" component={CreateList} options={{ title: 'Create New List' }}/>
            <Stack.Screen name="Tasks" component={Tasks} options={({ route }) => ({title: route.params?.listName || 'List' })}/>
            <Stack.Screen name="CreateTask" component={CreateTask} options={{ title: 'Create Task' }}/>


        </Stack.Navigator>
    </NavigationContainer>
);


export default Routes;