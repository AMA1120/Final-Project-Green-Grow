const myMiddleware = (req, res, next) => {
    console.log('Middleware executed!');
    next(); 
  };
  
  module.exports = myMiddleware;
  