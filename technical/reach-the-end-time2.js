function reachInTime(n, arr, max){

    var camino = '';
    var cont = 0;


    for( let i = 0; i < n*n; i++ ){
        if( i != 0 && i%n == 2 ){
            camino += arr[i] + '\n'
        }else{
            camino += arr[i] + '    '
        }
    }
    console.log(camino)

    for( var i = 0; i < n*n; i++ ){
        if( arr[ i+1 ] == '.' ){                //  If para verificar si hay '.' a la derecha
            cont += 1;
        }else if( arr[ i+1 ] == '#' ){
            if( arr[ i+3 ] == '.' ){            //  If para verificar si hay '.' hacia abajo
                if( i+3 == 8 ){
                    cont += 1
                    break;
                }else{
                    cont += 1;
                    i += 2
                }
            }else{                              //  Si esta bloqueado regresa una posicion
                if( i == 0)
                    return console.log('NO')
                else{
                    arr[i] = '#'
                    cont--
                    i -= 2
                }
            }
        }
    }

    if( cont <= max ){
        return console.log('YES');
    }else{
        return console.log('NO')
    }
}

var array = [
    '.', '.', '.',
    '#', '#', '.',
    '#', '.', '.'
]
reachInTime( 3, array, 5 )


// var array2 = [
//     '.', '.', '#', '.',
//     '#', '.', '.', '.',
//     '#', '.', '.', '.'
// ]
// reachInTime( 4, array2, 5 )