import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')

    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Grandes oportunidades surgem para aqueles que estão preparados para agarrá-las.",
      "A persistência é o caminho do êxito.",
      "Seu esforço hoje será recompensado amanhã.",
      "Acredite em si mesmo e os outros também acreditarão.",
      "Cada pequeno passo é um progresso em direção ao seu objetivo.",
      "A sorte favorece a mente preparada.",
      "Você é capaz de alcançar mais do que imagina.",
      "O sucesso começa com a decisão de tentar.",
      "Mantenha seus olhos nas estrelas e seus pés no chão.",
      "A jornada de mil milhas começa com um único passo."
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={this.state.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})


export default App;