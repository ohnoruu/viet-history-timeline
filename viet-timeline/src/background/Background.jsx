import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

export default function Background() {
  return (
    <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{
        position: "fixed",
        inset: 0,
        zIndex: 0 // Updated zIndex to ensure visibility
        }}
    >
      <ambientLight />
      <Particles />
    </Canvas>
  );
}