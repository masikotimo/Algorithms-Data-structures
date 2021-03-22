const input=`3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`

let phoneBook={}
const splitinput=input.split('\n')
for (let i = 1; i < parseInt(splitinput[0])+1 ; i++) {
    let arr= splitinput[i].split(' ');
    phoneBook[arr[0]]=arr[1]
}
for (let x = parseInt(splitinput[0])+1; x < splitinput.length; x++) {
     if(phoneBook[splitinput[x]]){
        console.log(`${splitinput[x]}=${phoneBook[splitinput[x]]}`)
     }
     else{
         console.log('Not found')
     }
}
