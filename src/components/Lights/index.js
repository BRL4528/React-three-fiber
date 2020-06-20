import React, { useMemo, useRef, useState } from "react";
import { random } from "lodash";
import { useFrame } from "react-three-fiber";

export default () => {
  const esquerda = useRef();  
  const direita  = useRef()
  const giraTriangulo = useRef()                                
 

  // const FakeSphere = () => {
  //   return (
  //     <mesh
  //     position={position}
  //     >       
  //       <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
  //       <meshBasicMaterial color={0xfff1ef} attach="material" />

  //     </mesh>
  //   );
  // };
  
  useFrame(() => {
    esquerda.current.rotation.x = 0;
    esquerda.current.rotation.y = 0;
    esquerda.current.rotation.z = -1.055;
    
  });
    useFrame(() => {
    direita.current.rotation.x = 0;
    direita.current.rotation.y = 0;
    direita.current.rotation.z = 1.055;
    
  });
  useFrame(() => {
    giraTriangulo.current.rotation.x = -0.02;
    giraTriangulo.current.rotation.y = 0.70;
    giraTriangulo.current.rotation.z = 3.13;
    
  });
  
  const FakeSphere2 = () => {
    return (
      

       <mesh
       ref={giraTriangulo}
       >   
         <coneBufferGeometry args={[0.7, 1, 4]} attach="geometry" /> 
        <meshBasicMaterial  color={0xfff1ef}  attach="material" />

      </mesh>
    
    );
  };
  
  const PartedeCima = () => {
    return (
      <mesh  position={[0, 1, 0]} >       
        <boxBufferGeometry args={[3, 0.2, 0.2]} attach="geometry" />
        <meshBasicMaterial  color={0xfff1ef}  attach="material" />

      </mesh>
    );
  };

  const ParteEsquerda = () => {
    return (
      <mesh ref={esquerda} position={[-0.69, -0.3, 0]} >       
        <boxBufferGeometry args={[3, 0.2, 0.2]} attach="geometry" />
        <meshBasicMaterial  color={0xfff1ef}  attach="material" />

      </mesh>
    );
  };
  const ParteDireita = () => {
    return (
      <mesh ref={direita} position={[0.6, -0.4, 0]} >                                       
        <boxBufferGeometry args={[3.2, 0.2, 0.5]} attach="geometry" />
        <meshBasicMaterial  color={0xfff1ef}  attach="material" />

      </mesh>
    );
  };






  return (
    <group>
      {/* <FakeSphere /> */}
      <ParteEsquerda />
      <ParteDireita />
      <FakeSphere2 />
     
      <PartedeCima />
      <ambientLight intensity={0.01} />
      <pointLight intensity={1} position={[0, 0, 0]} />
    </group>
  );
};
