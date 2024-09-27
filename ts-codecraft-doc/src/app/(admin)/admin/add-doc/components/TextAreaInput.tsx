interface TextAreaInputProps {
    label: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  }
  
  const TextAreaInput = ({ label, value, placeholder, onChange }: TextAreaInputProps) => (
    <div className="mb-4">
      <label className="text-lg font-medium mb-2 text-[#333]">{label}</label> // Change to dark gray or black
      <textarea
        className="border p-2 w-full rounded-lg border-[#00bd6d]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
  
  export default TextAreaInput;
  