import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const history = useHistory();

    let enterPress = (event) =>  {

        if(!name || !room) {
            return null
        }
        event.preventdefault()
        history.push(`/chat?name=${name}&room=${room}`)
    }

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className='heading'>Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} onKeyPress={event => event.key === "Enter" ? enterPress() : null} /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value) } onKeyPress={event => event.key === "Enter" ? enterPress() : null} /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    )
};

export default Join;