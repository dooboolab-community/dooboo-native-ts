import {Dimensions, Platform, View} from 'react-native';
import React, {FC, ReactNode} from 'react';

import {useHeaderHeight} from '@react-navigation/stack';

type Props = {
  children: ReactNode | ReactNode[];
  testID?: string;
};

const Container: FC<Props> = ({children, testID}) => {
  const headerHeight = useHeaderHeight();

  return (
    <View
      style={
        Platform.OS === 'web'
          ? {
              alignItems: 'center',
              justifyContent: 'center',
              height: Dimensions.get('window').height - headerHeight,
            }
          : {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }
      }
      testID={testID}>
      {children}
    </View>
  );
};

export default Container;
