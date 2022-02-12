import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button} from 'react-native';
import React from 'react';
import {TestComponent} from './Test.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Dog = (props) =>{
  const species = "dog";
  return (
    <View>
      <Text>Hello, I am {props.name}, and I am a {species}. What happens if I type WAY too much in one textblock? I don't know, what will happen?</Text>
      <Text>Do I need a new textblock everytime I need a new line?</Text>
      <TextInput style={{borderColor: '#0F0', borderWidth: 2, height:40, padding:10}} placeholder="zeratul"/>
    </View>
  );
}

const testImage = {
  width: 200,
  height: 200
}

const HomePage = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      }}>
      <TestComponent/>
      <Text style={{
        color: '#F00',
        fontWeight: '300',
        fontSize: 20
      }}>
        HELLO Android3
        </Text>
        <Dog name="zeratul"/>
        <Image source={require('./assets/icon.png')} style={{width:200, height:200}}/>
        <Button
          title="Go to test page"
          onPress={() =>
            navigation.navigate('Test')
          }
        />
    </View>  
    );
}

const TestPage = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      }}>
      <Text style={{
        color: '#F00',
        fontWeight: '300',
        fontSize: 20
      }}>
        HELLO Android3
        </Text>
        <Button
          title="Go to test page"
          onPress={() =>
            navigation.navigate('Test')
          }
        />        
        <Button
          title="Go to test page2"
          onPress={() =>
            navigation.navigate('Test2')
          }
        />
    </View>  
  );
}

const TestPage2 = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      }}>
      <Text style={{
        color: '#F00',
        fontWeight: '300',
        fontSize: 20
      }}>
        TestPage2
        </Text>
        <Button
          title="Go to test page"
          onPress={() =>
            navigation.navigate('Test')
          }
        />
        <Button
          title="Go to home page"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
    </View>  
  );
}

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const StaticApp = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name='Test' component={TestPage}/>        
        <Stack.Screen name='Test2' component={TestPage2}/>
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomePage}/>
        <Tab.Screen name='Test' component={TestPage}/>        
        <Tab.Screen name='Test2' component={TestPage2}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default StaticApp;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>ZERATUL!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#444',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
