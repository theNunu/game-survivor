import Survivor from "./Survivor.js";
import { createAnimations } from "./animations.js";

export default class Scene2 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene2" });
  }

    preload() {
    this.load.image("streetOne", "assets/scenery/road&lamps_pale.png");
    // this.load.spritesheet("walkerAnimal", "assets/characters/zombies/zombieAnimal/Walk.png", { frameWidth: 96, frameHeight: 96 });

    //     this.load.spritesheet("survivor", "assets/characters/humans/Walk.png", {
    //   frameWidth: 128,
    //   frameHeight: 128,
    // });
  }


  create() {
    createAnimations(this);
    
    // Ponemos un color de fondo diferente o un texto para saber que cambiamos
    // this.add.text(10, 10, "Nivel 2 - El Bosque", { fill: '#000' });

    this.add.image(0, -100, "streetOne").setOrigin(0, 0).setScale(0.15).setDisplaySize(340, 350); // setDisplaySize x, y
    // Creamos al jugador al lado IZQUIERDO para que parezca que acaba de entrar
    this.player = new Survivor(this, 20, 210);
   

    // this.walkerAnimal = new WalkerAnimal(this, 10, 230);
    //  console.log('un jugador: ',this.player, 'zombie cuadrupedo', this.walkerAnimal)
  }

  update() {
    if (this.player) this.player.update();

    //    if (this.walkerAnimal) this.walkerAnimal.update();

    // Si quieres volver atrás al llegar al borde izquierdo:
    if (this.player.x < 0) {
      this.scene.start("Scene1");
    }

   
  }
}
