// let attendance = [true, true, false, true, false, true]

//  let Absences = 0
//  for(let i = 0; i < attendance.length; i++) {
//      if(attendance[i] == false) {
//          Absences++
//      }
//  }
// console.log('Absences: ', Absences)



//  let rainChance = [70, 50, 20, 5, 35, 20, 90]

//  for( let i = 0; i < rainChance.length; i++) {
//      if (rainChance[i] >= 35) {
//          console.log ('The chance of rain is',rainChance[i],'%, bring an umbrella.')
//      } else {
//          console.log ('The chance of rain is',rainChance[i],'%, no need for an umbrella.')
//      }
// }



 let reviews = []

 i = 0
 while(i < 20) {
     reviews.push((Math.floor(Math.random()* 5)+1))
     i++
} 
let avg = 0 
for (let t = 0; t< reviews.length; t++){
    avg = avg + reviews[t]
}

avg = avg / 20
if (avg >= 3) {
    console.log('The average review is: ',avg ,' this restaurant is great, lets go downtown!')
} else {
    console.log('The average review is: ',avg ,' that place is nasty!')
}