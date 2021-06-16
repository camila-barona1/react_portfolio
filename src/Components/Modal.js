import React from "react";
import styled from "styled-components";
import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
// import { MdClose } from "react-icons/md";
import { Close } from "@material-ui/icons";
import Slider from "./Slider/Slider";

const Background = styled.div`
  width: 50%;
  height: 45%;
  margin-top: -15%;
  margin-left: 8%;

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const ModalWrapper = styled.div`
  width: 730px;
  height: 520px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: rgb(0 0 0 / 38%);
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const CloseModalButton = styled(Close)`
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 1px;
  width: 35px;
  height: 35px;
  padding: 1px;
  background-color: rgb(32, 32, 32);
  margin-top: -5px;
  border-radius: 50%;
  color: #fff;
  z-index: 10;
`;

function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <Slider />
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}

export default Modal;
