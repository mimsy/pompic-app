import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Auth} from 'aws-amplify';

export default function Login({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm(): boolean {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: any): Promise<void> {
    event.preventDefault();
    try {
      if (!validateForm()) {
        throw new Error('Missing email or password');
      }

      await Auth.signIn(email, password);
      navigation.replace('Home');
    } catch (e) {
      Alert.alert(e.message);
    }
  }

  return (
    <View>
      <TextInput
        autoFocus
        placeholder="Email"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />
      <TextInput
        value={password}
        placeholder="Password"
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleSubmit}>
        Login
      </Button>
    </View>
  );
}
