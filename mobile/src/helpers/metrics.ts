import { Dimensions } from 'react-native';

const changeSize = (size: number) => {
  if (Dimensions.get('window').width < 321) {
    return size / 1.4;
  }
  if (Dimensions.get('window').width < 376) {
    return size / 1.3;
  }
  return size;
};

const metrics: {
  half_padding: number;
  padding: number;
  double_padding: number;
  screen_width: number;
  screen_height: number;
} = {
  half_padding: changeSize(7),
  padding: changeSize(15),
  double_padding: changeSize(30),
  screen_width: Dimensions.get('window').width,
  screen_height: Dimensions.get('window').height,
};

export default metrics;