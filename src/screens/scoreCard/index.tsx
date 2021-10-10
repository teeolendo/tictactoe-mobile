import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button, Text} from 'react-native';
import {getItemFromStore} from '../../util/AsyncStore';

function ScoreCard({navigation}) {
  const getScore: Promise<number> = async () => {
    const score = await getItemFromStore('SCORE');
    return score ? score : 0;
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Text style={styles.scoreTitle}>Your score is {getScore}</Text>
        <Button
          title="BACK TO GAME"
          onPress={() => navigation.navigate('Game')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  scoreTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    alignItems: 'center',
    marginBottom: 25,
  },
});

export default ScoreCard;
