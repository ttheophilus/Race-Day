let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 20;
if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
};
if (runnerAge > 18 && registeredEarly) {
    console.log(`Race Time: 9:30am and Race Number: ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Race Time: 11:00am and Race Number: ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`Race Time: 12:30pm and Race Number: ${raceNumber}.`);
} else {
    console.log('Visit the registration desk. Thank you!');
}