import { createContext } from 'react';

const DarkContext = createContext({
  cart: [],
  setIsCart: () => null,
})

export default DarkContext;