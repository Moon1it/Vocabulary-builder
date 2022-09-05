import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Authentication from './components/Authentication';

interface AuthenticationData {
    idUser: number;
    beAuthorized: boolean;
}

function App() {
    return (
        <>
            {/* <Header />
            <Main /> */}
            <Authentication />
        </>
    );
}

export default App;
