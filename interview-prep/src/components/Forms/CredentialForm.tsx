import React, { useState } from "react";

interface CredentialProps {
    // username: string,
    // password: string,
    handleUsernameChange: (value: string) => void,
    handlePasswordChange: (value: string) => void
}

function CredentialForm({ handleUsernameChange, handlePasswordChange }: CredentialProps): React.ReactElement {

    return (
        <>
            <label htmlFor="fname">First name:</label><br></br>
            <input type="text" name="username" onChange={(e) => handleUsernameChange(e.target.value)} ></input>
            <br></br><br></br>
            <label htmlFor="password">Password:</label><br></br>
            <input type="password" name="password" onChange={(e) => handlePasswordChange(e.target.value)} ></input>
        </>
    )
}

export default CredentialForm