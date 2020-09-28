//1.
// const person = [{ name: "Jill" }, { name: "" }, { name: "Bob" }];
// //create a function 'greeting' that maps through the array.
// // Use a ternary.
// // If there is a name it should say 'Hello <name>' otherwise it should say,
// // 'Hello Stranger'.

// const greeting = person.map((value) => {
//   return value.name ? `Hello ${value.name}` : `Hello Stranger`
// })

// console.log(greeting)

//=============================================================================//
//=============================================================================//


//2.
///Create a function that uses ternary to decide whether the person can drive
// If they are below 15 then log 'cannot drive', if they are 15 then log 'can drive with a parent', if they are 16 or above then 'yes they can drive'

// const allowedToDrive = (age) => {
//   return age === 15
//     ? `can drive with Parent` :
//     age < 15
//       ? `cannot drive` : `yes they can drive`
// }

// console.log(allowedToDrive(6))

//=============================================================================//
//=============================================================================//

//3.
// create a variable speedMessage that has a value resulting from a ternary
// if the speed equals 70 it should say '70 is the perfect speed'
// if the speed is greater than or equal to 90 it should say 'Are you trying to get us killed'
// if the speed is less than 50 it should have the value 'Faster please'
// if speed is less than 10 it should say you should not drive
// create a variable allowableSpeed that sets a speed based on the range of numbers that are left. 
// so...if allowableSpeed is set to a number in that range your default output should be
//  `<speed> is a decent speed`
// ---

// // // node 
// let speed = 66
// const allowableSpeed = `${speed} is a decent speed`

// let speedMessage =
//   speed = [70, 90, 50, 10]
//   const [perfectSpeed, killUsSpeed, fasterSpeedPlease, dontDrive] = speed
//   speed === 70
//     ? `70 is the perfect speed` : ''
//       (speed >= 90)
//       ? `Are you trying to get us killed` : ''
//         (speed < 50)
//         ? `Faster please` : ''
//           (speed < 10)
//           ? `you should not drive` : allowableSpeed




// console.log(speedMessage)



// let speedMessage = function (){

//   return speed === 70 
//   ? `70 is the perfect speed`
//   : speed >= 90
//   ? `are you trying to get us killed?`
//   :   50 > speed > 10
//   ? `faster please`
//   : speed < 10
//   ?`you should not drive`
//   : `${speed } is a decent enough speed`;
// }

// console.log(speedMessage(75))



//=============================================================================//
//=============================================================================//
/**************************************************************************************************
 *                                              //4.                                              *
 *        // MAP THROUGH AN ARRAY AND IF THE VALUE IS GREATER THAN 50 IT GOES IN THE ARR1         *
 *                         //IF THE ARRAY IS LESS THAN 50 IT GOES IN ARR2                         *
 *                                // IF THE VALUE IS A STRING ARR3                                *
 * //FLOATING POINT NUMBERS SHOULD ONLY HAVE 2 DECIMAL PLACES WITH THE EXACT NUMBERS NOT ROUNDED  *
 *                                         //USE TERNARY                                          *
 * // USE AN ARRAY METHOD BUT DO NOT RETURN A DATA STRUCTURE WHEN YOU ITERATE THROUGH YOUR ITEMS. *
 *                                           // OUTPUT:                                           *
 *                 //[ 445, 4555 ][ 22, 33.99, 1, 44.98 ] [ 'PEACHES', 'APPLE' ]                  *
 *                                                                                    *
 **************************************************************************************************/
// let arr = ['peaches',
//   444.7,
//   22,
//   undefined,
//   33.99999,
//   null,
//   1,
//   'apple',
//   4555,
//   undefined,
//   NaN,
//   44.98999,
// ]

// let arr1 = []
// let arr2 = []
// let arr3 = []



// arr.forEach((item) => {
//   if (item === undefined || item === null || item === '') return;
//   if (typeof item === 'string') return arr3.push(item);

//   if(!isNaN(item)){

    
//     let n = item.toString();
//     let trunc = +(n.slice(0, n.indexOf('.')) + n.slice(n.indexOf('.'), 5));
//     let dotCheck = n.includes('.');
    
//     dotCheck && item > 50 
//     ? arr1.push(trunc) 
//     : item > 50 
//     ? arr1.push(item)
//     :dotCheck && item < 50
//     arr2.push(trunc)
//     arr2.push(item)
//   }
// })


// console.log(arr1)
// console.log(arr2)
// console.log(arr3)




//=============================================================================//
//=============================================================================//

/******************************************************************************
 *                             // OBJECT METHODS:                             *
 *                 // 5.//USE OBJECT METHODS TO SOLVE PROBLEM                 *
 * // WRITE A METHOD THAT DOUBLES THE PRICE OF EACH ITEM IN THE PRICES OBJECT *
 *       // AND PLACE THOSE VALUES IN A NEW OBJECT CALLED PRICEDOUBLER        *
 ******************************************************************************/
let prices = {
  cigarettes: 5.99,
  coke: { lg: 2.99, sm: 1.99 },
  chips: 2.79,
};

let allPrices = Object.values(prices)
let cokePrices = Object.values(allPrices[1])

allPrices[1] = cokePrices
const cokeValues = allPrices[1].map(values => values * 2)


let priceDoubler = Object.create(prices)
priceDoubler.cigarettes = allPrices[0] * 2
priceDoubler.coke = { lg: cokeValues[0], sm: cokeValues[1] }
priceDoubler.chips = allPrices[2] * 2


console.log(priceDoubler)
//=============================================================================//
//=============================================================================//



// let priceDoubler = {}

// Object.entries(prices).forEach( ([keyOneLevel, valueOneLevel])  => {
//   if(typeof valueOneLevel === 'number'){
//     priceDoubler[keyOneLevel] = valueOneLevel * 2

//   }
//   else if(typeof valueOneLevel === 'object'){{
//     priceDoubler[keyOneLevel] = {}
//     Object.entries(valueOneLevel).forEach(([keySecondLevel, valueSecondLevel]) =>{
//       priceDoubler[keyOneLevel][keySecondLevel ]= 
//       valueSecondLevel * 2;
//     })
//   }}
// })
// console.log(priceDoubler)