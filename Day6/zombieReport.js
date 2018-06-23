let status = 2;

if (status === 1) {
    console.log("Alive");
} else if (status === 2) {
    console.log("Zombie");
} else if (status === 3) {
    console.log("Dead");
} else if (status === 4) {
    console.log("Unknown");
} else {
    console.log("Unknown");
}

switch (status)
{
    case 1:
        console.log("Alive");
        break;
    case 2:
        console.log("Zombie");
        break;
    case 3:
        console.log("Dead");
        break;
    case 4:
        console.log("Unknown");
        break;
    default:
        console.log("Unknown");
        break;
}

////

let statuses = [1, 2, 3, 4];
let names = ["John", "Sue", "Mark", "Jane"];

console.log("for loop");
    for (let counter = 0; counter < statuses.length;counter++) {
        let status = "";
        if (statuses[counter] === 1) {
            status = "Alive";   
        } else if (statuses[counter] === 2) {
            status = "Zombie";  
        } else if (statuses[counter] === 3) {
            status = "Dead"; 
        } else if (statuses[counter] === 4) {
            status = "Unknown";
        } else {
            status = "Unknown"; 
        }

        console.log(names[counter] + " has a status of " + status);
}


console.log("while loop");
let counter = 0;
while (counter < statuses.length) {
    if (statuses[counter] === 1) {
        console.log("Alive");
    } else if (statuses[counter] === 2) {
        console.log("Zombie");
    } else if (statuses[counter] === 3) {
        console.log("Dead");
    } else if (statuses[counter] === 4) {
        console.log("Unknown");
    } else {
        console.log("Unknown");
    }

    counter++;
}

console.log("do while loop");

do {
    let counter = 0;
    if (statuses[counter] === 1) {
        console.log("Alive");
    } else if (statuses[counter] === 2) {
        console.log("Zombie");
    } else if (statuses[counter] === 3) {
        console.log("Dead");
    } else if (statuses[counter] === 4) {
        console.log("Unknown");
    } else {
        console.log("Unknown");
    }

    counter++;
} while (counter < statuses.length);

console.log("for/of loop");

for (status of statuses) {
    if (status === 1) {
        console.log("Alive");
    } else if (status === 2) {
        console.log("Zombie");
    } else if (status === 3) {
        console.log("Dead");
    } else if (status === 4) {
        console.log("Unknown");
    } else {
        console.log("Unknown");
    }
}

//
console.log("object");
console.log("///////////////");
let statuses2 = 

[
    {
        status: 2,
        name: "Sue"
    },

    {
        status: 3,
        name: "John"
    },

    {
        status: 1,
        name: "Lisa"
    },

    {
        status: 4,
        name: "Carl"
    },

    {
        status: 2,
        name: "Pete"
    },

    {
        status: 2,
        name: "Michelle"
    }

];

for(val of statuses2) {
    let status = "";
    if (val.status === 1) {
        status = "Alive";   
    } else if (val.status === 2) {
        status = "Zombie";  
    } else if (val.status === 3) {
        status = "Dead"; 
    } else if (val.status === 4) {
        status = "Unknown";
    } else {
        status = "Unknown"; 
    }

    console.log(val.name + " has a status of " + status);
}