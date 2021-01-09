import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';
  game: string[] = ['','','','','','','','',''];
  turns = 0;
  player = 'X';
  winner = '';
  vertical_positions = [];
  cross_positions = [0,4,8,2,4,6];
  center_position = 4;

  constructor(){
    // Gets vertical positions
    for(let k=0; k<3; k++){
      for(let j=k; j<this.game.length; j+=3){
        this.vertical_positions.push(j);
      }
    }
  }

  choose(position: number){
    this.game[position] = this.player;
    this.player = this.player == 'X'? 'O':'X';
    this.whoWin();
    this.turns++;
  }

  whoWin(){
    // Horizontal
    for(let i=0; i<this.game.length; i+=3){
      const row = this.game.slice(i,i+3);
      if(!row.includes("") && row.every(val => val == this.game[i])){
        this.winner = this.game[i];
      }
    }
    // Vertical
    for(let i=0; i<this.vertical_positions.length; i+=3){
      const row = this.vertical_positions.slice(i,i+3);
      const row_value = row.map(item => this.game[item]);
      if(!row_value.includes("") && row_value.every(val => val == this.game[i])){
        this.winner = this.game[i];
      }
    }
    // Cross
    for(let i=0; i<this.cross_positions.length; i+=3){
      const row = this.cross_positions.slice(i,i+3);
      const row_value = row.map(item => this.game[item]);
      if(!row_value.includes("") && row_value.every(val => val == this.game[this.center_position])){
        this.winner = this.game[this.center_position];
      }
    }
  }
}
