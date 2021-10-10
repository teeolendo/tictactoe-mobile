import { Winner } from "../../types"

/**
  * @desc This class represents the board state and contains various 
  *       method that allow the modification and querying of board state.
  * @param {Array} state - array containing board state.
*/
class Board {
  
  state = ['','','','','','','','','']
  constructor(_state:Array<string>) {
    if(_state.length != 9) new Error ("GRID_NOT_9")
    this.state = _state
  }
  
  //Checks if board has no symbols yet
  isEmpty(): Boolean {
    return this.state.every(cell => !cell)
  }

  //Check if board has no spaces available
  isFull(): Boolean {
      return this.state.every(cell => cell)
  }

  // Returns status of a cell
  cellStatus(cell: number): Boolean {
    if(this.state[cell]) return true
  }

  boardStatus(): Array<string> {
    return this.state
  }

  /**
   * Adds a move to the board
   * @param {String} symbol 
   * @param {Number} position
   * @return {Boolean} boolean represent success of the operation
   */
  play(symbol: string, position: number) {
      if(position > 8 || this.state[position]) return false //Cell is either occupied or does not exist
      if(this.isComplete) return false
      this.state[position] = symbol
      return true
  }

  //Returns an array containing available moves for the current state
  getAvailableMoves() {
      const moves:Array<number> = []
      this.state.forEach((cell, index) => {
          if(!cell) moves.push(index) 
      })
      return moves
  }
  /**
   * Checks if the game is in a complete state ie. a player wins or the board is full with no winner
   * @return {Object} an object containing the winner, direction of winning and row number
   */
  isComplete() : Winner | Boolean  {
      //Return False if board in empty
      if(this.isEmpty()) return false

      //Checking Horizontal Wins
      if(this.state[0] == this.state[1] && this.state[0] == this.state[2] && this.state[0]) {
        return {'winner': this.state[0], 'direction': 'H', 'row': 1}
      }
      if(this.state[3] == this.state[4] && this.state[3] == this.state[5] && this.state[3]) {
        return {'winner': this.state[3], 'direction': 'H', 'row': 2}
      }
      if(this.state[6] == this.state[7] && this.state[6] == this.state[8] && this.state[6]) {
        return {'winner': this.state[6], 'direction': 'H', 'row': 3}
      }

      //Checking Vertical Wins
      if(this.state[0] == this.state[3] && this.state[0] == this.state[6] && this.state[0]) {
        return {'winner': this.state[0], 'direction': 'V', 'row': 1}
      }
      if(this.state[1] == this.state[4] && this.state[1] == this.state[7] && this.state[1]) {
        return {'winner': this.state[1], 'direction': 'V', 'row': 2}
      }
      if(this.state[2] == this.state[5] && this.state[2] == this.state[8] && this.state[2]) {
        return {'winner': this.state[2], 'direction': 'V', 'row': 3}
      }

      //Checking Diagonal Wins
      if(this.state[0] == this.state[4] && this.state[0] == this.state[8] && this.state[0]) {
        return {'winner': this.state[0], 'direction': 'D', 'row': 1}
      }
      if(this.state[2] == this.state[4] && this.state[2] == this.state[6] && this.state[2]) {
        return {'winner': this.state[2], 'direction': 'D', 'row': 2}
      }

      //If no winner but the board is full, then it's a draw
      if(this.isFull()) {
        return {'winner': 'draw', direction: 'N/A', 'row': 0}
      }
      
      //return false otherwise
      return false
  }
}

export default Board