export default class Walker extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "walker");
    scene.add.existing(this);

    this.setOrigin(0.5, 1);
    this.speed = 0.5; // velocidad en la que se mueve el personaje

    // 1. Creamos una variable para la dirección (1 = derecha, -1 = izquierda)
    this.direccion = 1;
  }

  update() {
    // 2. Movimiento automático constante
    this.x += this.speed * this.direccion;

    // 3. Control de orientación (Flip) según la dirección
    if (this.direccion === 1) {
      this.flipX = false; // Mirando a la derecha
      
        this.play("walker-walks", true);
    } else {
      this.flipX = true; // Mirando a la izquierda
           this.play("walker-walks", true);
    }

    // 4. Lógica de rebote (Ejemplo: límites de la pantalla)
    // Si toca el borde derecho (800 es un ejemplo) o el izquierdo (0)
    if (this.x >= this.scene.sys.game.config.width || this.x <= 0) {
      this.direccion *= -1; // Invierte el movimiento
    }

    // 5. Opcional: Activa la animación siempre
    // this.play("survivor-walks", true);
  }
}
