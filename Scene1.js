import Survivor from "./Survivor.js";
import Walker from "./Walker.js";
import { createAnimations } from "./animations.js";

export default class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene1" }); // ID único de la escena
  }

  preload() {
    this.load.image("streetOne", "assets/scenery/road&lamps_pale.png");

    // this.load.spritesheet("walkerAnimal","assets/characters/zombies/zombieAnimal/Walk.png",
    //     { frameWidth: 96, 
    //     frameHeight: 96 
    // });

    this.load.spritesheet("survivor", "assets/characters/humans/Walk.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet("walker", "assets/characters/zombies/Walk.png", {
      frameWidth: 128,
      frameHeight: 128,
    });

  }

  create() {
    createAnimations(this);

    this.add.image(0, -100, "streetOne").setOrigin(0, 0).setScale(0.15).setDisplaySize(340, 350);

    this.player = new Survivor(this, 50, 210);
    this.walker = new Walker(this, 10, 230);
    //  this.walkerAnimal = new WalkerAnimal(this, 10, 230);
  }

  update() {
    if (this.player) this.player.update();
    if (this.walker) this.walker.update();

    // if (this.walkerAnimal) this.walkerAnimal.update();

    // LÓGICA DE CAMBIO: Si el personaje pasa del ancho de la pantalla
    if (this.player.x > this.sys.game.config.width) {
      this.scene.start("Scene2");
    }
  }
}
