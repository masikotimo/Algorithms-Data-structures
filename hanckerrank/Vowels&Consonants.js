const vowels=['a','e','i','o','u']

const mystring="javascriptloops"


for (let i = 0; i < mystring.length; i++) {

    if(mystring[i]=='a'||mystring[i]=='i'||mystring[i]=='u'||mystring[i]=='e'||mystring[i]=='o'){
        console.log(mystring[i])
    }
    
    
}

for (let i = 0; i < mystring.length; i++) {

   
    if(mystring[i]!=='a' && mystring[i]!=='i' && mystring[i]!=='u' && mystring[i]!=='e' && mystring[i]!=='o'){
        console.log(mystring[i])
    }
    
    
}