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
    // { frameWidth: 18, frameHeight: 16 },
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
    .image(10, -60, "streetOne")
    .setOrigin(0, 0)
    .setScale(0.15)
    .setDisplaySize(300, 300);
  //   this.add
  //     .tileSprite(0, config.height - 32, config.width, 32, "streetOne")
  //     .setOrigin(0, 0);
  /*
        this.background = this.add
    .tileSprite(0, config.height - 32, config.width, 32, "streetOne")
    .setOrigin(0, 0);
     */

  this.survivor = this.add.sprite(50, 210, "survivor").setOrigin(0, 1);

  this.keys = this.input.keyboard.createCursorKeys();

    this.walker = this.add.sprite(50, 210, "walker").setOrigin(0, 1);

  //crear animacion para caminar
  this.anims.create({
    key: "survivor-walks",
    frames: this.anims.generateFrameNumbers(
      //tomar frames en especifico
      "survivor",
      { start: 1, end: 6 },
    ),
    frameRate: 12, //velocidad de los frames
    repeat: -1, // que se repita infinitamente
  });

  this.anims.create({
    key: "walker-walks",
    frames: this.anims.generateFrameNumbers(
      //tomar frames en especifico
      "walker",
      { start: 1, end: 9 },
    ),
    frameRate: 8, //velocidad de los frames
    repeat: -1, // que se repita infinitamente
  });

  //   this.anims.create({
  //   key: "survivor-idle",
  //   frames: [key: "survivor", {start: 1, end: 10 }],
  // });

    this.anims.create({
    key:'survivor-idle',
    // frames: [{key: 'survivor', start: 8, end: 9  }],
    // frameRate: 8,
    //  repeat: -1,

       frames: this.anims.generateFrameNumbers(
      //tomar frames en especifico
      "survivor",
      { start: 8, end: 9 },
    ),
    frameRate: 5, //velocidad de los frames
    repeat: -1, // que se repita infinitamente
  })

}

function update() {
  console.log("actualizar");
  if (this.keys.left.isDown) {
    this.survivor.anims.play("survivor-walks", true);
    this.survivor.x -= 2;
        this.survivor.flipX = true  //para que voltee
  } else if (this.keys.right.isDown) {
    this.survivor.anims.play("survivor-walks", true);
    this.survivor.x += 2;
        this.survivor.flipX = false //para que voltee
  } else {
    this.survivor.anims.play('survivor-idle', true)
    // this.survivor.anims.stop();
    // this.survivor.setFrame(1);
  }

  // 1. Reproducir la animación siempre (porque se está moviendo solo)
  this.walker.anims.play("walker-walks", true);

  // 2. Aumentar la posición X automáticamente
  // Puedes cambiar el 2 por un número más bajo (ej. 1) para que vaya más lento
  this.walker.x += 1;

  // 3. (Opcional) Si quieres que cuando salga de la pantalla por la derecha
  // aparezca de nuevo por la izquierda:
  if (this.walker.x > config.width + 50) {
    this.walker.x = -50;
  }
}

/*
 if (this.keys.left.isDown) {
    this.mario.anims.play("mario-walk", true);
    this.mario.x -= 2;
    this.mario.flipX = true  //para que voltee
  } else if (this.keys.right.isDown) {
    this.mario.anims.play("mario-walk", true);
    this.mario.x += 2;
    this.mario.flipX = false //para que voltee
  } else {
     this.mario.anims.play('mario-idle', true)
    // this.mario.anims.stop();
    // this.mario.setFrame(0);
  }
*/
