import React, { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import axios from 'axios';

const Cutlist = () => {
  const { inputs } = useContext(CalculatorContext);
  const saveData = async () => {
    const data = {
      cabinet: [],
      panelDoor: [],
      bookcase: [],
    };
console.log(data)
    if (inputs.sidesQuantity > 0) {
      data.cabinet.push([inputs.height, inputs.depth, inputs.sidesQuantity]);
    }
    if (inputs.topBaseQuantity > 0) {
      data.cabinet.push([inputs.cabinetWidth - 2 * inputs.cabinetThickness, inputs.depth, inputs.topBaseQuantity]);
    }
    if (inputs.shelvesQuantity > 0) {
      data.cabinet.push([inputs.cabinetWidth - 2 * inputs.cabinetThickness, inputs.depth, inputs.shelvesQuantity]);
    }
    if (inputs.backQuantity > 0) {
      data.cabinet.push([inputs.cabinetWidth, inputs.height, inputs.backQuantity]);
    }
    if (inputs.flushDoorQuantity > 0) {
      data.cabinet.push([inputs.cabinetWidth, inputs.height, inputs.flushDoorQuantity]);
    }

    if (inputs.stilesQuantity > 0) {
      data.panelDoor.push([inputs.height, inputs.railStile, inputs.stilesQuantity]);
    }
    if (inputs.railsQuantity > 0) {
      data.panelDoor.push([inputs.cabinetWidth - 2 * inputs.railStile, inputs.railStile, inputs.railsQuantity]);
    }
    if (inputs.panelsQuantity > 0) {
      data.panelDoor.push([inputs.cabinetWidth - 2 * inputs.railStile + 2 * inputs.grooveDepth, inputs.height - 2 * inputs.railStile + 2 * inputs.grooveDepth, inputs.panelsQuantity]);
    }

    if (inputs.bookcaseSidesQuantity > 0) {
      data.bookcase.push([inputs.bookcaseHeight, inputs.bookcaseDepth, inputs.bookcaseSidesQuantity]);
    }
    if (inputs.bookcaseTopQuantity > 0) {
      data.bookcase.push([inputs.cabinetWidth - 2 * inputs.bookcaseThickness, inputs.bookcaseDepth, inputs.bookcaseTopQuantity]);
    }
    if (inputs.bookcaseOtherShelvesQuantity > 0) {
      data.bookcase.push([inputs.cabinetWidth - 2 * inputs.bookcaseThickness, inputs.bookcaseDepth - inputs.bookcaseThickness, inputs.bookcaseOtherShelvesQuantity]);
    }
    if (inputs.bookcaseBackQuantity > 0) {
      data.bookcase.push([inputs.bookcaseHeight, inputs.cabinetWidth, inputs.bookcaseBackQuantity]);
    }

    // try {
    //   const response = await axios.post('http://localhost:5000/save-data', data);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('There was an error saving the data!', error);
    // }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Cutlist</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">YOUR NAME</div>
        <div className="col-span-2">YOUR PHONE</div>
        <div className="col-span-2">CUTLIST Ref #</div>
      </div>

      {/* Cabinet Section */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Cabinet calc</h2>
        {inputs.sidesQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.cabinetThickness} mm</div>
            <div className="col-span-2">{inputs.sidesQuantity} #</div>
            <div className="col-span-2">{inputs.height}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.depth} mm</div>
            <div className="col-span-2">Sides</div>
          </div>
        )}
        {inputs.topBaseQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.cabinetThickness} mm</div>
            <div className="col-span-2">{inputs.topBaseQuantity} #</div>
            <div className="col-span-2">{inputs.cabinetWidth - 2 * inputs.cabinetThickness}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.depth} mm</div>
            <div className="col-span-2">Top & Base</div>
          </div>
        )}
        {inputs.shelvesQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.cabinetThickness} mm</div>
            <div className="col-span-2">{inputs.shelvesQuantity} #</div>
            <div className="col-span-2">{inputs.cabinetWidth - 2 * inputs.cabinetThickness}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.depth} mm</div>
            <div className="col-span-2">Shelves</div>
          </div>
        )}
        {inputs.backQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.backThickness} mm</div>
            <div className="col-span-2">{inputs.backQuantity} #</div>
            <div className="col-span-2">{inputs.cabinetWidth}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.height} mm</div>
            <div className="col-span-2">Back</div>
          </div>
        )}
        {inputs.flushDoorQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.flushDoorBackThickness} mm</div>
            <div className="col-span-2">{inputs.flushDoorQuantity} #</div>
            <div className="col-span-2">{inputs.cabinetWidth}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.height} mm</div>
            <div className="col-span-2">Flush door</div>
          </div>
        )}
      </div>

      {/* Panel Door Section */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Panel Door calc</h2>
        {inputs.stilesQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.panelDoorThickness} mm</div>
            <div className="col-span-2">{inputs.stilesQuantity} #</div>
            <div className="col-span-2">{inputs.height}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.railStile} mm</div>
            <div className="col-span-2">Stiles</div>
          </div>
        )}
        {inputs.railsQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.panelDoorThickness} mm</div>
            <div className="col-span-2">{inputs.railsQuantity} #</div>
            <div className="col-span-2">{inputs.cabinetWidth - 2 * inputs.railStile}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.railStile} mm</div>
            <div className="col-span-2">Rails</div>
          </div>
        )}
        {inputs.panelsQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.panelsThickness} mm</div>
            <div className="col-span-2">{inputs.panelsQuantity} #</div>
            <div className="col-span-2">{inputs.cabinetWidth - 2 * inputs.railStile + 2 * inputs.grooveDepth}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.height - 2 * inputs.railStile + 2 * inputs.grooveDepth} mm</div>
            <div className="col-span-2">Panels</div>
          </div>
        )}
      </div>

      {/* Bookcase Section */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Bookcase calc</h2>
        {inputs.bookcaseSidesQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.bookcaseThickness} mm</div>
            <div className="col-span-2">{inputs.bookcaseSidesQuantity} #</div>
            <div className="col-span-2">{inputs.bookcaseHeight}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.bookcaseDepth} mm</div>
            <div className="col-span-2">Sides</div>
          </div>
        )}
        {inputs.bookcaseTopQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.bookcaseThickness} mm</div>
            <div className="col-span-2">{inputs.bookcaseTopQuantity} #</div>
            <div className="col-span-2">{inputs.cabinetWidth - 2 * inputs.bookcaseThickness}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.bookcaseDepth} mm</div>
            <div className="col-span-2">Top & Base</div>
          </div>
        )}
        {inputs.bookcaseOtherShelvesQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.bookcaseThickness} mm</div>
            <div className="col-span-2">{inputs.bookcaseOtherShelvesQuantity} #</div>
            <div className="col-span-2">{inputs.cabinetWidth - 2 * inputs.bookcaseThickness}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.bookcaseDepth - inputs.bookcaseThickness} mm</div>
            <div className="col-span-2">Other Shelves</div>
          </div>
        )}
        {inputs.bookcaseBackQuantity > 0 && (
          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-2">{inputs.bookcaseBackThickness} mm</div>
            <div className="col-span-2">{inputs.bookcaseBackQuantity} #</div>
            <div className="col-span-2">{inputs.bookcaseHeight}</div>
            <div className="col-span-1">x</div>
            <div className="col-span-2">{inputs.cabinetWidth} mm</div>
            <div className="col-span-2">Back</div>
          </div>
        )}
      </div>

      <div className='mt-4'><button className='p-3 bg-green-600 rounded-lg text-white' onClick={saveData}>Save and Generate Image</button></div>
    </div>
  );
};

export default Cutlist;
