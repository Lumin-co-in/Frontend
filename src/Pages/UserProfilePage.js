import { useEffect, useState } from 'react';
import axios from '../axios.js';
import userpic from '../Assets/Images/placeholder.png';

function UserInfo() {
  const [userData, setUserData] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        console.log('Fetching user info');
        const response = await axios.get('/user/info');
        console.log('user info', response.data);
        setUserData(response.data);

        const response2 = await axios.get('/user/courses/purchased');
        console.log('courses enrolled', response2.data);
        setCourses(response2.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <div className='container1'>
      <div className='left'>
        <img className="profile-image" src={userpic} alt='user photo' />
      </div>
      <div className='right'>
        <div className='profile-details'>
          <h2 className='uinfo'>User Information</h2>
          <div className='profile-item'>
            <p className='profile-label'>Name</p>
            <p className='profile-value'>{userData?.user?.username}</p>
          </div>
          <div className='profile-item'>
            <p className='profile-label'>Email</p>
            <p className='profile-value'>{userData?.user?.email}</p>
          </div>
          <div className='profile-item'>
            <p className='profile-label'>Phone number</p>
            <p className='profile-value'>{userData?.user?.contactNumber}</p>
          </div>
          <div className='profile-item'>
            <p className='profile-label'>Courses Enrolled</p>
            <p className='profile-value'>
            {courses.length === 0 ? "No courses enrolled" : (
                <ul>
                  {courses.map(course => (
                    <li key={course.id}>{course.title}</li>
                  ))}
                </ul>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
