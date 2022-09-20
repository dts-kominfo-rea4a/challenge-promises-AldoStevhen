const { values } = require("lodash");
const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

const promiseOutput = (emosi) => {
  return new Promise ((resolve, reject)=>{
    let i = 0;

    promiseTheaterIXX().then((value)=>{
      value.forEach(element => {
        if(element.hasil == emosi){
          i = i+1;
        }
      });

      resolve(promiseTheaterVGC().then((value) =>{
        value.forEach(element => {
          if(element.hasil == emosi){
            i = i+1;
          }
        });
        return i;
      }));
    })
  })
}

module.exports = {
  promiseOutput,
};
