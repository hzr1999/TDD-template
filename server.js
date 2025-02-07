// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;
// 启用 CORS，允许所有来源访问
app.use(cors());

// 处理创建文件的请求
app.get('/createJsonFile', (req, res) => {
  const rootDir = process.cwd();
  const filePath = path.join(rootDir, 'data.json');

  fs.writeFile(filePath, '{}', (err) => {
    if (err) {
      console.error('Error creating data.json:', err);
      res.status(500).send('Error creating file');
    } else {
      console.log('data.json created successfully.');
      res.status(200).send('File created successfully');
    }
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});