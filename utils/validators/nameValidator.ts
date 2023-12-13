export function nameValidator(name: string) {
  if (!name) {
    return '아이디를 입력해주세요.';
  }
  return '';
}
