var item = [
    {
      name: 'spoon',
      details: {
        values: 4120,
      },
    },
    {
      name: 'fork',
      details: {
        values: 4200,
      },
    },
    {
      name: 'plate',
      details: {
        values: 2032,
      },
    },
  ];

var temp = 0
var value = 0
for(const a of item){
    if (value<= a.values) {
        temp++;
        value=a.values
    }
}
console.log(item[temp]);