const pressed = [];// An array to store the pressed keys

 // The secret code to be found
const secretCode = "umman";


// This code snippet listens for a keyup event on the 'window' object and executes the following actions:
window.addEventListener('keyup', (e) => {
    // Log the pressed key to the console
    console.log(e.key); 
    
    // Add the pressed key to the pressed array
    pressed.push(e.key); 
    
    // Remove the last 'secretCode' characters from the pressed array
    pressed.splice(-secretCode.length-1, pressed.length - secretCode.length);
    
    // Check if the pressed array contains the secret code
    if(pressed.join('').includes(secretCode)){
        // If the secret code is found, log "DING DING" and call the 'cornify_add' function
        console.log('DING DING');
        cornify_add();
    }
    
    // Log the updated pressed array to the console
    console.log(pressed);
 });

