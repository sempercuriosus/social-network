
/**
 * @name createMessage
 * @description Is a consistent formatting for output of messages to the user via the console or as a response
 * @param {string} title title of the message
 * @param {string} text body of the message
 * @param {string} function_caller where the message being called from
 * @param {boolean} returnAsJSON Should the message be returned as a JSON object? Otherwise outputs to the console.
*/

// #region 
// * @param {string} messgeType type of the message
// * 
// * Message Types Supported:
// *  - Success
// *  - Error
// *  - ErrorVerbose
// * 


// #endregion 

// add param on who sent the file
const createMessage = (title, text, function_caller = '', verbose_message = '', returnAsJSON = false,) => {
    if (!title || !text) {
        return console.error('The Title and Text must be provided.');
    }

    const response_message = {
        "title": title
        , "message": text
        , "caller": function_caller
        // , "type": [
        //     "success"
        //     , "error"
        // ]
        , "verbose_message": verbose_message
    };

    if (returnAsJSON === true) {
        return JSON.stringify(response_message);
    }

    // Default Output if not returning as JSON
    console.log(response_message);

}; //  [ end : responseObj ]

module.exports = { createMessage };