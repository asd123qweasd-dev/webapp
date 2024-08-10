

//https://github.com/cuth/postcss-pxtorem
var fs = require('fs');
var postcss = require('postcss');
var pxtorem = require('postcss-pxtorem');
var css = fs.readFileSync('./node_modules/antd/dist/antd.css', 'utf8');
var options = {
  replace: true,
  rootValue: 10,
  propList: ['*'],
};
var processedCss = postcss(pxtorem(options)).process(css).css;
 
fs.writeFile('./src/assets/antd.css', processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('Rem file written.');
});
