import Phaser from 'phaser'

export default class Player extends Phaser.GameObjects.Rectangle 
{
    constructor(scene, x, y, width, height, fillColor) {
        super(scene, x, y, width, height, fillColor);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.scene = scene;
        this.Q = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.D = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.SPACE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.walkSpeed = 100;
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

        // @ts-ignore
        if (this.scene.cursors.up.isDown && this.body.touching.down) {
            // @ts-ignore
            this.body.setVelocityY(-150);
        // @ts-ignore
        } else if (this.SPACE.isDown && this.body.touching.down) {
            // @ts-ignore
            this.body.setVelocityY(-150);
        }
    }

}
