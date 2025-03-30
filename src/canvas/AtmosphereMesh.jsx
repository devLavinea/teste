import * as THREE from "three";
import React, { useRef, useEffect } from "react";

function AtmosphereMesh() {
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      // Definindo o material da atmosfera
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0x00aaff), // Azul para a atmosfera
        transparent: true,
        opacity: 0.4, // Opacidade da atmosfera
        blending: THREE.AdditiveBlending, // Efeito de brilho
      });
      meshRef.current.material = material;
    }
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.3, 32, 32]} /> {/* Maior que a esfera do planeta */}
    </mesh>
  );
}

export default AtmosphereMesh;
