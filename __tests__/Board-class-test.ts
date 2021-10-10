import {describe, beforeEach, afterEach, expect, test} from '@jest/globals'
import Board from '../src/classes/board'

let board: Board;

describe('Board Initialization', () => {
  beforeEach(() => {
    board = new Board(['','','','','','','','',''])
  });
  
  test('board is Empty when first created', () => {
    expect(board.isEmpty()).toEqual(true);
  });
})

describe('Board accepts a move', () => {
  beforeEach(() => {
    board = new Board(['','','','','','','','',''])
  });
  
  test('board accepts move', () => {
    board.play('X', 1);
    expect(board.cellStatus(1)).toEqual(true);
  });
})

describe('Game completion', () => {
  beforeEach(() => {
    board = new Board(['','','','','','','','',''])
  });
  
  test('x wins - diagonal', () => {
    board.play('X', 0);
    board.play('X', 4);
    board.play('X', 8);
    const state: any = board.isComplete()
    expect(state.winner).toEqual('X');
  });

  test('o wins - vertical', () => {
    board.play('O', 1);
    board.play('O', 7);
    board.play('O', 4);
    const state: any = board.isComplete()
    expect(state.winner).toEqual('O');
  });

  test('o wins - horizontal', () => {
    board.play('O', 6);
    board.play('O', 7);
    board.play('O', 8);
    const state: any = board.isComplete()
    expect(state.winner).toEqual('O');
  });

  test('draw', () => {
    board.play('X', 0);
    board.play('O', 1);
    board.play('X', 2);
    board.play('X', 3);
    board.play('O', 4);
    board.play('O', 5);
    board.play('O', 6);
    board.play('X', 7);
    board.play('X', 8);
    const state: any = board.isComplete()
    expect(state.winner).toEqual('draw');
  });
})

