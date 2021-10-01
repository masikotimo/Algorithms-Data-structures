
//Initializing a 2-D grid where 1 is obstacle
var arr = [[0, 0, 1, 1], [1, 0, 1, 1], [1, 0, 0, 0]];
var arr = ['..##','#.##','#...'];
let newarr=[]

arr.forEach(element => {
    newarr.push(element.split(''))
});

function readTheEnd(arr,k) {
    var r = arr.length;
    var c = 4;
    var i = 0, j = 0, m = 0;
    while (i != r - 1 || j != c - 1) {
        arr[i][j] = 1;
        //If there is path, then increment m and move to the next point
        if (i + 1 < r && arr[i + 1][j] == '.') {
            i += 1;
            m += 1;
        }
        else if (j + 1 < c && arr[i][j + 1] == '.') {
            j += 1;
            m += 1;
        }
        else if (i - 1 > -1 && arr[i - 1][j] == '.') {
            i -= 1;
            m += 1;
        }
        else if (j - 1 > -1 && arr[i][j - 1] == '.') {
            j -= 1;
            m += 1;
        }
    }
    
    if (m >= k) console.log("Yes");
    
    else console.log("No");   
}


readTheEnd(newarr,5)
