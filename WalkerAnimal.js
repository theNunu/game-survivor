export default class WalkerAnimal extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "walkerAnimal");
    scene.add.existing(this);

    this.setOrigin(0.5, 1);
    this.speed = 1; // velocidad en la que se mueve el personaje

    // 1. Creamos una variable para la dirección (1 = derecha, -1 = izquierda)
    this.direccion = 1;

     // 1. Instanciamos el sonido usando el sistema de audio de la escena
    this.gritoSound = scene.sound.add("zombieTalking");

    // 2. Iniciamos el temporizador directamente al crearse el zombie
    this.startSoundTimer(scene);
  }

    startSoundTimer(scene) {
    // Usamos el gestor de tiempo de la escena (scene.time)
    scene.time.addEvent({
      delay: 4000, // 3 segundos
      callback: () => {
        //Verificamos si este zombie específico sigue existiendo y está en pantalla
        if (this.active) {
          this.gritoSound.play({ volume: 0.5 }); // Volumen al 50% para no ensordecer
        }
      },
      callbackScope: this, // Mantiene el contexto de esta clase para poder usar 'this' arriba
      loop: true,
    });
  }

  update() {
    // 2. Movimiento automático constante
    this.x += this.speed * this.direccion;

// Simplificamos: si se mueve, reproduce la animación
    this.play("walker-animal-walks", true);
    this.flipX = (this.direccion === -1);

    if (this.x >= this.scene.sys.game.config.width || this.x <= 0) {
      this.direccion *= -1; // Invierte el movimiento
    }

  }
}
