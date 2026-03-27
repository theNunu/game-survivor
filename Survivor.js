export default class Survivor extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "survivor");
    scene.add.existing(this);

    this.setOrigin(0, 1);
    this.speed = 2;
    this.keys = scene.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.keys.left.isDown) {
      this.x -= this.speed;
      this.flipX = true;
      this.play("survivor-walks", true);
    } else if (this.keys.right.isDown) {
      this.x += this.speed;
      this.flipX = false;
      this.play("survivor-walks", true);
    } else {
      this.play("survivor-idle", true);
    }
  }
}
