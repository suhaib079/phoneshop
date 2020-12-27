function discount() {
    var discount = prompt("enter ur discount code");
    document.write("<p> " + "ur discount value is " + discount + "</p>");
    var flag = true;
    document.write("<p>" + name + "</p>");
}

var answer
function requiredFunction() {
    answer = prompt('enter ur name');
    if (answer == "") {
        requiredFunction();
    }
}
requiredFunction();
function pics() {
    var n = prompt("how many pic u want to see");
    for (var i = 0; i < n; i++) {
        document.write('<img src="https://cdn.pocket-lint.com/r/s/970x/assets/images/153177-phones-review-hands-on-samsung-galaxy-note-20-ultra-review-image20-dsp5khda0l-jpg.webp">'
        );
    }

    var flag = true;
}


function budget() {
    var flag;
    while (flag) {
        var price = prompt("enter ur budget");
        if (price > 250) {
            flag = false;
            alert("iphone");
            document.getElementById("phone1").style.display = "none";
        } else {
            alert("samsung");
            flag = false
        }
    }
}

budget()
pics()
discount()
