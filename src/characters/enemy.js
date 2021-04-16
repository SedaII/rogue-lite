import Phaser from "phaser";

//"export default" permet d'appeler le fichier ailleurs
export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.scene = scene;
  }

  update() {
    
  }



}