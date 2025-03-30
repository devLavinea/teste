import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Importando THREE para poder criar geometria
import { Preload } from "@react-three/drei";

// Componente para as estrelas
const Stars = ({ position = [1, 1, 0], ...props }) => {
  const ref = useRef();
  const [geometry] = useState(() => {
    const positions = new Float32Array(5000 * 3); // 5000 estrelas, 3 coordenadas por estrela (x, y, z)

    // Gerando posições aleatórias dentro de uma esfera maior para espalhar mais as estrelas
    for (let i = 0; i < 5000; i++) {
      const theta = Math.random() * Math.PI * 2; // Distribuição em torno do eixo Z
      const phi = Math.acos(Math.random() * 2 - 1); // Distribuição no hemisfério

      const radius = Math.random() * 5; // Aumentei o raio para espalhar mais as estrelas (anteriormente 1.2)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = radius * Math.cos(phi); // z
    }

    // Criando a geometria com as posições geradas
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return geometry;
  });

  useFrame((state, delta) => {
    // Animação de rotação das estrelas na diagonal da direita para a esquerda
    if (ref.current) {
      // A rotação está agora ocorrendo em torno de dois eixos (X e Y) simultaneamente para dar o efeito de rotação diagonal
      ref.current.rotation.x += delta / -10; // Ajuste a velocidade conforme necessário
      ref.current.rotation.y -= delta / 20; // Ajuste a direção da rotação (direita para a esquerda)
    }
  });

  return (
    <group position={position}>
      <points ref={ref} geometry={geometry} {...props}>
        <pointsMaterial
          transparent
          color="#ffffff" // Cor das estrelas
          size={0.002} // Tamanho menor das estrelas (anteriormente estava 0.01)
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

// Componente para o canvas com as estrelas
const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 0] }}>
        <Suspense fallback={null}>
          <Stars position={[1, 0, 0]} /> {/* Defina a posição das estrelas */}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
