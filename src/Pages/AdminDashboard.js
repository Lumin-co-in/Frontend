import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import UploadVideo from './UploadVideo';
import AddUserToCourse from '../Components/AddUserToCourse.js';
import CreateCourse from '../Components/CreateCourses.js';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          
          {/* <li><Link to="/admin/videos/upload">Upload Video</Link></li> */}
          <li><Link to="/admin/courses/assign-course">Add User to Course</Link></li>
          <li><Link to="/admin/courses/create">Add User to Course</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <Routes>
        
        {/* <Route exact path="/admin/videos/upload" component={UploadVideo} /> */}
        <Route exact path="/admin/courses/assign-course" component={AddUserToCourse} />
        <Route exact path="/admin/courses/create" component={CreateCourse} />
        {/* Add more routes for other admin functionalities */}
      </Routes>
    </div>
  );
};

export default AdminDashboard;


// // src/Pages/AdminDashboard.js
// import React, { useEffect, useState } from 'react';
// import axios from '../axios.js';
// import "../index.css";

// const AdminDashboard = () => {
//   const [data, setData] = useState([]);
//   const [data2, setData2] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const [response1, response2] = await Promise.all([
//             axios.get('/admin/courses/assign-course'),
//             axios.get('/admin/courses/create'),
//           ]);// Replace with your actual endpoint
//         setData(response1.data);
//         setData2(response2.data);
//       } catch (error) {
//         console.error("Error fetching admin data", error);
//       }finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard</h1>
//       {/* Render admin data or components */}

//       <div>
//       <h1>Data from API 1</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//       <h1>Data from API 2</h1>
//       <pre>{JSON.stringify(data2, null, 2)}</pre>
      
//     </div>
//       {/* {data.map(item => (
//         <div key={item.id}>
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//         </div>
//       ))} */}
//     </div>
//   );
// };

// export default AdminDashboard;
