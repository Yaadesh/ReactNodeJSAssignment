import React, { Component ,Button} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
//import Button from 'react-bootstrap/Button'
import axios from 'axios';



export default class Package
 extends Component {

    state={
        selectedSource:'',
        packages:[],
        destinations:[]
    };

    getPackages() {
        if(this.state.packages.length==0)
        axios
			.get('http://localhost:5000/api/packages/')
			.then((res) => this.setState({ packages: res.data }));
    }

    setSource(event){
        this.setState({
            selectedSource:event.target.value
        })
    }
    getDestinations(event){

            this.setSource(event.target.value);
            axios
			.get('http://localhost:5000/api/destination/',{value:this.state})
			.then((res) => this.setState({ destinations: res.data }),(res)=>{console.log(res.data)});
    }
    
  
    render() {
        return (
            <div>

       <div>
        <select className="browser-default custom-select" onChange={this.getDestinations.bind(this)} onClick={this.getPackages.bind(this)}>  

            {this.state.packages.map(function(item, idx){
                return (<option key={idx} value={idx}>{item.source}</option>)
            })}

        </select>

        <select className="browser-default custom-select" >  

        {this.state.destinations.map(function(item, idx){
            return (<option key={idx} value={idx}>{item.source}</option>)
        })}

        </select>

        

      </div>

            </div>
            
        );
    }
}