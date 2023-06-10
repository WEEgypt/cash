function Cal() {
    var x200 = document.getElementById("200le").value * 200;
    var x100 = document.getElementById("100le").value * 100;
    var x50 = document.getElementById("50le").value * 50;
    var x20 = document.getElementById("20le").value * 20;
    var x10 = document.getElementById("10le").value * 10;
    var x5 = document.getElementById("5le").value * 5;
    document.getElementById("content").style.display = "none";
    document.getElementById("total").style.display = "block";
    document.getElementById("total").innerHTML = "Total Cash: " + parseInt(x200 + x100 + x50 + x20 + x10 + x5);
    document.getElementById("print").style.display = "block";
}
function ResetCal() {
    document.getElementById("content").style.display = "block";
    document.getElementById("total").style.display = "none";
    document.getElementById("print").style.display = "none";
    document.getElementById("200le").value = "";
    document.getElementById("100le").value = "";
    document.getElementById("50le").value = "";
    document.getElementById("20le").value = "";
    document.getElementById("10le").value = "";
    document.getElementById("5le").value = "";
}
function Print() {
    var x200 = document.getElementById("200le").value || 0;
    var x100 = document.getElementById("100le").value || 0;
    var x50 = document.getElementById("50le").value || 0;
    var x20 = document.getElementById("20le").value || 0;
    var x10 = document.getElementById("10le").value || 0;
    var x5 = document.getElementById("5le").value || 0;
    total = parseInt(x200 * 200 + x100 * 100 + x50 * 50 + x20 * 20 + x10 * 10 + x5 * 5);
    document.getElementById("cashdetails").value =
        x200 + " x 200 LE" + "\n" + x100 + " x 100 LE" + "\n" + x50 + " x 50 LE" + "\n" + x20 + " x 20 LE" + "\n" + x10 + " x 10 LE" + "\n" + x5 + " x 5 LE" + "\n" + "\n" + "------------------" + "\n" + "Total Cash: " + total + " LE";
    doc = window.open("", "_blank");
    doc.document.open();
    doc.document.write("<html><head><title>Cash Details</title><style>body {font-family: monospace;}</style></head><body>");
    doc.document.write(document.getElementById("cashdetails").value.replace(/`/gi, "").replace(/ /gi, "&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</body></html>");
    doc.print();
    doc.document.close();
    doc.close();
}
