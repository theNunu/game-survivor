export const createAnimations = (scene) => {
  scene.anims.create({
    key: "survivor-walks",
    frames: scene.anims.generateFrameNumbers("survivor", { start: 1, end: 6 }),
    frameRate: 12,
    repeat: -1, //repetir infinitamenrte
  });

  scene.anims.create({
    key: "survivor-idle",
    frames: scene.anims.generateFrameNumbers("survivor", { start: 8, end: 9 }),
    frameRate: 5,
    repeat: -1,
  });

//   this.anims.create({
//     key: "survivor-up",
//     // frames: [{ key: "mario", frame: 5 }],
//     frames: scene.anims.generateFrameNumbers("survivor", { start: 1, end: 6 }),
//     frameRate: 12,
//     repeat: -1,
//   });

  scene.anims.create({
    key: "walker-walks",
    frames: scene.anims.generateFrameNumbers("walker", { start: 1, end: 9 }),
    frameRate: 5,
    repeat: -1,
  });

  //   scene.anims.create({
  //   key: "walker-animal-walks",
  //   frames: scene.anims.generateFrameNumbers("walkerAnimal", { start: 1, end: 9 }),
  //   frameRate: 5,
  //   repeat: -1,
  // });

};
