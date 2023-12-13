export function passwordValidator(password: string) {
  if (!password) {
    return '비밀번호를 입력해주세요.';
  }
  if (password.length < 5) {
    return '비밀번호는 5자리 이상 입력해주세요.';
  }
  return '';
}
