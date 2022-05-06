import CardList from '../components/CardList';
import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, []);


    function onSearchChange(event) {
        setSearchfield(event.target.value)
    }


    const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

    return !robots.length ? 
        <h1 className='tc'>Loading...</h1> : 
        (
        <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
        );
}

export default App;