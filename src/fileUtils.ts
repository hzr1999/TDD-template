// src/fileUtils.ts
// 判断是否为浏览器环境
const isBrowser = typeof window !== 'undefined';

export const createEmptyJsonFile = () => {
  if (isBrowser) {
    // 浏览器环境，发送请求到服务器
    fetch('http://localhost:3000/createJsonFile')
     .then(response => {
        if (response.ok) {
          console.log('Request sent successfully.');
        } else {
          console.error('Request failed.');
        }
      })
     .catch(error => {
        console.error('Error sending request:', error);
      });
  }
};