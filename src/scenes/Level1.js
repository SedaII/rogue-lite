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

    this.enemyGroup = this.createGroup();
    this.createEnemy(200, 300);
    this.createEnemy(300, 300);
    this.createEnemy(600, 300);

    this.createScenePhysics();

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createPlayer() {
    return new Player(this, 400, 300, "dude", "4");
  }

  createGroup() {
    return this.physics.add.group();
  }

  createEnemy(x, y) {
    const enemy = new Enemy(this, x, y, "enemy", "7");
    return enemy;
  }

  createScenePhysics() {
    const ground = this.add
      .rectangle(0, 560, 800, 40, 0x6666ff)
      .setOrigin(0, 0);
    this.physics.add.staticGroup(ground);

    this.physics.add.collider(this.enemyGroup, ground);
    this.physics.add.collider(this.player, ground);
    this.physics.add.collider(this.player, this.enemyGroup);
    this.physics.add.collider(this.enemyGroup, this.enemyGroup);
  }

  update() {
    this.player.update();
  }
}
