// src/components/ui/KeywordInput.tsx
import React, { useState } from "react";

interface KeywordInputProps {
  keywords: string[];
  setKeywords: React.Dispatch<React.SetStateAction<string[]>>;
}

const KeywordInput: React.FC<KeywordInputProps> = ({ keywords, setKeywords }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" && inputValue.trim()) {
      e.preventDefault();
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">SEO Keywords</label>
      <div className="flex flex-wrap mt-2 mb-2">
        {keywords.map((keyword, index) => (
          <div key={index} className="bg-yellow-200 text-black rounded-full px-3 py-1 mr-2 mb-2 flex items-center">
            {keyword}
            <button className="ml-2 text-red-500" onClick={() => handleRemoveKeyword(keyword)}>x</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Tab to add"
        className="border border-gray-300 rounded px-3 py-2 w-full"
      />
    </div>
  );
};

export default KeywordInput;
