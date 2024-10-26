// import Phaser from 'phaser';
declare const Phaser: any;

class MyGame extends Phaser.Scene {
    constructor() {
      super({ key: 'MyGame' });
    }
  
    preload() {
      // 音声ファイルをロード
      this.load.audio('bgm', 'assets/Fairyland.mp3'); // 実際のファイルパスに変更してね
    }
  
    create() {
      // 音声を再生
      const music = this.sound.add('bgm');
      music.play();
    }
  }
  
  const config = { // 型指定を外す
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: MyGame
  };
  
  const game = new Phaser.Game(config);
