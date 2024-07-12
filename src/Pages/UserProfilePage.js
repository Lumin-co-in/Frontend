import { useEffect, useState } from 'react';
import axios from '../axios.js';

function UserInfo() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        console.log('Fetching user info');
        const response = await axios.get('/user/info');
        console.log('user info', response.data);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, [userData]);

  return (
    <div>
      <h1 className=" text-3xl font-semibold">User Data </h1>
      {<pre>{JSON.stringify(userData, null, 2)}</pre>}

      <div>
        <h1>
          <strong>Name: </strong>
          {userData?.user?.username}
        </h1>
        <h1>
          <strong>Email: </strong>
          {userData?.user?.email}
        </h1>
        <h1>
          <strong>Contact Number: </strong>
          {userData?.user?.contactNumber}
        </h1>
      </div>
    </div>
  );
}

export default UserInfo;
