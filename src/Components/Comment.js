import React from 'react';

export default class Comment extends React.Component{
    render() {
        console.log(this.props);
        return(
        <h4>{ this.props.text }</h4>
        );
    }
}