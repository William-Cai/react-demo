import React, {Component} from 'react';
import higher from './HigherOrderComponent'

class InputWithTest extends Component {
    render() {
        return <input style={{width:500}} value={this.props.data || ''} readOnly/>
    }
}

InputWithTest = higher(InputWithTest)

export default InputWithTest;