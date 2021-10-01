let result = "NO";

function findEnd(arr, move, fIndex, x, y, m, b) {

    if (move < b || move === b) {
        if (x === fIndex && y === fIndex) {
            result = 'yes';
        }

        if (move > m) {
            if (y < fIndex) {
                if (arr[x][y] != '#') {
                    if (arr[x][y + 1] != '#') {
                        findEnd(arr, move, fIndex, x, y + 1, m + 1, b);
                    } else if (arr[x + 1][y] != '#') {
                        findEnd(arr, move, fIndex, x + 1, y, m + 1, b);
                    }
                }
            } else if (x < fIndex) {
                if (arr[x][y] != '#') {
                    if (arr[x + 1][y] != '#') {
                        findEnd(arr, move, fIndex, x + 1, y, m + 1, b);
                    } else if (arr[x][y + 1] != '#') {
                        findEnd(arr, move, fIndex, x, y + 1, m + 1, b);
                    }
                }
            }

        }
    }


}



const start = () => {
    let moves = 4;
    let mposible = 4;
    let stringArray = [];

    stringArray[0] = "..#";
    stringArray[1] = "...";
    stringArray[2] = ".#.";

    findEnd(stringArray, moves, stringArray.length - 1, 0, 0, 0, mposible);
    console.log(result);
}


start();