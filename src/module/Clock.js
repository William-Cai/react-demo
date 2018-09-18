import React, {Component} from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            now: new Date(),
            timer: null
        }
    }

    componentWillMount() {
        console.log('Clock componentWillMount')
        var t = setInterval(() => {
            this.setState({
                now: new Date()
            })
        }, 1000)
        this.setState({
            timer: t
        })
    }

    componentDidMount() {
        console.log('Clock componentDidMount')
    }

    componentWillUnmount() {
        console.log('Clock componentWillUnmount')
        clearInterval(this.state.timer) //注意需要在组件卸载的时候移除定时器之类的
    }

    render() {
        console.log('Clock render')
        return (
            <div>
                <p>现在的时间{this.state.now.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Clock;