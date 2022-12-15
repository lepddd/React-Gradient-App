import { AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";
import useColorStore from "../../store/colorStore";
import Card from "../Card/Card";

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  max-width: 900px;
  min-width: 240px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default function Main() {
  const colors = useColorStore((state) => state.colors);
  return (
    <Container>
      <AnimatePresence mode="wait">
        {colors.map((color) => (
          <Card colors={color} key={color.color1 + color.color2} />
        ))}
      </AnimatePresence>
    </Container>
  );
}
