let s='00:00:00AM'

const arr=s.split('')
arr.splice(-2,0,':')
s=arr.join('')

let hours,mins,seconds,prefix=''
hours=s.split(':')[0]
mins=s.split(':')[1]
seconds=s.split(':')[2]
prefix=s.split(':')[3]

if(prefix ==='PM' && hours<'12' ){
    hours=String(parseInt(hours)+12)
}
if(prefix==='AM' && hours==='12' ){
    hours='00'
}
console.log(hours+':'+mins+':'+seconds)



