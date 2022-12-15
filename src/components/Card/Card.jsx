import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

//Toast Styles
const toastStyles = {
  padding: "10px 30px",
  background: "#F4F4F4",
  border: "1px solid #F0F0F0",
  borderRadius: "4px",
  boxShadow:
    " 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 4px 3px rgba(0, 0, 0, 0.07)",
  color: "#525252",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
};

//Framer Motion
const rotateX = {
  blink: {
    rotateX: 90,
    skewX: 20,
    transition: { duration: 0.3, type: "tween" },
  },
  visible: {
    rotateX: 0,
    skewX: 0,
    transition: { duration: 0.3, type: "tween" },
  },
};

//Styled Components
const Container = styled(motion.div)`
  width: 200px;
  height: 200px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 4px 3px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
`;

const Gradient = styled(motion.div).attrs((props) => ({
  style: {
    background: `linear-gradient(125deg, #${props.colors1} 0%, #${props.colors2} 100%)`,
  },
}))`
  height: 130px;
  border-radius: 16px 16px 0px 0px;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  height: 70px;
  background: #f4f4f4;
  border-radius: 0px 0px 16px 16px;
`;

const TextBox = styled.div`
  font-family: "Inter";
  color: #525252;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
`;

const ColorBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const ColorDrop = styled(motion.div).attrs((props) => ({
  style: {
    backgroundColor: `#${props.color}`,
  },
}))`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  z-index: 99;
  cursor: pointer;
`;

const ColorTape = styled.div.attrs((props) => ({
  style: {
    background: `linear-gradient(125deg, #${props.colors1} 0%, #${props.colors2} 100%)`,
  },
}))`
  position: absolute;
  height: 6px;
  width: calc(100% - 30px);
  top: 5px;
  left: 15px;
  z-index: 0;
`;

export default function Card({ colors }) {
  const notify = (colors, cb) => {
    toast.dismiss();
    toast("Copied !", {
      style: toastStyles,
    });

    cb(colors);
  };

  const colorToClipboard = (color) => {
    navigator.clipboard.writeText(`#${color}`);
  };

  const gradientToClipboard = (colors) => {
    navigator.clipboard.writeText(
      `background: linear-gradient(125deg, #${colors.color1} 0%, #${colors.color2} 100%)`
    );
  };

  return (
    <Container
      variants={rotateX}
      initial="blink"
      animate="visible"
      exit="blink"
    >
      <Gradient
        colors1={colors.color1}
        colors2={colors.color2}
        onClick={() => notify(colors, gradientToClipboard)}
        whileTap={{ scale: 1.05 }}
      />
      <Details>
        <ColorBox>
          <ColorDrop
            color={colors.color1}
            onClick={() => notify(colors.color1, colorToClipboard)}
            whileTap={{ scale: 1.25 }}
          />
          <ColorTape colors1={colors.color1} colors2={colors.color2} />
          <ColorDrop
            color={colors.color2}
            onClick={() => notify(colors.color2, colorToClipboard)}
            whileTap={{ scale: 1.25 }}
          />
        </ColorBox>
        <TextBox>
          <span>#{colors.color1}</span>
          <span>#{colors.color2}</span>
        </TextBox>
      </Details>
    </Container>
  );
}
