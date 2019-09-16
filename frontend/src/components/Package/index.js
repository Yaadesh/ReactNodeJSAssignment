import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default class Package
 extends Component {

    constructor(props){
        super(props);
        this.state={
            selectedSourceValue : null,
            packages:[{
                id:1,
                source:"Bangalore",
                destinations:[{
                    id:1,
                    place:"Chennai",
                },
                {
                    id:2,
                    place:"Mysore",
                },

            ]
            },
        
            {
                id:2,
                source:"Delhi",
                destinations:[{
                    id:1,
                    place:"Agra",
                },
                {
                    id:2,
                    place:"Chandigarh",
                },

            ]
            }]
        }
    }

    handleChangeSource(event){
        var value = event.target.value;
        this.setState({
            selectedSourceValue:event.target.value          
          },() => { console.log('new state', this.state); });


/*
        this.setState({
            selectedSourceIndex:event.target.value          
          });

          console.log("index");
          console.log(this.state)
          */

    }
    
    render() {
        return (
            <div>

<div>
        <select className="browser-default custom-select"
        onChange={this.handleChangeSource.bind(this)}
        >

            {this.state.packages.map(function(item, idx){
                return (<option  value={item.source}>{item.source}</option>)
            })}

        </select>

        <select className="browser-default custom-select"
        onChange={this.handleChangeSource.bind(this)}
        >


{this.state.packages.filter(function (item) {
    return item.source == this.state.selectedSourceValue;
  }).destinations
  .map(function(item, idx){
    return (<option  value={item.source}>{item.source}</option>)
})}

        </select>
        

      </div>

            </div>
            
        );
    }
}