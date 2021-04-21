import Phaser from "phaser";

//"export default" permet d'appeler le fichier ailleurs
export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.enemyGroup.add(this);
    this.setFriction(0.5, 1);
    this.setCollideWorldBounds(true);

    this.scene = scene;
    this.follow();
  }

  follow() {
    if (Phaser.Math.Distance.BetweenPoints(this.scene.player, this) > 40) {
      if (this.scene.player.x < this.x) {
      this.setVelocityX(-30);
      }
      else if (this.scene.player.x > this.x) {
      this.setVelocityX(30);
      }
    } else {

      if (this.scene.player.x < this.x) {
        this.attack('left');
        }
        else if (this.scene.player.x > this.x) {
        this.attack('right');
        }
      this.setVelocityX(0);
    }
  }

  attack(direction) {

    if (direction === 'left') {
      const hitBox = this.scene.add.rectangle(
        this.x - 60,
        this.y,
        40,
        20,
        0xffffff
      );
      hitBox.setOrigin(0, 0.25);

      setTimeout(function () {
        hitBox.destroy();
      }, 10);
      }
      else if (direction === 'right') {
      const hitBox = this.scene.add.rectangle(
        this.x + 20,
        this.y,
        40,
        20,
        0xffffff
      );
      hitBox.setOrigin(0, 0.25);

      setTimeout(function () {
        hitBox.destroy();
      }, 10);
      }
  }
  
  getHit() {
    this.destroy();
  }

  update() {
    this.follow();
  }
}
