const _ = {};

 _.identity = val => val

 _.values = (obj) => {
   if(typeof obj !== 'object' || obj === null) return [];
   if(Array.isArray(obj)) return obj;
   const result = [];
   for(let key in obj) {
     result.push(obj[key])
   }
   return result
 }

 _.first = (obj) => {
   if(Array.isArray(obj) === false) return undefined
   
 }

module.exports = _
