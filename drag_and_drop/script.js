// let lists = document.getElementsByClassName('list');
// let leftBox = document.getElementById('left');
// let rightBox = document.getElementById('right');

// for(list of lists){
//     list.addEventListener('dragstart', function(e){
//         let selected = e.target;

//         rightBox.addEventListener('dragover', function(e){
//             e.preventDefault();
//         })
//         rightBox.addEventListener('drop', function(e){
//             rightBox.appendChild(selected);
//             selected = null;
//         })

//         leftBox.addEventListener('dragover', function(e){
//             e.preventDefault();
//         })
//         leftBox.addEventListener('drop', function(e){
//             leftBox.appendChild(selected);
//             selected = null;
//         })
//     })
// }


// ----------------------------------------------------------------------


let lists = document.getElementsByClassName('list');
let leftBox = document.getElementById('left');
let rightBox = document.getElementById('right');

let selected = null; // keeps track of dragged item

// Add dragstart + dragend listeners to each list item
for (let list of lists) {
    list.addEventListener('dragstart', function (e) {
        selected = e.currentTarget; // store dragged element
        e.target.style.opacity = "0.5"; // visual feedback
    });

    list.addEventListener('dragend', function (e) {
        e.target.style.opacity = "1"; // reset style after drop
    });
}

// Make right box accept drops
rightBox.addEventListener('dragover', function (e) {
    e.preventDefault(); // allow drop
});

rightBox.addEventListener('drop', function (e) {
    if (selected) {
        rightBox.appendChild(selected);
        selected = null;
    }
});

// Make left box accept drops
leftBox.addEventListener('dragover', function (e) {
    e.preventDefault();
});

leftBox.addEventListener('drop', function (e) {
    if (selected) {
        leftBox.appendChild(selected);
        selected = null;
    }
});
