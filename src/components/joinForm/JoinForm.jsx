import React, { useState } from 'react';
import { useHMSActions } from '@100mslive/react-sdk';
import getToken from '../../endpoints/getToken';
import '@fontsource/roboto/300.css';
 import './joinform.css';




const JoinForm = () => {
    const hmsActions = useHMSActions();


    const [username, setUsername] = useState({ name: '' });
    const [role, setRole] = useState('');


    const handleUsernameChange = (e) => {
        setUsername((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }));
    };

    const handleRole = (e) => {
        setRole(e.target.value)
    }

    const JoinRoom = () => {
        getToken(username.name, role)
            .then((token) => {
                hmsActions.join({
                    userName: username.name,
                    authToken: token,
                    settings: {
                        isAudioMuted: true,
                        isVideoMuted: false,
                    },
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // submit function
    function handleSubmit(e) {
        e.preventDefault();
        JoinRoom();
    }


    return (
        <>  
    {/*    
            <div className='wrap-cont'>
            <div>
             <form className='form'>
                <div className='cont d-flex flex-column justify-content-center align-items-center py-3 my-20'>
                <div className="input">
                    <input
                        type='text'
                        name='name'
                        placeholder='Your name'
                        value={username.name}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className='role my-3'>
                    <select
                        id="role"
                        value={role}
                        onChange={handleRole}
                        width="10">
                        <option>select the role</option>
                        <option value='host'>Host</option>
                        <option value='guest'>Guest</option>
                    </select>
                </div>

                <br />
                <button
                    className='btn btn-info btn-cont'
                    onClick={handleSubmit}
                    type='submit'>
                    Join
                </button>
                </div>
            </form>
            </div>
            </div>
            <div className='contant'>

            </div>
            
            </div> */}
        <div className='login'>
        <div class="login-box">
        
        
        <form >

                 <input
                        type='text'
                        name='name'
                        placeholder='Your name'
                        value={username.name}
                        onChange={handleUsernameChange}
                    />
                <select 
                        value={role}
                        onChange={handleRole}
                        class="users"
                         name="role">
                <option>Select role</option>
                <option value="host">Host</option>
                <option value="guest">Guest</option>
            </select><br/><br/>
            <button
                    className='btn btn-info btn-cont'
                    onClick={handleSubmit}
                    type='submit'>
                    Join
                </button>

        </form>

    </div>
    </div>
        </>
    )
}





export default JoinForm