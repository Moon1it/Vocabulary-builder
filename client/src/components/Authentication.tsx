import * as React from 'react';
import '../components/Authentication.css';

export default function Authentication() {
    return (
        <>
            <div className='authentication'>
                <div className='authentication-form'>
                    <h1>
                        Sign In<span>to your account</span>
                    </h1>
                    <div>
                        <h3>Email</h3>
                        <input type='text' />
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type='password' />
                    </div>
                    <button>Sign In</button>
                </div>
            </div>
        </>
    );
}
