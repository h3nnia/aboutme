console.log("Hello");

const arWords = [
    'designer',
    'techno',
    'egyptian',
    'arabic',
    '24',
    'exciting',
    'passion',
    'nice',
    'appealing',
    'visually',
    'auditory',
    'design',
    'visuals',
    'motion',
    'graphic',
    'theory',
    'coding',
    'typography',
    'software',
    'organized',
    'orderly',
    'distorted',
    'inspirational',
    'extraordinary',
    'attention',
    'rgb',
    'printing',
    'swipe',
    'and',
    'but',
    'the',
    'me',
    'colors',
]

console.log(arWords);
console.log(arWords[0]);



function getRandomNumbers(){
    console.log('top getRandomNumbers');
    var limit = 32,
    amount = 9,
    lower_bound = 0,
    upper_bound = 32,
    unique_random_numbers = [];

    if (amount > limit) limit = amount; 
    while (unique_random_numbers.length < limit) {
        var random_number = Math.floor(Math.random()*(upper_bound - lower_bound) + lower_bound);
        if (unique_random_numbers.indexOf(random_number) === -1) { 
            unique_random_numbers.push( random_number );
        }
    }
    
    return unique_random_numbers.slice(0, amount);
}


function createPoem(){
    console.log('top create poem');
    let arNumbers = [];
    let arWordsRandom = [];
    arNumbers = getRandomNumbers();
    console.log(arNumbers);
    
    arNumbers.forEach( function(number){
        arWordsRandom.push(arWords[number]);
    });
    console.log(arWordsRandom);

    const myLine1 = arWordsRandom.slice(0, 3).join(' ');
    console.log(myLine1);

    const myLine2 = arWordsRandom.slice(3, 6).join(' ');
    console.log(myLine2);

    const myLine3 = arWordsRandom.slice(6, 9).join(' ');
    console.log(myLine3);


    document.getElementById('line1').innerText = myLine1;
    document.getElementById('line2').innerText = myLine2;
    document.getElementById('line3').innerText = myLine3;
}


function handleClick(){
    console.log('youClicked!');
    createPoem();
}



document.querySelector('button').addEventListener('click',handleClick);