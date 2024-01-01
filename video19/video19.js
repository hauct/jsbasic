console.log('Hello world from HTML')

let obj = {
    name:'Eric',
    address:'Ha Noi',
    getName: function () {
        return this.name;
    }
}
console.log('>>> get Name obj: ', obj.getName())