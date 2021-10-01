let N = 24

if (N % 2 != 0) {
    coNsole.log('Weird')
}
else if (N % 2 == 0 && N >= 2 && N <= 5) {
    coNsole.log('Not Weird')
}
else if (N % 2 == 0 && N >= 6 && N <= 20) {
    coNsole.log('Weird')
}
else if(N % 2 == 0 && N>20) {
    coNsole.log('Not Weird')
}
