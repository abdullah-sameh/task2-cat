function count(str) {
    let letter = [...new Set(str.split(''))]
    let arr = str.split('')
    let result = []
    for (let i = 0; i < letter.length; i++) {
        result.push(arr.filter((ele) => letter[i] === ele))
    }
    let obj = {}

    for (let i = 0; i < result.length; i++) {
        obj[`${result[i][0]}`] = result[i].length
    }
    return obj
}

console.log(count('CAT'))
