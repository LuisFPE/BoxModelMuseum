//Default prices
let adultBMM = 12;
let adultBauhaus = 15;
let studentBMM = 8;
let studentBauhaus = 10;
let childBMM = 5;
let childBauhaus = 7;
let guidedVBMM = 3;
let guidedVBauhaus = 5;

//Discount code
let code = "BMMDISC10";

//Executes validations and submits data
function submitData() {
    let invalid = false;

    if (validateGallery() == true) {
        invalid = true;
    }
    if (validateName() == true) {
        invalid = true;
    }
    if (validateEmail() == true) {
        invalid = true;
    }
    if (validateDate() == true) {
        invalid = true;
    }
    if (validateType() == true) {
        invalid = true;
    }

    if (invalid == false) {
        showFinalPrice();
    }

    else {
        showFailState();
    }
}

//Validates the gallery fields
function validateGallery() {
    let bmmClass = document.getElementById("idBMM").classList;
    let bauhausClass = document.getElementById("idBauhaus").classList;
    let valClass = document.getElementById("valGallery").classList;

    if (!document.getElementById("idBMM").checked) {
        if (!document.getElementById("idBauhaus").checked) {
            valClass.remove("d-none");
            bmmClass.add("border-danger");
            bauhausClass.add("border-danger");

            return true;
        }
    }

    else {
        valClass.add("d-none");
        bmmClass.remove("border-danger");
        bauhausClass.remove("border-danger");

        return false;
    }
}

//Validates the name field
function validateName() {
    let fieldClass = document.getElementById("inputName").classList;
    let valClass = document.getElementById("valName").classList;

    if (document.getElementById("inputName").value == "") {
        valClass.remove("d-none");
        fieldClass.add("border-danger");
        return true;
    }

    else {
        valClass.add("d-none");
        fieldClass.remove("border-danger");
        return false;
    }
}

//Validates the email field
function validateEmail() {
    let fieldClass = document.getElementById("inputEmail").classList;
    let valClass = document.getElementById("valEmail").classList;

    if (document.getElementById("inputEmail").value == "") {
        valClass.remove("d-none");
        fieldClass.add("border-danger");
        return true;
    }

    else {
        valClass.add("d-none");
        fieldClass.remove("border-danger");
        return false;
    }
}

//Validates the date fields
function validateDate() {
    const date = new Date();
    let inputDate;

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const curDate = year + "-" + month + "-" + day;

    let yearClass = document.getElementById("idYear").classList;
    let monthClass = document.getElementById("idMonth").classList;
    let dayClass = document.getElementById("idDay").classList;
    let valClass = document.getElementById("valDate").classList;

    inputDate = document.getElementById("idYear").value + "-" + document.getElementById("idMonth").value + "-" + document.getElementById("idDay").value;
    console.log(inputDate);

    if (inputDate < curDate) {
        valClass.remove("d-none");
        yearClass.add("border-danger");
        monthClass.add("border-danger");
        dayClass.add("border-danger");
        return true;
    }

    else {
        valClass.add("d-none");
        yearClass.remove("border-danger");
        monthClass.remove("border-danger");
        dayClass.remove("border-danger");
        return false;
    }
}

//Validates the ticket type fields
function validateType() {
    let childClass = document.getElementById("idChild").classList;
    let studentClass = document.getElementById("idStudent").classList;
    let adultClass = document.getElementById("idAdult").classList;
    let valClass = document.getElementById("valType").classList;

    if (!document.getElementById("idAdult").checked) {
        if (!document.getElementById("idStudent").checked) {
            if (!document.getElementById("idChild").checked) {
                valClass.remove("d-none");
                childClass.add("border-danger");
                studentClass.add("border-danger");
                adultClass.add("border-danger");

                return true;
            }

            else {
                valClass.add("d-none");
                childClass.remove("border-danger");
                studentClass.remove("border-danger");
                adultClass.remove("border-danger");

                return false;
            }
        }

        else {
            valClass.add("d-none");
            childClass.remove("border-danger");
            studentClass.remove("border-danger");
            adultClass.remove("border-danger");

            return false;
        }
    }

    else {
        valClass.add("d-none");
        childClass.remove("border-danger");
        studentClass.remove("border-danger");
        adultClass.remove("border-danger");

        return false;
    }
}

//Calculates total price for BMM gallery
function calcTotalBMM() {
    let totalPrice = 0;

    if (document.getElementById("idAdult").checked) {
        totalPrice = adultBMM * parseFloat(document.getElementById("idQuantity").value);
    }
    else if (document.getElementById("idStudent").checked) {
        totalPrice = studentBMM * parseFloat(document.getElementById("idQuantity").value);
    }
    else if (document.getElementById("idChild").checked) {
        totalPrice = childBMM * parseFloat(document.getElementById("idQuantity").value);
    }

    if (document.getElementById("idVisit").checked) {
        totalPrice = totalPrice + (guidedVBMM * parseInt(document.getElementById("idQuantity").value));
    }

    if (document.getElementById("idDiscount").value == code) {
        totalPrice = totalPrice - (totalPrice * 0.1);
    }
    
    return totalPrice;
}

//Calculates total price for Bauhaus gallery
function calcTotalBauhaus() {
    let totalPrice = 0;

    if (document.getElementById("idAdult").checked) {
        totalPrice = adultBauhaus * parseFloat(document.getElementById("idQuantity").value);
    }
    else if (document.getElementById("idStudent").checked) {
        totalPrice = studentBauhaus * parseFloat(document.getElementById("idQuantity").value);
    }
    else if (document.getElementById("idChild").checked) {
        totalPrice = childBauhaus * parseFloat(document.getElementById("idQuantity").value);
    }

    if (document.getElementById("idVisit").checked) {
        totalPrice = totalPrice + (guidedVBauhaus * parseInt(document.getElementById("idQuantity").value));
    }

    if (document.getElementById("idDiscount").value == code) {
        totalPrice = totalPrice - (totalPrice * 0.1);
    }
    
    return totalPrice;
}

//Showcases the user information and the total price
function showFinalPrice() {
    let totalPrice = 0;
    let mFooterClass = document.getElementById("modalFooter").classList;
    mFooterClass.remove("d-none");

    if (document.getElementById("idBMM").checked) {
        totalPrice = calcTotalBMM();
        document.getElementById("retGallery").innerHTML = "Gallery: BMM";
    }
    else {
        totalPrice = calcTotalBauhaus();
        document.getElementById("retGallery").innerHTML = "Gallery: Bauhaus";
    }

    document.getElementById("retName").innerHTML = "Name: " + document.getElementById("inputName").value;
    document.getElementById("retMail").innerHTML = "E-mail: " + document.getElementById("inputEmail").value;
    document.getElementById("retDate").innerHTML = "Visit date: " + document.getElementById("idMonth").value + "-" + document.getElementById("idDay").value + "-" + document.getElementById("idYear").value;

    if (document.getElementById("idTime").value == "1") {
        document.getElementById("retTime").innerHTML = "Time slot: 8:30 am - 11:59 am";
    }
    else if (document.getElementById("idTime").value == "2") {
        document.getElementById("retTime").innerHTML = "Time slot: 12:00 am - 4:59 pm";
    }
    else {
        document.getElementById("retTime").innerHTML = "Time slot: 5:00 pm - 9:59 pm";
    }


    if (document.getElementById("idAdult").checked) {
        if (document.getElementById("idBMM").checked) {
            document.getElementById("retAge").innerHTML = "Ticket type: Adult (€" + adultBMM + ")";
        }
        else {
            document.getElementById("retAge").innerHTML = "Ticket type: Adult (€" + adultBauhaus + ")";
        }
    }
    else if (document.getElementById("idStudent").checked) {
        if (document.getElementById("idBMM").checked) {
            document.getElementById("retAge").innerHTML = "Ticket type: Student (€" + studentBMM + ")";
        }
        else {
            document.getElementById("retAge").innerHTML = "Ticket type: Student (€" + studentBauhaus + ")";
        }
    }
    else {
        if (document.getElementById("idBMM").checked) {
            document.getElementById("retAge").innerHTML = "Ticket type: Child (€" + childBMM + ")";
        }
        else {
            document.getElementById("retAge").innerHTML = "Ticket type: Child (€" + childBauhaus + ")";
        }
    }

    document.getElementById("retQuantity").innerHTML = "Quantity: " + document.getElementById("idQuantity").value;

    if (document.getElementById("idVisit").checked) {
        document.getElementById("retGuide").innerHTML = "Guided visit: Yes";
    }
    else {
        document.getElementById("retGuide").innerHTML = "Guided visit: No";
    }

    if (document.getElementById("idDiscount").value == code) {
        document.getElementById("retDiscount").innerHTML = "Discount applied";
    }
    else {
        document.getElementById("retDiscount").innerHTML = "No discounts applied";
    }

    document.getElementById("retTotal").innerHTML = "Total price: €" + totalPrice;
}

function showFailState() {
    let mFooterClass = document.getElementById("modalFooter").classList;
    mFooterClass.add("d-none");

    document.getElementById("retGallery").innerHTML = "Please fill the form accordingly.";
}