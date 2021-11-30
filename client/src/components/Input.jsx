import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const style = {
    border: props.error ? "1px solid #FE2C55" : "1px solid #dbdbdb",
    width: props.fullWidth && props.fullWidth
  };

  return (
    <div style={style} className="form__input">
      <input className="input" {...props} ref={ref} required />
      {props.error && <i className="fal fa-exclamation-circle"></i>}
      {props.children}
    </div>
  );
});

export default Input;
