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
  }
  
  hitEnemy() {
    this.destroy();
  }

  update() {}
}
