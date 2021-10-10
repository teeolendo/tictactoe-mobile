import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Game from './src/screens/game';
import ScoreCard from './src/screens/scoreCard';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="ScoreCard" component={ScoreCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
