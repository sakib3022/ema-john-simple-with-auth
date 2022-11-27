import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const About = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>Secret about us!!! {user?.email}</h2>
        </div>
    );
};

export default About;