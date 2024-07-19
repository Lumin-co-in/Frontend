import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [instructor, setInstructor] = useState('');
  const [courseId, setCourseId] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/admin/courses/create', {
        title, courseId, instructor, price, img, contents
      });
      console.log(response.data);
      // Handle success, reset form, etc.
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="courseid" value={courseId} onChange={(e) => setCourseId(e.target.value)} required />
        <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="image" alt="instructor" placeholder="image" value={img} onChange={(e) => setImg(e.target.value)} required />
        <input type="text" placeholder="Instructor ID" value={instructor} onChange={(e) => setInstructor(e.target.value)} required />
        <textarea placeholder="Contents" value={contents} onChange={(e) => setContents(e.target.value)}></textarea>
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
