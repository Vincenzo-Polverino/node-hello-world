console.log('hello node js');
console.log(process.env.PIN);
console.log(process.argv);

if (process.argv[2] == 'admin' && process.env.PIN == '1234') {
    console.log('Welcome Admin');

}else {
    console.log('Access restricted');
}