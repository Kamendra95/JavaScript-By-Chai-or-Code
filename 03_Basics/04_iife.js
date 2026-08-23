// Immediately Invoked Function Expressions (IIFE)



// Named iife
(function chai(){
    console.log(`DB Connected`)
})();



// Unamed iife
((name) => {
    console.log(`DB Connected two ${name}`)
})('Kamendra')