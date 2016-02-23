import { Component } from 'angular2/core';
@Component({
  template:`
    <h1 class="outside">CreateGame</h1>
    <div class="menu-wrap center">
      <paper-icon-button icon="arrow-back"></paper-icon-button>
      <div class='game-label-wrap'>
      <paper-input label="Game name" #gameLabel focused=true class="game-label center-horizontal left"></paper-input>
      <paper-icon-button (click)="submitGameLabel(gameLabel)" icon='done' class='right' ></paper-icon-button>
      </div>
      <div class="player-list" id="player-list">
        <paper-card class="player-lobby-card center-horizontal">
          <div class="card-content">
            <img class="avatar-small" src="">
            <p>John Doe</p>
            <paper-icon-button icon="more-vert"></paper-icon-button>
          </div>
        </paper-card>

        <paper-material class="player-lobby-card center-horizontal" id="John Doe">
            <img src="" class="avatar-small center-vertical">
            <p class="center-vertical">John Doe</p>
            <paper-menu-button>
              <paper-icon-button icon="more-vert" class="dropdown-trigger"></paper-icon-button>
              <paper-menu varticalAlign='top' class="dropdown-content layout vertical">
                <paper-item (click)="kick('John Doe',toast)">Kick</paper-item>
                <paper-item #item (click)="ban('John Doe',toast)">Ban</paper-item>
              </paper-menu>
            </paper-menu-button>
        </paper-material>

      </div>
      <paper-icon-button icon="arrow-forward" class="forward-icon"></paper-icon-button>
      <paper-toast #toast id="toast" text=""></paper-toast>
    </div>
  `
})


export class CreateGameComponent {
  constructor() { }
  public me: Player = {id:1,
                  name: 'John Doe',
                  username: 'John Doe',
                  imageUrl: ''};
  debugStart(){
   var one: Player = {id:1,
                   name: 'Gorge Hammond',
                   username: 'Gorge Hammond',
                   imageUrl: ''};
   var two: Player = {id:2,
                  name: 'Peter Smith',
                  username: 'Peter Smith',
                  imageUrl: ''};
   this.addPlayer(one);
   this.addPlayer(two);

  }
  submitGameLabel(field){
    field.disabled = true;
    this.addSelf();
    this.debugStart();
    this.getPlayers();
  }
  addSelf(){
    this.players.push(this.me);
    // generate dom element

  }

  public players: Player[]=[];
  addPlayer(newPlayer : Player){
    this.players.push(newPlayer);
    //Generate dom element
    var list = document.getElementById('player-list');
    var card = `<paper-material class="player-lobby-card center-horizontal" id="`+newPlayer.username+`">
        <img src="`+newPlayer.imageUrl+`" class="avatar-small center-vertical">
        <p class="center-vertical">`+newPlayer.username+`</p>
        <paper-menu-button>
          <paper-icon-button icon="more-vert" class="dropdown-trigger"></paper-icon-button>
          <paper-menu varticalAlign='top' class="dropdown-content layout vertical">
            <paper-item (click)="kick('`+newPlayer.username+`',toast)">Kick</paper-item>
            <paper-item #item (click)="ban(`+newPlayer.username+`,toast)">Ban</paper-item>
          </paper-menu>
        </paper-menu-button>
    </paper-material>
    `
    angular.element(list).append(card);
    // list.appendChild(card);
  }

  getPlayers (){
    console.debug(this.players);
  }

  // for now 'name' later on use player ID for identification
  removePlayer(name){
    var card = document.getElementById(name);
    // card.content = "";
    return true;
  }

  kick(name,toast){
    toast.close();
    toast.text = name + " has been kicked";
    toast.open();
    this.removePlayer(name);
    return true;
  }

  ban(name,toast){
    toast.close();
    toast.text = name + " has been banned for 5 minutes";
    toast.open();
    this.removePlayer(name);
    return true;
  }

}

export interface Player{
  id: number,
  name: string,
  username: string,
  imageUrl: string
}
