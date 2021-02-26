const testArray=[ {name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'} ]


removeCommas=(Arr)=>{

  const joinedArr= Arr.split("")
  joinedArr.map((i,j)=>{
    if(i ==='&'){
      joinedArr.splice(j-2,1,"")
      joinedArr.splice(j+1,1,"")

    }
  })

  return joinedArr.join("")

}


function list(names){

  if(names.length===0){
    return ''

  }

  if(names.length===1){
    return names[0].name
  }
    
  const tempArray=[]
    names.map((i,j)=>{
      tempArray.push(i.name)
    })
    tempArray.splice(-1,0,'&')
    const joinedArray=tempArray.join(", ")
    console.log(removeCommas(joinedArray))
    return removeCommas(joinedArray)
   
    
  }

  


list(testArray)