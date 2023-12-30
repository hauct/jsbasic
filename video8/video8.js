console.log('Hello world from HTML')

//key:value
let obj ={
    name: 'Hau',
    'address':'HCM',
    email:'hauct@vng.com.vn',
    gender:'Male',
    a: function(){
        console.log(`Hello world from function`)
        return ''
    }

};

let b = 'name'

obj[b] = 'Harry'

console.log(`name: ${obj['name']}`)
console.log(`email: ${obj.email}`)
console.log(`gender: ${obj.gender}`)
console.log(`function: ${obj.a()}`)
