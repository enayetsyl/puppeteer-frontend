import { set } from "firebase/database";
import OptionsSection from "./components/OptionsSection";
import TableSection from "./components/TableSection"
import  { useState } from 'react';

function App() {
  const [drawingName, setDrawingName] = useState('');
  const [panelsData, setPanelsData] = useState([]);
  const [stockSheetData, setStockSheetData] = useState([]);
  const [optionsData, setOptionsData] = useState({});
  const [cloudLink, setCloudLink] = useState({})
  const [isLoading, setIsLoading ] = useState(false)
  console.log('cloudin link', cloudLink)
  const handleSubmit = () => {
    const data = {
      panels: panelsData,
      stockSheet: stockSheetData,
      options: optionsData,
      drawingName: drawingName
    };

    if(drawingName === ''){
      alert('You must give the drawing a name.');
        return;
    }
    // Check for empty fields in panels data
    for (const panel of panelsData) {
      if (panel.includes('') || panel.length !== 3) {
        alert('All cells in Panels must be filled.');
        return;
      }
    }
console.log(data)
    // Check for empty fields in stockSheet data
    for (const sheet of stockSheetData) {
      if (sheet.includes('') || sheet.length !== 3) {
        alert('All cells in Stock sheets must be filled.');
        return;
      }
    }

    // Send data to the backend
    setIsLoading(true)
    fetch('http://localhost:3000/design-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setCloudLink(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Error:', error);
      });
  };

  return (
    <div className="App p-4">
     <div className="mb-8">
        <label htmlFor="drawing" className="block text-lg font-medium text-gray-700 mb-2">Drawing Name</label>
        <input 
          type="text" 
          name="drawing" 
          id="drawing" 
          placeholder="Tea Table 1"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={(e)=>setDrawingName(e.target.value)}
        />
      </div>
    <h1 className="text-xl font-bold mb-4">Panels</h1>
    <TableSection setTableData={setPanelsData} />
    <h1 className="text-xl font-bold mt-8 mb-4">Stock sheets</h1>
    <TableSection setTableData={setStockSheetData} />
    <OptionsSection setOptionsData={setOptionsData} />
    <button
      onClick={handleSubmit}
      className="mt-8 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      {isLoading ? 'Processing' : 'Submit'}
    </button>

    {
      cloudLink?.yourDesignLink && (
        <div className="my-5">
          <h1>Your design Image is as follows</h1>
          <a href={cloudLink?.yourDesignLink} target="_blank">{cloudLink?.yourDesignLink}</a>
        </div>
      )
    }
  </div>
  );
}

export default App;
