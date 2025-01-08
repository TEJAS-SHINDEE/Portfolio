import React from 'react';

export class Update extends React.Component    {

    constructor(props)  {
        super(props);
        this.state = {
            message : props.initialValue,
        };
        console.log('constructor : initial setup');
    }

    shouldComponentUpdate() {
        
    }

    render()    {
        return (
            <h3>{this.props.message}</h3>
        );
    };

    componentDidUpdate()    {

    };

};