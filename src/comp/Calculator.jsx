import React, { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

const Calculator = () => {
  const { inputs, handleChange } = useContext(CalculatorContext);

  const calculateValues = () => {
    // Add calculation logic here based on the inputs
    // Example calculations (you should replace these with actual formulas)
    const sidesHeight = inputs.height;
    const sidesWidth = inputs.cabinetWidth / 2;
    const topBaseWidth = inputs.cabinetWidth - 2 * inputs.cabinetThickness;
    const topBaseDepth = inputs.depth - 20;
    const shelvesWidth = topBaseWidth;
    const backHeight = inputs.height;
    const backWidth = inputs.cabinetWidth;

    return {
      sidesHeight,
      sidesWidth,
      topBaseWidth,
      topBaseDepth,
      shelvesWidth,
      backHeight,
      backWidth,
    };
  };

  const calculated = calculateValues();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Cabinet Calculator</h1>

      {/* Cabinet Calculation */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Cabinet Calculation</h2>
        <div className="grid grid-cols-8 gap-4">
          <div className="text-center col-span-2"></div>
          <div className="text-center col-span-2">Cabinet Width:</div>
          <div className="text-center col-span-2">Depth:</div>
          <div className="text-center col-span-1">Height:</div>
          <div className="text-center col-span-1">Thickness:</div>
          <div className="col-span-2"></div>
          <input
            type="number"
            name="cabinetWidth"
            value={inputs.cabinetWidth}
            onChange={handleChange}
            className="col-span-2 border p-2 bg-gray-200 text-center"
          />
          <input
            type="number"
            name="depth"
            value={inputs.depth}
            onChange={handleChange}
            className="col-span-2 border p-2 bg-gray-200 text-center"
          />
          <input
            type="number"
            name="height"
            value={inputs.height}
            onChange={handleChange}
            className="col-span-1 border p-2 bg-gray-200 text-center"
          />
          <input
            type="number"
            name="thickness"
            value={inputs.cabinetThickness}
            onChange={handleChange}
            className="col-span-1 border p-2 bg-gray-200 text-center"
          />
        </div>

        {/* Sides Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Sides:</div>

          <input
            type="number"
            name="sidesQuantity"
            value={inputs.sidesQuantity || 2}
            onChange={handleChange}
            className="border p-2 bg-gray-200 text-center col-span-1"
          />

          <div className="col-span-1">{calculated.sidesHeight}</div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">{inputs.depth}</div>
          <div className="col-span-2"></div>
          <div className="col-span-1">{inputs.cabinetThickness}</div>
        </div>

        {/* Top & Base Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Top & Base:</div>

          <input
            type="number"
            name="topBaseQuantity"
            value={inputs.topBaseQuantity || 2}
            onChange={handleChange}
            className="border p-2 col-span-1  bg-gray-200 text-center"
          />

          <div className="col-span-1">{calculated.topBaseWidth}</div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">{inputs.depth}</div>
          <div className="col-span-2"></div>
          <div className="col-span-1">{inputs.cabinetThickness}</div>
        </div>

        {/* Shelves Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-">Shelves:</div>

          <input
            type="number"
            name="shelvesQuantity"
            value={inputs.shelvesQuantity || 1}
            onChange={handleChange}
            className="border p-2 bg-gray-200 text-center col-span-1"
          />

          <div className="col-span-1">{calculated.shelvesWidth}</div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">{calculated.topBaseDepth}</div>
          <div className="col-span-2"></div>
          <div className="col-span-1">{inputs.cabinetThickness}</div>
        </div>

        {/* Back Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Back:</div>

          <input
            type="number"
            name="backQuantity"
            value={inputs.backQuantity || 1}
            onChange={handleChange}
            className="border p-2 col-span-1 bg-gray-200 text-center"
          />
          <div className="col-span-1">{calculated.backWidth}</div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">{calculated.backHeight}</div>
          <div className="col-span-2"></div>
          <input
            type="number"
            name="backQuantity"
            value={inputs.backThickness || 0}
            onChange={handleChange}
            className="border p-2 col-span-1 bg-gray-200 text-center"
          />
        </div>
        {/* Flush door Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Flush door:</div>

          <input
            type="number"
            name="backQuantity"
            value={inputs.flushDoorQuantity || 1}
            onChange={handleChange}
            className="border p-2 col-span-1 bg-gray-200 text-center"
          />
          <div className="col-span-1">{calculated.backWidth}</div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">{calculated.backHeight}</div>
          <div className="col-span-2"></div>
          <input
            type="number"
            name="backQuantity"
            value={inputs.flushDoorBackThickness || 0}
            onChange={handleChange}
            className="border p-2 col-span-1 bg-gray-200 text-center"
          />
        </div>
      </div>

      {/* Panel Door Calculation */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Panel Door Calculation</h2>
        <div className="grid grid-cols-8 gap-4">
          <div className="text-center col-span-2"></div>
          <div className="text-center col-span-2">Width:</div>
          <div className="text-center col-span-1">Rail/Stile:</div>
          <div className="text-center col-span-1">Height:</div>
          <div className="text-center col-span-1">Thickness:</div>
          <div className="text-center col-span-1">Groove Depth:</div>
          <div className="col-span-3"></div>
          <div className="col-span-1">{inputs.cabinetWidth}</div>
          <input
            type="number"
            name="railStile"
            value={inputs.railStile || 90}
            onChange={handleChange}
            className="col-span-1 border p-2 bg-gray-200 text-center"
          />
          <div className="col-span-1">{inputs.height}</div>
          <input
            type="number"
            name="panelDoorThickness"
            value={inputs.panelDoorThickness || 22}
            onChange={handleChange}
            className="col-span-1 border p-2 bg-gray-200 text-center"
          />
          <input
            type="number"
            name="grooveDepth"
            value={inputs.grooveDepth || 20}
            onChange={handleChange}
            className="col-span-1 border p-2 bg-gray-200 text-center"
          />
        </div>

        {/* Stiles Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Stiles:</div>
          <input
            type="number"
            name="stilesQuantity"
            value={inputs.stilesQuantity || 2}
            onChange={handleChange}
            className="border p-2 bg-gray-200 text-center col-span-1"
          />
          <div className="col-span-1">{inputs.height}</div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">{inputs.railStile}</div>
          <div className="col-span-1"></div>
          <div className="col-span-1">{inputs.panelDoorThickness}</div>
        </div>

        {/* Rails Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Rails:</div>
          <input
            type="number"
            name="railsQuantity"
            value={inputs.railsQuantity || 2}
            onChange={handleChange}
            className="border p-2 bg-gray-200 text-center col-span-1"
          />
          <div className="col-span-1">
            {inputs.cabinetWidth - 2 * inputs.railStile}
          </div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">{inputs.railStile}</div>
          <div className="col-span-1"></div>
          <div className="col-span-1">{inputs.panelDoorThickness}</div>
        </div>

        {/* Panels Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Panels:</div>
          <input
            type="number"
            name="panelsQuantity"
            value={inputs.panelsQuantity || 1}
            onChange={handleChange}
            className="border p-2 bg-gray-200 text-center col-span-1"
          />
          <div className="col-span-1">
            {inputs.cabinetWidth -
              2 * inputs.railStile +
              2 * inputs.grooveDepth}
          </div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">
            {inputs.height - 2 * inputs.railStile + 2 * inputs.grooveDepth}
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1">{inputs.panelsThickness}</div>
        </div>
        {/* Rail & stile per door Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Rail & stile per door:</div>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            {inputs.height * 2 +
              2 * (inputs.cabinetWidth - 2 * inputs.railStile)}
          </div>
        </div>
      </div>

      {/* Bookcase Calculation */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Bookcase Calculation</h2>
        <div className="grid grid-cols-8 gap-4">
          <div className="text-center col-span-2"></div>
          <div className="text-center col-span-2">Width:</div>
          <div className="text-center col-span-1">Depth:</div>
          <div className="text-center col-span-2">Height:</div>
          <div className="text-center col-span-1">Thickness:</div>
          <div className="col-span-2"></div>
          <div className="col-span-2 text-center">{inputs.cabinetWidth}</div>
          <input
            type="number"
            name="bookcaseDepth"
            value={inputs.bookcaseDepth || 300}
            onChange={handleChange}
            className="col-span-1 border p-2 bg-gray-200 text-center"
          />
          <input
            type="number"
            name="bookcaseHeight"
            value={inputs.bookcaseHeight || 1600}
            onChange={handleChange}
            className="col-span-2 border p-2 bg-gray-200 text-center"
          />
          <input
            type="number"
            name="bookcaseThickness"
            value={inputs.bookcaseThickness || 18}
            onChange={handleChange}
            className="col-span-1 border p-2 bg-gray-200 text-center"
          />
        </div>

        {/* Sides Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Sides:</div>
          <input
            type="number"
            name="bookcaseSidesQuantity"
            value={inputs.bookcaseSidesQuantity || 2}
            onChange={handleChange}
            className="border p-2 bg-gray-200 text-center col-span-1"
          />
          <div className="col-span-2 text-center">{inputs.bookcaseHeight}</div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">{inputs.bookcaseDepth}</div>
          <div className="col-span-1"></div>
          <div className="col-span-1">{inputs.bookcaseThickness}</div>
        </div>

        {/* Top/Base Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Top/Base:</div>
          <input
            type="number"
            name="bookcaseTopQuantity"
            value={inputs.bookcaseTopQuantity || 1}
            onChange={handleChange}
            className="border p-2 bg-gray-200 text-center col-span-1"
          />
          <div className="col-span-2 text-center">
            {inputs.cabinetWidth - 2 * inputs.bookcaseThickness}
          </div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">{inputs.bookcaseDepth}</div>
          <div className="col-span-13"></div>
          <div className="col-span-1">{inputs.bookcaseThickness}</div>
        </div>

        {/* Other Shelves Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Other Shelves:</div>
          <input
            type="number"
            name="bookcaseOtherShelvesQuantity"
            value={inputs.bookcaseOtherShelvesQuantity || 3}
            onChange={handleChange}
            className="border p-2 bg-gray-200 text-center col-span-1"
          />
          <div className="col-span-2 text-center">
            {inputs.cabinetWidth - 2 * inputs.bookcaseThickness}
          </div>
          <div className="col-span-1">x</div>
          <div className="col-span-1">{inputs.bookcaseDepth - 20}</div>
          <div className="col-span-1"></div>
          <div className="col-span-1">{inputs.bookcaseThickness}</div>
        </div>

        {/* Back Calculation */}
        <div className="grid grid-cols-8 gap-4 mt-4">
          <div className="col-span-1">Back:</div>
          <input
            type="number"
            name="bookcaseBackQuantity"
            value={inputs.bookcaseBackQuantity || 1}
            onChange={handleChange}
            className="border p-2 bg-gray-200 text-center col-span-1"
          />
          <div className="col-span-2 text-center">{inputs.cabinetWidth}</div>
          <div className="col-span-1">x</div>
          <div className="col-span-1 ">{inputs.bookcaseHeight}</div>
          <div className="col-span-1"></div>
          <input
            type="number"
            name="bookcaseBackThickness"
            value={inputs.bookcaseBackThickness || 6}
            onChange={handleChange}
            className="border p-2 bg-gray-200 text-center col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
