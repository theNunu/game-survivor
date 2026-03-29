// import { miFuncion } from './archivo2.js';
import Scene1 from "./Scene1.js";
import Scene2 from "./Scene2.js";

console.log("hola mundoooo");
const config = {
  type: Phaser.AUTO,
  width: 320,
  height: 244,
  backgroundColor: "#7aa4d1",
  // borderRadius: 15px,

  parent: "game",
  // scene: {
  //   preload,
  //   create,
  //   update,
  // },
    scene: [Scene1, Scene2], 
};

new Phaser.Game(config);

// function preload() {
//   console.log("preccargar");
//   this.load.image(
//     "streetOne", //<----- id
//     "assets/scenery/road&lamps_pale.png",
//     // { frameWidth: 22, frameHeight: 16 },
//   );

//   this.load.spritesheet(
//     "survivor", //<----- id
//     "assets/characters/humans/Walk.png",
//     { frameWidth: 128, frameHeight: 128 }, //ajuste de tamaño de la imagen (calcular la imagen)
//   );

//   this.load.spritesheet(
//     "walker", //<----- id
//     "assets/characters/zombies/Walk.png",
//     { frameWidth: 128, frameHeight: 128 }, //ajuste de tamaño de la imagen (calcular la imagen)
//   );
// }

// function create() {
//   createAnimations(this);
//   console.log("crear");

//   this.add
//     .image(0, -100, "streetOne")
//     .setOrigin(0, 0)
//     .setScale(0.15)
//     .setDisplaySize(340, 340);

//   // 3. Crear instancia del personaje
//   this.player = new Survivor(this, 50, 210);

//   this.walker = new Walker(this, 10, 230); // x, y del persomaje

// }

// function update() {
//   // 4. Actualizar el personaje
//   if (this.player) this.player.update();

//   // this.walker

//   if (this.walker) this.walker.update();

// }
