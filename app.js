// let friends = ['Katherine', 'Sophia', 'Xan', 'Torin', 'Terrance'];

// function codeInTheFile(friends) {
//     let word = "lines"
//     let count = 99;
//     while (count > 0) {
//         if (count == 1) {
//             word = 'line';
//         }
//         console.log(count + " " + word + " of code in the file,");
//         console.log(count + " " + word + " of code;");
//         console.log(friends + " strikes one out, clears it all out,");
//         if (count == 1) {
//             console.log("No more lines of code in the file!");
//         }
//         count = count - 1
//     }
// }
// for (var i = 0; i < friends.length; i++) {
//     codeInTheFile(friends[i])

// }


// // var num = 99;

// // while (num >= 1) {

// //      if (num ===2)  {
// //       console.log(num + " lines of code in the file, " + num + " lines of code; Aaron strikes one out, clears it all out, " + (num-1) + " line of code in the file.")
// // } else if (num === 1) {
// //       console.log(num + " line of code in the file, " + num + " line of code; Aaron strikes one out, clears it all out, " + (num-1) + " lines of code in the file.")

// // } else {
// //     console.log(num + " lines of code in the file, " + num + " lines of code; Aaron strikes one out, clears it all out, " + (num-1) + " lines of code in the file.")
// // }

// //     num--; 
// // }

// // --------------------------------------

let friends = ['Katherine', 'Sophia', 'Xan', 'Amber', 'Torin'];

function song() {

    var num = 99;

    while (num >= 1) {

        if (num === 2) {
            console.log(num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " strikes one out, clears it out, " + (num - 1) + " line of code in the file")

        } else if (num === 1) {
            console.log(num + " line of code in the file, " + num + " line of code; " + friends[i] + " strikes one out clears it all out, " + (num - 1) + " lines of code in the file.")

        } else {
            console.log(num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " strikes one out clears it all out, " + (num - 1) + " lines of code in the file.")
        }

        num--;
    }
}
for (var i = 0; i < friends.length; i++) {
    song()
}
