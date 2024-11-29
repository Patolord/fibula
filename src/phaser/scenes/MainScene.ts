import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite; // Player sprite
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys; // Keyboard input

  constructor() {
    super('MainScene');
  }

  create() {
    // Load the tilemap
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('tiles'); // Tileset key must match Tiled

    if (!tileset) {
      console.error('Tileset not found!');
      return;
    }

    // Create layers
    const groundLayer = map.createLayer('Grass', tileset, 0, 0);
    const obstaclesLayer = map.createLayer('Obstacles', tileset, 0, 0);

    if (!groundLayer || !obstaclesLayer) {
      console.error('Layers not found in tilemap!');
      return;
    }

    // Set collision for obstacles
    obstaclesLayer.setCollisionByProperty({ collides: true });

    // Debug collision boundaries (optional)
    this.physics.world.drawDebug = true;

    this.player = this.physics.add.sprite(100, 100, 'player', 0);
    this.player.setCollideWorldBounds(true);
    
 

    // Player collision with obstacles
    this.physics.add.collider(this.player, obstaclesLayer);

    // Input keys for movement
    this.cursors = this.input.keyboard!.createCursorKeys();
  }

  update() {
    const speed = 150;

    // Reset velocity
    this.player.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left?.isDown) {
      this.player.setVelocityX(-speed);
    } else if (this.cursors.right?.isDown) {
      this.player.setVelocityX(speed);
    }

    // Vertical movement
    if (this.cursors.up?.isDown) {
      this.player.setVelocityY(-speed);
    } else if (this.cursors.down?.isDown) {
      this.player.setVelocityY(speed);
    }
  }
}
