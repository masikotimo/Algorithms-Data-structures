class Person {

}

class Student extends Person{
    constructor(firstName, lastName, idNumber, scores) {
        super();
        this.firstName = firstName
        this.lastName = lastName
        this.idNumber = idNumber
        this.scores = scores
    }
    calculate() {
        let avg
        let sum = this.scores.reduce((a, b) => parseInt(a) + parseInt(b))
        avg=sum/arr.length
        if(avg>=90 && avg<=100){
            return 'O'
        }
        else if(avg>=80 && avg<90){
            return 'E'
        }
        else if(avg>=70 && avg<80){
            return 'A'
        }
        else if(avg>=55 && avg<70){
            return 'P'
        }
        else if(avg>=40 &&avg<55){
            return 'D'
        }
        else{
            return 'T' 
        }

    }
}