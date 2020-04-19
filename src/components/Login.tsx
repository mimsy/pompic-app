import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

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

  function handleSubmit(event: any): void {
    event.preventDefault();
    validateForm();
    navigation.navigate('Home');
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
