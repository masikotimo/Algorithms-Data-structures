def carParkingRoof(cars, k):
    cars.sort()
    n = len(cars)
    res = float('inf')
    for i in range(n-k+1):
        res = min(res, cars[i+k-1]-cars[i])
    return res+1
