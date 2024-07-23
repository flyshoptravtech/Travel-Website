const toIST = (date) => {
    // Create a new Date object for the given date
    const utcDate = new Date(date);

    // Convert the date to milliseconds since epoch and add the IST offset
    const istDate = new Date(utcDate.getTime() + (5.5 * 60 * 60 * 1000));

    // Format the date as 'YYYY-MM-DD'
    const year = istDate.getUTCFullYear();
    const month = String(istDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(istDate.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export default toIST;