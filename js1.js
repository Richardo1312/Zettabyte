var Arr1 = [1,2,3,4,5,6,7,8,9,10],
    Arr2 = [],
    Arr3 = [];

for (var i=0;i<Arr1.length;i++){
    if ((i+2)%2==0) {
        Arr2.push(Arr1[i]);
    }
    else {
        Arr3.push(Arr1[i]);
    }
}

console.log(Arr2, Arr3);
