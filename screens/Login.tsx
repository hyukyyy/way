import { Text } from 'react-native-paper';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Background from '../components/common/Background';
import Header from '../components/common/Header';
import TextInput from '../components/common/TextInput';
import { theme } from '../styles/themes/theme';
import Button from '../components/common/Button';
import { emailValidator } from '../utils/validators/emailValidator';
import { passwordValidator } from '../utils/validators/passwordValidator';
import Logo from '../components/common/Logo';
import { httpPaths, httpPost } from '../api/httpClient';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../redux/reducer/UserReducer';

const Login = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onLoginPressed = async () => {
    console.log('on press login');
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    try {
      const loginRes = await httpPost(
        httpPaths.login,
        {},
        {
          username: email.value,
          password: password.value,
        },
        '',
      );
      console.log(loginRes);

      if (loginRes.data.token !== null && undefined !== loginRes.data.token) {
        dispatch(setAccessToken({ accessToken: loginRes.data.token }));
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      }
    } catch (e) {
      console.error('Error while login : ', e);
    }
  };

  return (
    <Background>
      <>
        <Logo />
        <Header>Welcome back.</Header>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text: any) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text: any) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={onLoginPressed}>
          Login
        </Button>
        <View style={styles.row}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondaryText,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default Login;
