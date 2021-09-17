// const str='racecar'
// let strd=''
// const temparr=[]
// let splitstr=str.split('')
// for (let i = 0; i < str.length; i++) {
//     temparr.push(splitstr.pop())
// }
// strd=temparr.join('')
// if(strd===str){
//     console.log('its a palindrome')
// }else{
//     console.log('nop')
// }

class Palindrome {
    constructor(){
        this.stack = []
        this.queue = []
    }
    pushCharacter(ch) {
        this.stack.push(ch)
    }
    enqueueCharacter(ch){
        this.queue.push(ch)
    }
    popCharacter(){
        return this.stack.pop()
    }
    dequeueCharacter(){
        return this.queue.shift()
    }
}


