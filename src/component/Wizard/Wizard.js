import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'

// state{
//     name: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: 0
// }

// methods:
// handle input change 
// post new house to database

export default class Wizard extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        console.log(this.state)
        this.addHouse = this.addHouse.bind(this)
    }

    addHouse(){
        axios.post('/api/houses', {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        })
        .then(res => {
            // this.setState({
            //     houses: res.data
            // })
            this.props.history.push('/')
        })
        
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                Wizard
                <Link to='/'><button>Cancel</button></Link>
                <input type="text" placeholder="Property Name" 
                onChange={e => this.setState({name: e.target.value})}/>
                <input type="text" placeholder="Address" 
                onChange={e => this.setState({address: e.target.value})}/>
                <input type="text" placeholder="City" 
                onChange={e => this.setState({city: e.target.value})}/>
                <input type="text" placeholder="State" 
                onChange={e => this.setState({state: e.target.value})}/>
                <input type="text" placeholder="Zip" 
                onChange={e => this.setState({zip: e.target.value})}/>
                <button onClick={this.addHouse}>Complete</button>
            </div>
        )
    }
}
