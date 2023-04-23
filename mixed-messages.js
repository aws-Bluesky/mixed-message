console.log(); // *decoration: log empty line

// ----------MAIN PROGRAM----------

// array contains 10 messages
const messageLibrary = [
    "Travel is the only thing you buy that makes you richer.",
    "Every journey has secret destinations that even travelers can’t expect.",
    "Travel is to discover that everyone is wrong about other countries.",
    "The impulse to travel is one of the hopeful symptoms of life.",
    "Happiness isn’t a destination, it’s a journey we are on.",
    "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    "We travel not to escape life, but for life not to escape us.",
    "He that travels much knows much.",
    "Our destination is not a land, but a new way of looking.",
    "No one realized how beautiful the trip was until they got home and fell on an old, familiar pillow.",
    "Travel makes one modest. You see what a tiny place you occupy in the world."
];

// function log random message
function logRandomMessages(){
    const randomNum = Math.floor(Math.random()* 10);
    console.log(messageLibrary[randomNum]);
}


// call function
logRandomMessages();

console.log()// *decoration: log empty line

