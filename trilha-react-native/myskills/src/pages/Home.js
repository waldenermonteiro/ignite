import React from 'react';
import {Text, View} from 'react-native';

export function Home() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>React Native</Text>
      </View>
      <Text style={{alignSelf: 'center'}}>Ignite</Text>
    </>
  );
}
