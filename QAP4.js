//QAP4: Motel Customer Information
//By Brad Ayers
//March 20-24, 2024

//This program will prompt the user for information about a customer staying at a motel. The user will be asked for the customer's name, date of birth, room preference, payment card information, mailing address, contact information, and stay information. The program will then display the customer information.

//I have included some default values for the prompts to make testing easier. These can be removed or changed as needed. The prompts are commented out and can be uncommented to run the program in the browser console. Please be gentle with the input validation and use believable values :)

//To use test values: uncomment lines 13-48 and comment lines 50-270. Comment lines 13-48 and uncomment lines 50-270 to use prompts.

//I chose not to ask the customer about their gender.

let firstName = 'John';
let lastName = 'Doe';
let year = '2000';
let month = '1';
let date = '1';
let roomPref = 'OGS';
let cardType = 'V';
let cardNum = '1234567890123456';
let cvv = '123';
let streetAdd = '123 Main St';
let city = 'Anytown';
let provState = 'ON';
let postZip = 'A1B 2C3';
let country = 'Canada';
let homePh = '1234567890';
let cellPh = '1234567890';
let email = 'jdoe69@gmail.com';
let checkinYear = '2024';
let checkinMonth = '3';
let checkinDate = '20';
let checkoutYear = '2024';
let checkoutMonth = '3';
let checkoutDate = '24';
const dateNumber = parseInt(date);
const monthNumber = parseInt(month);
const yearNumber = parseInt(year);
let roomPrefArray = roomPref.split('').map(pref => {
    switch (pref) {
        case 'O':
            return 'Ocean view';
        case 'G':
            return 'Garden view';
        case 'S':
            return 'Street view';
    }
})

// let firstName;
// while (true) {
//     firstName = prompt("Please enter the customer's first name: ");
//     if (typeof firstName === 'string' && firstName.trim() !== '') {
//         break;
//     }
//     alert("Invalid input. Please enter a valid first name.");
// }
// let lastName;
// while (true) {
//     lastName = prompt("Please enter the customer's last name: ");
//     if (typeof lastName === 'string' && lastName.trim() !== '') {
//         break;
//     }
//     alert("Invalid input. Please enter a valid last name.");
// }
// let year;
// while (true) {
//     year = prompt("Please enter the customer's year of birth: ");
//     if (year.match(/^\d{4}$/)) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid year of birth (4 digits).");
// }
// let month;
// while (true) {
//     month = prompt("Please enter the customer's month of birth (1-12): ");
//     const monthNumber = parseInt(month);
//     if (Number.isInteger(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid month (1-12).");
// }
// let date;
// let dateNumber;
// let monthNumber;
// let yearNumber;
// while (true) {
//     date = prompt("Please enter the customer's date of birth: ");
//     dateNumber = parseInt(date);
//     monthNumber = parseInt(month);
//     yearNumber = parseInt(year);
//     const isLeapYear = yearNumber % 400 === 0 || (yearNumber % 100 !== 0 && yearNumber % 4 === 0);
//     const maxDate = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][monthNumber - 1];
//     if (Number.isInteger(dateNumber) && dateNumber >= 1 && dateNumber <= maxDate) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid date based on the month and year.");
// }

// let roomPref = prompt("Indicate the customer's room preference starting with most preferred (ie; OGS).\n(Ocean view = O, Garden view = G, Street view = S): ");
// roomPref = roomPref.toUpperCase();
// let roomPrefArray;
// const validOptions = ['O', 'G', 'S'];
// const isValidInput = roomPref.split('').every(pref => validOptions.includes(pref));

// if (isValidInput) {
//     roomPrefArray = roomPref.split('').map(pref => {
//         switch (pref) {
//             case 'O':
//                 return 'Ocean view';
//             case 'G':
//                 return 'Garden view';
//             case 'S':
//                 return 'Street view';
//         }
//     });

//     console.log(roomPrefArray);
// } else {
//     console.log("Invalid input. Please enter only 'O', 'G', or 'S' as room preferences.");
// }

// let cardType;
// while (true) {
//      cardType = prompt("Please enter the type of payment card.\n(Visa = V, Master Card = M, Amex = A): ");
//      cardType = cardType.toUpperCase();
//      if (['V', 'M', 'A'].includes(cardType)) {
//          break;
//      }
//      alert("Invalid input. Please enter a valid card type (V, M, or A).");
// }
// let cardNum;
// while (true) {
//     cardNum = prompt("Please enter the customer's 16-digit card number: ")
//     if (cardNum.match(/^\d{16}$/)) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid 16-digit card number.");
// }
// let cvv;
// while (true) {
//     cvv = prompt("Please enter the 3-digit cvv (back of card): ")
//     if (cvv.match(/^\d{3}$/)) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid 3-digit cvv.");
// }
// let streetAdd;
// while (true) {
//     streetAdd = prompt("Please enter the customer's street address: ");
//     if (typeof streetAdd === 'string' && streetAdd.trim() !== '') {
//         break;
//     }
//     alert("Invalid input. Please enter a valid street address.");
// }
// let city;
// while (true) {
//     city = prompt("Please enter the customer's city of residence: ");
//     if (typeof city === 'string' && city.trim() !== '') {
//         break;
//     }
//     alert("Invalid input. Please enter a valid city.");
// }
// let provState;
// while (true) {
//     provState = prompt("Please enter the customer's province / state of residence: ");
//     if (typeof provState === 'string' && provState.trim() !== '') {
//         break;
//     }
//     alert("Invalid input. Please enter a valid province / state.");
// }
// let postZip;
// while (true) {
//     postZip = prompt("Please enter the customer's postal or zip code: ");
//     if (typeof provState === 'string' && provState.trim() !== '') {
//         break;
//     }
//     alert("Invalid input. Please enter a valid postal or zip code.");
// }
// let country;
// while (true) {
//     country = prompt("Please enter the customer's country of residence: ");
//     if (typeof country === 'string' && country.trim() !== '') {
//         break;
//     }
//     alert("Invalid input. Please enter a valid country.");
// }
// let homePh;
// while (true) {
//     homePh = prompt("Please enter the customer's home phone number: ");
//     if (homePh.match(/^\d{10}$/)) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid 10-digit phone number.");
// }
// let cellPh;
// while (true) {
//     cellPh = prompt("Please enter the customer's cell phone number: ");
//     if (cellPh.match(/^\d{10}$/)) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid 10-digit phone number.");
// }
// let email;
// while (true) {
//     email = prompt("Please enter the customer's email address: ");
//     if (email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid email address.");
// }

// let checkinYear;
// while (true) {
//     checkinYear = prompt("Please enter year of check-in date: ");
//     if (checkinYear.match(/^\d{4}$/)) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid year (4 digits).");
// }
// let checkinMonth;
// while (true) {
//     checkinMonth = prompt("Please enter month of check-in date: ");
//     const monthNumber = parseInt(checkinMonth);
//     if (Number.isInteger(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid month (1-12).");
// }
// let checkinDate;
// while (true) {
//     checkinDate = prompt("Please enter day of check-in date: ");
//     const dateNumber = parseInt(checkinDate);
//     const monthNumber = parseInt(checkinMonth);
//     const yearNumber = parseInt(checkinMonth);
//     const isLeapYear = yearNumber % 400 === 0 || (yearNumber % 100 !== 0 && yearNumber % 4 === 0);
//     const maxDate = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][monthNumber - 1];
//     if (Number.isInteger(dateNumber) && dateNumber >= 1 && dateNumber <= maxDate) {
//         break;
//     }
//     alert("Invalid input. Please enter a valid date based on the month and year.");
// }
// let checkoutYear;
// let checkoutMonth;
// let checkoutDate;
// while (true) {
//     checkoutYear = prompt("Please enter year of check-out date: ");
//     if (!checkoutYear.match(/^\d{4}$/)) {
//         alert("Invalid input. Please enter a valid year (4 digits).");
//         continue;
//     }

//     checkoutMonth = prompt("Please enter month of check-out date: ");
//     const monthNumber = parseInt(checkoutMonth);
//     if (!(Number.isInteger(monthNumber) && monthNumber >= 1 && monthNumber <= 12)) {
//         alert("Invalid input. Please enter a valid month (1-12).");
//         continue;
//     }

//    checkoutDate = prompt("Please enter day of check-out date: ");
//     const dateNumber = parseInt(checkoutDate);
//     const yearNumber = parseInt(checkoutYear);
//     const isLeapYear = yearNumber % 400 === 0 || (yearNumber % 100 !== 0 && yearNumber % 4 === 0);
//     const maxDate = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][monthNumber - 1];
//     if (!(Number.isInteger(dateNumber) && dateNumber >= 1 && dateNumber <= maxDate)) {
//         alert("Invalid input. Please enter a valid date based on the month and year.");
//         continue;
//     }
//     break;
// }

const checkinYearNumber = parseInt(checkinYear);
const checkinMonthNumber = parseInt(checkinMonth);
const checkinDateNumber = parseInt(checkinDate);

const birthday = new Date(yearNumber, monthNumber - 1, dateNumber);
const arrivalDate = new Date(checkinYearNumber, checkinMonthNumber - 1, checkinDateNumber);

const ageDiff = arrivalDate.getFullYear() - birthday.getFullYear();
const isBeforeBirthday = arrivalDate.getMonth() < birthday.getMonth() || (arrivalDate.getMonth() === birthday.getMonth() && arrivalDate.getDate() < birthday.getDate());

const age = isBeforeBirthday ? ageDiff - 1 : ageDiff;

const checkOutYearNumber = parseInt(checkoutYear);
const checkOutMonthNumber = parseInt(checkoutMonth);
const checkOutDateNumber = parseInt(checkoutDate);
const departureDate = new Date(checkOutYearNumber, checkOutMonthNumber - 1, checkOutDateNumber);
const isBirthdayDuringStay = (arrivalDate.getMonth() === birthday.getMonth() && arrivalDate.getDate() <= birthday.getDate() && birthday.getDate() <= departureDate.getDate());
const stayLength = Math.ceil((departureDate - arrivalDate) / (1000 * 60 * 60 * 24));

const customer = {
    "name": {
        "firstName": firstName,
        "lastName": lastName,
    },
    "dob": {
        "year": year,
        "month": month,
        "date": date,
        "age": age
    },
    "roomPref": roomPrefArray,
    "payMeth": {
        "cardType": cardType,
        "cardNum": cardNum,
        "cvv": cvv,
    },
    "mailingAddress": {
        "streetAdd": streetAdd,
        "city": city,
        "provState": provState,
        "postZip": postZip,
        "country": country,
    },
    "contacts": {
        "homePh": homePh,
        "cellPh": cellPh,
        "email": email,
    },
    "stay": {
        "checkIn": {
            "year": checkinYear,
            "month": checkinMonth,
            "date": checkinDate,
        },
        "checkOut": {
            "year": checkoutYear,
            "month": checkoutMonth,
            "date": checkoutDate,
        },
        "stayLength": stayLength,
        "isBirthdayDuringStay": isBirthdayDuringStay,
    }
}

const customerInfo = `
Customer Information:
Name: ${customer.name.firstName} ${customer.name.lastName}
Date of Birth: ${customer.dob.year}-${customer.dob.month}-${customer.dob.date}
Age: ${customer.dob.age}
Room Preference: ${customer.roomPref}
Payment Method: ${customer.payMeth.cardType} - ${customer.payMeth.cardNum}
Mailing Address: 
    Street: ${customer.mailingAddress.streetAdd}
    City: ${customer.mailingAddress.city}
    Province/State: ${customer.mailingAddress.provState}
    Postal/Zip Code: ${customer.mailingAddress.postZip}
    Country: ${customer.mailingAddress.country}
Contacts:
    Home Phone: ${customer.contacts.homePh}
    Cell Phone: ${customer.contacts.cellPh}
    Email: ${customer.contacts.email}
Stay Information:
    Check-in Date: ${customer.stay.checkIn.year}-${customer.stay.checkIn.month}-${customer.stay.checkIn.date}
    Check-out Date: ${customer.stay.checkOut.year}-${customer.stay.checkOut.month}-${customer.stay.checkOut.date}
    Stay Length: ${customer.stay.stayLength} days, ${customer.stay.stayLength - 1} nights
    Birthday During Stay: ${customer.stay.isBirthdayDuringStay ? 'Yes' : 'No'}
`;

console.log(customerInfo);