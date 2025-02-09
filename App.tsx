import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store';

import HomeScreen from './src/screens/Home';
import TodoListScreen from './src/screens/TodoList';
import AddTodoScreen from './src/screens/AddTodo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Todo App' }}
          />
          <Stack.Screen 
            name="TodoList" 
            component={TodoListScreen} 
            options={{ title: 'Todo List' }}
          />
          <Stack.Screen 
            name="AddTodo" 
            component={AddTodoScreen} 
            options={{ title: 'Add Todo' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;