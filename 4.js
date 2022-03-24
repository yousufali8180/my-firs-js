var friendage = [15, 17, 14, 16];
var sonaliAge = friendage[2]; // ata 14 dekabe karon 0 teke start
friendage[1] = 21;
var position = friendage.indexOf(14); // ata kuje ber kore koi number a ase
console.log(position)
friendage.push(100);
friendage.push(50); // last a jog hobe
console.log(friendage.length); 
friendage.pop(); //last element bad dawya jai
console.log(friendage);