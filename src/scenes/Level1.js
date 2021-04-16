import Phaser from "phaser";
import Enemy from "../characters/enemy";
import Player from "../characters/player";

export default class Level1 extends Phaser.Scene {
  constructor() {
    super("level1");
  }

  preload() {
    this.load.spritesheet("dude", "assets/sprites/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });

    this.load.spritesheet("enemy", "assets/sprites/enemy.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.player = this.createPlayer();
    this.enemy = this.createEnemy();
    this.createScenePhysics();

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createPlayer() {
    const player = new Player(this, 400, 300, "dude", "4");
    return player;
  }

  createEnemy() {
    return new Enemy(this, 200, 300, "enemy", "7");
  }

  createScenePhysics() {
    const ground = this.add
      .rectangle(0, 560, 800, 40, 0x6666ff)
      .setOrigin(0, 0);
    this.physics.add.staticGroup(ground);
    this.physics.add.collider(this.player, ground);
    this.physics.add.collider(this.enemy, ground);
  }


  update() {
    this.player.update();
  }
}
