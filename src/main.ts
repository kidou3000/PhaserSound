// import Phaser from 'phaser';
declare const Phaser: any;

class MyGame extends Phaser.Scene {
  private soundEffects: { [key: string]: any }; // 効果音を複数保持

  constructor() {
    super({ key: 'MyGame' });
    this.soundEffects = {};
  }

  preload() {
    this.load.audio('bgm', 'assets/Fairyland.mp3'); // 実際のファイルパスに変更してね
    this.load.audio('sfxClick', 'assets/ClickSound.mp3'); // 効果音1をロード
    this.load.audio('sfxAlert', 'assets/AlertSound.mp3'); // 効果音2をロード
  }

  create() {
    const music = this.sound.add('bgm');
    music.play();

    // 効果音をあらかじめ作成して保持
    this.soundEffects['click'] = this.sound.add('sfxClick', { volume: 1 });
    this.soundEffects['alert'] = this.sound.add('sfxAlert', { volume: 1 });

    // 効果音を再生するためのイベントリスナーを追加
    this.input.on('pointerdown', () => {
      console.log('クリックイベント発生'); // デバッグ用メッセージ
      this.soundEffects['click'].play(); // クリック効果音を再生
    });

    // 他の効果音を再生する例（例えば、警告を表示する際など）
    this.time.addEvent({
      delay: 5000, // 5秒後に再生
      callback: () => {
        console.log('5秒後の効果音再生');
        this.soundEffects['alert'].play(); // 警告効果音を再生
      },
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
