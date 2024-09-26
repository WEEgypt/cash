function EnableRestore() {
    if (localStorage.getItem("areaRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row__1.style.display = "none";
        row__2.style.display = "block";
        sessionStorage.removeItem("areas");
        sessionStorage.removeItem("newarea");
    } else {
        sessionStorage.setItem("areas", localStorage.getItem("areas") || 1);
        localStorage.setItem("currentArea", "1");
    }
    if (localStorage.getItem("areas") > "1") {
        let x = localStorage.getItem("areas");
        for (i = 1; i <= x; i++) {
            if (localStorage.getItem("deleteArea" + i) == "true") continue;
            value = parseInt([i]);
            document.getElementById("areas").options.add(new Option(localStorage.getItem("areaname.area." + value), value));
        }
        document.getElementById("areas").options.add(new Option("Add Another Area", "newarea"));
    }
    if (localStorage.getItem("activeAreas") > "1") {
        multi.style.display = "block";
        restore.style.display = "none";
    }
    document.getElementById("areas").value = localStorage.getItem("selectedArea");
}
function RestoreSelected() {
    if (document.getElementById("areas").value !== "newarea") {
        localStorage.setItem("selectedArea", document.getElementById("areas").value);
    }
}
function GetDate() {
    document.getElementById("day").value = new Date().getDate();
    document.getElementById("month").value = new Date().getMonth() + 1;
    document.getElementById("year").value = new Date().getFullYear();
    DaysFix();
}
function DaysFix() {
    var daysinmonth = new Date(document.getElementById("year").value, document.getElementById("month").value, 0).getDate();
    if (daysinmonth < 31 && document.getElementById("day").value == 31) {
        document.getElementById("day").selectedIndex = "30";
    }
    if (daysinmonth < 30 && document.getElementById("day").value == 30) {
        document.getElementById("day").selectedIndex = "29";
    }
    if (daysinmonth < 29 && document.getElementById("day").value == 29) {
        document.getElementById("day").selectedIndex = "28";
    }
    if (daysinmonth < 31 && document.getElementById("day").length == "32") {
        const list = document.getElementById("day");
        list.removeChild(list.lastElementChild);
    }
    if (daysinmonth < 30 && document.getElementById("day").length == "31") {
        const list = document.getElementById("day");
        list.removeChild(list.lastElementChild);
    }
    if (daysinmonth < 29 && document.getElementById("day").length == "30") {
        const list = document.getElementById("day");
        list.removeChild(list.lastElementChild);
    }
    if (daysinmonth == 31 && document.getElementById("day").length == "31") {
        document.getElementById("day").options.add(new Option("31", "31"));
    }
    if (daysinmonth == 31 && document.getElementById("day").length == "30") {
        document.getElementById("day").options.add(new Option("30", "30"));
        document.getElementById("day").options.add(new Option("31", "31"));
    }
    if (daysinmonth == 31 && document.getElementById("day").length == "29") {
        document.getElementById("day").options.add(new Option("29", "29"));
        document.getElementById("day").options.add(new Option("30", "30"));
        document.getElementById("day").options.add(new Option("31", "31"));
    }
    if (daysinmonth == 30 && document.getElementById("day").length == "30") {
        document.getElementById("day").options.add(new Option("30", "30"));
    }
    if (daysinmonth == 30 && document.getElementById("day").length == "29") {
        document.getElementById("day").options.add(new Option("29", "29"));
        document.getElementById("day").options.add(new Option("30", "30"));
    }
    if (daysinmonth == 29 && document.getElementById("day").length == "29") {
        document.getElementById("day").options.add(new Option("29", "29"));
    }
}
function NextTransform() {
    gsap.from("#multi", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#restore", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#basic", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#target", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#achieved", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: 50, opacity: 0 });
}
function BackTransform() {
    gsap.from("#multi", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#restore", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#basic", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#target", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#achieved", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: -50, opacity: 0 });
}
function Next__1() {
    if (document.getElementById("areas").value == "newarea") {
        multi.style.display = "none";
        NewArea();
    } else {
        multi.style.display = "none";
        restore.style.display = "block";
        newarea.style.display = "none";
        NextTransform();
    }
}
function Next__2() {
    Next__3();
}
function Next__3() {
    if (basic.style.display === "block") {
        basic.style.display = "none";
        target.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Next__4() {
    if (document.getElementById("day").value == 1 && target.style.display === "block") {
        target.style.display = "none";
        today.style.display = "block";
    } else {
        target.style.display = "none";
        achieved.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Next__5() {
    if (achieved.style.display === "block") {
        achieved.style.display = "none";
        today.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Back__1() {
    window.location.href = "index.html";
}
function Back__2() {
    if (localStorage.getItem("activeAreas") > "1") {
        document.getElementById("areas").innerHTML = "";
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("areas");
        for (i = 1; i <= x; i++) {
            if (localStorage.getItem("deleteArea" + i) == "true") continue;
            value = parseInt([i]);
            document.getElementById("areas").options.add(new Option(localStorage.getItem("areaname.area." + value), value));
        }
        document.getElementById("areas").options.add(new Option("Add Another Area", "newarea"));
        document.getElementById("areas").value = localStorage.getItem("selectedArea");
        BackTransform();
    } else {
        Back__1();
    }
}
function Back__3() {
    if (basic.style.display === "block" && localStorage.getItem("activeAreas") > "1" && sessionStorage.getItem("newarea") == "true") {
        basic.style.display = "none";
        multi.style.display = "block";
        document.getElementById("areas").innerHTML = "";
        let x = localStorage.getItem("areas");
        for (i = 1; i <= x; i++) {
            if (localStorage.getItem("deleteArea" + i) == "true") continue;
            value = parseInt([i]);
            document.getElementById("areas").options.add(new Option(localStorage.getItem("areaname.area." + value), value));
        }
        document.getElementById("areas").options.add(new Option("Add Another Area", "newarea"));
        document.getElementById("areas").value = localStorage.getItem("selectedArea");
    } else if (basic.style.display === "block") {
        basic.style.display = "none";
        restore.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
    sessionStorage.removeItem("areas");
    sessionStorage.removeItem("newarea");
}
function Back__4() {
    if (target.style.display === "block") {
        target.style.display = "none";
        basic.style.display = "block";
        area.style.display = "block";
    }
    if (localStorage.getItem("areaRestore") == "true") {
        row__1.style.display = "none";
        row__2.style.display = "block";
    } else {
        row__1.style.display = "block";
        row__2.style.display = "none";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__5() {
    if (achieved.style.display === "block") {
        achieved.style.display = "none";
        target.style.display = "block";
    }
    basic.style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__6() {
    if (document.getElementById("day").value == 1 && today.style.display === "block") {
        today.style.display = "none";
        target.style.display = "block";
    } else {
        today.style.display = "none";
        achieved.style.display = "block";
    }
    basic.style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__7() {
    if (report.style.display === "block") {
        report.style.display = "none";
        today.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__8() {
    Back__7();
    basic.style.display = "block";
    area.style.display = "none";
}
function Continue() {
    let x = document.getElementById("areas").value || 1;
    localStorage.setItem("currentArea", x);
    restore.style.display = "none";
    basic.style.display = "block";
    area.style.display = "none";
    row__1.style.display = "none";
    row__2.style.display = "none";
    today.style.display = "block";
    document.getElementById("areaname").value = localStorage.getItem("areaname.area." + x);
    document.getElementById("achievedmobile").value = localStorage.getItem("achievedmobile.area." + x);
    document.getElementById("targetmobile").value = localStorage.getItem("targetmobile.area." + x);
    document.getElementById("achievedwegold").value = localStorage.getItem("achievedwegold.area." + x);
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.area." + x);
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.area." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.area." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.area." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.area." + x);
    document.getElementById("achievedwallet").value = localStorage.getItem("achievedwallet.area." + x);
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.area." + x);
    document.getElementById("todaymobile").value = "";
    document.getElementById("todaywegold").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    NextTransform();
    sessionStorage.setItem("areas", localStorage.getItem("areas"));
}
function NewMonth() {
    let x = document.getElementById("areas").value || 1;
    localStorage.setItem("currentArea", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("areaname").value = localStorage.getItem("areaname.area." + x);
    document.getElementById("achievedmobile").value = "";
    document.getElementById("targetmobile").value = localStorage.getItem("targetmobile.area." + x);
    document.getElementById("achievedwegold").value = "";
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.area." + x);
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.area." + x);
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.area." + x);
    document.getElementById("achievedwallet").value = "";
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.area." + x);
    document.getElementById("todaymobile").value = "";
    document.getElementById("todaywegold").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    NextTransform();
    sessionStorage.setItem("areas", localStorage.getItem("areas"));
}
function NewArea() {
    sessionStorage.setItem("newarea", "true");
    areas = parseInt(localStorage.getItem("areas"));
    x = areas + 1;
    sessionStorage.setItem("areas", x);
    localStorage.setItem("currentArea", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("areaname").value = "";
    document.getElementById("achievedmobile").value = "";
    document.getElementById("targetmobile").value = "";
    document.getElementById("achievedwegold").value = "";
    document.getElementById("targetwegold").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("achievedwallet").value = "";
    document.getElementById("targetwallet").value = "";
    document.getElementById("todaymobile").value = "";
    document.getElementById("todaywegold").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    NextTransform();
}
function GenerateSalesReport() {
    if (today.style.display === "block") {
        today.style.display = "none";
        report.style.display = "block";
    }
    if (basic.style.display === "block") {
        basic.style.display = "none";
        row__3.style.display = "none";
        row__4.style.display = "block";
    } else {
        row__3.style.display = "block";
        row__4.style.display = "none";
    }
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);
    date = day + "-" + month + "-" + year;
    areaname = document.getElementById("areaname").value;
    todaymobileInput = document.getElementById("todaymobile").value.split(" ");
    todaymobile = 0;
    for (i = 0; i < todaymobileInput.length; i++) {
        todaymobile += parseInt(todaymobileInput[i]) || 0;
    }
    achievedmobile = parseInt(document.getElementById("achievedmobile").value) || 0;
    utdmobile = todaymobile + achievedmobile || 0;
    targetmobile = parseInt(document.getElementById("targetmobile").value) || 0;
    todaywegoldInput = document.getElementById("todaywegold").value.split(" ");
    todaywegold = 0;
    for (i = 0; i < todaywegoldInput.length; i++) {
        todaywegold += parseInt(todaywegoldInput[i]) || 0;
    }
    achievedwegold = parseInt(document.getElementById("achievedwegold").value) || 0;
    utdwegold = todaywegold + achievedwegold || 0;
    targetwegold = parseInt(document.getElementById("targetwegold").value) || 0;
    todayadslInput = document.getElementById("todayadsl").value.split(" ");
    todayadsl = 0;
    for (i = 0; i < todayadslInput.length; i++) {
        todayadsl += parseInt(todayadslInput[i]) || 0;
    }
    achievedadsl = parseInt(document.getElementById("achievedadsl").value) || 0;
    utdadsl = todayadsl + achievedadsl || 0;
    targetadsl = parseInt(document.getElementById("targetadsl").value) || 0;
    todayfixedInput = document.getElementById("todayfixed").value.split(" ");
    todayfixed = 0;
    for (i = 0; i < todayfixedInput.length; i++) {
        todayfixed += parseInt(todayfixedInput[i]) || 0;
    }
    achievedfixed = parseInt(document.getElementById("achievedfixed").value) || 0;
    utdfixed = todayfixed + achievedfixed || 0;
    targetfixed = parseInt(document.getElementById("targetfixed").value) || 0;
    todaywalletInput = document.getElementById("todaywallet").value.split(" ");
    todaywallet = 0;
    for (i = 0; i < todaywalletInput.length; i++) {
        todaywallet += parseInt(todaywalletInput[i]) || 0;
    }
    achievedwallet = parseInt(document.getElementById("achievedwallet").value) || 0;
    utdwallet = todaywallet + achievedwallet || 0;
    targetwallet = parseInt(document.getElementById("targetwallet").value) || 0;
    vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    vsGold = ~~Number(Math.round((utdwegold / targetwegold) * 100)) || 0;
    vsAdsl = ~~Number(Math.round((utdadsl / targetadsl) * 100)) || 0;
    vsFixed = ~~Number(Math.round((utdfixed / targetfixed) * 100)) || 0;
    vsWallet = ~~Number(Math.round((utdwallet / targetwallet) * 100)) || 0;
    document.getElementById("salesreport").value =
        "Date: " +
        date +
        "\n" +
        "Area: " +
        areaname +
        "\n" +
        "--------------------------" +
        "\n" +
        "Today Lines: " +
        todaymobile +
        " Mob" +
        "\n" +
        "--------------------------" +
        "\n" +
        "* We Gold" +
        "\n" +
        "Today: " +
        todaywegold +
        "\n" +
        "TGT: " +
        targetwegold +
        " /Ach: " +
        utdwegold +
        " /VS: " +
        vsGold +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "* ADSL" +
        "\n" +
        "Today: " +
        todayadsl +
        "\n" +
        "TGT: " +
        targetadsl +
        " /Ach: " +
        utdadsl +
        " /VS: " +
        vsAdsl +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "* Fixed" +
        "\n" +
        "Today: " +
        todayfixed +
        "\n" +
        "TGT: " +
        targetfixed +
        " /Ach: " +
        utdfixed +
        " /VS: " +
        vsFixed +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "* Wallet" +
        "\n" +
        "Today: " +
        todaywallet +
        "\n" +
        "TGT: " +
        targetwallet +
        " /Ach: " +
        utdwallet +
        " /VS: " +
        vsWallet +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "Total Activation: " +
        utdmobile +
        "\n" +
        "TGT: " +
        targetmobile +
        "\n" +
        "VS: " +
        vsMobile +
        "%";
    salesreportForSharing =
        "Date: " +
        date +
        "\n" +
        "Area: " +
        areaname +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "Today Lines: " +
        todaymobile +
        " Mob" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "* We Gold" +
        "\n" +
        "Today: " +
        todaywegold +
        "\n" +
        "TGT: " +
        targetwegold +
        " /Ach: " +
        utdwegold +
        " /VS: " +
        vsGold +
        "%" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "* ADSL" +
        "\n" +
        "Today: " +
        todayadsl +
        "\n" +
        "TGT: " +
        targetadsl +
        " /Ach: " +
        utdadsl +
        " /VS: " +
        vsAdsl +
        "%" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "* Fixed" +
        "\n" +
        "Today: " +
        todayfixed +
        "\n" +
        "TGT: " +
        targetfixed +
        " /Ach: " +
        utdfixed +
        " /VS: " +
        vsFixed +
        "%" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "* Wallet" +
        "\n" +
        "Today: " +
        todaywallet +
        "\n" +
        "TGT: " +
        targetwallet +
        " /Ach: " +
        utdwallet +
        " /VS: " +
        vsWallet +
        "%" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "Total Activation: " +
        utdmobile +
        "\n" +
        "TGT: " +
        targetmobile +
        "\n" +
        "VS: " +
        vsMobile +
        "%";
    document.getElementById("save__1").disabled = false;
    document.getElementById("save__2").disabled = false;
    document.getElementById("copy__1").disabled = false;
    document.getElementById("copy__2").disabled = false;
    document.getElementById("save__1").innerHTML = "Save";
    document.getElementById("save__2").innerHTML = "Save";
    document.getElementById("copy__1").innerHTML = "Copy";
    document.getElementById("copy__2").innerHTML = "Copy";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Copy__1() {
    navigator.clipboard.writeText(salesreportForSharing);
    document.getElementById("copy__1").disabled = true;
    document.getElementById("copy__2").disabled = true;
    document.getElementById("copy__1").innerHTML = "Copied";
    document.getElementById("copy__2").innerHTML = "Copied";
}
function Copy__2() {
    Copy__1();
}
function Share__1() {
    if (navigator.share) {
        navigator.share({
            title: "Sales Report",
            text: salesreportForSharing,
        });
    } else {
        message = window.encodeURIComponent(salesreportForSharing);
        link = "https://api.whatsapp.com/send?text=";
        window.open(link + message);
    }
}
function Share__2() {
    Share__1();
}
function Print__1() {
    doc = document.getElementById("printFrame").contentWindow;
    doc.document.open();
    doc.document.write("<html lang=en><head><title>Area Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body><div>");
    doc.document.write(document.getElementById("salesreport").value.replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
    document.getElementById("printFrame").contentWindow.print();
}
function Save__1() {
    let x = parseInt(localStorage.getItem("currentArea"));
    localStorage.setItem("areaname.area." + x, document.getElementById("areaname").value || "Area " + x);
    localStorage.setItem("achievedmobile.area." + x, utdmobile);
    localStorage.setItem("targetmobile.area." + x, document.getElementById("targetmobile").value);
    localStorage.setItem("achievedwegold.area." + x, utdwegold);
    localStorage.setItem("targetwegold.area." + x, document.getElementById("targetwegold").value);
    localStorage.setItem("achievedadsl.area." + x, utdadsl);
    localStorage.setItem("targetadsl.area." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.area." + x, utdfixed);
    localStorage.setItem("targetfixed.area." + x, document.getElementById("targetfixed").value);
    localStorage.setItem("achievedwallet.area." + x, utdwallet);
    localStorage.setItem("targetwallet.area." + x, document.getElementById("targetwallet").value);
    document.getElementById("save__1").disabled = true;
    document.getElementById("save__2").disabled = true;
    document.getElementById("save__1").innerHTML = "Saved";
    document.getElementById("save__2").innerHTML = "Saved";
    localStorage.setItem("areaRestore", "true");
    localStorage.setItem("areas", sessionStorage.getItem("areas"));
    localStorage.setItem("selectedArea", localStorage.getItem("currentArea"));
    localStorage.setItem("activeAreas", localStorage.getItem("areas") - localStorage.getItem("removedAreas"));
}
function Save__2() {
    Save__1();
}
function RemoveArea() {
    let x = parseInt(localStorage.getItem("selectedArea"));
    let text = "Are you sure you want to delete " + '"' + localStorage.getItem("areaname.area." + x) + '"?';
    if (confirm(text) == true) {
        localStorage.setItem("deleteArea" + x, "true");
        localStorage.removeItem("areaname.area." + x);
        localStorage.removeItem("achievedmobile.area." + x);
        localStorage.removeItem("targetmobile.area." + x);
        localStorage.removeItem("achievedwegold.area." + x);
        localStorage.removeItem("targetwegold.area." + x);
        localStorage.removeItem("achievedadsl.area." + x);
        localStorage.removeItem("targetadsl.area." + x);
        localStorage.removeItem("achievedfixed.area." + x);
        localStorage.removeItem("targetfixed.area." + x);
        localStorage.removeItem("achievedwallet.area." + x);
        localStorage.removeItem("targetwallet.area." + x);
        let selectedArea = localStorage.getItem("areas");
        for (i = 1; i <= selectedArea; i++) {
            if (localStorage.getItem("deleteArea" + i) == "true") continue;
            selectedArea = parseInt([i]);
            localStorage.setItem("selectedArea", selectedArea);
        }
        localStorage.setItem("activeAreas", localStorage.getItem("activeAreas") - 1);
        localStorage.setItem("removedAreas", parseInt(localStorage.getItem("removedAreas")) + 1 || 1);
        if (localStorage.getItem("activeAreas") < "1") {
            for (i = 1; i <= localStorage.getItem("areas"); i++) {
                localStorage.removeItem("deleteArea" + i);
            }
            localStorage.removeItem("activeAreas");
            localStorage.removeItem("currentArea");
            localStorage.removeItem("selectedArea");
            localStorage.removeItem("removedAreas");
            localStorage.removeItem("areaRestore");
            localStorage.removeItem("areas");
        }
        window.location.href = "area.html";
    } else {
        return false;
    }
}
