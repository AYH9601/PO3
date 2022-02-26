function booking() {
    var departure = document.querySelector("departure");
    var destination = document.querySelector("destination");
    var date = document.querySelector("date");
    var passanger = document.querySelector("passanger");
    var seat = document.querySelector("seat");

    if (departure.value == "") {
        alert(".");
        departure.focus();
        return false;
    }

    if (destination.value == "") {
        alert(".");
        destination.focus();
        return false;
    }

    if (date.value == "") {
        alert(".");
        date.focus();
        return false;
    }

    if (passanger.value == "") {
        alert(".");
        passanger.focus();
        return false;
    }

    if (seat.value == "") {
        alert(".");
        seat.focus();
        return false;
    }


    document.booking.submit();
}