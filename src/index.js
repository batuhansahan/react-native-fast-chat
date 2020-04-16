import React, {useState} from 'react';

import {View, Text} from 'react-native';

const FastChat = () => {
  const [test, setTest] = useState('Testing');

  return (
    <View>
      <Text>{test}</Text>
    </View>
  );
};

export default FastChat;
