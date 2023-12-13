import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { emailValidator } from '../utils/validators/emailValidator';
import Background from '../components/common/Background';
import BackButton from '../components/common/BackButton';
import Logo from '../components/common/Logo';
import Header from '../components/common/Header';
import TextInput from '../components/common/TextInput';
import Button from '../components/common/Button';

export default function ResetPassword({ navigation }: any) {
  const [email, setEmail] = useState({ value: '', error: '' });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Restore Password</Header>
        <TextInput
          label="E-mail address"
          returnKeyType="done"
          value={email.value}
          onChangeText={(text: string) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          description="You will receive email with password reset link."
        />
        <Button
          mode="contained"
          onPress={sendResetPasswordEmail}
          style={styles.marginTop16}
        >
          Send Instructions
        </Button>
      </>
    </Background>
  );
}

const styles = StyleSheet.create({
  marginTop16: {
    marginTop: 16,
  },
});
