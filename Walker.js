export default class Walker extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "walker");
    scene.add.existing(this);

    this.setOrigin(0.5, 1);
    this.speed = 2;
    this.keys = scene.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.keys.left.isDown) {
      this.x -= this.speed;
      this.flipX = true; //para que voltee a la derecha
    //   this.play("survivor-walks", true);
    } else if (this.keys.right.isDown) {
      this.x += this.speed;
      this.flipX = false; //para que voltee a la izquierda
    //   this.play("survivor-walks", true);
    } else {
    //   this.play("survivor-idle", true);
    }

    //------

    // Movimiento Vertical (¡Aquí está el cambio!)
    //  let moving = false;
    if (this.keys.up.isDown) {
      this.y -= this.speed; // Restar a Y sube al personaje
      //  this.flipY = true; 
        // this.play("survivor-idle", true);
    //   moving = true;
    } else if (this.keys.down.isDown) {
      this.y += this.speed; // Sumar a Y baja al personaje
        // this.play("survivor-idle", true);
    //   moving = true;
    }

    // // Control de animaciones unificado
    // if (moving) {
    //   this.play("survivor-walks", true);
    // } else {
    //   this.play("survivor-idle", true);
    // }
  }
}
