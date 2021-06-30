/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { SafeAreaView, Text, TextInput }  from 'react-native';
import {Input,Button ,FAB,Image} from 'react-native-elements'
import Icon from 'react-native-vector-icon/FontAwesome';

import firestore from '@react-native-friebase/firestore';


//สร้าง compoment
const App:() => Node = () => {

  firestore().collection('users').doc('ABC').get().then(User) => {
    console.log(user)
  });
  
  return (
    <SafeAreaView>
      <Text style = {{fontSize:20}}>Sasiien</Text>

      <Viwe style={{borderwidth:1, padding:10}}>
      <Input placeholder ='Hint'/>
      <TextInput style = {{backgroundColor: '#DDDDDD'}}
      keybordType='email-address'></TextInput>

      <Buttoon title="Outline" type="outline"/>
       <Button icon={ <Icon name="iconRight" size={30} color='white'/>}
        
       title="OK!" />
      </Viwe>
    </SafeAreaView>
  );
};
  export default App;