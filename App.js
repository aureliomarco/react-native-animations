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
// Como se eu lançasse uma bola com determinada força, a bola ia parar
// de acordo com a velocidade aplicada, não defino o local final onde
// a bola vai cair, parecido com o angrybirds.
//
// Math
// É possivel usar divide, multiply, add, subtract, modulo.
//
// Animated.sequence
// É um array, que executa as animações em sequência.

const ballY = new Animated.Value(0);
const ballX = Animated.divide(ballY, 2)

export default class App extends Component {
  state = {
    ballY: new Animated.Value(0),
    ballX: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.ballY, {
        toValue: 200,
        duration: 500
      }),

      Animated.delay(1000),

      Animated.timing(this.state.ballX, {
        toValue: 200,
        duration: 500
      })
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[
          styles.ball,
          { top: this.state.ballY, left: this.state.ballX }
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
