import Phaser from 'phaser'
import Player from '../characters/player'

export default class Level1 extends Phaser.Scene
{
	constructor()
	{
		super('level1');

	}

	preload()
    {
        this.load.spritesheet('dude', 'assets/sprites/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create()
    {
        this.createPhysics()

        this.cursors = this.input.keyboard.createCursorKeys();
        
    }

    createPhysics()
    {
        const ground = this.add.rectangle(0, 560, 800, 40, 0x6666ff).setOrigin(0,0);
        this.physics.add.staticGroup(ground);

        this.player = new Player(this, 400, 300, 'dude', '4');

        this.physics.add.collider(this.player, ground);
    }

    update()
    {
        this.player.update();
    }
}
