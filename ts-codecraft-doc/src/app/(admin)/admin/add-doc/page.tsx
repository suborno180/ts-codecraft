"use client";
import React, { useState, FormEvent, useEffect, useRef } from 'react';
import { AiOutlinePlus, AiOutlineMore } from 'react-icons/ai'; // Importing icons
import axios from 'axios'; // Import axios for API calls
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


interface Group {
  group: string; // Updated to reflect the API response structure
}

const AddDoc: React.FC = () => {
  const { status } = useSession()
  console.log(status);
  
  const route = useRouter()
  if (status === 'unauthenticated') {
    route.push('/auth/signin')
  }

  const [groupName, setGroupName] = useState<string>(''); // State to store the group name
  const [groups, setGroups] = useState<Group[]>([]); // State to store the array of groups
  const [error, setError] = useState<string>(''); // State to handle form validation errors
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null); // State to manage dropdown visibility

  const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown
  // Function to handle form submission
  const handleAddGroup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh
    if (groupName.trim()) {
      setGroups([...groups, { group: groupName }]); // Add new group to the array
      setGroupName(''); // Clear input field
      setError(''); // Clear any previous errors
    } else {
      setError('Group name cannot be empty.'); // Set error message
    }
  };

  // Function to handle dropdown toggle
  const handleDropdownToggle = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index); // Toggle dropdown visibility
  };

  // Function to handle delete action
  const handleDeleteGroup = (index: number) => {
    const updatedGroups = groups.filter((_, i) => i !== index); // Remove group from the array
    setGroups(updatedGroups); // Update state
    setDropdownIndex(null); // Close dropdown
  };

  // Fetch group data from the API
  const fetchGroups = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/doc?groups=true'); // API call
      if (response.data.success) {
        setGroups(response.data.data); // Set groups from API response
      } else {
        setError(response.data.message); // Handle any error messages
      }
    } catch (err) {
      setError('Failed to fetch groups.'); // Handle fetch error
      console.error(err); // Log error to console
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownIndex(null); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Add event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup event listener on unmount
    };
  }, [dropdownRef]);

  // Fetch groups on component mount
  useEffect(() => {
    fetchGroups(); // Call the fetchGroups function
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Create Document Groups</h2>
      <form onSubmit={handleAddGroup} className="mb-6 flex items-center justify-center">
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)} // Update input value
          placeholder="Enter group name"
          className={`border border-gray-300 p-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow transition duration-200 ${error ? 'border-red-500' : ''
            }`}
          required
        />
        <button type="submit" className="bg-green-500 text-white p-3 rounded-r-md hover:bg-green-600 transition duration-200 flex items-center">
          <AiOutlinePlus className="mr-1" /> {/* Icon for the button */}
          Add Group
        </button>
      </form>
      {error && <p className="text-red-500 text-center">{error}</p>} {/* Error message */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {groups.map((group, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg p-4 flex flex-col justify-between shadow-lg transform transition duration-200 hover:scale-105 hover:shadow-xl relative"
          >
            <h3 className="text-xl font-semibold">{group.group}</h3>
            {/* Three-dot icon for edit/delete */}
            <button
              onClick={() => handleDropdownToggle(index)}
              className="absolute top-3 right-3 text-white hover:text-gray-300"
            >
              <AiOutlineMore />
            </button>
            {/* Dropdown Menu */}
            {dropdownIndex === index && (
              <div ref={dropdownRef} className="absolute top-10 right-3 bg-white text-gray-800 rounded-md shadow-lg z-10">
                <button className="block px-4 py-2 hover:bg-gray-200 w-full text-left">Edit</button>
                <button
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  onClick={() => handleDeleteGroup(index)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddDoc;