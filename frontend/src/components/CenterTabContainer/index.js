import React, { Component } from 'react';

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Paper from '@material-ui/core/Paper';


import './index.css'

import RoundTrip from '../RoundTrip/index.js'
import Package from '../Package/index2.js'

class CenterTabContainer extends React.Component {
    constructor() {
      super();
      this.state = { tabIndex: 0 ,packages:[]};
    }

    render() {
      return (
       
        <div>
          
         <Tabs>
      <TabList>
        <Tab>RoundTrip</Tab>
        <Tab>Package</Tab>
        </TabList>
        
      <TabPanel>
        <RoundTrip/>
      </TabPanel>
      <TabPanel>
<Package />
      </TabPanel>
     
      
    </Tabs>
    
    </div>
    
  
      );
    }
  }

  

  export default CenterTabContainer;