import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>About us.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus consectetur odit voluptatibus numquam placeat dolorem provident optio explicabo eaque fugit qui harum deserunt in ratione, quidem aliquid, veniam, consequatur dolor?</p>
            <button className="btn" onClick={() => history.push('/')}>Back to tasks.</button>
        </>
    )
}