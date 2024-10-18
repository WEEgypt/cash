if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}
function Cal() {
  x200 = document.getElementById("200le").value || "0";
  x100 = document.getElementById("100le").value || "0";
  x50 = document.getElementById("50le").value || "0";
  x20 = document.getElementById("20le").value || "0";
  x10 = document.getElementById("10le").value || "0";
  x5 = document.getElementById("5le").value || "0";
  coins = document.getElementById("coins").value || "0";
  visa = document.getElementById("visa").value || "0";
  total = Number(
    x200 * 200 +
      x100 * 100 +
      x50 * 50 +
      x20 * 20 +
      x10 * 10 +
      x5 * 5 +
      coins * 1 +
      visa * 1
  ).toLocaleString();
  document.getElementById("header").innerHTML = "Total";
  document.getElementById("mainDiv").style.display = "none";
  document.getElementById("total").style.display = "block";
  document.getElementById("cash").innerHTML = total + " LE";
  document.getElementById("buttons").style.display = "block";
  document.getElementById("footer").style.display = "none";
}
function Back() {
  document.getElementById("header").innerHTML = "Cash Helper";
  document.getElementById("mainDiv").style.display = "block";
  document.getElementById("total").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("footer").style.display = "block";
}
function Print() {
  var array = [x200, x100, x50, x20, x10, x5, coins, visa];
  let max = Math.max(...array).toString().length;
  var adjustedArray = correctLength(array, max);
  function correctLength(array, length) {
    array.map(function (v, i) {
      if (array[i].length < length) {
        array[i] += Array(length + 1 - array[i].length).join(" ");
      }
    });
    return array;
  }
  document.getElementById("cashdetails").value =
    adjustedArray[0] +
    " * 200 LE" +
    "\n" +
    adjustedArray[1] +
    " * 100 LE" +
    "\n" +
    adjustedArray[2] +
    " * 50 LE" +
    "\n" +
    adjustedArray[3] +
    " * 20 LE" +
    "\n" +
    adjustedArray[4] +
    " * 10 LE" +
    "\n" +
    adjustedArray[5] +
    " * 5 LE" +
    "\n" +
    adjustedArray[6] +
    " * 1 LE" +
    "\n" +
    adjustedArray[7] +
    " * Visa" +
    "\n" +
    "\n" +
    "\n" +
    "Total: " +
    total +
    " LE";
  doc = document.getElementById("printFrame").contentWindow;
  doc.document.open();
  doc.document.write(
    "<html lang=en><head><title>Cash Details</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body><div><p>Cash Details:</p>"
  );
  doc.document.write(
    document
      .getElementById("cashdetails")
      .value.replace(/ /gi, "&nbsp;")
      .replace(/\n/gi, "<br>")
  );
  doc.document.write("</div></body></html>");
  doc.document.close();
  document.getElementById("printFrame").contentWindow.print();
}
function Check(input) {
  if (input.value.length > input.maxLength) {
    input.value = input.value.slice(0, input.maxLength);
  }
}
document
  .getElementById("mainDiv")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      Cal();
    }
  });
