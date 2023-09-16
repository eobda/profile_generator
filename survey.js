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
    
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile.listen = answer;
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        profile.favMeal = answer;
        
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          profile.favFood = answer;
          
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            profile.favSport = answer;
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile.superpower = answer;

              console.log(`\n${profile.name} loves listening to ${profile.listen} while ${profile.activity}, devouring ${profile.favFood} for ${profile.favMeal}, prefers ${profile.favSport} over any other sport, and is amazing at ${profile.superpower}.`);
              
              rl.close();
        
            });
          });
        });
      });
    });
  });
});