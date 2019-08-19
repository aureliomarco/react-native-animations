import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  PanResponder
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
//
// Animated.parallel
// É um array, executa as animações em paralelo
//
// Animated.stagger
// Executa o primeiro item do array, por um tempo determinado, após começa a 
// os próximos em paralelo

const ballY = new Animated.Value(0);

export default class App extends Component {
  state = {
    ball: new Animated.ValueXY({ x: 0, y: 0 }),
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.ball.setOffset({
          x: this.state.ball.x._value,
          y: this.state.ball.y._value
        })

        this.state.ball.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([null, {
        dx: this.state.ball.x,
        dy: this.state.ball.y
      }]),
      onPanResponderRelease: () => {
        this.state.ball.flattenOffset();
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.ball,
            {
              transform: [
                { translateX: this.state.ball.x },
                { translateY: this.state.ball.y }
              ]
            }
          ]}
        />
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
