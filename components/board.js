import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Square from './square';
import { Patterns } from './patterns';
import Vertical from './vertical';
import Horizontal from './horizontal';
import RestartGame from './restart';
import WhosTurnItIs from './whosTurn';

export default function Board() {
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', '']);
  const [whosTurn, setWhosTurn] = useState('X');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });

  useEffect(
    (position) => {
      checkTie();
      checkWinner();

      if (whosTurn == 'X') {
        setWhosTurn('O');
      } else {
        setWhosTurn('X');
      }
    },
    [squares]
  );

  useEffect(() => {
    if (result.state != 'none') {
      alert(`game finished winner is ${result.winner}`);

      //Restart game!!
      restartGame();
    }
  }, [result]);

  const turnHandler = (position) => {
    if (checkWinner() || checkTie() || squares[position]) {
      return;
    }
    setSquares(
      squares.map((value, index) => {
        if (index == position && value == '') {
          return whosTurn;
        }
        return value;
      })
    );
  };

  const checkWinner = () => {
    Patterns.forEach((pattern) => {
      const player = squares[pattern[0]];
      if (player == '') return;
      let theresWinner = true;
      pattern.forEach((index) => {
        if (squares[index] != player) {
          theresWinner = false;
        }
      });
      if (theresWinner) {
        setResult({ winner: whosTurn, state: 'WON' });
      }
    });
  };

  const checkTie = () => {
    let filled = true;
    squares.forEach((square) => {
      if (square == '') {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: 'none', state: 'TIE' });
    }
  };

  const restartGame = () => {
    setSquares(['', '', '', '', '', '', '', '', '']);
    setWhosTurn('X');
  };

  return (
    <View>
      <View>
        <WhosTurnItIs whosTurn={whosTurn} />
      </View>
      <View style={styles.row}>
        <Square
          position={squares[0]}
          turnHandler={() => {
            turnHandler(0);
          }}
        />
        <Vertical />
        <Square
          position={squares[1]}
          turnHandler={() => {
            turnHandler(1);
          }}
        />
        <Vertical />
        <Square
          position={squares[2]}
          turnHandler={() => {
            turnHandler(2);
          }}
        />
      </View>
      <View style={styles.column}>
        <Horizontal />
        <Horizontal />
        <Horizontal />
      </View>
      <View style={styles.row}>
        <Square
          position={squares[3]}
          turnHandler={() => {
            turnHandler(3);
          }}
        />
        <Vertical />
        <Square
          position={squares[4]}
          turnHandler={() => {
            turnHandler(4);
          }}
        />
        <Vertical />
        <Square
          position={squares[5]}
          turnHandler={() => {
            turnHandler(5);
          }}
        />
      </View>
      <View style={styles.column}>
        <Horizontal />
        <Horizontal />
        <Horizontal />
      </View>
      <View style={styles.row}>
        <Square
          position={squares[6]}
          turnHandler={() => {
            turnHandler(6);
          }}
        />
        <Vertical />
        <Square
          position={squares[7]}
          turnHandler={() => {
            turnHandler(7);
          }}
        />
        <Vertical />
        <Square
          position={squares[8]}
          turnHandler={() => {
            turnHandler(8);
          }}
        />
      </View>
      <View>
        <RestartGame
          restartGame={() => {
            restartGame();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
