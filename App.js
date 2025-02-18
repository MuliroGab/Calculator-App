import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
const { height } = Dimensions.get('window');


// Componente principal do aplicativo
export default function App() {
  // Definindo os estados para o display da calculadora e para o controle dos parênteses
  const [display, setDisplay] = useState('');
  const [parenthesis, setParenthesis] = useState('(');

  // Função para lidar com a entrada de valores
  const handlePress = (value) => {
    setDisplay(display + value);
  };

  // Função para limpar o display
  const handleClear = () => {
    setDisplay('');
  };

  // Função para calcular o resultado da expressão no display
  const handleEqual = () => {
    try {
      // Usando eval para calcular a expressão, substituindo 'x' por '*'
      setDisplay(eval(display.replace('x', '*')).toString());
    } catch (e) {
      // Tratamento de erro caso a expressão seja inválida
      setDisplay('Erro');
    }
  };

  // Função para apagar o último caractere do display
  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };

  // Função para calcular a porcentagem do valor no display
  const handlePercent = () => {
    try {
      setDisplay((parseFloat(display) / 100).toString());
    } catch (e) {
      setDisplay('Erro');
    }
  };

  // Função para alternar e adicionar parênteses no display
  const handleParenthesis = () => {
    setDisplay(display + parenthesis);
    setParenthesis(parenthesis === '(' ? ')' : '(');
  };

  return (
    // Estrutura principal do layout da calculadora
    /* A estrutura da calculadora foi baseada nas já existentes, com apenas poucas diferenças de espaçamento e coloração. Existem espaços que ainda podem ser utilizados no futuro para adicionar funcionalidades que estão faltando. */
    <View style={styles.container}>
      {/* Área do display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      {/* Área dos botões */}
      <View style={styles.buttons}>
        {/* Linha de botões */}
        <View style={styles.row}>
          {/* Botões */}
          <Button title="C" onPress={handleClear} style={styles.clearButton} />
          <Button title="()" onPress={handleParenthesis} style={styles.funcButton} />
          <Button title="%" onPress={handlePercent} style={styles.funcButton} />
          <Button title="/" onPress={() => handlePress('/')} style={styles.funcButton} />
        </View>
        <View style={styles.row}>
          <Button title="7" onPress={() => handlePress('7')} />
          <Button title="8" onPress={() => handlePress('8')} />
          <Button title="9" onPress={() => handlePress('9')} />
          <Button title="X" onPress={() => handlePress('x')} style={styles.funcButton} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handlePress('4')} />
          <Button title="5" onPress={() => handlePress('5')} />
          <Button title="6" onPress={() => handlePress('6')} />
          <Button title="+" onPress={() => handlePress('+')} style={styles.funcButton} />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => handlePress('1')} />
          <Button title="2" onPress={() => handlePress('2')} />
          <Button title="3" onPress={() => handlePress('3')} />
          <Button title="-" onPress={() => handlePress('-')} style={styles.funcButton} />
        </View>
        <View style={styles.row}>
          <Button title="." onPress={() => handlePress('.')} />
          <Button title="0" onPress={() => handlePress('0')} />
          <Button title="⌫" onPress={handleDelete} style={styles.deleteButton} />
          <Button title="=" onPress={handleEqual} style={styles.funcButton} />
        </View>
      </View>
    </View>
  );
}

// Componente de botão reutilizável
const Button = ({ title, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// Estilos para o aplicativo
/* O layout utiliza flex para distribuir o espaço entre o display e os botões, deixando a interface mais limpa e responsiva.
   As cores utilizadas na interface não são muito chamativas para evitar a perda de foco do usuário.
   A fonte escolhida foi a Arial, ela é bem clara e legível, então é uma otima escolha para uma calculadora. */
   const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
      justifyContent: 'center',
      backgroundColor: '#DCDCDC',
    },
    display: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingHorizontal: 10,
    },
    displayText: {
      color: '#333',
      fontSize: height < 600 ? 24 : height * 0.06,
      padding: 20,
      fontFamily: 'Arial',
    },
    buttons: {
      flexGrow: 1,
      flexShrink: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },
    button: {
      flexGrow: 1,
      flexShrink: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: 5,
      width: '100%',
      maxWidth: 93,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    buttonText: {
      color: '#333',
      fontSize: height < 600 ? 23 : height * 0.06,
      fontFamily: 'Arial',
    },
    funcButton: {
      backgroundColor: '#9fc1e8',
    },
    clearButton: {
      backgroundColor: '#ee5d5f',
    },
   });
   
