console.log('hello node js');
console.log(process.env.PIN);
console.log(process.argv);

if (process.argv == 'admin' & PIN== 0000) {
    console.log('Welcome Admin');

}
console.log('Access restricted');