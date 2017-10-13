import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component{

    render(){
        return (
            <header className="headerBlock">
                <div className="container">
                    <nav className="headerBlock__container">
                        <Link className="headerBlock__item" to='/'>Main Page</Link>
                        <Link className="headerBlock__item" to='/about'>About author</Link>
                        <Link className="headerBlock__item" to='/auth'>Authorization</Link>
                    </nav>
                </div>
            </header>
        )
    }
}

