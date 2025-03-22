export default {
    testEnvironment: "node", // Đảm bảo Jest chạy trong môi trường Node.js
    transform: {
      "^.+\\.js$": "babel-jest", // Sử dụng Babel để transpile các file `.js`
    },
  };
  