import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('User not found');
        }
        return res.json();
      })
      .then((userData) => {
        setData(userData);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  return (
    <div className="max-w-md mx-auto">
      {data ? (
        <div className="p-4 bg-white shadow-md rounded-md">
          <img
            className="h-48 w-full object-cover mb-4 rounded-full"
            src={data.avatar_url}
            alt="User avatar"
          />
          <h2 className="text-xl font-bold text-gray-800">{data.name || 'Name not found'}</h2>
          <p className="text-gray-600">{data.bio || 'No bio available'}</p>
          <p className="text-gray-600">Followers: {data.followers || 0}</p>
          <p className="text-gray-600">Following: {data.following || 0}</p>
          <p className="text-gray-600">Public Repos: {data.public_repos || 0}</p>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default User;
