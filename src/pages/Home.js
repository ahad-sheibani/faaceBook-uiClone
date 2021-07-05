import React from 'react';
import 'boxicons'
import "../styles/app.css"
import NavBar from '../components/NavBar';
import Main from '../components/Main';


function Home(props) {
    return (
        <div className="bg-gray-100 dark:bg-dark-main max-w">
            <Main/>
        </div>
    );
}

export default Home;