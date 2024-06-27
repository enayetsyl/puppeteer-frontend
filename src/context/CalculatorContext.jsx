import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [inputs, setInputs] = useState({
    cabinetWidth: 900,
    depth: 550,
    height: 650,
    cabinetThickness: 18,
    sidesQuantity: 2,
    topBaseQuantity: 2,
    shelvesQuantity: 1,
    backQuantity: 1,
    flushDoorQuantity: 1,
    backThickness: 6,
    flushDoorBackThickness: 18,
    railStile: 90,
    panelDoorThickness: 22,
    grooveDepth: 20,
    stilesQuantity: 2,
    railsQuantity: 2,
    panelsQuantity: 1,
    panelsThickness:6,
    bookcaseDepth:300,
    bookcaseHeight: 1600,
    bookcaseThickness: 18,
    bookcaseSidesQuantity: 2, 
    bookcaseTopQuantity:1, 
    bookcaseOtherShelvesQuantity: 3,
    bookcaseBackQuantity:1,
    bookcaseBackThickness: 6,
    // Add other necessary states here
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  return (
    <CalculatorContext.Provider value={{ inputs, handleChange }}>
      {children}
    </CalculatorContext.Provider>
  );
};
