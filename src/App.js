import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import Cardlist from './Cardlist';
import Scroll from './Scroll';
import './App.css';

function App() {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {return response.json();})
    //         .then(users => {this.setState({ robots: users })})
    // }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)});
    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })

    return (
        <div className="tc">
            <h1 className="f1">ROBOFRIENDS</h1>
            <button onClick = {() => setCount(count+1)}>Why am I here... just to be clicked</button>
            <h3 className="white">{`${count}`}</h3>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <Cardlist robots={filteredRobots} />
            </Scroll>
        </div>
    );

}

export default App;