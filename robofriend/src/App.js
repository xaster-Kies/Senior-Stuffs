import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robot';
import SearchBox from './SearchBox';



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange(event) {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    }


    render() {
        
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchchange={this.onSearchchange}/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    }
}
    



export default App;