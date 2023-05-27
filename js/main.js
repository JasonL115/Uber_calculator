

//global scope
var billTbody = getMyEle("bill-tbody");
var spanMoney = document.getElementById("printMoney");

//Optimize document.getElementById()
function getMyEle(ele) {
    return document.getElementById(ele);
}

function getType() {
    var result;
    //get user's choice from radio button
    var uberX = document.getElementById('uberX').checked;
    var uberSUV = document.getElementById('uberSUV').checked;
    var uberBlack = document.getElementById('uberBlack').checked;

    if (uberX) {
        result = "uberX";
    } else if (uberSUV) {
        result = "uberSUV";
    } else if (uberBlack) {
        result = "uberBlack";
    }
    return result;
}



// return sum money base on totalKm user input + waiting times
function calMoney() {
    //get kilometers, times from input boxes
    var kmField = document.getElementById("totalKm").innerHTML;
    var totalKm = parseFloat(document.getElementById("totalKm").value);
    console.log(totalKm);
    var minuteWaited = document.getElementById("minuteWaited").value;
    if (minuteWaited === "") {
        minuteWaited = 0;
    } else {
        minuteWaited = parseFloat(document.getElementById("minuteWaited").value);
    }
    console.log(minuteWaited);

    //display the div ThanhTien block when tinhTien button is clicked
    var totalAmount = document.getElementById("totalAmount");
    totalAmount.style.display = "block";


    //get uber car type
    var carType = getType();
    console.log(getType());

    //every type of uber has different prices
    var totalMoney;
    switch (carType) {
        case 'uberX':
            if (totalKm <= 1) {
                totalMoney = (totalKm * 8.0) + (minuteWaited * 2.0);
            } else if (totalKm > 1 && totalKm <= 20) {
                totalMoney = 8.0 + ((totalKm - 1) * 12.0) + (minuteWaited * 2.0);
            } else if (totalKm > 20) {
                totalMoney = 8.0 + (19 * 12.0) + ((totalKm - 20) * 10.0) + (minuteWaited * 2.0);
            }
            break;

        case 'uberSUV':
            if (totalKm <= 1) {
                totalMoney = (totalKm * 9.0) + (minuteWaited * 3.0);
            } else if (totalKm > 1 && totalKm <= 20) {
                totalMoney = 9.0 + ((totalKm - 1) * 14.0) + (minuteWaited * 3.0);
            } else if (totalKm > 20) {
                totalMoney = 9.0 + (19 * 14.0) + ((totalKm - 20) * 12.0) + (minuteWaited * 3.0);
            }
            break;

        case 'uberBlack':
            if (totalKm <= 1) {
                totalMoney = (totalKm * 10.0) + (minuteWaited * 3.5);
            } else if (totalKm > 1 && totalKm <= 20) {
                totalMoney = 10.0 + ((totalKm - 1) * 16.0) + (minuteWaited * 3.5);
            } else if (totalKm > 20) {
                totalMoney = 10.0 + (19 * 16.0) + ((totalKm - 20) * 14.0) + (minuteWaited * 3.5);
            }
            break;
    }

    //display total money on totalMoney span tag
    if (totalMoney > 0) {
        spanMoney.innerHTML = "";
        spanMoney.innerHTML = parseFloat(totalMoney) + " AUD";
    } else if (kmField === "") {
        spanMoney.innerHTML = "You haven't started the trip yet";
    }
}


function exportBill() {
    var minuteWaited = parseFloat(document.getElementById("minuteWaited").value);
    //get kilometers, times from input boxes
    var totalKm = parseFloat(document.getElementById("totalKm").value);
    //get uber car type
    var carType = getType();
    //every type of uber has different prices
    var totalMoney;
    switch (carType) {
        case 'uberX':
            if (totalKm <= 1) {
                billTbody.innerHTML = "";
                createNewRow("First Km", (totalKm + " Km"), "8.0 $", "8 Aud");
                createWaitingRow("The waited time is: " + (minuteWaited * 2.0) + " $");
                createWaitingRow("Total amount is: " + spanMoney.innerHTML);
                createWaitingRow("-----Have a good trip!-----");
            } else if (totalKm > 1 && totalKm <= 20) {
                billTbody.innerHTML = "";
                createNewRow("First Km", (1 + " Km"), "8.0 $", "8 Aud");
                createNewRow("Km 2 -> 19", (totalKm - 1 + " Km"), "12.0 $", ((totalKm - 1) * 12.0) + " AUD");
                createWaitingRow("The waited time is: " + (minuteWaited * 2.0) + " $");
                createWaitingRow("Total amount is: " + spanMoney.innerHTML);
                createWaitingRow("-----Have a good trip!-----");

            } else if (totalKm > 20) {
                billTbody.innerHTML = "";
                createNewRow("First Km", (1 + " Km"), "8.0 $", "8 Aud");
                createNewRow("Km 2 -> 19", (19 + " Km"), "12.0 $", (19 * 12.0) + " Aud");
                createNewRow("Above 20km", (parseFloat(totalKm - 20) + " Km"), "10.0 $", parseFloat((totalKm - 20) * 10.0) + " Aud");
                createWaitingRow("The waited time is: " + (minuteWaited * 2.0) + ' AUD');
                createWaitingRow("Total amount is: " + spanMoney.innerHTML);
                createWaitingRow("-----Have a good trip!-----");
            }
            break;

        case 'uberSUV':
            if (totalKm <= 1) {
                billTbody.innerHTML = "";
                createNewRow("First Km", (totalKm + " Km"), "9.0 $", "9 Aud");
                createWaitingRow("The waited time is: " + (minuteWaited * 3.0) + " AUD");
                createWaitingRow("Total amount is: " + spanMoney.innerHTML);
                createWaitingRow("-----Have a good trip!-----");
            } else if (totalKm > 1 && totalKm <= 20) {
                billTbody.innerHTML = "";
                createNewRow("First Km", (1 + " Km"), "9.0 $", "9 Aud");
                createNewRow("Km 2 -> 19", (totalKm - 1 + " Km"), "14.0 $", ((totalKm - 1) * 14.0) + " AUD")
                createWaitingRow("The waited time is: " + (minuteWaited * 3.0) + " AUD");
                createWaitingRow("Total amount is: " + spanMoney.innerHTML);
                createWaitingRow("-----Have a good trip!-----");
            } else if (totalKm > 20) {
                billTbody.innerHTML = "";
                createNewRow("First Km", (1 + " Km"), "9.0 $", "9 Aud");
                createNewRow("Km 2 -> 19", (19 + " Km"), "14.0 $", (19 * 14.0) + " Aud");
                createNewRow("About 20km", (parseFloat(totalKm - 20) + " Km"), "12.0 $", parseFloat((totalKm - 20) * 12.0) + " Aud");
                createWaitingRow("The waited time is: " + (minuteWaited * 3.0) + " AUD");
                createWaitingRow("Total amount is: " + spanMoney.innerHTML);
                createWaitingRow("-----Have a good trip!-----");
            }
            break;

        case 'uberBlack':
            if (totalKm <= 1) {
                billTbody.innerHTML = "";
                createNewRow("First Km", (totalKm + " Km"), "10.0 $", "10 Aud");
                createWaitingRow("The waited time is: " + (minuteWaited * 3.5) + " AUD");
                createWaitingRow("Total amount is: " + spanMoney.innerHTML);
                createWaitingRow("-----Have a good trip!-----");
            } else if (totalKm > 1 && totalKm <= 20) {
                billTbody.innerHTML = "";
                createNewRow("First Km", (1 + " Km"), "10.0 $", "10 Aud");
                createNewRow("Km 2 -> 19", (totalKm - 1 + " Km"), "16.0 $", ((totalKm - 1) * 16.0) + " AUD");
                createWaitingRow("The waited time is: " + (minuteWaited * 3.5) + " AUD");
                createWaitingRow("Total amount is: " + spanMoney.innerHTML);
                createWaitingRow("-----Have a good trip!-----");
            } else if (totalKm > 20) {
                billTbody.innerHTML = "";
                createNewRow("First Km", (1 + " Km"), "10.0 $", "10 Aud");
                createNewRow("Km 2 -> 19", (19 + " Km"), "16.0 $", (19 * 16.0) + " Aud");
                createNewRow("Above 20Km", (parseFloat(totalKm - 20) + " Km"), "14.0 $", parseFloat((totalKm - 20) * 14.0) + " Aud");
                createWaitingRow("The waited time is: " + (minuteWaited * 3.5) + " AUD");
                createWaitingRow("Total amount is: " + spanMoney.innerHTML);
                createWaitingRow("-----Have a good trip!-----");
            }
            break;
    }
}

function createNewRow(firstColData, secondColData, thirdColData, fourthColData) {
    var billTr = document.createElement("tr");
    billTbody.appendChild(billTr);
    var firstCol = document.createElement("td");
    firstCol.innerHTML = firstColData
    billTr.appendChild(firstCol);
    var secondCol = document.createElement("td");
    secondCol.innerHTML = secondColData;
    billTr.appendChild(secondCol);
    var thirdCol = document.createElement("td");
    thirdCol.innerHTML = thirdColData;
    billTr.appendChild(thirdCol);
    var fourthCol = document.createElement("td");
    fourthCol.innerHTML = fourthColData;
    billTr.appendChild(fourthCol);
}

function createWaitingRow(data) {
    var billTr = document.createElement("tr");
    billTbody.appendChild(billTr);
    var bigRow = document.createElement("td");
    bigRow.colSpan = "4";
    bigRow.innerHTML = data;
    billTr.appendChild(bigRow);
}

getMyEle("cal-money-btn").addEventListener("click", function() {
    calMoney();
});

getMyEle("export-bill-btn").addEventListener("click", function() {
    calMoney();
    exportBill();
});

document.querySelectorAll("type").forEach(element => {
    element.addEventListener("click", function() {
        getType();
    });
});

