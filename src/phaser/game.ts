import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import MainScene from './scenes/MainScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO, // Use WebGL if available, fallback to Canvas
  width: 800,        // Game canvas width
  height: 600,       // Game canvas height
  physics: {
    default: 'arcade',
    arcade: {
      debug: true, // Show debug information (e.g., collision boxes)
      gravity: { x: 0, y: 0 }, // No gravity for top-down maps
    },
  },
  scene: [BootScene, MainScene], // Add scenes here
};

const game = new Phaser.Game(config);

export default game;
