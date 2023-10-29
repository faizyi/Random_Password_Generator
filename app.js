const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '1234567890'
const symbols = '!£$%^&*()_-+[]{}@#~<>?/|'
const inputbox = document.getElementById('input_box')
const copyPassword = document.getElementById('copy')
const passlen = document.getElementById('pl')
const gp = document.getElementById('btn')




const getrandomdata = (data)=>{
    return data [Math.floor(Math.random()*data.length)]
}
const generatePassword =(password ='')=>{
    password +=getrandomdata(upperCase)
    password +=getrandomdata(lowerCase)
    password +=getrandomdata(numbers)
    password +=getrandomdata(symbols)

    if(password.length < passlen.value){
        return generatePassword(password)
    }
    inputbox.value = (substring(password, passlen.value))

}

gp.addEventListener('click', ()=>{
    generatePassword()
})

function substring(str, num){
    if(str.length > num){
        let subStr = str.substring(0,num)
        return subStr
    }else{
        return str
    }
}
copyPassword.addEventListener('click', ()=>{
    if(inputbox.value !=''){

        let a = inputbox.select();
        navigator.clipboard.writeText(inputbox.value)
    }
})


