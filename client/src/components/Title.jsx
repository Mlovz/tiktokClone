import React from "react";

const Title = ({children, size,component, margin, fw, color }) => {
  return (
    <h6
      style={{
        fontSize: `${size}px`,
        fontWeight: fw,
        margin: margin && margin,
        color: color
      }}
    >
      {children}
    </h6>
  );
};

export default Title;
