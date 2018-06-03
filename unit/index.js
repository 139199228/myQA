window.test = function (a) {
    return a + 1
}
test(1)


function add(a) {
    return function (b) {
        return a + b
    }
}


function multi(x) {
    return function (y) {
        return x * y + 1
    }
}