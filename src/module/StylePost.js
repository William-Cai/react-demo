import React from 'react'

/**
 * 函数式编程
 * @param defaultStyle
 * @returns {function(*): XML}
 */
export default (defaultStyle) => props => <p style={{...defaultStyle, ...props.style}}>最纯粹的函数式编程</p>