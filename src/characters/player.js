import Phaser from "phaser";
// Hello mutha ukaaa

export default class Player extends Phaser.Physics.Arcade.Sprite 
{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.scene = scene;
        this.Q = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.D = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.SPACE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update()
    {
        if(this.scene.cursors.left.isDown) {
            // @ts-ignore
            this.body.setVelocityX(-100);
        } else if (this.scene.cursors.right.isDown) {
            // @ts-ignore
            this.body.setVelocityX(100);
        } else if(this.Q.isDown) {
            // @ts-ignore
            this.body.setVelocityX(-100);
        } else if (this.D.isDown) {
            // @ts-ignore
            this.body.setVelocityX(100);
        } else {
            // @ts-ignore
            this.body.setVelocityX(0);
        }
        
        if (this.scene.cursors.up.isDown && this.body.touching.down) {
            // @ts-ignore
            this.body.setVelocityY(-200);
        } else if (this.SPACE.isDown && this.body.touching.down) {
            // @ts-ignore
            this.body.setVelocityY(-200);
        }
    }
  }

// HELLO !