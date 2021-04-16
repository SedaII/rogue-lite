import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.scene = scene;
    this.setCollideWorldBounds(true);
    this.Q = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.D = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.SPACE = scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.F = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
  }

  attack() {
    const hitBox = this.scene.add.rectangle(
      this.x + 20,
      this.y,
      20,
      20,
      0x6666ff
    );

    this.scene.physics.add.overlap(
      this,
      this.scene.foe,
      this.scene.hitFoe(),
      null,
      this
    );
    setTimeout(function () {
      hitBox.destroy();
    }, 10);
  }

  update() {
    if (this.scene.cursors.left.isDown) {
      this.setVelocityX(-100);
    } else if (this.scene.cursors.right.isDown) {
      this.setVelocityX(100);
    } else if (this.Q.isDown) {
      this.setVelocityX(-100);
    } else if (this.D.isDown) {
      this.setVelocityX(100);
    } else {
      this.setVelocityX(0);
    }

    if (this.scene.cursors.up.isDown && this.body.touching.down) {
      this.setVelocityY(-400);
    } else if (this.SPACE.isDown && this.body.touching.down) {
      this.setVelocityY(-400);
    }

    if (this.F.isDown) {
      this.attack();
    }
  }
}
