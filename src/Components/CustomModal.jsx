import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { ClickAwayListener } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  bgcolor: "white",

  borderRadius: "0.5rem",
  boxShadow: 12,
  // p: 4,
};
const createStyle = {
  position: "fixed",
  zIndex: 10000,
  bottom: "5vh",
  right: "7vw",
};

const ComponentModal = ({ children, modalOn, setModalOn }) => {
  return (
    <div className="flex flex-col">
      <Modal
        BackdropProps={{
          style: {
            backgroundColor: "white",
            opacity: 0.8,
          },
        }}
        open={modalOn}
        onClose={() => setModalOn(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ClickAwayListener onClickAway={modalOn}>
          <Box sx={style}>
            <div className="w-full py-2 px-2 bg-primary rounded-t-xl flex justify-end">
              <button
                className="text-white  p-2 "
                onClick={() => setModalOn(false)}
              >
                <AiOutlineClose size={22} color="white" />
              </button>
            </div>
            {children}
          </Box>
        </ClickAwayListener>
      </Modal>
    </div>
  );
};

export default ComponentModal;
