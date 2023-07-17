import React from "react";

function Floor(props) {
  return (
    <mesh {...props} receiveShadow>
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor;
