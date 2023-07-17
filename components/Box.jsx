import React from "react";

function Box(props) {
  return (
    <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="blue" transparent />
    </mesh>
  );
}
export default Box;