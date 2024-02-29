// Immediately Invoked Function Expressions (IIFE)

(function hello(){
    console.log('DB Connected');
})();     // function inside parenthesis ... used IIFE

((name) => {
    console.log(`DB Two Connected ${name}`);
})('Aditya');
