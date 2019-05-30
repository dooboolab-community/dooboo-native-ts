import LocalizedStrings from 'react-native-localization';

const strings: any = new LocalizedStrings({
  en: {
    HELLO: 'Hello',
    LOGIN: 'Login',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    SIGNUP: 'SIGN UP',
    FORGOT_PW: 'Forgot password?',
    NAVIGATE: 'Navigate',
    CHANGE_THEME: 'Change theme',
  },
  ko: {
    HELLO: '안녕하세요',
    LOGIN: '로그인',
    EMAIL: '이메일',
    PASSWORD: '패스워드',
    SIGNUP: '회원가입',
    FORGOT_PW: '비밀번호를 잊어버리셨나요?',
    NAVIGATE: '이동하기',
    CHANGE_THEME: '테마 변경',
  },
});

export const getString = (str: string) => {
  return strings[str];
};
