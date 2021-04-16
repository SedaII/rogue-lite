import Phaser from "phaser";
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
  }

  create() {
    this.player = this.createPlayer();
    this.foe = this.createFoe();
    this.createScenePhysics();
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createScenePhysics() {
    const ground = this.add
      .rectangle(0, 560, 800, 40, 0x6666ff)
      .setOrigin(0, 0);
    this.physics.add.staticGroup(ground);

    this.physics.add.collider(this.player, ground);
    this.physics.add.collider(this.foe, ground);
    this.physics.add.collider(this.player, this.foe);
  }

  createPlayer() {
    const player = new Player(this, 400, 300, "dude", "4");
    return player;
  }

  createFoe() {
    const foe = this.add.rectangle(120, 20, 40, 40, 0x6666ff);
    this.physics.add.group(foe);
    return foe;
  }

  hitFoe() {
    this.foe.destroy();
  }

  update() {
    this.player.update();
  }
}
