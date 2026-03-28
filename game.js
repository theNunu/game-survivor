import Survivor from "./Survivor.js";
import Walker from "./Walker.js";
import { createAnimations } from "./animations.js";

// import { miFuncion } from './archivo2.js';

console.log("hola mundoooo");
const config = {
  type: Phaser.AUTO,
  width: 320,
  height: 244,
  backgroundColor: "#7aa4d1",
  // borderRadius: 15px,

  parent: "game",
  scene: {
    preload,
    create,
    update,
  },
};

new Phaser.Game(config);

function preload() {
  console.log("preccargar");
  this.load.image(
    "streetOne", //<----- id
    "assets/scenery/road&lamps_pale.png",
    // { frameWidth: 22, frameHeight: 16 },
  );

  this.load.spritesheet(
    "survivor", //<----- id
    "assets/characters/humans/Walk.png",
    { frameWidth: 128, frameHeight: 128 }, //ajuste de tamaño de la imagen (calcular la imagen)
  );

  this.load.spritesheet(
    "walker", //<----- id
    "assets/characters/zombies/Walk.png",
    { frameWidth: 128, frameHeight: 128 }, //ajuste de tamaño de la imagen (calcular la imagen)
  );
}

function create() {
  console.log("crear");

  this.add
    .image(0, -100, "streetOne")
    .setOrigin(0, 0)
    .setScale(0.15)
    .setDisplaySize(340, 340);

  createAnimations(this);

  // 3. Crear instancia del personaje
  this.player = new Survivor(this, 50, 210);

  this.walker = new Walker(this, 50, 220);

  // this.keys = this.input.keyboard.createCursorKeys();

  // this.walker = this.add.sprite(50, 210, "walker").setOrigin(0, 1);
}

function update() {
  // 4. Actualizar el personaje
  if (this.player) this.player.update();

  this.walker

  // if (this.walker) this.walker.update();
}
