import create from "zustand";

//All colors/generate new gradients
export const useColorStore = create((set) => ({
  colors: [],
  newColors: () => {
    let array = [];
    for (let i = 0; i < 12; i++) {
      const color1 = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();
      const color2 = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();
      array = [...array, { color1: color1, color2: color2 }];
    }
    set({ colors: array });
  },
}));

export default useColorStore;
