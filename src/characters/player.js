import Phaser from "phaser";
import Enemy from "./enemy";

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
    this.direction = 'right';
  }

  attack() {
    if(this.direction === 'right') {
      const hitBox = this.scene.add.rectangle(
        this.x + 20,
        this.y,
        20,
        20,
        0x6666ff
      );
      hitBox.setOrigin(0, 0.25);
  
      const targets = this.scene.physics.overlapRect(
        this.x + 20,
        this.y,
        20,
        20
      );
  
      if(targets.length >= 1) {
        targets.forEach((element) => {
          if(element.gameObject instanceof Enemy) {
            element.gameObject.getHit();
          }
        })
        
      }
  
      setTimeout(function () {
        hitBox.destroy();
      }, 10);
    } else if (this.direction === 'left') {
      const hitBox = this.scene.add.rectangle(
        this.x - 40,
        this.y,
        20,
        20,
        0x6666ff
      );

      hitBox.setOrigin(0, 0.25);
  
      const targets = this.scene.physics.overlapRect(
        this.x - 40,
        this.y,
        20,
        20
      );
  
      console.log(targets)
  
      if(targets.length >= 1) {
        targets.forEach((element) => {
          if(element.gameObject instanceof Enemy) {
            element.gameObject.getHit();
          }
        })
        
      }
  
      setTimeout(function () {
        hitBox.destroy();
      }, 10);
    }
  }

  die() {
    console.log('GAME OVER');
    this.disableBody();
  }

  update() {
    if (this.scene.cursors.left.isDown) {
      this.setVelocityX(-100);
      this.direction = 'left';
    } else if (this.scene.cursors.right.isDown) {
      this.setVelocityX(100);
      this.direction = 'right';
    } else if (this.Q.isDown) {
      this.setVelocityX(-100);
      this.direction = 'left';
    } else if (this.D.isDown) {
      this.setVelocityX(100);
      this.direction = 'right';
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
