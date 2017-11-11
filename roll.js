const delay = 100 

function roll() {
    let R = Math.random()
    let sides = 100
    let rolled = R *sides
    rolled = Math.round(rolled)
    console.log(rolled)
    if (rolled === 100) {
        console.log('MAXIMUM!')
        setInterval(()=>{process.exit()},0)
    } else {
        setInterval(roll,delay)
    }
}

setInterval(roll, delay)