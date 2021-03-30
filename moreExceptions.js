class Calculator{
    power(n,p){
        if(n<0 ||p<0){
            throw 'n and p should be non-negative'
        }
        else{
            return Math.pow(n,p)
        }
    }
}

const myCalc=new Calculator()
try {
    myCalc.power(-1,6)
} catch (error) {
    console.log(error)
    
}
