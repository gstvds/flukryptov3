import React, { FC } from 'react';
import { View, Text } from 'react-native';

const Header: FC = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 26 }} >
        Header
      </Text>
    </View>
  );
};

export default Header;
