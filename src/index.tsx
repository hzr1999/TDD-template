import React from 'react';
import ReactDOM from 'react-dom/client';
import FloatingWindow from './components/FloatingWindow';

// 导出一个初始化函数，接收配置选项
export const initFloatingWindow = (config: { containerId?: string } = {}) => {
  // 获取或创建容器元素
  let container: HTMLDivElement;
  if (config.containerId) {
    const existingContainer = document.getElementById(config.containerId);
    if (existingContainer) {
      container = existingContainer as HTMLDivElement;
    } else {
      container = document.createElement('div');
      container.id = config.containerId;
      document.body.appendChild(container);
    }
  } else {
    container = document.createElement('div');
    document.body.appendChild(container);
  }

  // 创建根节点并将应用挂载到容器上
  const root = ReactDOM.createRoot(container);
  root.render(<FloatingWindow />);
};

// 如果需要默认初始化，可以在文件末尾调用
// initFloatingWindow();