import { useState } from 'react';
import axios from '../axios.js';
import { useNavigate, Link } from 'react-router-dom';
import '../form.css';
import img from '../Assets/Images/newlogin.png';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/register', formData);
      console.log(response.data);
      // Handle success
      setTimeout(() => {
        navigate('/userprofilepage');
      }, 2000);
    } catch (error) {
      console.error('There was an error registering the user!', error);
      // Handle error
    }
  };

  return (
    
    <div className="register-card">
      <div className="left">
        <div className='register-img'>
        <img src={img} />
        </div>  
        </div>


        <div className="right">
        <div className="register-form">
        <h1 className="title-register">Register</h1>
        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
               Email
             </label>
             <input
               type="email"
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               required
               className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
             />
           </div>
           <div>
             <label htmlFor="password" className="block text-gray-700 font-bold mb-2 ">
               Password
             </label>
             <input
               type="password"
               id="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               required
               className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
             />
           </div>
           <div>
           <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
               Date of Birth
             </label>
             <input
               type="date"
               id="dateOfBirth"
               name="dateOfBirth"
               value={formData.dateOfBirth}
               onChange={handleChange}
               required
               className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
             />
           </div>
           <div>
             <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
               Gender
             </label>
             <select
               id="gender"
             name="gender"
             value={formData.gender}
               onChange={handleChange}
               required
               className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
             >
               <option value="">Select Gender</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Other">Other</option>
             </select>
           </div>
           <div>
             <label htmlFor="contactNumber" className="block text-gray-700 font-bold mb-2">
               Contact Number
             </label>
             <input
               type="text"
               id="contactNumber"
               name="contactNumber"
               value={formData.contactNumber}
               onChange={handleChange}
               required
               className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
             />
           </div>
                {/* <a href="#" className="forgot-password">
                Forgot password?
                </a> */}
              <button type="submit" className="btn">
                Register
              </button>
            </form>
            <div className="register-link">
              <span>Already have an account? </span>
              <Link to="/login" className="link-underline">
              Login here
            </Link>
            </div>
        </div>  
      </div>
      </div>
  );
};

export default RegisterForm;

{/* // <div className="min-h-screen flex items-center mt-20 justify-center bg-gray-100 form-card">
    //   <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
    //     <h2 className="text-2xl font-bold mb-6 text-center login-form">Register</h2>
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div>
    //         <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
    //           Username
    //         </label>
    //         <input */}
    {/* //           type="text"
    //           id="username"
    //           name="username"
    //           value={formData.username}
    //           onChange={handleChange}
    //           required
    //           className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           required
    //           className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           value={formData.password}
    //           onChange={handleChange}
    //           required
    //           className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
    //           Date of Birth
    //         </label>
    //         <input
    //           type="date"
    //           id="dateOfBirth"
    //           name="dateOfBirth"
    //           value={formData.dateOfBirth}
    //           onChange={handleChange}
    //           required
    //           className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
    //           Gender
    //         </label>
    //         <select
    //           id="gender"
    //           name="gender"
    //           value={formData.gender}
    //           onChange={handleChange}
    //           required
    //           className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
    //         >
    //           <option value="">Select Gender</option>
    //           <option value="Male">Male</option>
    //           <option value="Female">Female</option>
    //           <option value="Other">Other</option>
    //         </select>
    //       </div>
    //       <div>
    //         <label htmlFor="contactNumber" className="block text-gray-700 font-bold mb-2">
    //           Contact Number
    //         </label>
    //         <input
    //           type="text"
    //           id="contactNumber"
    //           name="contactNumber"
    //           value={formData.contactNumber}
    //           onChange={handleChange}
    //           required
    //           className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
    //       >
    //         Register
    //       </button>
    //     </form>
    //   </div>
    // </div> */}