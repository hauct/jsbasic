console.log('Hello world from HTML')

let sum = (a, b, callback) => {
    let tong = a + b;

// One time
//     setTimeout(()=>{
//         callback(tong);
//     },5000)
// }

    // Infinite loop
    let i = 0;

    let timer = setInterval(()=>{
        callback(tong);
        i++
        if (i===5){
            clearInterval(timer)
        }
    },5000)
}

let printSum = (message) => {
    console.log('Check sum 6 + 9: ', message)
}

sum(6, 9, printSum)