import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

const TextEntry = ({navigation}: {navigation: StackNavigationProp<any>}) => {
  const [content, setContent] = useState('');

  function validateForm() {
    return content.length > 0;
  }

  function saveDream() {
    validateForm();
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setContent(text)}
          value={content}
        />
        <Button title="save" onPress={() => saveDream()}>
          save
        </Button>
      </SafeAreaView>
    </>
  );
};

export default TextEntry;
