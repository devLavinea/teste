import * as THREE from "three";

const loader = new THREE.TextureLoader();

// Função para criar um sprite da nebulosa
function getSprite({ hasFog, color, opacity, path, pos, size }) {
  const spriteMat = new THREE.SpriteMaterial({
    color,
    fog: hasFog,
    map: loader.load(path),
    transparent: true,
    opacity,
  });

  spriteMat.color.offsetHSL(0, 0, Math.random() * 0.2 - 0.1); // Aleatoriza a cor do sprite
  const sprite = new THREE.Sprite(spriteMat);
  sprite.position.set(pos.x, -pos.y, pos.z); // Posiciona o sprite no espaço 3D
  size += Math.random() - 0.5;
  sprite.scale.set(size, size, size); // Ajusta o tamanho do sprite
  sprite.material.rotation = 0; // Não rotaciona o sprite
  return sprite;
}

// Função para criar todos os sprites da nebulosa
function getSprites({
  hasFog = true,
  hue = 0.65,
  numSprites = 8,
  opacity = 0.2,
  path = "./rad-grad.png",
  radius = 10,
  sat = 0.5,
  size = 24,
  z = -20,  // Ajustando a profundidade para mais fundo
} = {}) {
  const layerGroup = new THREE.Group();
  for (let i = 0; i < numSprites; i += 1) {
    let angle = (i / numSprites) * Math.PI * 2;
    const pos = new THREE.Vector3(
      Math.cos(angle) * Math.random() * radius,
      Math.sin(angle) * Math.random() * radius,
      z + Math.random() * 10  // Maior variação na posição z para distribuir os sprites no fundo
    );

    let color = new THREE.Color().setHSL(hue, 1, sat);
    const sprite = getSprite({ hasFog, color, opacity, path, pos, size });
    layerGroup.add(sprite);
  }
  return layerGroup;
}

function Nebula() {
  const sprites = getSprites({
    numSprites: 8,
    radius: 10,
    z: -30,  // Profundidade maior para posicionar no fundo
    size: 45,
    opacity: 0.2,
    path: "./rad-grad.png",
  });
  
  // A nebulosa será fixa no espaço e não se moverá
  return <primitive object={sprites} position={[0, 0, 0]} />;
}

export default Nebula;
