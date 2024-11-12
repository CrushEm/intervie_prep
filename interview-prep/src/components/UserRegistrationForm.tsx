import React, { useState } from "react";

import CredentialForm from "./Forms/CredentialForm";
import HandleEmail from "./Forms/HandleEmail";
import useSubmitForm from "./Hooks/UseSubmitForm";


function UserRegistrationForm(): React.ReactElement {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const handleUsernameChange = (value: string) => {
        setUsername(value);
        setUsernameError(value.length >= 3 && value.length <= 15 ? null : 'Username must be 3-15 characters');
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        setPasswordError(value.length >= 8 && /\d/.test(value) ? null : 'Password must be at least 8 characters and contain a number');
    };

    //

    const { loading, error, success, submitForm } = useSubmitForm('https://example.com/api', { username, password });

    return (
        <>
            {success && !loading && <p style={{ color: 'green' }} >Form Submitted!</p>}
            {usernameError && <p style={{ color: 'red' }}>Username Error: {usernameError}</p>}
            {passwordError && <p style={{ color: 'red' }}>Password Error: {passwordError}</p>}
            <CredentialForm
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
            />
            <HandleEmail />
            <br></br><br></br>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }} >{error}</p>}
            {!loading && <button onClick={submitForm}>Submit</button>}
        </>
    );
}

export default UserRegistrationForm