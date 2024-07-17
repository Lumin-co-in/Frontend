import React, { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import qrcode from "../Assets/Images/qrcode.png";

const PaymentForm = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get('courseId');
  const title = queryParams.get('title');

  const [paymentData, setpaymentData] = useState({
    email: '',
    mobile: '',
    transactionId: '',
    courseId: courseId,
    courseName: title,
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpaymentData({ ...paymentData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formData = new FormData();
      formData.append('entry.2045910219', paymentData.email); // Replace entry id with actual field id
      formData.append('entry.119183208', paymentData.mobile);
      formData.append('entry.1418791824', paymentData.transactionId);
      formData.append('entry.1980892240', paymentData.courseId);
      formData.append('entry.1020108503', paymentData.courseName);

      // Make POST request to Google Form endpoint
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLScTo8dR46TwvJrK2Os5H2o2chf53fI7iuEdgXlGthtjF4bp2w/formResponse', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      });
      if (response.ok) {
        setSuccess('Payment submitted successfully!');
        setTimeout(() => {
          alert('Payment submitted successfully!');
        }, 2000);
      } else {
        setError('Error submitting payment');
      }
    } catch (error) {
      setError(error.message || 'Error submitting payment');
    } finally {
      setLoading(false);
    }
  };

  console.log("Course ID:", paymentData.courseId); // Check courseId in console
  console.log("Title:", paymentData.courseName); 
  return (
    <div className="container">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}
      <div className="payment-section">
        <img src={qrcode} alt="QR Code" className="qr-code" />
        <p>OR</p>
        <p className="upi-id">UPI ID: lumin.co.in@axl</p>
        <p className="instructions">
          Scan the QR code or pay the required amount on the given UPI ID.
          <br />
          After paying, fill out the details in the form provided.
          <br />
          You will be given access to course material through your email ID that you have filled in the form.
          <br />
          The confirmation will be done within 2 hours.
        </p>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={paymentData.email}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No."
            onChange={handleChange}
            value={paymentData.mobile}
            required
          />
          <input
            type="text"
            name="transactionId"
            placeholder="Last 5 digits of Transaction ID"
            onChange={handleChange}
            value={paymentData.transactionId}
            required
          />
          <input
            type="text"
            name="courseId"
            value={paymentData?.courseId}
            onChange={handleChange}
            disabled
          />
          <input
            type="text"
            name="courseName"
            value={paymentData?.courseName}
            onChange={handleChange}
            disabled
          />
          <button
            type="submit"
            className="mt-4 w-30 bg-blue-500 text-white py-2 px-4 rounded-md cta-btn"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
