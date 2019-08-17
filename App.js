import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
} from 'react-native';

// Classe Animated
// A classe animated exporta 4 componentes
// Animated.View
// Animated.Text
// Animated.Image
// Animated.ScrollView

// Animação Timing
// Vai de um ponto a outro em determinado tempo.
//
// Animação Spring
// Vai de um ponto a outro, dando um feedback de retorno,
// como se fosse um elástico.
//
// Animação Decay
// Dá uma aceleração ao objeto


export default class App extends Component {
  state = {
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.decay(this.state.ballY, {
      velocity: 0.5
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[
          styles.ball,
          { top: this.state.ballY }
        ]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#00ff00',
    borderStyle: 'solid',
    padding: 30
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00'
  },
});
