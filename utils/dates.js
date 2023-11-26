
/*
  * Dates are ZERO based
  * Yes, you read that correctly, DATES ARE ZERO BASED HERE
  * 
  * 
*/
const createMessage = require('./createMessage');

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
 * @description formatDate
 * @param {string} date string you wnat formatted
 * @param {string} format (optional) you with to use
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
function formatDate (date, format = '') {

    if (!date) {
        return createMessage('Date Format Error', 'Cannot format empty date', 'formatDate');
    }

    const month = months[ date.getMonth() ];
    const day = date.getDay();
    const year = date.getFullYear();
    let formattedDate = month + '-' + day + '-' + year;

    // check format; if nothing was passed then assume default
    if (format === '') {
        return formattedDate;
    }

    if (format === 'dmy') {
        // day month year
        formattedDate = day + '-' + month + '-' + year;
    }
    else if (format === 'ymd') {
        // day month year
        formattedDate = year + '-' + month + '-' + day;
    }
    else {
        // default to month day year
        // format not found assume default then

    }

    return formattedDate;
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

module.exports = { formatDate, getUnixTimestamp };
