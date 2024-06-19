import React, { useState, useEffect } from 'react';

const TableSection = ({ title, setTableData }) => {
  const [rows, setRows] = useState([{ length: '', width: '', qty: '' }]);

  useEffect(() => {
    const formattedData = rows.map(row => [row.length, row.width, row.qty]);
    setTableData(formattedData);
  }, [rows, setTableData]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, { length: '', width: '', qty: '' }]);
  };

  const handleSubmit = () => {
    for (const row of rows) {
      if (!row.length || !row.width || !row.qty) {
        alert('All cells in a row must be filled.');
        return;
      }
    }

    // Trigger parent submit function
    const formattedData = rows.map(row => [row.length, row.width, row.qty]);
    setTableData(formattedData);
  };

  return (
    <div className="table-section mb-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 border">Length</th>
            <th className="py-2 border">Width</th>
            <th className="py-2 border">Qty</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">
                <input
                  type="number"
                  name="length"
                  value={row.length}
                  onChange={(event) => handleChange(index, event)}
                  className="w-full border rounded px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  name="width"
                  value={row.width}
                  onChange={(event) => handleChange(index, event)}
                  className="w-full border rounded px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  name="qty"
                  value={row.qty}
                  onChange={(event) => handleChange(index, event)}
                  className="w-full border rounded px-2 py-1"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addRow}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Row
      </button>
    </div>
  );
};

export default TableSection;
