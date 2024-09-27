// src/components/ui/ParameterForm.tsx
import React, { useState } from "react";

interface ParameterFormProps {
  parameters: any[];
  setParameters: React.Dispatch<React.SetStateAction<any[]>>;
}

const ParameterForm: React.FC<ParameterFormProps> = ({ parameters, setParameters }) => {
  const [paramName, setParamName] = useState("");
  const [paramType, setParamType] = useState("");
  const [paramDescription, setParamDescription] = useState("");

  const handleAddParameter = () => {
    const newParameter = {
      name: paramName,
      type: paramType,
      description: paramDescription,
    };
    setParameters([...parameters, newParameter]);

    // Clear fields after adding
    setParamName("");
    setParamType("");
    setParamDescription("");
  };

  return (
    <div className="mb-4">
      <h5 className="font-bold">Add Parameter</h5>
      <input
        type="text"
        placeholder="Parameter Name"
        value={paramName}
        onChange={(e) => setParamName(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Parameter Type"
        value={paramType}
        onChange={(e) => setParamType(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <textarea
        placeholder="Parameter Description"
        value={paramDescription}
        onChange={(e) => setParamDescription(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <button
        onClick={handleAddParameter}
        className="bg-green-500 text-white rounded px-4 py-2 mt-2"
      >
        Add Parameter
      </button>
    </div>
  );
};

export default ParameterForm;
