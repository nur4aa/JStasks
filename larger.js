function integer(a,b) {

    let isInteger = Number.isInteger(a) && Number.isInteger(b);

    if(isInteger && a === b)
        console.log("Both numbers are equal!");

    else if(isInteger)
        console.log("The larger number is " + Math.max(a,b));

    else
        console.log("Please add an integer!");

}

integer(5,2);