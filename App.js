import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

export default function App() {
  const [display, setDisplay] = useState('');
  const [parenthesis, setParenthesis] = useState('(');

  const handlePress = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display.replace('x', '*')).toString());
    } catch (e) {
      setDisplay('Erro');
    }
  };

  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };

  const handlePercent = () => {
    try {
      setDisplay((parseFloat(display) / 100).toString());
    } catch (e) {
      setDisplay('Erro');
    }
  };

  const handleParenthesis = () => {
    setDisplay(display + parenthesis);
    setParenthesis(parenthesis === '(' ? ')' : '(');
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
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
          <Button title="⌫" onPress={handleDelete} />
          <Button title="=" onPress={handleEqual} style={styles.funcButton} />
        </View>
      </View>
    </View>
  );
}

const Button = ({ title, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  display: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  displayText: {
    color: '#333',
    fontSize: 40,
    padding: 20,
  },
  buttons: {
    flex: 3,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  buttonText: {
    color: '#333',
    fontSize: Platform.OS === 'ios' ? screen.width * 0.1 : screen.width * 0.08,
  },
  funcButton: {
    backgroundColor: '#9fc1e8',
  },
  clearButton: {
    backgroundColor: '#ee5d5f',
  },
});
