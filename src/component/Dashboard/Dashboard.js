import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios'

// state {
//     houses:[]
// }

// methods:
// get all houses from database
// delete house from database


export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount(){
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse(id){
        axios.delete(`/api/houses/${id}`)
        .then(res => {
            this.setState({
                houses: res.data
            }) 
        })
    }

    render(){
        let houses = this.state.houses.map((house, i) => {
            return (
                <div className="house" key={i}>
                    <div><House name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip} deleteHouse={() => this.deleteHouse(house.id)}/></div>
                </div>
                
            )
        })
        return(
            <div>
                Dashboard
                <Link to='/wizard'><button>Add New Property</button></Link>
                {houses}
            </div>
        )
    }
}