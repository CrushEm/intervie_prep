import React, { useRef, useState } from "react";

function HandleEmail() {

  const emailRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState(false);

  const validateEmail = () => {
    const email = emailRef.current?.value;
    return email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = () => {
    if (validateEmail()) {
      setEmailError(false);  // Valid email, clear error
    } else {
      setEmailError(true);   // Invalid email, show error
    }
  };

  return (
    <>
    <br></br><br></br>
      <label htmlFor="fname">Email:</label><br></br>
      {emailError && <p style={{ color: 'red' }} >Email Error</p>}
      <input type="email" ref={emailRef} onChange={handleEmailChange} ></input>
    </>
  );
}

export default HandleEmail;
