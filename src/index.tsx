import React from 'react';
import ReactDOM from 'react-dom/client';
import FloatingWindow from './components/FloatingWindow';

// 创建一个新的 div 元素
const container = document.createElement('div');
// 将新创建的 div 元素添加到 body 中
document.body.appendChild(container);

// 创建根节点并将应用挂载到新创建的 div 元素上
const root = ReactDOM.createRoot(container);
root.render(<FloatingWindow />);