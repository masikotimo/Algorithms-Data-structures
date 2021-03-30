const str='xc'

try {
    if(isNaN(parseInt(str))){
        throw 'Bad String'
    }else{
        console.log(parseInt(str))
    } 
  } catch (e) {
    console.log(e)
  }

