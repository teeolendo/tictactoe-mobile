import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  useColorScheme,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Board from '../../classes/board';

function Game({navigation}) {
  const [grid, setGrid] = useState<Array<string>>([]);
  let board = new Board(['', '', '', '', '', '', '', '', '']);
  const startingGrid = [1,2,3,4,5,5,6,7,8,9];
  const play = (symbol: string, index: number) => {
    board.play(symbol, index);
    board.play(symbol, index + 1);
    setGrid([...board.boardStatus()]);
  };

  const startGame = () => {
    board = new Board(['', '', '', '', '', '', '', '', '']);
    setGrid([...board.boardStatus()]);
  };

  const Cell = (symbol: string, index: number) => {
    return (
      <TouchableOpacity onPress={play(symbol, index)} style={styles.cell}>
        <Text>{symbol}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <View style={styles.grid}>
            <TouchableOpacity onPress={() => play('X', 0)} style={styles.cell}>
              <Text style={styles.symbol}>{grid[0] ? grid[0] : null}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => play('X', 1)} style={styles.cell}>
              <Text style={styles.symbol}>{grid[1] && grid[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => play('X', 2)} style={styles.cell}>
              <Text style={styles.symbol}>{grid[2] && grid[2]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.grid}>
            <TouchableOpacity onPress={() => play('X', 3)} style={styles.cell}>
              <Text style={styles.symbol}>{grid[3] && grid[3]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => play('X', 4)} style={styles.cell}>
              <Text style={styles.symbol}>{grid[4] && grid[4]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => play('X', 5)} style={styles.cell}>
              <Text style={styles.symbol}>{grid[5] && grid[5]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.grid}>
            <TouchableOpacity onPress={() => play('X', 6)} style={styles.cell}>
              <Text style={styles.symbol}>{grid[6] && grid[6]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => play('X', 7)} style={styles.cell}>
              <Text style={styles.symbol}>{grid[7] && grid[7]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => play('X', 8)} style={styles.cell}>
              <Text style={styles.symbol}>{grid[8] && grid[8]}</Text>
            </TouchableOpacity>
          </View>
          <Button title="Start New Game" onPress={startGame} />
          <Button
            title="View Scores"
            onPress={() => navigation.navigate('ScoreCard')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    backgroundColor: 'skyblue',
    width: 150,
    height: 150,
    borderWidth: 1,
  },
  symbol: {
    textAlign: 'center',
    fontSize: 80,
    color: 'black',
  },
});

export default Game;
