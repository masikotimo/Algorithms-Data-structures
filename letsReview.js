function processData(input) {
    const myarr=input.split('\n')
    for (let i = 1; i < myarr.length; i++) {
        indexString(myarr[i]) 
    }
    
}
function indexString(input){
    let even='',odd=''
    for (const key in input) key%2==0? even+=input[key] :odd+=input[key]  
    console.log(`${even} ${odd}`)
}
processData(`2
Hacker
Rank`)