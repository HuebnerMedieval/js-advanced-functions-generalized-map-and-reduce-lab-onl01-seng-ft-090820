// Add your functions here
const map = function(arr, fnc){
    let newArr = []
    for(const element of arr){
        newArr.push(fnc(element))
    }
    return newArr
}

const reduce = function(arr, fnc, start){
    // let total = start
    // arr.forEach(element => {
    //     total = fnc(total, element)
    // })
    // return total
    let i = 1
    let total
    if(start){
        i = 0
        total = start
    } else {
        total = arr[0]
    }

    for (i; i < arr.length; i++){
        total = fnc(total, arr[i])
    }
    return total
}