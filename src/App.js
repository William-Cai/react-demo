import React, {Component} from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';

//other component
import Header from './module/Header'
import Clock from './module/Clock'
import Children from './module/Children'
import getDefaultStyledPost from './module/StylePost'
import Editor from './module/Editor'
import StyleCss from './module/StyleCss'
import InputWithTest from './module/InputWithTest'
import TestContextType from './module/TestContextType'

class App extends Component {
    static childContextTypes ={
        themeColor: PropTypes.string
    }

    getChildContext(){
        return {
            themeColor: this.state.themeColor
        }
    }
    constructor() {
        super();
        this.state = {
            themeColor: 'red',
            showHeader: false,
            showClock: false
        }
    }

    componentWillMount() {
        console.log('App componentWillMount')
        this.setState({
            themeColor: 'green'
        })
    }

    componentDidMount() {
        console.log('App componentDidMount');
    }

    componentWillUnmount() {
        console.log('App componentWillUnmount')
    }

    changeShowHeader() {
        this.setState({
            showHeader: !this.state.showHeader
        })
    }

    changeShowClock() {
        this.setState({
            showClock: !this.state.showClock
        })
    }


    render() {
        console.log('App render')

        const StylePost = getDefaultStyledPost({fontWeight: 'bolder'})
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>---------华丽的分割线------------</p>
                <h1>以下是各个Component的测试</h1>
                <h2>Header</h2>
                <button onClick={this.changeShowHeader.bind(this)}>切换显示Header组件</button>
                {this.state.showHeader ? <Header/> : null}
                <h2>Clock</h2>
                <button onClick={this.changeShowClock.bind(this)}>切换显示Clock组件</button>
                {this.state.showClock ? <Clock/> : null}
                <h2>Children</h2>
                <Children>
                    <p>test children1</p>
                    <p>test children2</p>
                </Children>
                <h2>Post</h2>
                <StylePost style={{backgroundColor: 'yellow'}}/>
                <h2>Editor</h2>
                <Editor content={'<p>富文本的处理</p>'}/>
                <h2>Style Css</h2>
                <StyleCss/>
                <h2>HigherOrderComponent</h2>
                <InputWithTest/>
                <h2 style={{color: this.state.themeColor}}>context</h2>
                <TestContextType/>
            </div>
        );
    }
}

export default App;
