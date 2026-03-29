// export default class WalkerAnimal extends Phaser.GameObjects.Sprite {
//   constructor(scene, x, y) {
//     super(scene, x, y, "walkerAnimal");
//     scene.add.existing(this);

//     this.setOrigin(0.5, 1);
//     this.speed = 1; // velocidad en la que se mueve el personaje

//     // 1. Creamos una variable para la dirección (1 = derecha, -1 = izquierda)
//     this.direccion = 1;
//   }

//   update() {
//     // 2. Movimiento automático constante
//     this.x += this.speed * this.direccion;

// // Simplificamos: si se mueve, reproduce la animación
//     this.play("walker-animal-walks", true);
//     this.flipX = (this.direccion === -1);

//     if (this.x >= this.scene.sys.game.config.width || this.x <= 0) {
//       this.direccion *= -1; // Invierte el movimiento
//     }

//   }
// }
