// src/components/ui/DocumentForm.tsx
import React from "react";

interface DocumentFormProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  functionalityGroup: string;
  setFunctionalityGroup: React.Dispatch<React.SetStateAction<string>>;
}

const DocumentForm: React.FC<DocumentFormProps> = ({
  title,
  setTitle,
  description,
  setDescription,
  functionalityGroup,
  setFunctionalityGroup,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Document Title"
        className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
      />
      <label className="block text-gray-700">Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Document Description"
        className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
      />
      <label className="block text-gray-700">Functionality Group</label>
      <input
        type="text"
        value={functionalityGroup}
        onChange={(e) => setFunctionalityGroup(e.target.value)}
        placeholder="Functionality Group"
        className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
      />
    </div>
  );
};

export default DocumentForm;
