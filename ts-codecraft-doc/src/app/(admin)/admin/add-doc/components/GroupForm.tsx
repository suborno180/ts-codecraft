// src/app/admin/dashboard/components/GroupForm.tsx

import React, { useState } from 'react';

interface GroupFormProps {
  onSubmit: (data: any) => void;
  existingData?: any;
}

const GroupForm: React.FC<GroupFormProps> = ({ onSubmit, existingData }) => {
  const [groupName, setGroupName] = useState(existingData?.groupName || '');
  const [groupDescription, setGroupDescription] = useState(existingData?.groupDescription || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ groupName, groupDescription });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        className="border rounded p-2 w-full"
        required
      />
      <textarea
        placeholder="Group Description"
        value={groupDescription}
        onChange={(e) => setGroupDescription(e.target.value)}
        className="border rounded p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {existingData ? 'Update Group' : 'Add Group'}
      </button>
    </form>
  );
};

export default GroupForm;
