import React, {Component} from 'react';

class Children extends Component {

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                {
                    this.props.children.map((child,index) => {
                        return (
                            <div key={index}>
                                {child}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Children;