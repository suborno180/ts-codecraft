// src/app/admin/dashboard/components/GroupList.tsx

import React from 'react';

interface GroupListProps {
  groups: any[];
  onEdit: (groupData: any) => void;
  onDelete: (groupName: string) => void;
}

const GroupList: React.FC<GroupListProps> = ({ groups, onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">Groups</h2>
      <ul className="space-y-2">
        {groups.map((group) => (
          <li key={group.groupName} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{group.groupName}</h3>
              <p>{group.groupDescription}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => onEdit(group)} className="bg-yellow-500 text-white p-1 rounded">
                Edit
              </button>
              <button onClick={() => onDelete(group.groupName)} className="bg-red-500 text-white p-1 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
