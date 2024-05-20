import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import { nameValidator } from '../utils/validators/nameValidator';
import { emailValidator } from '../utils/validators/emailValidator';
import { passwordValidator } from '../utils/validators/passwordValidator';
import Background from '../components/common/Background';
import BackButton from '../components/common/BackButton';
import Logo from '../components/common/Logo';
import Header from '../components/common/Header';
import TextInput from '../components/common/TextInput';
import Button from '../components/common/Button';
import { theme } from '../styles/themes/theme';
import { httpPaths, httpPost } from '../api/httpClient';

export default function Signup({ navigation }: any) {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState<string | null>(null);

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    try {
      await httpPost(
        httpPaths.signup,
        {},
        {
          username: email.value,
          password: password.value,
          nickname: name.value,
        },
        null,
      );
    } catch (e: any) {
      console.error(e.response);
      setModalMsg('회원가입에 실패했습니다.');
    }
  };

  useEffect(() => {
    if (modalMsg === null) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
  }, [modalMsg]);

  return (
    <Background>
      <>
        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={() => setModalMsg(null)}
            contentContainerStyle={styles.containerStyle}
          >
            <Text style={styles.modalTitle}>회원가입 실패</Text>
            <Text style={styles.modalContent}>{modalMsg}</Text>
          </Modal>
        </Portal>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Create Account</Header>
        <TextInput
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text: string) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text: string) => setEmail({ value: text, error: '' })}
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
          onChangeText={(text: string) =>
            setPassword({ value: text, error: '' })
          }
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={styles.signupButton}
        >
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  signupButton: {
    marginTop: 24,
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
    width: 300,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontWeight: 'bold',
    padding: 20,
  },
  modalContent: {
    padding: 20,
  },
});
