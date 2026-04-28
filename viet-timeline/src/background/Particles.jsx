import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

function Particles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 1000;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }

    return arr;
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial 
        size={0.005} 
        sizeAttenuation={true}
        color="#b5ecff" 
    />
    </points>
  );
}

export default Particles;