import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

function Box() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
}

const App = () => {
  return <Box />;
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    aspectRatio: 1,
    backgroundColor: 'red',
    marginVertical: 50,
  },
});

export default App;
