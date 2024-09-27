// src/app/admin/dashboard/components/FunctionForm.tsx

import React, { useState } from 'react';

interface FunctionFormProps {
  onSubmit: (data: any) => void;
  existingData?: any; // For editing existing functions
}

const FunctionForm: React.FC<FunctionFormProps> = ({ onSubmit, existingData }) => {
  const [functionName, setFunctionName] = useState(existingData?.functionName || '');
  const [signature, setSignature] = useState(existingData?.signature || '');
  const [description, setDescription] = useState(existingData?.description || '');
  const [parameters, setParameters] = useState(existingData?.parameters || []);
  const [returns, setReturns] = useState(existingData?.returns || {});
  const [exampleCode, setExampleCode] = useState(existingData?.example?.code || '');
  const [exampleOutput, setExampleOutput] = useState(existingData?.example?.output || '');
  const [seoKeywords, setSeoKeywords] = useState(existingData?.seoKeywords || []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      functionName,
      signature,
      description,
      parameters,
      returns,
      example: { code: exampleCode, output: exampleOutput },
      seoKeywords,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Function Name"
        value={functionName}
        onChange={(e) => setFunctionName(e.target.value)}
        className="border rounded p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Signature"
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
        className="border rounded p-2 w-full"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded p-2 w-full"
        required
      />
      {/* Additional fields for parameters, returns, example, and SEO keywords can be added here */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {existingData ? 'Update Function' : 'Add Function'}
      </button>
    </form>
  );
};

export default FunctionForm;
