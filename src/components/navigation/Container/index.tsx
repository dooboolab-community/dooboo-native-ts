import React, { FC, ReactNode } from 'react';

import { View } from 'react-native';
import { styles } from './styles';

type Props = {
  children: ReactNode | ReactNode[];
  testID?: string;
};

const Container: FC<Props> = ({ children, testID }) => {
  return (
    <View style={styles.center} testID={testID}>
      {children}
    </View>
  );
};

export default Container;
