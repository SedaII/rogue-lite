import Phaser from 'phaser'

import Level1 from './scenes/Level1'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 400 }
		}
	},
	scene: [Level1]
}

export default new Phaser.Game(config)
