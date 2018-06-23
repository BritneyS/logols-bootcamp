let statusArray:number[] = [4, 3, 2, 1];
let namesArray:string[] = ["John", "Sue", "Mark", "Jane"];

for (let counter:number = 0; counter < statusArray.length; counter++) {
    let status:string = getStatusDescription(statusArray[counter]);
    printStatusMessage(namesArray[counter] + " has a status of " + status);
}

function getStatusDescription(statusNumber:number):string {
    let status:string = "";
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

function printStatusMessage (message:string):void {
    console.log(message);
}

