import { motion } from "framer-motion";
import React from "react";
import { GLOBALTYPES } from "../../redux/actions/globalAction";
// import { GLOBALTYPES } from "../../redux/actions/globalAction";

const Toast = ({ dispatch, msg, bg }) => {
  return (
    <motion.div 
    initial={{x: '100px'}}
    animate={{x: '0'}}
    exit={{x: '100px'}}
    style={{position: 'absolute', bottom: '2%', left: '41%'}} className="toast d-block bg-danger text-white" role="alert" >
      <div className="toast-body d-flex align-items-center justify-content-between">
        {msg}
        <button
          type="button"
          className="btn-close text-light"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})}
        ></button>
      </div>
    </motion.div>
  );
};

export default Toast;
