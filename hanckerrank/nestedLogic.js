let date_returned = []
let date_due = []
let fine = 0
function enqueue(input) {

    let inputArray = input.split('\n')
    date_returned = inputArray[0].split(' ').map(Number)
    date_due = inputArray[1].split(' ').map(Number)
    calcFine()


}
function calcFine() {
    if (date_returned[2] <= date_due[2] && date_returned[1] <= date_due[1] && date_returned[0] <= date_due[0]) {
        console.log(fine)
    }
    else if (date_returned[2] === date_due[2] && date_returned[1] === date_due[1] && date_returned[0] > date_due[0]) {
        fine = Math.abs(date_returned[0] - date_due[0]) * 15
        console.log(fine)
    }
    else if (date_returned[2] === date_due[2] && date_returned[1] > date_due[1] ) {
        fine = Math.abs(date_returned[1] - date_due[1]) * 500
        console.log(fine)
    }
    else if(date_returned[2] < date_due[2]) {
        fine = 0
        console.log(fine)
    }
    else{
        fine = 10000
        console.log(fine) 
    }
}

console.log(enqueue(`23 12 1234
19 9 2468`))