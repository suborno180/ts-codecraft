// src/components/ui/SEOKeywordsInput.tsx
import React, { useState } from "react";

interface SEOKeywordsInputProps {
  seoKeywords: string[];
  setSeoKeywords: React.Dispatch<React.SetStateAction<string[]>>;
}

const SEOKeywordsInput: React.FC<SEOKeywordsInputProps> = ({
  seoKeywords,
  setSeoKeywords,
}) => {
  const [keyword, setKeyword] = useState("");

  const handleAddKeyword = (e: React.KeyboardEvent) => {
    if (e.key === "Tab" && keyword) {
      e.preventDefault();
      setSeoKeywords([...seoKeywords, keyword]);
      setKeyword("");
    }
  };

  const handleRemoveKeyword = (index: number) => {
    const newKeywords = seoKeywords.filter((_, i) => i !== index);
    setSeoKeywords(newKeywords);
  };

  return (
    <div className="mb-4">
      <h5 className="font-bold">SEO Keywords</h5>
      <input
        type="text"
        placeholder="Type a keyword and press Tab"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleAddKeyword}
        className="border rounded p-2 w-full mb-2"
      />
      <div className="flex flex-wrap">
        {seoKeywords.map((kw, index) => (
          <span
            key={index}
            className="bg-gray-300 rounded px-2 py-1 mr-2 mb-2 flex items-center"
          >
            {kw}{" "}
            <button
              onClick={() => handleRemoveKeyword(index)}
              className="ml-2 text-red-500"
            >
              x
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SEOKeywordsInput;
