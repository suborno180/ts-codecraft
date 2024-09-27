interface TextInputProps {
    label: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const TextInput = ({ label, value, placeholder, onChange }: TextInputProps) => (
    <div className="mb-4">
      <label className="text-lg font-medium mb-2 text-[#333]">{label}</label>
      <input
        type="text"
        className="border p-2 w-full rounded-lg border-[#00bd6d]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
  
  export default TextInput;
  