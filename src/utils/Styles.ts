import { Dimensions } from 'react-native';

const { width , height } = Dimensions.get('window');
const calRatio = (16 * (width / height));

export const screenWidth = width;
export const screenHeight = height;
export const ratio = (calRatio < 9 ? width / 9 : height / 18) / (360 / 9);
export const bgColor = 'rgb(65, 77, 107)';
