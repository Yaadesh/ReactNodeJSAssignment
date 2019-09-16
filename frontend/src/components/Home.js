import React, { Component } from 'react';

import CenterTabContainer from './CenterTabContainer/index.js'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>Home Component</div>

<div style={{
                position: 'absolute', left: '10%', top: '30%', right:'10%',
                transform: 'translate(-50%, -50%)'}}>
<CenterTabContainer ></CenterTabContainer>
</div>
            </div>
            
        );
    }
}