const arr = ['hydra']
let finalarr=[]
for (const x in arr) {
    let temparr = []
    temparr.push(arr[x])
    temparr.push(arr[x].split('').sort().join(''))
    temparr[0][0]===temparr[1][0]? finalarr.push('NO'):finalarr.push('YES')
}
    console.log(finalarr)

    