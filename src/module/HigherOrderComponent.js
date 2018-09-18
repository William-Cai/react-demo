import React, {Component} from 'react';

/**
 * 高阶组件是一个函数（而不是组件），它接受一个组件作为参数，返回一个新的组件。
 */
export default (InputComponent) => {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                valueStr: '高阶组件并不难，设计模式中的装饰者模式'
            }
        }

        render() {
            return <InputComponent data={this.state.valueStr}/>
        }
    }
    return NewComponent;
}