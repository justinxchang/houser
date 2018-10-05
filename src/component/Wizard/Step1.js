import React,  { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import {addHouse} from '../../ducks/reducer';

class WizardStepOne extends Component{


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
        const {addHouse} = this.props;
        return(
            <div>
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

function mapStateToProps(reduxstate){
    const {name, address, city, state, zip} = reduxstate;

    return {
        name, address, city, state, zip
    }
}

export default connect(mapStateToProps, {})