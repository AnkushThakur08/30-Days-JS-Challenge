// Write a function that generate uniqueID use clousre to keep track of the last generated ID and increment it with the each call
function generateUniqueID(length) {

    // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characters = '0123456789';
    let uniqueID = '';

    for (let i = 0; i < length; i++) {
        const res  = Math   .floor(Math.random() * characters.length);
        uniqueID = uniqueID + characters[res];
    }

    return uniqueID;
}

console.log(generateUniqueID(1));