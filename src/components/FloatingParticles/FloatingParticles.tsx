import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer, Bloom, Glitch, Noise } from '@react-three/postprocessing';

function FloatingParticles() {
    const particlesRef = useRef();
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    useFrame(() => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y += 0.001;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={count}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="cyan" />
        </points>
    );
}

export default function TechBackground() {
    return (
        <Canvas className="absolute top-0 left-0 w-full h-full">
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
            <FloatingParticles />
            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.2} height={300} />
                <Glitch delay={[1.5, 3.5]} duration={[0.3, 1.0]} strength={[0.1, 0.3]} />
                <Noise opacity={0.1} />
            </EffectComposer>
        </Canvas>
    );
}
