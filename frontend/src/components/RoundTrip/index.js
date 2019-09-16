import React, { Component } from 'react';

import 'date-fns';

import TextField from '@material-ui/core/TextField';
import {KeyboardDatePicker,  MuiPickersUtilsProvider} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

//import DatePicker from 'material-ui/DatePicker'

import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';


export default class RoundTrip extends Component {


    constructor(props) {
        super(props);
        this.state = {
          source:'',
          destination:'',
          selectedDate: Date.now()//new Date("Fri Oct 20 2019 16:50:33 GMT+0100 (BST)")
        };
      }
   


    handleDateChange(date) {
        console.log("Yay")
        console.log(date)
        
        this.setState({
            selectedDate:date
            
          });
          

    }

    handleSourceChange(event){
      this.setState({
        source:event.target.value
      })
    }

    handleDestinationChange(event){
      this.setState({
        destination:event.target.value
      })
    }

    handleButtonClick(){
      console.log(this.state)

      axios
			.post('http://localhost:5000/api/destination/',{value:this.state})
			.then((res) => this.setState({ destinations: res.data }),(res)=>{console.log(res.data)});
    }
     

    
    render() {
        return (
            <div class="container">
                
                <Grid container justify="space-around">

                <div><TextField label= "Source"  onChange={this.handleSourceChange.bind(this)} placeholder="From"  InputLabelProps={{
          shrink: true
        }}/></div>
                <div><TextField  label="Destination"  onChange={this.handleDestinationChange.bind(this)} placeholder="To"   InputLabelProps={{
          shrink: true
        }}/></div>
                
                <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        value={this.state.selectedDate}
                        onChange={(e)=>this.handleDateChange(e)}
                        id="date-picker-inline"
                        label="Departure"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}/>
                </MuiPickersUtilsProvider>
                </div>
                <Button color="secondary" variant="contained" onClick = {this.handleButtonClick.bind(this)}>Submit</Button>
                </Grid>
                
            </div>
            
        );
    }
}