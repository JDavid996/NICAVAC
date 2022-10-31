import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components

import Login_screen from './components/auth/Login_screen';
import Register_screen from './components/auth/Register_screen';
import NewCattle_screen from './components/screens/NewCattle_screen';
import CattlesList_screen from './components/screens/CattlesList_screen';
import Category_screen from './components/screens/Category_screen';
import NewAnimal_screen from './components/screens/Animals_List/NewAnimal_screen';
import BullsList_screen from './components/screens/Animals_List/BullsList_screen';
import CowsList_screen from './components/screens/Animals_List/CowsList_screen';
import AnimalDetails_screen from './components/screens/Animals_List/AnimalDetails_screen';
import { Avatar } from 'react-native-elements';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name= 'Login_screen' 
        component={Login_screen} 
        options= {{title: 'Inicio de Sesión'}}
      />
      <Stack.Screen
        name= 'Register_screen'
        component={Register_screen}
        options= {{title: 'Nueva Cuenta', headerShown: true}}
      />
      <Stack.Screen 
        name= 'CattlesList_screen' 
        component={CattlesList_screen} 
        options= {{title: 'Tus Fincas', headerShown: true , headerLeft: null, headerTintColor: 'white', headerStyle: {
          backgroundColor: '#346a4a',
        }, headerRight: ()=>
        <TouchableOpacity style={{marginRight: 20}}>
          <View>
            <Avatar
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828490.png'
              }}
            />
          </View>
        </TouchableOpacity>}}
      />
      <Stack.Screen 
        name= 'NewCattle_screen' 
        component={NewCattle_screen} 
        options= {{title: 'Nueva Finca', headerShown: true}}
      />
      <Stack.Screen
        name= 'Category_screen'
        component={Category_screen}
        options={{title:'Categorías', headerShown: true, headerTintColor: 'white', headerStyle: {
          backgroundColor: '#346a4a',
        },}}
      />
      <Stack.Screen
        name='NewAnimal_screen'
        component={NewAnimal_screen}
        options={{title:'Nuevo animal', headerShown: true, headerTintColor: 'white', headerStyle: {
          backgroundColor: '#346a4a',
        },}}
      />
      <Stack.Screen
        name='BullsList_screen'
        component={BullsList_screen}
        options={{title:'Toros', headerShown: true, headerTintColor: 'white', headerStyle: {
          backgroundColor: '#346a4a',
        },}}
      />
      <Stack.Screen
        name='CowsList_screen'
        component={CowsList_screen}
        options={{title:'Vacas', headerShown: true, headerTintColor: 'white', headerStyle: {
          backgroundColor: '#346a4a',
        },}}
      />
      <Stack.Screen
        name='AnimalDetails_screen'
        component={AnimalDetails_screen}
        options={{title: 'Detalles', headerShown: true, headerTintColor: 'white', headerStyle: {
          backgroundColor: '#346a4a',
        },}}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
