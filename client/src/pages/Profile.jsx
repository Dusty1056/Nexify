import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Navbar with Home button */}
      <div className='flex items-center justify-between p-4 bg-white shadow-md'>
        <button
          onClick={() => navigate("/dashboard")}
          className='px-4 py-2 text-blue-600 font-semibold'
        >
          Back
        </button>
      </div>

      {/* Profile Content */}
      <div className='flex flex-col items-center p-6'>
        {/* User Avatar */}
        <div className='w-60 h-60 rounded-full bg-gray-200 flex items-center justify-center'>
          <span className='text-9xl text-gray-500'>
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </span>
        </div>

        {/* User Information */}
        <div className='mt-6 w-full max-w-md space-y-4'>
          <div className='flex justify-between'>
            <div>
              <p className='font-semibold text-xl'>Full Name</p>
              <p className='text-gray-600 text-xl'>{user?.name || "N/A"}</p>
            </div>
            <div>
              <p className='font-semibold text-xl'>Role</p>
              <p className='text-gray-600 text-xl'>{user?.role || "N/A"}</p>
            </div>
          </div>

          <div className='flex justify-between'>
          <div>
            <p className='font-semibold text-xl'>Email</p>
            <p className='text-gray-600 text-xl'>{user?.email || "N/A"}</p>
          </div>

          <div>
            <p className='font-semibold text-xl'>Title</p>
            <p className='text-gray-600 text-xl'>{user?.title || "N/A"}</p>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
