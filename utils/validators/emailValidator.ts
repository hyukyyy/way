export function emailValidator(email: string) {
  const re = /\S+@\S+\.\S+/;
  if (!email) {
    return '이메일을 입력해주세요.';
  }
  if (!re.test(email)) {
    return '잘못된 이메일 형식입니다.';
  }
  return '';
}
