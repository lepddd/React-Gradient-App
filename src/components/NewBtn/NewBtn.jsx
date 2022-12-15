import { React, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useColorStore from "../../store/colorStore";

//Framer Motion
const variant = {
  rotate: (custom) => ({
    rotateZ: custom,
    transition: { type: "spring" },
  }),
};

//Styled Components
const StyledButton = styled(motion.button)`
  padding: 10px;
  border-radius: 50%;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f4f4f4;
  cursor: pointer;
  &:focus {
    background-color: rgba(61, 159, 240, 0.03);
    border: 1px solid rgba(61, 159, 240, 0.3);
  }
`;

export default function NewBtn() {
  const [rotate, setRotate] = useState(0);

  const newColors = useColorStore((state) => state.newColors);

  const refreshGradients = () => {
    setRotate((prev) => prev + 180);
    newColors();
  };

  return (
    <StyledButton
      onClick={() => refreshGradients()}
      variants={variant}
      animate="rotate"
      custom={rotate}
    >
      <Icon
        icon="system-uicons:refresh"
        color="#3d9ff0"
        width="20"
        height="20"
      />
    </StyledButton>
  );
}
