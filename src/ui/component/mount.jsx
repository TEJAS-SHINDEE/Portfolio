import React from 'react'
// import { Component } from 'react'

export class Mount extends React.Component   {
    constructor(props)   {
        super(props);
        console.log('constructor');
        this.state = { message : props.message};
    };

    render()    {
        console.log('render');
        return (
        <>  
            <h1>{this.props.message}</h1>
        </>
        );
    }

    componentDidMount() {
        console.log("compo has been mounted");
    }
};

