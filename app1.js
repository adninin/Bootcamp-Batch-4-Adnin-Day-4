const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Memberi pertanyaan untuk diisi//
rl.question('What is your name? ', (name) => 
rl.question('What is your email? ', (email) => 
rl.question('What is your address? ', (add) => {

    //Menjelaskan pertanyaan serta jawaban diatas//
    console.log(`Your name : ${name}`);
    console.log(`Your email : ${email}`);
    console.log(`Your address : ${add}`);
    console.log(`Thank you for welcome ${name}!`);

    //Menutup program//
    rl.close();
})));