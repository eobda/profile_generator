const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  profile.name = answer;
  
  rl.question('What\'s an activity you like doing? ', (answer) => {
    profile.activity = answer;
    
    console.log("Profile:", profile);
    
    rl.close();
  });
});