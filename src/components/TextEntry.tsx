import React, {useState} from 'react';
import {SafeAreaView, StatusBar, TextInput, Button, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Storage} from 'aws-amplify';

const TextEntry = ({navigation}: {navigation: StackNavigationProp<any>}) => {
  const [content, setContent] = useState('');

  function validateForm() {
    return content.length > 0;
  }

  async function saveDream() {
    validateForm();
    const date = new Date().toISOString();
    await Storage.vault.put(`${date}.dream.txt`, content);
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
