import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddUserToCourse = () => {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState('');

  useEffect(() => {
    const fetchUsersAndCourses = async () => {
      try {
        const usersResponse = await axios.get('/user/info'); // Replace with actual endpoint for fetching users
        const coursesResponse = await axios.get('/user/courses/all'); // Replace with actual endpoint for fetching courses
        setUsers(usersResponse.data);
        setCourses(coursesResponse.data);
      } catch (error) {
        console.error('Error fetching users and courses:', error);
      }
    };

    fetchUsersAndCourses();
  }, []);

  const handleUserChange = (e) => {
    setSelectedUserId(e.target.value);
  };

  const handleCourseChange = (e) => {
    setSelectedCourseId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedUserId || !selectedCourseId) {
      alert('Please select a user and a course');
      return;
    }

    try {
      // Make a POST request to your backend API to associate the user with the course
      const response = await axios.post('/user/courses/purchased', {
        userId: selectedUserId,
        courseId: selectedCourseId
      });

      alert('User added to course successfully');
      // Optionally clear selected user and course or update state
    } catch (error) {
      console.error('Error adding user to course:', error);
      alert('Error adding user to course');
    }
  };

  return (
    <div>
      <h2>Add User to Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select User:
          <select value={selectedUserId} onChange={handleUserChange} required>
            <option value="">Select a user</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>{user.username}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Select Course:
          <select value={selectedCourseId} onChange={handleCourseChange} required>
            <option value="">Select a course</option>
            {courses.map(course => (
              <option key={course._id} value={course._id}>{course.title}</option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Add User to Course</button>
      </form>
    </div>
  );
};

export default AddUserToCourse;
