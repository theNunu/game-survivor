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
}

function update() {
  console.log("actualizar");
  if (this.keys.left.isDown) {
    this.survivor.anims.play('survivor-walks', true)
    this.survivor.x -= 2;
  } else if (this.keys.right.isDown) {
     this.survivor.anims.play('survivor-walks', true)
    this.survivor.x += 2;
  }else {
    this.survivor.anims.stop()
    this.survivor.setFrame(1)
  }
}
