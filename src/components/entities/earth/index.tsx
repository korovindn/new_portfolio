import { FC, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const earthRadius = 2;

export const Earth: FC = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const sputnikRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (earthRef.current && cloudsRef.current && sputnikRef.current) {
      earthRef.current.rotation.y = time / 10;
      cloudsRef.current.rotation.y = time / 7.5;
      sputnikRef.current.position.x = Math.cos(time / 5) * 4;
      sputnikRef.current.position.z = Math.sin(time / 5) * 4;
    }
  });
  const [map, cloudsMap, normalMap] = useLoader(TextureLoader, [
    "/textures/earth-map.jpg",
    "/textures/earth-clouds.jpg",
    "/textures/earth-normal-map.jpg",
  ]);
  const gltf = useLoader(GLTFLoader, "/models/sputnik.gltf");

  return (
    <>
      <Stars radius={400} depth={40} count={10000} />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[earthRadius * 1.01, 72, 72]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.25}
          depthWrite
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <OrbitControls />
        <sphereGeometry args={[earthRadius, 72, 72]} />
        <meshStandardMaterial
          map={map}
          normalMap={normalMap}
          roughness={0.5}
          metalness={0.25}
        />
      </mesh>
      <mesh ref={sputnikRef} scale={[0.025, 0.025, 0.025]}>
        <primitive object={gltf.scene} />
      </mesh>
    </>
  );
};
