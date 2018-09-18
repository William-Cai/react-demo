import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TestContextType extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }

    componentDidMount(){
        let timer = setTimeout(function(){
            //todo 如何修改后并生效呢
            this.context.themeColor = "blue"
            // 触发
            this.setState({})
            clearTimeout(timer)
        }.bind(this), 2000)
    }

    render() {
        return (
            <div>
                <p style={{color:this.context.themeColor}}>从App的context中获取到值</p>
            </div>
        );
    }
}

export default TestContextType;