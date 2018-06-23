let statuses = [1, 2, 3, 4];
let names = ["John", "Sue", "Mark", "Jane"];

console.log("for loop");
for (let counter = 0; counter < statuses.length; counter++) {
    let status = getStatus(statuses[counter]);
    printStatus(names[counter] + " has a status of " + status);
}

function getStatus(statusNumber) {
    let status = "";
        if (statusNumber === 1) {
            status = "Alive";   
        } else if (statusNumber === 2) {
            status = "Zombie";  
        } else if (statusNumber === 3) {
            status = "Dead"; 
        } else if (statusNumber === 4) {
            status = "Unknown";
        } else {
            status = "Unknown"; 
        }

        return status;

}

function printStatus (message) {
    console.log(message);
}