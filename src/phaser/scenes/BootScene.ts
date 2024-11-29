import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Preload the tileset and map
    this.load.image('tiles', './src/phaser/assets/tiles.png'); // Tileset image
    this.load.tilemapTiledJSON('map', './src/phaser/assets/map.json'); // Map JSON
    this.load.spritesheet('player', './src/phaser/assets/player.png', {
        frameWidth: 32,
        frameHeight: 32,
      });
 

  }

  create() {
    // Start the MainScene
    this.scene.start('MainScene');
  }
}
