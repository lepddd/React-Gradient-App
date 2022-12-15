import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import useColorStore from "./store/colorStore";
import { Toaster } from "react-hot-toast";

function App() {
  const newColors = useColorStore((state) => state.newColors);

  useEffect(() => {
    newColors();
  }, []);

  return (
    <>
      <Toaster />
      <Header />
      <Main />
    </>
  );
}

export default App;
/*  */
