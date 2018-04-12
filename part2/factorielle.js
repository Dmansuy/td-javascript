function factorielle(n) {
    return n === 0 ? 1 : n * factorielle(n - 1)
}

module.exports = factorielle;
