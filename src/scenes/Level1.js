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
        
    }

    create()
    {
        let ground = this.add.rectangle(0, 560, 800, 40, 0x6666ff).setOrigin(0,0);
        this.physics.add.staticGroup(ground);

        this.player = new Player(this, 400, 300, 40, 40, 0x9966ff);

        this.physics.add.collider(this.player, ground);

        this.cursors = this.input.keyboard.createCursorKeys();
        
    }

    update()
    {
        this.player.update();
    }
}
