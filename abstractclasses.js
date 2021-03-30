class Difference {
    constructor(arr){
        this.arr=arr
    }
    absoluteDiff(){
       console.log(this.arr.reduce((a,b)=>Math.abs(a-b))) 
    }

}

const Diff=new Difference([1,2,5])
Diff.absoluteDiff()

// const list= new LinkedList