import React, {Component} from 'react';

class Editor extends Component {

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                （/** p元素中还不能有内容 **/）
                <p dangerouslySetInnerHTML={{__html: this.props.content}}></p>
            </div>
        );
    }
}

export default Editor;