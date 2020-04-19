/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';
import TextEntry from './components/TextEntry';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'login'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'dream entry'}}
        />
        <Stack.Screen
          name="TextEntry"
          component={TextEntry}
          options={{title: 'text entry'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
