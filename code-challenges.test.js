// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function. 
const fibonacci = (s) => {
    const chatHelp = [0, 1]
   
    if (s < 3) {
       return chatHelp.slice(0, s)
    }
   
    return chatHelp.concat(Array.from({length: s - 2}, (_, i) => chatHelp[i] + chatHelp[i + 1]))
   }

// a) Create a test with expect statements for each of the variables provided.
test('returns the correct length-1 Fibonacci sequence', () => {
    expect(fibonacciLength1).toEqual([0, 1, 1, 2, 3, 5, 8])
  })
  
  test('returns the correct length of the sequence', () => {
    expect(fibonacciLength1.length).toBe(7)
  })

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

test('returns the correct length-2 Fibonacci sequence', () => {
    expect(fibonacciLength2).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
   })
const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// let fibonacci(s) {
//     if (s <= 1) {
//       return s
//     }
//     let fib = [0, 1]
//     for (let i = 2 i <= s i++) {
//       fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib[n]
//   }

// Pseudo code: OK well lets start this off by saying ive never heard of fibonacci sequence before so googling that was step one. step two was asking ai how to even use it in javascript and boy did that take a chunk of time. So yeah the sum of two numbers that procided it, sounds annoying but lets go. i used chatgpt to show me how to even use this. It gave me a complicated answer so I am gonna dumb it down to my level and use what we have used in class. So im giving the array the first two numbers in sequence 0, 1. the way the argument is provided to the function is gonna be less than 3 so it will return the first sequence numvers from the array. otherwise it will create a new array with sequence -2 and concat (put together) the plus of two arrays and return that...yeah something like that. as for testing its just copy and paste except for changing the correct lengths and then updating the second test to check the length of the sequence. Unsure I took a look at a buddys code and i think i need to make a change in line 13 but his code is very different than mine so idk? is it ok as 0,1 or should it be 1,1...so that it matches the expected output intead of starting at 0 it would repeat 1,1 and so on? Im not gonna change anything now, just cause, but im keeping my eye on him.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.


// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.


describe("calculateDifference", () => {
  it("calculates the difference between upVotes and downVotes", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    expect(calculateDifference(votes1)).toEqual(11)

    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(calculateDifference(votes2)).toEqual(-31)
  })
})

// b) Function to calculate the difference
const calculateDifference,(votes) => {
  return votes.upVotes - votes.downVotes
}

// Pseudo code: for this one I borrowed from a fellow cohort. but i know that calculateDifference is our main function that takes votes as an argument. these arguments have 2 parameters called upVotes and downVotes. we subtract them and then returns the result, the test tests the calculateDifference main function. and our expect statements makes sure its the correct information? yeah cause thats what we are expecting to see, an 11 and a -31. toequal is a matcher which makes sure the answers from the test are 'matches' and are equal to what we put in our expect statement and the test will pass...if not then i would use chatGPT to debug.

describe("calculateDifference", () => {
  it("calculates the difference between upVotes and downVotes", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    
    expect(calculateDifference(votes1)).toEqual(11)

    const votes2 = { upVotes: 2, downVotes: 33 }
    
    expect(calculateDifference(votes2)).toEqual(-31)
  })
})


function calculateDifference(votes) {
  return votes.upVotes - votes.downVotes
}