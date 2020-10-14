// Promises are objects, so it’s not passed as arguments like callbacks, it’s returned. 
// The return statement is an object which is a placeholder for the result, which will be available in the future.
// Promises have just one responsibility — they represent only one event.

const one = () => {
    setTimeout(() => {
        console.log('1')
        return '1'
    }, 400)
}
const two = () => {
    setTimeout(() => {
        console.log('2')
        return '2'
    }, 200)
}
const three = () => {
    setTimeout(() => {
        console.log('3')
        return '3'
    }, 300)
}
const four = () => {
    setTimeout(() => {
        console.log('4')
        return '4'
    }, 100)
}

one()
two()
three()
four()



const asyncOne = (counter) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++
            console.log('--------Using Promises---------')
            console.log(counter)
            resolve(counter)
        }, 400)
    })
}
const asyncTwo = (counter) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            counter++
            console.log(counter)
            resolve(counter)
        }, 200)
    })
}
const asyncThree = (counter) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            counter++
            console.log(counter)
            resolve(counter)
            
        }, 300)
    })
}
const asyncFour = (counter) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++
            if(counter == 4) {
                reject('Counter is full')
            } else {
                console.log(counter)
                resolve(counter)
            }
        }, 100)
    })
}

asyncOne(0)
.then(asyncTwo)
.then(asyncThree)
.then(asyncFour)
.catch(error => console.log(error))

Promise.all([
    one, two, three, four
]).then(response => {
    let [a, b, c, d] = response
    console.log('-----Using Promise.all------')
    console.log(a, b, c, d)
    console.log('----------------------------')
})
