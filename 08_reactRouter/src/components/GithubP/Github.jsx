import React,{useState} from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();
  const [userId,setUserId] = useState('');

  return (
    <div className="github-profile max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="profile-header md:flex">
        <img
          className="avatar h-48 w-full object-cover md:w-48 rounded-full"
          src={data.avatar_url}
          alt="Github avatar"
        />
        <div className="user-info p-8 flex flex-col justify-between">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {data.name ? data.name : 'Github User'}
            </h2>
            <p className="text-sm text-gray-500">Explore the world of {data.name || 'this mysterious developer'}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-indigo-600">Bio</h3>
            <p className="text-base font-medium text-gray-800">{data.bio || "No bio yet, but stay tuned!"}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-indigo-600">Location</h3>
            <p className="text-base font-medium text-gray-800">{data.location || "Location undisclosed (yet!)"}</p>
            <h3>I want to discover your github ? . Fill the username</h3>
            <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} />
            <a href={`/user/${userId}`}>Discover</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;