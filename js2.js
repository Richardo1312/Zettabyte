const arr = [2, 4, 5, 7, 7, 8, 9, 9];
const findMedian = (arr = []) => {
   const sorted = arr.slice().sort((a, b) => {
      return a - b;
   });
   if(sorted.length % 2 === 0){
      const first = sorted[sorted.length / 2 - 1];
      const second = sorted[sorted.length / 2];
      return (first + second) / 2;
   }
   else{
      const mid = Math.floor(sorted.length / 2);
      return sorted[mid];
   };
};
console.log(findMedian(arr));
