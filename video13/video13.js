console.log('Hello word from HTML')
let arrTop4 = ['Live', 'Chelsea', 'MU', 'Mancity'] 

// while (i < arrTop4.length){
//     //if else
//     if (arrTop4[i].length === 2) {
//         console.log('Top club: ', i +1, arrTop4[i]);
//     } else if (arrTop4[i].length === 4) {
//         console.log('Top club: ', i +1, arrTop4[i]);
//     } else {

//     }
//     i++;
// }
let i = 0;

while (i < arrTop4.length){
    console.log('>>> check i:', i);
    //if else
    if (arrTop4[i] === 'Chelsea') {
        console.log('Found it: ', i +1, arrTop4[i]);
        break;
    }
    i++;       
}
