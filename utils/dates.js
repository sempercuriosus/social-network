
/*
  * Dates are ZERO based
  * Yes, you read that correctly, DATES ARE ZERO BASED HERE
  * 
  * 
*/
const { createMessage } = require('./createMessage');

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

/**
 * @name name
 * @description formatTimestamp
 * @param {string} date string you want formatted
 * @param {string} format (optional) you want to use when returning the date
 * @param {string} includeTime (optional) if you want to keep the datestring
 * 
 * Supported formats are 
 * Month-Day-Year (default)
 * Day-Month-Year 
 * Year-Month-Day
 * 
 * All formats 
 * add preceeding 0's with dates
 * use dashes for delimiter
 * @returns formattedDate
*/
function formatTimestamp (format = 'mdy', includeTime = false) {

    const timestamp = new Date();
    const dateDelimiter = '-';
    const timeDelimiter = ':';
    // date
    const month = months[ timestamp.getMonth() ];
    const day = timestamp.getDate();
    const year = timestamp.getFullYear();
    // format
    const lowerFormat = format.toString().toLowerCase();
    let dateParts = [];
    // time
    // could use toUTCString(), but leaving this open for further manipulation in the future, if needed
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    const seconds = timestamp.getSeconds();
    const msec = timestamp.getMilliseconds();
    const timeFormatted = [ hours, minutes, seconds, msec ].join(timeDelimiter);

    // check for Format options
    // default does not include the time
    if (lowerFormat === 'dmy') {
        // day month year
        dateParts = [ day, month, year ];
    }
    else if (lowerFormat === 'ymd') {
        // day month year
        dateParts = [ year, month, day ];
    }
    else {
        // default to month day year
        // Format not found assume default then
        createMessage('Format Not Found', 'The format ' + lowerFormat + '  was not found -- default is being used.');
        dateParts = [ month, day, year ];
    }

    let dateFormatted = dateParts.join(dateDelimiter);

    // check if time is wanted
    if (includeTime === true) {
        dateFormatted = dateFormatted + '-' + timeFormatted;
    }


    return dateFormatted.toString();
}

/**
 * @name getUnixTimestamp
 * @description gets the current unix (epoch) timestamp as a string
 * @returns unix timestamp
*/
const getUnixTimestamp = () => {
    const unixDate = Math.floor(Date.now() / 1000).toString();
    return unixDate;
}; //  [ end : getUnixTimestamp ]


module.exports = { formatTimestamp, getUnixTimestamp };
