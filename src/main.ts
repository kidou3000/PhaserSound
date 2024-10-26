// import Phaser from 'phaser';
declare const Phaser: any;

class MyGame extends Phaser.Scene {
  constructor() {
    super({ key: 'MyGame' });
  }

  preload() {
    this.load.audio('bgm', 'assets/Fairyland.mp3'); // 実際のファイルパスに変更してね
    this.load.audio('sfx', 'assets/decideSound.mp3'); // 効果音をロード
  }

  create() {
    const music = this.sound.add('bgm');
    music.play();

    // 効果音を再生するためのイベントリスナーを追加
    this.input.on('pointerdown', () => {
      const soundEffect = this.sound.add('sfx');
      soundEffect.play();
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: MyGame
};

const game = new Phaser.Game(config);