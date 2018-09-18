import React, {Component} from 'react';

class Header extends Component {
    componentWillMount() {
        console.log('Header componentWillMount')
    }

    componentDidMount() {
        console.log('Header componentDidMount');
    }

    componentWillUnmount() {
        console.log('Header componentWillUnmount')
    }

    render() {
        return (
            <div>
                This is Header Component
            </div>
        );
    }
}

export default Header;