let userName = 'McLight';

userName.charAt(0)
console.log(userName.charAt(0))


userName.indexOf('i')
console.log(userName.indexOf('i'))


userName.length
console.log(userName.length)


userName.trim()
console.log(userName.trim())


userName.toUpperCase()
console.log(userName.toUpperCase())


userName.repeat(3)
console.log(userName.repeat(3))

let result = userName.startsWith(' ')
console.log(result)

if(result){
    console.log('Your username cannot start with whitespace')
}
else{
    console.log(userName)
}

let result2 = userName.endsWith(' ')

if(result2){
    console.log('Your username cannot end with whitespace')
}
else{
    console.log(userName)
}

let result3 = userName.includes(' ')

if(result3){
    console.log(`Your username cannot inlude ${result3}`)
}
else{
    console.log(userName)
}

let phoneNumber = '1445-6523-1214'
phoneNumber = phoneNumber.replaceAll('-', '/')
console.log([phoneNumber])


let phoneNumber2 = '1445-6523-1214'
phoneNumber2 = phoneNumber2.padStart(15, '0')
console.log([phoneNumber2])


let phoneNumber3 = '1445-6523-1214'
phoneNumber3 = phoneNumber3.padEnd(15, '0')
console.log([phoneNumber3])