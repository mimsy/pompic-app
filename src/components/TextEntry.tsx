import React, {useState} from 'react';
import {SafeAreaView, StatusBar, TextInput, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Storage} from 'aws-amplify';
import {v4 as uuidv4} from 'uuid';

const TextEntry = ({navigation}: {navigation: StackNavigationProp<any>}) => {
  const [content, setContent] = useState('');

  function validateForm() {
    return content.length > 0;
  }

  async function saveDream() {
    validateForm();
    const [date] = new Date().toISOString().split('T');
    const dreamId = uuidv4();
    await Storage.vault.put(`${date}/${dreamId}.txt`, content);
  }

  async function saveAndContinue() {
    await saveDream();
    setContent('');
  }

  async function saveAndFinish() {
    await saveDream();
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput
          autoFocus
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setContent(text)}
          value={content}
        />
        <Button title="save and continue" onPress={() => saveAndContinue()} />
        <Button title="save and finish" onPress={() => saveAndFinish()} />
      </SafeAreaView>
    </>
  );
};

export default TextEntry;
