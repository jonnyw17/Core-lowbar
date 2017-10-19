const _ = {};
/*****************IDENTITY*****************/
 _.identity = val => val

/*****************VALUES*****************/
 _.values = (obj) => {
   if(typeof obj !== 'object' || obj === null) return [];
   if(Array.isArray(obj)) return obj;
   const result = [];
   for(let key in obj) {
     result.push(obj[key])
   }
   return result
 }

//*****************FIRST*****************/
 _.first = function(array, n = 1) {
   if(Array.isArray(array) === false) return undefined;
   if (n <= 0 || typeof n !== 'number') return [];
   if (n === 1) return array[0];
   return array.slice(0, n);
 };

module.exports = _
