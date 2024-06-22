import  { useState } from 'react';

const OptionsSection = ({ setOptionsData }) => {
  const [options, setOptions] = useState({
    cutThickness: '',
    labelsOnPanels: false,
    useOneSheet: false,
    considerMaterial: false,
    edgeBanding: false,
    grainDirection: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setOptions({ ...options, [name]: val });
    setOptionsData({ ...options, [name]: val });
  };

  return (
    <div className="options-section mb-8">
      <h2 className="text-xl font-bold mb-4">Options</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <label className="w-1/3">Cut / blade / kerf thickness</label>
          <input
            type="text"
            name="cutThickness"
            value={options.cutThickness}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        {/* <div className="flex items-center space-x-4">
          <label className="w-1/3">Labels on panels</label>
          <input
            type="checkbox"
            name="labelsOnPanels"
            checked={options.labelsOnPanels}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3">Use only one sheet from stock</label>
          <input
            type="checkbox"
            name="useOneSheet"
            checked={options.useOneSheet}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3">Consider material</label>
          <input
            type="checkbox"
            name="considerMaterial"
            checked={options.considerMaterial}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3">Edge banding</label>
          <input
            type="checkbox"
            name="edgeBanding"
            checked={options.edgeBanding}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3">Consider grain direction</label>
          <input
            type="checkbox"
            name="grainDirection"
            checked={options.grainDirection}
            onChange={handleChange}
          />
        </div> */}
      </div>
    </div>
  );
};

export default OptionsSection;
