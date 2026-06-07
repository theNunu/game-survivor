// 1. Animaciones específicas del Jugador
const createSurvivorAnimations = (scene) => {
  if (!scene.anims.exists("survivor-walks")) {
    scene.anims.create({
      key: "survivor-walks",
      frames: scene.anims.generateFrameNumbers("survivor", { start: 1, end: 6 }),
      frameRate: 12,
      repeat: -1,
    });
  }

  if (!scene.anims.exists("survivor-idle")) {
    scene.anims.create({
      key: "survivor-idle",
      frames: scene.anims.generateFrameNumbers("survivor", { start: 8, end: 9 }),
      frameRate: 5,
      repeat: -1,
    });
  }
};

// 2. Animaciones específicas de los Enemigos
const createEnemyAnimations = (scene) => {
  if (!scene.anims.exists("walker-walks")) {
    scene.anims.create({
      key: "walker-walks",
      frames: scene.anims.generateFrameNumbers("walker", { start: 1, end: 9 }),
      frameRate: 5,
      repeat: -1,
    });
  }

  if (!scene.anims.exists("walker-animal-walks")) {
    scene.anims.create({
      key: "walker-animal-walks",
      frames: scene.anims.generateFrameNumbers("walkerAnimal", { start: 1, end: 9 }),
      frameRate: 5,
      repeat: -1,
    });
  }
};

// 3. LA FUNCIÓN PRINCIPAL (La única que exportas)
export const createAnimations = (scene) => {
  createSurvivorAnimations(scene);
  createEnemyAnimations(scene);
};