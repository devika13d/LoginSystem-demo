import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';

function Registr() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmpassword: ''
  });
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const navigate=useNavigate()

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    if (field === 'username') {
      const isValid = /^[A-Za-z]+$/.test(value);
      setIsUsernameValid(isValid);
    }
    setFormData({ ...formData, [field]: value });

    if (field === 'password' && formData.confirmpassword && value !== formData.confirmpassword) {
      setPasswordMatchError('Passwords do not match');
    } else if (field === 'confirmpassword' && formData.password && value !== formData.password) {
      setPasswordMatchError('Passwords do not match');
    } else {
      setPasswordMatchError('');
    }
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false || formData.password !== formData.confirmpassword) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      e.preventDefault();
      console.log('Form submitted:', formData);

      setFormData({
        username: '',
        password: '',
        confirmpassword: ''
      });
      setValidated(false);
      axios.post('http://localhost:5000/users', formData).then(result =>{ 
        alert("Account Created Successfully!!");
        navigate('/login')
    }).catch(err => console.log(err))
    }
  };


  return (
    <>
      <div className=' justify-content-center align-items-center w-100 mt-5 '>
        <div className='bg-light p-5 rounded me-5' style={{ width: '500px' }} id='tr'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h2 className='text-center'>SIGN UP</h2>
            <Row className="mb-3 ms-5">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label className='mt-5 ms-2'>User name:</Form.Label>
                <Form.Control required type="text" placeholder="First name" pattern="[A-Za-z]+"
                  title="Enter alphabets only"
                  value={formData.username}
                  onChange={(e) => handleInputChange(e, 'username')} />
                {!isUsernameValid && (
                  <div className="text-danger mt-1">Enter alphabets only for the username</div>
                )}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} className='mb-3'>
                <Form.Label className='text-light mb-3'>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange(e, 'password')}

                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className='text-light mb-3' required type="text">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmpassword}
                  onChange={(e) => handleInputChange(e, 'confirmpassword')}
                />
                {passwordMatchError && (
                  <div className="text-danger">{passwordMatchError}</div>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-7 ms-5"></Row>
            <Form.Group className="mb-7 ms-5">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" className='me-5 mt-4' id='b'>
              Submit form
            </Button>
          </Form>
          <h6 className='mt-4 p-4'>
            If you have an account, please{' '}
            <Link to={'/login'} style={{ textDecoration: 'none' }}>
              Login now
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
}

export default Registr;
