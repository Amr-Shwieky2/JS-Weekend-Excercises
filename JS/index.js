// Ex1.1 - Yes or No
function YasOrNo(boolean){
    if (boolean){
        return "Yas";
    }
    return "No";
}

// Ex2.1 - Sum of lowest numbers
function SumTowLowest(array){
    array.sort((a, b) => a - b);
    return array[0] + array[1];
}

// console.log(SumTowLowest([19, 5, 42, 2, 77]));


// Ex2.2 - One and Zero - Binary
function Binary(array){
    DecNumber = 0;
    let maxLen = array.length - 1;
    for(let i = maxLen; i >= 0; i--){
        if(array[i] == 1){
           DecNumber +=  Math.pow(2, (maxLen - i))
        }
    }
    return DecNumber;
}

// console.log(Binary([1, 0, 1, 1]));

// Ex2.3 - Find the Next Perfect Square
function findNextSquare(number){
    hufNum = number/2
    for(let i = 1; i <= hufNum; i++){
        if(Math.pow(i, 2) == number){
            return Math.pow(i + 1, 2)
        }
    }
    return -1
}

// console.log(findNextSquare(114));
// Ex2.4 - Unique
function findUniq(array){
    array.sort((a, b) => a - b);
    if(array[0] != array[1]){
        return array[0];
    }else if(array[array.length - 1] != array[array.length - 2]){
        return array[array.length - 1];
    }
}
// console.log(findUniq([ 1, 1, 0.55, 1, 1 ]));

// Ex2.5 - Summation
function summation(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}
// console.log(summation(8));

// Ex2.6 - Years and Centuries
function centuryFromYear(number){
    let century = 0;
    while(number > 0){
        number -= 100;
        century += 1;
    }
    return century;
}
// console.log(centuryFromYear( 1900));

// Ex2.7 - Basic Math
function basicOp(operation, value1, value2){
    switch (operation){
        case ('+'): return value1 + value2;
        case ('-'): return value1 - value2;
        case ('*'): return value1 * value2;
        case('/'): return value1 / value2;
    }
}
// console.log(basicOp('/', 49, 7));

// Ex3.1 - Growth Of population
function nb_year(population, percent, aug, MaxPopulation){
    for(let i = 1; true; i++){
        population += Math.floor(population * (percent / 100)) + aug;
        if (population >= MaxPopulation){
            return i;
        }  
    }
}
// console.log(nb_year(1500, 5, 100, 5000));

// Ex3.2 - People on the Bus
function PeopleBus(array){
    let numberOfPeople = 0; 
    for(let i = 0; i < array.length; i++){
        numberOfPeople += array[i][0] - array[i][1] 
    }
    return numberOfPeople;
}

// Ex4.1 - Fibonacci 
function Fibonacci(n){
    let a = 0, b = 1;
    
  
    while (a <= n) {
      console.log(a);
      [a, b] = [b, a + b];
    }

}
// Fibonacci(55);

// Ex4.2 - Tribonacci 
function Tribonacci(n){
    let array = [1, 1, 1];
    nextNum = 0; 
    for(let i = array.length - 1; nextNum < n; i++){
        nextNum = array[i] + array[i - 1] + array[i - 2]; 
        array.push(nextNum)
    }
    array.map(num => console.log(num));
}
// Tribonacci(31);

// Ex5.1 - trimming string
function trimmingString(str){
    const newString = str.slice(1, str.length - 1);
    return newString;
}
// console.log(trimmingString("Hello"));

// Ex5.2 - String Repeat
function repeatStr(number, char){
    for(let i = 1; i <= number; i++){
        console.log(char);
    }
}
// repeatStr(6, "I")

// Ex5.3 - To Camel Case
function toCamelCase(str){
    newStr = str.split(/[-_]/);
    for(let i = 1; i < newStr.length; i++){
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
    }
    return newStr.join("");
}

// console.log(toCamelCase("the-stealth-warrior"));
// Ex5.4 - To Weird Case
function toWeirdCase(str){
    word = [];
    for(let i = 0; i <str.length; i++){
        if(i % 2 == 0){
            word.push(str[i].toUpperCase());
        }else{
            word.push(str[i])
        }
    }
    return word.join("");

}
// console.log(toWeirdCase("Weird string case"));

// Ex5.5 - Abbreviate two words
function Abbreviate(str){
    word = str.split(" ");
    return word[0][0] + "." + word[1][0];
}
// console.log(Abbreviate("Patrick Feeney"));

// Ex5.6 - Mask
function maskify(str){
    word = [];
    for (let i = 0; i < str.length; i++) {
        if (str.length - i <= 4){
            word.push(str[i]);
        }else{
            word.push("#");
        }
    }
    return word.join("");
}
// console.log(maskify("Nananananananananananananananana Batman!"));

function shortestWords(str){
    words = str.split(" ")
    let minLength = Infinity;
    for(let i = 0; i < words.length; i++){
        if(words[i].length < minLength){
            minLength = words[i].length;
        }
    }
    return minLength;
}

// Ex5.8 - shortest words version 2
function longestWords(str){
    words = str.split(" ")
    let maxLength = 0;
    for(let i = 0; i < words.length; i++){
        if(words[i].length > maxLength){
            maxLength = words[i].length;
        }
    }
    return maxLength;
}


// Advanced Iteration Logic

// Ex6.1 - Mumbling
function accum(str){
    let mumble ="";
    for(let i = 0; i < str.length; i++){
        mumble += str[i].toUpperCase();
        for(let j = 0; j < i; j++){
            mumble += str[i].toLowerCase();
        }
        if(i + 1 == 4){
            i++;
            let mumNumber = 0;
            while(mumNumber < i){
                mumble += str[i].toLowerCase();
                mumNumber++;
            }
        }
        mumble += "-";
    }
    return mumble.slice(0, -1);
}
// console.log(accum("RqaEzty"));

// Ex6.2 - Counting Duplicates
function countDuplicates(input) {
    const charCount = {};
    let duplicateCount = 0;
  
    const normalizedInput = input.toLowerCase();
  
    for (const char of normalizedInput) {
      if (char.match(/[a-z0-9]/)) {
        if (charCount[char]) {
          if (charCount[char] === 1) {
            duplicateCount++;
          }
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
      }
    }
  
    return duplicateCount;
  }

// Ex6.3 - organize strings
function longest(s1, s2) {
    const combinedString = s1 + s2;
    const distinctCharacters = [...new Set(combinedString)];
    const sortedDistinctCharacters = distinctCharacters.sort().join('');
    return sortedDistinctCharacters;
}

// Ex6.4 - isogram
function isIsogram(str) {
    const normalizedStr = str.toLowerCase();
    const charSet = new Set();
  
    for (const char of normalizedStr) {
      if (charSet.has(char)) {
        return false;
      }
      charSet.add(char);
    }
  
    return true;
  }
  