// src/app/admin/dashboard/components/FunctionList.tsx

import React from 'react';

interface FunctionListProps {
  functions: any[];
  onEdit: (functionData: any) => void;
  onDelete: (functionName: string) => void;
}

const FunctionList: React.FC<FunctionListProps> = ({ functions, onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">Functions</h2>
      <ul className="space-y-2">
        {functions.map((fn) => (
          <li key={fn.functionName} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{fn.functionName}</h3>
              <p>{fn.description}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => onEdit(fn)} className="bg-yellow-500 text-white p-1 rounded">
                Edit
              </button>
              <button onClick={() => onDelete(fn.functionName)} className="bg-red-500 text-white p-1 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunctionList;
