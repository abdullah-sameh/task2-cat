function addFrom(a, b) {
    // to make sure a < b
    if (a > b) {
        let tmp = a
        a = b
        b = tmp
    }
    let sum = 0
    for (let i = a; i <= b; i++) {
        sum += i
    }
    return sum
}


