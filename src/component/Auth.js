import React from 'react';
import Header from './Header';

export default class Auth extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <form action="/">
                    <input type="text" placeholder="email"/>
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="Password"/>
                    <input type="text" placeholder="Confirm Password"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
