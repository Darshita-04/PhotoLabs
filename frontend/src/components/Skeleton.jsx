import React from "react";
const Skeleton = ({ width = "100%", height = "1rem", borderRadius = "4px" }) => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%)",
        backgroundSize: "200% 100%",
        animation: "skeleton-loading 1.5s infinite",
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

export default Skeleton;
