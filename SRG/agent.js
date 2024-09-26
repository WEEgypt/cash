function EnableRestore() {
    if (localStorage.getItem("agentRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row__1.style.display = "none";
        row__2.style.display = "block";
        sessionStorage.removeItem("users");
        sessionStorage.removeItem("newuser");
    } else {
        sessionStorage.setItem("users", localStorage.getItem("users") || 1);
        localStorage.setItem("currentUser", "1");
    }
    if (localStorage.getItem("users") > "1") {
        let x = localStorage.getItem("users");
        for (i = 1; i <= x; i++) {
            if (localStorage.getItem("deleteUser" + i) == "true") continue;
            value = parseInt([i]);
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.agent." + value), value));
        }
        document.getElementById("users").options.add(new Option("Add Another Agent", "newuser"));
    }
    if (localStorage.getItem("activeUsers") > "1") {
        multi.style.display = "block";
        restore.style.display = "none";
    }
    document.getElementById("users").value = localStorage.getItem("selectedUser");
}
function RestoreSelected() {
    if (document.getElementById("users").value !== "newuser") {
        localStorage.setItem("selectedUser", document.getElementById("users").value);
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
    if (document.getElementById("users").value == "newuser") {
        multi.style.display = "none";
        NewUser();
    } else {
        multi.style.display = "none";
        restore.style.display = "block";
        newuser.style.display = "none";
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
    if (localStorage.getItem("activeUsers") > "1") {
        document.getElementById("users").innerHTML = "";
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("users");
        for (i = 1; i <= x; i++) {
            if (localStorage.getItem("deleteUser" + i) == "true") continue;
            value = parseInt([i]);
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.agent." + value), value));
        }
        document.getElementById("users").options.add(new Option("Add Another Agent", "newuser"));
        document.getElementById("users").value = localStorage.getItem("selectedUser");
        BackTransform();
    } else {
        Back__1();
    }
}
function Back__3() {
    if (basic.style.display === "block" && localStorage.getItem("activeUsers") > "1" && sessionStorage.getItem("newuser") == "true") {
        basic.style.display = "none";
        multi.style.display = "block";
        document.getElementById("users").innerHTML = "";
        let x = localStorage.getItem("users");
        for (i = 1; i <= x; i++) {
            if (localStorage.getItem("deleteUser" + i) == "true") continue;
            value = parseInt([i]);
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.agent." + value), value));
        }
        document.getElementById("users").options.add(new Option("Add Another Agent", "newuser"));
        document.getElementById("users").value = localStorage.getItem("selectedUser");
    } else if (basic.style.display === "block") {
        basic.style.display = "none";
        restore.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
    sessionStorage.removeItem("users");
    sessionStorage.removeItem("newuser");
}
function Back__4() {
    if (target.style.display === "block") {
        target.style.display = "none";
        basic.style.display = "block";
        agent.style.display = "block";
    }
    if (localStorage.getItem("agentRestore") == "true") {
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
    agent.style.display = "none";
}
function Continue() {
    let x = document.getElementById("users").value || 1;
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    agent.style.display = "none";
    row__1.style.display = "none";
    row__2.style.display = "none";
    today.style.display = "block";
    document.getElementById("yourname").value = localStorage.getItem("yourname.agent." + x);
    document.getElementById("achievedpayg").value = localStorage.getItem("achievedpayg.agent." + x);
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.agent." + x);
    document.getElementById("achieveddata").value = localStorage.getItem("achieveddata.agent." + x);
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.agent." + x);
    document.getElementById("achievedsuperkix").value = localStorage.getItem("achievedsuperkix.agent." + x);
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.agent." + x);
    document.getElementById("achievedtaz").value = localStorage.getItem("achievedtaz.agent." + x);
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.agent." + x);
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub.agent." + x);
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.agent." + x);
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.agent." + x);
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.agent." + x);
    document.getElementById("achievedwegoldfmc").value = localStorage.getItem("achievedwegoldfmc.agent." + x);
    document.getElementById("achievedwegoldsa").value = localStorage.getItem("achievedwegoldsa.agent." + x);
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.agent." + x);
    document.getElementById("achievedadsl140").value = localStorage.getItem("achievedadsl140.agent." + x);
    document.getElementById("achievedadslht").value = localStorage.getItem("achievedadslht.agent." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.agent." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.agent." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.agent." + x);
    document.getElementById("achievedwallet").value = localStorage.getItem("achievedwallet.agent." + x);
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.agent." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix20").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix35").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix65").value = "";
    document.getElementById("todaysuperkix80").value = "";
    document.getElementById("todaysuperkix100").value = "";
    document.getElementById("todaytazbeet30").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet70").value = "";
    document.getElementById("todaytazbeet110").value = "";
    document.getElementById("todayweclub25").value = "";
    document.getElementById("todayweclub40").value = "";
    document.getElementById("todayweclub65").value = "";
    document.getElementById("todayweclub100").value = "";
    document.getElementById("todaywemix165").value = "";
    document.getElementById("todaywemix240").value = "";
    document.getElementById("todaygold200fmc").value = "";
    document.getElementById("todaygold400fmc").value = "";
    document.getElementById("todaygold600fmc").value = "";
    document.getElementById("todaygold800fmc").value = "";
    document.getElementById("todaygold1000fmc").value = "";
    document.getElementById("todaygold1500fmc").value = "";
    document.getElementById("todaygold200sa").value = "";
    document.getElementById("todaygold400sa").value = "";
    document.getElementById("todaygold600sa").value = "";
    document.getElementById("todaygold800sa").value = "";
    document.getElementById("todaygold1000sa").value = "";
    document.getElementById("todaygold1500sa").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl300").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl500").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayadsl1500").value = "";
    document.getElementById("todayadslannual").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
    document.getElementById("todaycash").value = "";
    NextTransform();
    sessionStorage.setItem("users", localStorage.getItem("users"));
}
function NewMonth() {
    let x = document.getElementById("users").value || 1;
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("yourname").value = localStorage.getItem("yourname.agent." + x);
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.agent." + x);
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.agent." + x);
    document.getElementById("achievedsuperkix").value = "";
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.agent." + x);
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.agent." + x);
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.agent." + x);
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.agent." + x);
    document.getElementById("achievedwegoldfmc").value = "";
    document.getElementById("achievedwegoldsa").value = "";
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.agent." + x);
    document.getElementById("achievedadsl140").value = "";
    document.getElementById("achievedadslht").value = "";
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.agent." + x);
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.agent." + x);
    document.getElementById("achievedwallet").value = "";
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.agent." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix20").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix35").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix65").value = "";
    document.getElementById("todaysuperkix80").value = "";
    document.getElementById("todaysuperkix100").value = "";
    document.getElementById("todaytazbeet30").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet70").value = "";
    document.getElementById("todaytazbeet110").value = "";
    document.getElementById("todayweclub25").value = "";
    document.getElementById("todayweclub40").value = "";
    document.getElementById("todayweclub65").value = "";
    document.getElementById("todayweclub100").value = "";
    document.getElementById("todaywemix165").value = "";
    document.getElementById("todaywemix240").value = "";
    document.getElementById("todaygold200fmc").value = "";
    document.getElementById("todaygold400fmc").value = "";
    document.getElementById("todaygold600fmc").value = "";
    document.getElementById("todaygold800fmc").value = "";
    document.getElementById("todaygold1000fmc").value = "";
    document.getElementById("todaygold1500fmc").value = "";
    document.getElementById("todaygold200sa").value = "";
    document.getElementById("todaygold400sa").value = "";
    document.getElementById("todaygold600sa").value = "";
    document.getElementById("todaygold800sa").value = "";
    document.getElementById("todaygold1000sa").value = "";
    document.getElementById("todaygold1500sa").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl300").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl500").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayadsl1500").value = "";
    document.getElementById("todayadslannual").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
    document.getElementById("todaycash").value = "";
    NextTransform();
    sessionStorage.setItem("users", localStorage.getItem("users"));
}
function NewUser() {
    sessionStorage.setItem("newuser", "true");
    users = parseInt(localStorage.getItem("users"));
    x = users + 1;
    y = parseInt(localStorage.getItem("selectedUser"));
    sessionStorage.setItem("users", x);
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("yourname").value = "";
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.agent." + y);
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.agent." + y);
    document.getElementById("achievedsuperkix").value = "";
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.agent." + y);
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.agent." + y);
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.agent." + y);
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.agent." + y);
    document.getElementById("achievedwegoldfmc").value = "";
    document.getElementById("achievedwegoldsa").value = "";
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.agent." + y);
    document.getElementById("achievedadsl140").value = "";
    document.getElementById("achievedadslht").value = "";
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.agent." + y);
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.agent." + y);
    document.getElementById("achievedwallet").value = "";
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.agent." + y);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix20").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix35").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix65").value = "";
    document.getElementById("todaysuperkix80").value = "";
    document.getElementById("todaysuperkix100").value = "";
    document.getElementById("todaytazbeet30").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet70").value = "";
    document.getElementById("todaytazbeet110").value = "";
    document.getElementById("todayweclub25").value = "";
    document.getElementById("todayweclub40").value = "";
    document.getElementById("todayweclub65").value = "";
    document.getElementById("todayweclub100").value = "";
    document.getElementById("todaywemix165").value = "";
    document.getElementById("todaywemix240").value = "";
    document.getElementById("todaygold200fmc").value = "";
    document.getElementById("todaygold400fmc").value = "";
    document.getElementById("todaygold600fmc").value = "";
    document.getElementById("todaygold800fmc").value = "";
    document.getElementById("todaygold1000fmc").value = "";
    document.getElementById("todaygold1500fmc").value = "";
    document.getElementById("todaygold200sa").value = "";
    document.getElementById("todaygold400sa").value = "";
    document.getElementById("todaygold600sa").value = "";
    document.getElementById("todaygold800sa").value = "";
    document.getElementById("todaygold1000sa").value = "";
    document.getElementById("todaygold1500sa").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl300").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl500").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayadsl1500").value = "";
    document.getElementById("todayadslannual").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
    document.getElementById("todaycash").value = "";
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
    daysinmonth = new Date(year, month, 0).getDate();
    yourname = document.getElementById("yourname").value;
    todaypaygInput = document.getElementById("todaypayg").value.split(" ");
    todaypayg = 0;
    for (i = 0; i < todaypaygInput.length; i++) {
        todaypayg += parseInt(todaypaygInput[i]) || 0;
    }
    achievedpayg = parseInt(document.getElementById("achievedpayg").value) || 0;
    utdpayg = todaypayg + achievedpayg || 0;
    targetpayg = parseInt(document.getElementById("targetpayg").value) || 0;
    todaydataInput = document.getElementById("todaydata").value.split(" ");
    todaydata = 0;
    for (i = 0; i < todaydataInput.length; i++) {
        todaydata += parseInt(todaydataInput[i]) || 0;
    }
    achieveddata = parseInt(document.getElementById("achieveddata").value) || 0;
    utddata = todaydata + achieveddata || 0;
    targetdata = parseInt(document.getElementById("targetdata").value) || 0;
    todaysuperkix20Input = document.getElementById("todaysuperkix20").value.split(" ");
    todaysuperkix20 = 0;
    for (i = 0; i < todaysuperkix20Input.length; i++) {
        todaysuperkix20 += parseInt(todaysuperkix20Input[i]) || 0;
    }
    todaysuperkix25Input = document.getElementById("todaysuperkix25").value.split(" ");
    todaysuperkix25 = 0;
    for (i = 0; i < todaysuperkix25Input.length; i++) {
        todaysuperkix25 += parseInt(todaysuperkix25Input[i]) || 0;
    }
    todaysuperkix35Input = document.getElementById("todaysuperkix35").value.split(" ");
    todaysuperkix35 = 0;
    for (i = 0; i < todaysuperkix35Input.length; i++) {
        todaysuperkix35 += parseInt(todaysuperkix35Input[i]) || 0;
    }
    todaysuperkix45Input = document.getElementById("todaysuperkix45").value.split(" ");
    todaysuperkix45 = 0;
    for (i = 0; i < todaysuperkix45Input.length; i++) {
        todaysuperkix45 += parseInt(todaysuperkix45Input[i]) || 0;
    }
    todaysuperkix65Input = document.getElementById("todaysuperkix65").value.split(" ");
    todaysuperkix65 = 0;
    for (i = 0; i < todaysuperkix65Input.length; i++) {
        todaysuperkix65 += parseInt(todaysuperkix65Input[i]) || 0;
    }
    todaysuperkix80Input = document.getElementById("todaysuperkix80").value.split(" ");
    todaysuperkix80 = 0;
    for (i = 0; i < todaysuperkix80Input.length; i++) {
        todaysuperkix80 += parseInt(todaysuperkix80Input[i]) || 0;
    }
    todaysuperkix100Input = document.getElementById("todaysuperkix100").value.split(" ");
    todaysuperkix100 = 0;
    for (i = 0; i < todaysuperkix100Input.length; i++) {
        todaysuperkix100 += parseInt(todaysuperkix100Input[i]) || 0;
    }
    todaysuperkix = todaysuperkix20 + todaysuperkix25 + todaysuperkix35 + todaysuperkix45 + todaysuperkix65 + todaysuperkix80 + todaysuperkix100 || 0;
    achievedsuperkix = parseInt(document.getElementById("achievedsuperkix").value) || 0;
    utdsuperkix = todaysuperkix20 + todaysuperkix25 + todaysuperkix35 + todaysuperkix45 + todaysuperkix65 + todaysuperkix80 + todaysuperkix100 + achievedsuperkix || 0;
    targetsuperkix = parseInt(document.getElementById("targetsuperkix").value) || 0;
    todaytazbeet30Input = document.getElementById("todaytazbeet30").value.split(" ");
    todaytazbeet30 = 0;
    for (i = 0; i < todaytazbeet30Input.length; i++) {
        todaytazbeet30 += parseInt(todaytazbeet30Input[i]) || 0;
    }
    todaytazbeet40Input = document.getElementById("todaytazbeet40").value.split(" ");
    todaytazbeet40 = 0;
    for (i = 0; i < todaytazbeet40Input.length; i++) {
        todaytazbeet40 += parseInt(todaytazbeet40Input[i]) || 0;
    }
    todaytazbeet70Input = document.getElementById("todaytazbeet70").value.split(" ");
    todaytazbeet70 = 0;
    for (i = 0; i < todaytazbeet70Input.length; i++) {
        todaytazbeet70 += parseInt(todaytazbeet70Input[i]) || 0;
    }
    todaytazbeet110Input = document.getElementById("todaytazbeet110").value.split(" ");
    todaytazbeet110 = 0;
    for (i = 0; i < todaytazbeet110Input.length; i++) {
        todaytazbeet110 += parseInt(todaytazbeet110Input[i]) || 0;
    }
    todaytazbeet = todaytazbeet30 + todaytazbeet40 + todaytazbeet70 + todaytazbeet110 || 0;
    achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    utdtaz = todaytazbeet30 + todaytazbeet40 + todaytazbeet70 + todaytazbeet110 + achievedtaz || 0;
    targettaz = parseInt(document.getElementById("targettaz").value) || 0;
    todayweclub25Input = document.getElementById("todayweclub25").value.split(" ");
    todayweclub25 = 0;
    for (i = 0; i < todayweclub25Input.length; i++) {
        todayweclub25 += parseInt(todayweclub25Input[i]) || 0;
    }
    todayweclub40Input = document.getElementById("todayweclub40").value.split(" ");
    todayweclub40 = 0;
    for (i = 0; i < todayweclub40Input.length; i++) {
        todayweclub40 += parseInt(todayweclub40Input[i]) || 0;
    }
    todayweclub65Input = document.getElementById("todayweclub65").value.split(" ");
    todayweclub65 = 0;
    for (i = 0; i < todayweclub65Input.length; i++) {
        todayweclub65 += parseInt(todayweclub65Input[i]) || 0;
    }
    todayweclub100Input = document.getElementById("todayweclub100").value.split(" ");
    todayweclub100 = 0;
    for (i = 0; i < todayweclub100Input.length; i++) {
        todayweclub100 += parseInt(todayweclub100Input[i]) || 0;
    }
    todayweclub = todayweclub25 + todayweclub40 + todayweclub65 + todayweclub100 || 0;
    achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    utdweclub = todayweclub25 + todayweclub40 + todayweclub65 + todayweclub100 + achievedweclub || 0;
    targetweclub = parseInt(document.getElementById("targetweclub").value) || 0;
    todaywemix165Input = document.getElementById("todaywemix165").value.split(" ");
    todaywemix165 = 0;
    for (i = 0; i < todaywemix165Input.length; i++) {
        todaywemix165 += parseInt(todaywemix165Input[i]) || 0;
    }
    todaywemix240Input = document.getElementById("todaywemix240").value.split(" ");
    todaywemix240 = 0;
    for (i = 0; i < todaywemix240Input.length; i++) {
        todaywemix240 += parseInt(todaywemix240Input[i]) || 0;
    }
    todaywemix = todaywemix165 + todaywemix240 || 0;
    achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    utdwemix = todaywemix165 + todaywemix240 + achievedwemix || 0;
    targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    todaygold200fmcInput = document.getElementById("todaygold200fmc").value.split(" ");
    todaygold200fmc = 0;
    for (i = 0; i < todaygold200fmcInput.length; i++) {
        todaygold200fmc += parseInt(todaygold200fmcInput[i]) || 0;
    }
    todaygold400fmcInput = document.getElementById("todaygold400fmc").value.split(" ");
    todaygold400fmc = 0;
    for (i = 0; i < todaygold400fmcInput.length; i++) {
        todaygold400fmc += parseInt(todaygold400fmcInput[i]) || 0;
    }
    todaygold600fmcInput = document.getElementById("todaygold600fmc").value.split(" ");
    todaygold600fmc = 0;
    for (i = 0; i < todaygold600fmcInput.length; i++) {
        todaygold600fmc += parseInt(todaygold600fmcInput[i]) || 0;
    }
    todaygold800fmcInput = document.getElementById("todaygold800fmc").value.split(" ");
    todaygold800fmc = 0;
    for (i = 0; i < todaygold800fmcInput.length; i++) {
        todaygold800fmc += parseInt(todaygold800fmcInput[i]) || 0;
    }
    todaygold1000fmcInput = document.getElementById("todaygold1000fmc").value.split(" ");
    todaygold1000fmc = 0;
    for (i = 0; i < todaygold1000fmcInput.length; i++) {
        todaygold1000fmc += parseInt(todaygold1000fmcInput[i]) || 0;
    }
    todaygold1500fmcInput = document.getElementById("todaygold1500fmc").value.split(" ");
    todaygold1500fmc = 0;
    for (i = 0; i < todaygold1500fmcInput.length; i++) {
        todaygold1500fmc += parseInt(todaygold1500fmcInput[i]) || 0;
    }
    todaygold200saInput = document.getElementById("todaygold200sa").value.split(" ");
    todaygold200sa = 0;
    for (i = 0; i < todaygold200saInput.length; i++) {
        todaygold200sa += parseInt(todaygold200saInput[i]) || 0;
    }
    todaygold400saInput = document.getElementById("todaygold400sa").value.split(" ");
    todaygold400sa = 0;
    for (i = 0; i < todaygold400saInput.length; i++) {
        todaygold400sa += parseInt(todaygold400saInput[i]) || 0;
    }
    todaygold600saInput = document.getElementById("todaygold600sa").value.split(" ");
    todaygold600sa = 0;
    for (i = 0; i < todaygold600saInput.length; i++) {
        todaygold600sa += parseInt(todaygold600saInput[i]) || 0;
    }
    todaygold800saInput = document.getElementById("todaygold800sa").value.split(" ");
    todaygold800sa = 0;
    for (i = 0; i < todaygold800saInput.length; i++) {
        todaygold800sa += parseInt(todaygold800saInput[i]) || 0;
    }
    todaygold1000saInput = document.getElementById("todaygold1000sa").value.split(" ");
    todaygold1000sa = 0;
    for (i = 0; i < todaygold1000saInput.length; i++) {
        todaygold1000sa += parseInt(todaygold1000saInput[i]) || 0;
    }
    todaygold1500saInput = document.getElementById("todaygold1500sa").value.split(" ");
    todaygold1500sa = 0;
    for (i = 0; i < todaygold1500saInput.length; i++) {
        todaygold1500sa += parseInt(todaygold1500saInput[i]) || 0;
    }
    todaygoldfmc = todaygold200fmc + todaygold400fmc + todaygold600fmc + todaygold800fmc + todaygold1000fmc + todaygold1500fmc || 0;
    todaygoldsa = todaygold200sa + todaygold400sa + todaygold600sa + todaygold800sa + todaygold1000sa + todaygold1500sa || 0;
    todaygold = todaygoldfmc + todaygoldsa || 0;
    achievedwegoldfmc = parseInt(document.getElementById("achievedwegoldfmc").value) || 0;
    achievedwegoldsa = parseInt(document.getElementById("achievedwegoldsa").value) || 0;
    utdwegoldfmc = todaygoldfmc + achievedwegoldfmc || 0;
    utdwegoldsa = todaygoldsa + achievedwegoldsa || 0;
    utdwegold = utdwegoldfmc + utdwegoldsa || 0;
    targetwegold = parseInt(document.getElementById("targetwegold").value) || 0;
    todayadsl140Input = document.getElementById("todayadsl140").value.split(" ");
    todayadsl140 = 0;
    for (i = 0; i < todayadsl140Input.length; i++) {
        todayadsl140 += parseInt(todayadsl140Input[i]) || 0;
    }
    todayadsl200Input = document.getElementById("todayadsl200").value.split(" ");
    todayadsl200 = 0;
    for (i = 0; i < todayadsl200Input.length; i++) {
        todayadsl200 += parseInt(todayadsl200Input[i]) || 0;
    }
    todayadsl250Input = document.getElementById("todayadsl250").value.split(" ");
    todayadsl250 = 0;
    for (i = 0; i < todayadsl250Input.length; i++) {
        todayadsl250 += parseInt(todayadsl250Input[i]) || 0;
    }
    todayadsl300Input = document.getElementById("todayadsl300").value.split(" ");
    todayadsl300 = 0;
    for (i = 0; i < todayadsl300Input.length; i++) {
        todayadsl300 += parseInt(todayadsl300Input[i]) || 0;
    }
    todayadsl400Input = document.getElementById("todayadsl400").value.split(" ");
    todayadsl400 = 0;
    for (i = 0; i < todayadsl400Input.length; i++) {
        todayadsl400 += parseInt(todayadsl400Input[i]) || 0;
    }
    todayadsl500Input = document.getElementById("todayadsl500").value.split(" ");
    todayadsl500 = 0;
    for (i = 0; i < todayadsl500Input.length; i++) {
        todayadsl500 += parseInt(todayadsl500Input[i]) || 0;
    }
    todayadsl600Input = document.getElementById("todayadsl600").value.split(" ");
    todayadsl600 = 0;
    for (i = 0; i < todayadsl600Input.length; i++) {
        todayadsl600 += parseInt(todayadsl600Input[i]) || 0;
    }
    todayadsl1000Input = document.getElementById("todayadsl1000").value.split(" ");
    todayadsl1000 = 0;
    for (i = 0; i < todayadsl1000Input.length; i++) {
        todayadsl1000 += parseInt(todayadsl1000Input[i]) || 0;
    }
    todayadsl1500Input = document.getElementById("todayadsl1500").value.split(" ");
    todayadsl1500 = 0;
    for (i = 0; i < todayadsl1500Input.length; i++) {
        todayadsl1500 += parseInt(todayadsl1500Input[i]) || 0;
    }
    todayadslannualInput = document.getElementById("todayadslannual").value.split(" ");
    todayadslannual = 0;
    for (i = 0; i < todayadslannualInput.length; i++) {
        todayadslannual += parseInt(todayadslannualInput[i]) || 0;
    }
    todayadsl140 = todayadsl140 || 0;
    todayadslht = todayadsl200 + todayadsl250 + todayadsl300 + todayadsl400 + todayadsl500 + todayadsl600 + todayadsl1000 + todayadsl1500 + todayadslannual || 0;
    todayadsl = todayadsl140 + todayadslht || 0;
    achievedadsl140 = parseInt(document.getElementById("achievedadsl140").value) || 0;
    achievedadslht = parseInt(document.getElementById("achievedadslht").value) || 0;
    utdadsl140 = todayadsl140 + achievedadsl140 || 0;
    utdadslht = todayadslht + achievedadslht || 0;
    utdadsl = utdadsl140 + utdadslht || 0;
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
    var todaysalesArray = [
        todaypayg.toString(),
        todaydata.toString(),
        todaysuperkix20.toString(),
        todaysuperkix25.toString(),
        todaysuperkix35.toString(),
        todaysuperkix45.toString(),
        todaysuperkix65.toString(),
        todaysuperkix80.toString(),
        todaysuperkix100.toString(),
        todaytazbeet30.toString(),
        todaytazbeet40.toString(),
        todaytazbeet70.toString(),
        todaytazbeet110.toString(),
        todayweclub25.toString(),
        todayweclub40.toString(),
        todayweclub65.toString(),
        todayweclub100.toString(),
        todaywemix165.toString(),
        todaywemix240.toString(),
        todaygold200fmc.toString(),
        todaygold400fmc.toString(),
        todaygold600fmc.toString(),
        todaygold800fmc.toString(),
        todaygold1000fmc.toString(),
        todaygold1500fmc.toString(),
        todaygold200sa.toString(),
        todaygold400sa.toString(),
        todaygold600sa.toString(),
        todaygold800sa.toString(),
        todaygold1000sa.toString(),
        todaygold1500sa.toString(),
        todayadsl140.toString(),
        todayadsl200.toString(),
        todayadsl250.toString(),
        todayadsl300.toString(),
        todayadsl400.toString(),
        todayadsl500.toString(),
        todayadsl600.toString(),
        todayadsl1000.toString(),
        todayadsl1500.toString(),
        todayadslannual.toString(),
        todayfixed.toString(),
        todaywallet.toString(),
    ];
    let maxToday = Math.max(...todaysalesArray).toString().length;
    var todaysalesArrayAdjusted = correctLength(todaysalesArray, maxToday);
    function correctLength(array, length) {
        array.map(function (v, i) {
            if (array[i].length < length) {
                array[i] += Array(length + 1 - array[i].length).join(" ");
            }
        });
        return array;
    }
    todaypaygAdjusted = todaysalesArrayAdjusted[0];
    todaydataAdjusted = todaysalesArrayAdjusted[1];
    todaysuperkix20Adjusted = todaysalesArrayAdjusted[2];
    todaysuperkix25Adjusted = todaysalesArrayAdjusted[3];
    todaysuperkix35Adjusted = todaysalesArrayAdjusted[4];
    todaysuperkix45Adjusted = todaysalesArrayAdjusted[5];
    todaysuperkix65Adjusted = todaysalesArrayAdjusted[6];
    todaysuperkix80Adjusted = todaysalesArrayAdjusted[7];
    todaysuperkix100Adjusted = todaysalesArrayAdjusted[8];
    todaytazbeet30Adjusted = todaysalesArrayAdjusted[9];
    todaytazbeet40Adjusted = todaysalesArrayAdjusted[10];
    todaytazbeet70Adjusted = todaysalesArrayAdjusted[11];
    todaytazbeet110Adjusted = todaysalesArrayAdjusted[12];
    todayweclub25Adjusted = todaysalesArrayAdjusted[13];
    todayweclub40Adjusted = todaysalesArrayAdjusted[14];
    todayweclub65Adjusted = todaysalesArrayAdjusted[15];
    todayweclub100Adjusted = todaysalesArrayAdjusted[16];
    todaywemix165Adjusted = todaysalesArrayAdjusted[17];
    todaywemix240Adjusted = todaysalesArrayAdjusted[18];
    todaygold200fmcAdjusted = todaysalesArrayAdjusted[19];
    todaygold400fmcAdjusted = todaysalesArrayAdjusted[20];
    todaygold600fmcAdjusted = todaysalesArrayAdjusted[21];
    todaygold800fmcAdjusted = todaysalesArrayAdjusted[22];
    todaygold1000fmcAdjusted = todaysalesArrayAdjusted[23];
    todaygold1500fmcAdjusted = todaysalesArrayAdjusted[24];
    todaygold200saAdjusted = todaysalesArrayAdjusted[25];
    todaygold400saAdjusted = todaysalesArrayAdjusted[26];
    todaygold600saAdjusted = todaysalesArrayAdjusted[27];
    todaygold800saAdjusted = todaysalesArrayAdjusted[28];
    todaygold1000saAdjusted = todaysalesArrayAdjusted[29];
    todaygold1500saAdjusted = todaysalesArrayAdjusted[30];
    todayadsl140Adjusted = todaysalesArrayAdjusted[31];
    todayadsl200Adjusted = todaysalesArrayAdjusted[32];
    todayadsl250Adjusted = todaysalesArrayAdjusted[33];
    todayadsl300Adjusted = todaysalesArrayAdjusted[34];
    todayadsl400Adjusted = todaysalesArrayAdjusted[35];
    todayadsl500Adjusted = todaysalesArrayAdjusted[36];
    todayadsl600Adjusted = todaysalesArrayAdjusted[37];
    todayadsl1000Adjusted = todaysalesArrayAdjusted[38];
    todayadsl1500Adjusted = todaysalesArrayAdjusted[39];
    todayadslannualAdjusted = todaysalesArrayAdjusted[40];
    todayfixedAdjusted = todaysalesArrayAdjusted[41];
    todaywalletAdjusted = todaysalesArrayAdjusted[42];
    if (todaypayg == "0") {
        todaypaygreport = "";
        todaypaygreportForSharing = "";
    } else {
        todaypaygreport = "\n" + todaypaygAdjusted + " * PAYG";
        todaypaygreportForSharing = "\n" + "```" + todaypaygAdjusted + "```" + " * PAYG";
    }
    if (todaydata == "0") {
        todaydatareport = "";
        todaydatareportForSharing = "";
    } else {
        todaydatareport = "\n" + todaydataAdjusted + " * Data";
        todaydatareportForSharing = "\n" + "```" + todaydataAdjusted + "```" + " * Data";
    }
    if (todaysuperkix20 == "0") {
        todaysuperkix20report = "";
        todaysuperkix20reportForSharing = "";
    } else {
        todaysuperkix20report = "\n" + todaysuperkix20Adjusted + " * Kix 20";
        todaysuperkix20reportForSharing = "\n" + "```" + todaysuperkix20Adjusted + "```" + " * Kix 20";
    }
    if (todaysuperkix25 == "0") {
        todaysuperkix25report = "";
        todaysuperkix25reportForSharing = "";
    } else {
        todaysuperkix25report = "\n" + todaysuperkix25Adjusted + " * Kix 25";
        todaysuperkix25reportForSharing = "\n" + "```" + todaysuperkix25Adjusted + "```" + " * Kix 25";
    }
    if (todaysuperkix35 == "0") {
        todaysuperkix35report = "";
        todaysuperkix35reportForSharing = "";
    } else {
        todaysuperkix35report = "\n" + todaysuperkix35Adjusted + " * Kix 35";
        todaysuperkix35reportForSharing = "\n" + "```" + todaysuperkix35Adjusted + "```" + " * Kix 35";
    }
    if (todaysuperkix45 == "0") {
        todaysuperkix45report = "";
        todaysuperkix45reportForSharing = "";
    } else {
        todaysuperkix45report = "\n" + todaysuperkix45Adjusted + " * Kix 45";
        todaysuperkix45reportForSharing = "\n" + "```" + todaysuperkix45Adjusted + "```" + " * Kix 45";
    }
    if (todaysuperkix65 == "0") {
        todaysuperkix65report = "";
        todaysuperkix65reportForSharing = "";
    } else {
        todaysuperkix65report = "\n" + todaysuperkix65Adjusted + " * Kix 65";
        todaysuperkix65reportForSharing = "\n" + "```" + todaysuperkix65Adjusted + "```" + " * Kix 65";
    }
    if (todaysuperkix80 == "0") {
        todaysuperkix80report = "";
        todaysuperkix80reportForSharing = "";
    } else {
        todaysuperkix80report = "\n" + todaysuperkix80Adjusted + " * Kix 80";
        todaysuperkix80reportForSharing = "\n" + "```" + todaysuperkix80Adjusted + "```" + " * Kix 80";
    }
    if (todaysuperkix100 == "0") {
        todaysuperkix100report = "";
        todaysuperkix100reportForSharing = "";
    } else {
        todaysuperkix100report = "\n" + todaysuperkix100Adjusted + " * Kix 100";
        todaysuperkix100reportForSharing = "\n" + "```" + todaysuperkix100Adjusted + "```" + " * Kix 100";
    }
    if (todaytazbeet30 == "0") {
        todaytazbeet30report = "";
        todaytazbeet30reportForSharing = "";
    } else {
        todaytazbeet30report = "\n" + todaytazbeet30Adjusted + " * Tazbeet 30";
        todaytazbeet30reportForSharing = "\n" + "```" + todaytazbeet30Adjusted + "```" + " * Tazbeet 30";
    }
    if (todaytazbeet40 == "0") {
        todaytazbeet40report = "";
        todaytazbeet40reportForSharing = "";
    } else {
        todaytazbeet40report = "\n" + todaytazbeet40Adjusted + " * Tazbeet 40";
        todaytazbeet40reportForSharing = "\n" + "```" + todaytazbeet40Adjusted + "```" + " * Tazbeet 40";
    }
    if (todaytazbeet70 == "0") {
        todaytazbeet70report = "";
        todaytazbeet70reportForSharing = "";
    } else {
        todaytazbeet70report = "\n" + todaytazbeet70Adjusted + " * Tazbeet 70";
        todaytazbeet70reportForSharing = "\n" + "```" + todaytazbeet70Adjusted + "```" + " * Tazbeet 70";
    }
    if (todaytazbeet110 == "0") {
        todaytazbeet110report = "";
        todaytazbeet110reportForSharing = "";
    } else {
        todaytazbeet110report = "\n" + todaytazbeet110Adjusted + " * Tazbeet 110";
        todaytazbeet110reportForSharing = "\n" + "```" + todaytazbeet110Adjusted + "```" + " * Tazbeet 110";
    }
    if (todayweclub25 == "0") {
        todayweclub25report = "";
        todayweclub25reportForSharing = "";
    } else {
        todayweclub25report = "\n" + todayweclub25Adjusted + " * We Club 25";
        todayweclub25reportForSharing = "\n" + "```" + todayweclub25Adjusted + "```" + " * We Club 25";
    }
    if (todayweclub40 == "0") {
        todayweclub40report = "";
        todayweclub40reportForSharing = "";
    } else {
        todayweclub40report = "\n" + todayweclub40Adjusted + " * We Club 40";
        todayweclub40reportForSharing = "\n" + "```" + todayweclub40Adjusted + "```" + " * We Club 40";
    }
    if (todayweclub65 == "0") {
        todayweclub65report = "";
        todayweclub65reportForSharing = "";
    } else {
        todayweclub65report = "\n" + todayweclub65Adjusted + " * We Club 65";
        todayweclub65reportForSharing = "\n" + "```" + todayweclub65Adjusted + "```" + " * We Club 65";
    }
    if (todayweclub100 == "0") {
        todayweclub100report = "";
        todayweclub100reportForSharing = "";
    } else {
        todayweclub100report = "\n" + todayweclub100Adjusted + " * We Club 100";
        todayweclub100reportForSharing = "\n" + "```" + todayweclub100Adjusted + "```" + " * We Club 100";
    }
    if (todaywemix165 == "0") {
        todaywemix165report = "";
        todaywemix165reportForSharing = "";
    } else {
        todaywemix165report = "\n" + todaywemix165Adjusted + " * We Mix 165";
        todaywemix165reportForSharing = "\n" + "```" + todaywemix165Adjusted + "```" + " * We Mix 165";
    }
    if (todaywemix240 == "0") {
        todaywemix240report = "";
        todaywemix240reportForSharing = "";
    } else {
        todaywemix240report = "\n" + todaywemix240Adjusted + " * We Mix 240";
        todaywemix240reportForSharing = "\n" + "```" + todaywemix240Adjusted + "```" + " * We Mix 240";
    }
    if (todaygold200fmc == "0") {
        todaygold200fmcreport = "";
        todaygold200fmcreportForSharing = "";
    } else {
        todaygold200fmcreport = "\n" + todaygold200fmcAdjusted + " * We Gold 200 FMC";
        todaygold200fmcreportForSharing = "\n" + "```" + todaygold200fmcAdjusted + "```" + " * We Gold 200 FMC";
    }
    if (todaygold400fmc == "0") {
        todaygold400fmcreport = "";
        todaygold400fmcreportForSharing = "";
    } else {
        todaygold400fmcreport = "\n" + todaygold400fmcAdjusted + " * We Gold 400 FMC";
        todaygold400fmcreportForSharing = "\n" + "```" + todaygold400fmcAdjusted + "```" + " * We Gold 400 FMC";
    }
    if (todaygold600fmc == "0") {
        todaygold600fmcreport = "";
        todaygold600fmcreportForSharing = "";
    } else {
        todaygold600fmcreport = "\n" + todaygold600fmcAdjusted + " * We Gold 600 FMC";
        todaygold600fmcreportForSharing = "\n" + "```" + todaygold600fmcAdjusted + "```" + " * We Gold 600 FMC";
    }
    if (todaygold800fmc == "0") {
        todaygold800fmcreport = "";
        todaygold800fmcreportForSharing = "";
    } else {
        todaygold800fmcreport = "\n" + todaygold800fmcAdjusted + " * We Gold 800 FMC";
        todaygold800fmcreportForSharing = "\n" + "```" + todaygold800fmcAdjusted + "```" + " * We Gold 800 FMC";
    }
    if (todaygold1000fmc == "0") {
        todaygold1000fmcreport = "";
        todaygold1000fmcreportForSharing = "";
    } else {
        todaygold1000fmcreport = "\n" + todaygold1000fmcAdjusted + " * We Gold 1000 FMC";
        todaygold1000fmcreportForSharing = "\n" + "```" + todaygold1000fmcAdjusted + "```" + " * We Gold 1000 FMC";
    }
    if (todaygold1500fmc == "0") {
        todaygold1500fmcreport = "";
        todaygold1500fmcreportForSharing = "";
    } else {
        todaygold1500fmcreport = "\n" + todaygold1500fmcAdjusted + " * We Gold 1500 FMC";
        todaygold1500fmcreportForSharing = "\n" + "```" + todaygold1500fmcAdjusted + "```" + " * We Gold 1500 FMC";
    }
    if (todaygold200sa == "0") {
        todaygold200sareport = "";
        todaygold200sareportForSharing = "";
    } else {
        todaygold200sareport = "\n" + todaygold200saAdjusted + " * We Gold 200 SA";
        todaygold200sareportForSharing = "\n" + "```" + todaygold200saAdjusted + "```" + " * We Gold 200 SA";
    }
    if (todaygold400sa == "0") {
        todaygold400sareport = "";
        todaygold400sareportForSharing = "";
    } else {
        todaygold400sareport = "\n" + todaygold400saAdjusted + " * We Gold 400 SA";
        todaygold400sareportForSharing = "\n" + "```" + todaygold400saAdjusted + "```" + " * We Gold 400 SA";
    }
    if (todaygold600sa == "0") {
        todaygold600sareport = "";
        todaygold600sareportForSharing = "";
    } else {
        todaygold600sareport = "\n" + todaygold600saAdjusted + " * We Gold 600 SA";
        todaygold600sareportForSharing = "\n" + "```" + todaygold600saAdjusted + "```" + " * We Gold 600 SA";
    }
    if (todaygold800sa == "0") {
        todaygold800sareport = "";
        todaygold800sareportForSharing = "";
    } else {
        todaygold800sareport = "\n" + todaygold800saAdjusted + " * We Gold 800 SA";
        todaygold800sareportForSharing = "\n" + "```" + todaygold800saAdjusted + "```" + " * We Gold 800 SA";
    }
    if (todaygold1000sa == "0") {
        todaygold1000sareport = "";
        todaygold1000sareportForSharing = "";
    } else {
        todaygold1000sareport = "\n" + todaygold1000saAdjusted + " * We Gold 1000 SA";
        todaygold1000sareportForSharing = "\n" + "```" + todaygold1000saAdjusted + "```" + " * We Gold 1000 SA";
    }
    if (todaygold1500sa == "0") {
        todaygold1500sareport = "";
        todaygold1500sareportForSharing = "";
    } else {
        todaygold1500sareport = "\n" + todaygold1500saAdjusted + " * We Gold 1500 SA";
        todaygold1500sareportForSharing = "\n" + "```" + todaygold1500saAdjusted + "```" + " * We Gold 1500 SA";
    }
    if (todayadsl140 == "0") {
        todayadsl140report = "";
        todayadsl140reportForSharing = "";
    } else {
        todayadsl140report = "\n" + todayadsl140Adjusted + " * ADSL 140GB";
        todayadsl140reportForSharing = "\n" + "```" + todayadsl140Adjusted + "```" + " * ADSL 140GB";
    }
    if (todayadsl200 == "0") {
        todayadsl200report = "";
        todayadsl200reportForSharing = "";
    } else {
        todayadsl200report = "\n" + todayadsl200Adjusted + " * ADSL 200GB";
        todayadsl200reportForSharing = "\n" + "```" + todayadsl200Adjusted + "```" + " * ADSL 200GB";
    }
    if (todayadsl250 == "0") {
        todayadsl250report = "";
        todayadsl250reportForSharing = "";
    } else {
        todayadsl250report = "\n" + todayadsl250Adjusted + " * ADSL 250GB";
        todayadsl250reportForSharing = "\n" + "```" + todayadsl250Adjusted + "```" + " * ADSL 250GB";
    }
    if (todayadsl300 == "0") {
        todayadsl300report = "";
        todayadsl300reportForSharing = "";
    } else {
        todayadsl300report = "\n" + todayadsl300Adjusted + " * ADSL 300GB";
        todayadsl300reportForSharing = "\n" + "```" + todayadsl300Adjusted + "```" + " * ADSL 300GB";
    }
    if (todayadsl400 == "0") {
        todayadsl400report = "";
        todayadsl400reportForSharing = "";
    } else {
        todayadsl400report = "\n" + todayadsl400Adjusted + " * ADSL 400GB";
        todayadsl400reportForSharing = "\n" + "```" + todayadsl400Adjusted + "```" + " * ADSL 400GB";
    }
    if (todayadsl500 == "0") {
        todayadsl500report = "";
        todayadsl500reportForSharing = "";
    } else {
        todayadsl500report = "\n" + todayadsl500Adjusted + " * ADSL 500GB";
        todayadsl500reportForSharing = "\n" + "```" + todayadsl500Adjusted + "```" + " * ADSL 500GB";
    }
    if (todayadsl600 == "0") {
        todayadsl600report = "";
        todayadsl600reportForSharing = "";
    } else {
        todayadsl600report = "\n" + todayadsl600Adjusted + " * ADSL 600GB";
        todayadsl600reportForSharing = "\n" + "```" + todayadsl600Adjusted + "```" + " * ADSL 600GB";
    }
    if (todayadsl1000 == "0") {
        todayadsl1000report = "";
        todayadsl1000reportForSharing = "";
    } else {
        todayadsl1000report = "\n" + todayadsl1000Adjusted + " * ADSL 1TB";
        todayadsl1000reportForSharing = "\n" + "```" + todayadsl1000Adjusted + "```" + " * ADSL 1TB";
    }
    if (todayadsl1500 == "0") {
        todayadsl1500report = "";
        todayadsl1500reportForSharing = "";
    } else {
        todayadsl1500report = "\n" + todayadsl1500Adjusted + " * ADSL 1.5TB";
        todayadsl1500reportForSharing = "\n" + "```" + todayadsl1500Adjusted + "```" + " * ADSL 1.5TB";
    }
    if (todayadslannual == "0") {
        todayadslannualreport = "";
        todayadslannualreportForSharing = "";
    } else {
        todayadslannualreport = "\n" + todayadslannualAdjusted + " * ADSL Annual";
        todayadslannualreportForSharing = "\n" + "```" + todayadslannualAdjusted + "```" + " * ADSL Annual";
    }
    if (todayfixed == "0") {
        todayfixedreport = "";
        todayfixedreportForSharing = "";
    } else {
        todayfixedreport = "\n" + todayfixedAdjusted + " * Fixed";
        todayfixedreportForSharing = "\n" + "```" + todayfixedAdjusted + "```" + " * Fixed";
    }
    if (todaywallet == "0") {
        todaywalletreport = "";
        todaywalletreportForSharing = "";
    } else {
        todaywalletreport = "\n" + todaywalletAdjusted + " * Wallet";
        todaywalletreportForSharing = "\n" + "```" + todaywalletAdjusted + "```" + " * Wallet";
    }
    todaysales =
        todaypaygreport +
        todaydatareport +
        todaysuperkix20report +
        todaysuperkix25report +
        todaysuperkix35report +
        todaysuperkix45report +
        todaysuperkix65report +
        todaysuperkix80report +
        todaysuperkix100report +
        todaytazbeet30report +
        todaytazbeet40report +
        todaytazbeet70report +
        todaytazbeet110report +
        todayweclub25report +
        todayweclub40report +
        todayweclub65report +
        todayweclub100report +
        todaywemix165report +
        todaywemix240report +
        todaygold200fmcreport +
        todaygold400fmcreport +
        todaygold600fmcreport +
        todaygold800fmcreport +
        todaygold1000fmcreport +
        todaygold1500fmcreport +
        todaygold200sareport +
        todaygold400sareport +
        todaygold600sareport +
        todaygold800sareport +
        todaygold1000sareport +
        todaygold1500sareport +
        todayadsl140report +
        todayadsl200report +
        todayadsl250report +
        todayadsl300report +
        todayadsl400report +
        todayadsl500report +
        todayadsl600report +
        todayadsl1000report +
        todayadsl1500report +
        todayadslannualreport +
        todayfixedreport +
        todaywalletreport;
    todaysalesForSharing =
        todaypaygreportForSharing +
        todaydatareportForSharing +
        todaysuperkix20reportForSharing +
        todaysuperkix25reportForSharing +
        todaysuperkix35reportForSharing +
        todaysuperkix45reportForSharing +
        todaysuperkix65reportForSharing +
        todaysuperkix80reportForSharing +
        todaysuperkix100reportForSharing +
        todaytazbeet30reportForSharing +
        todaytazbeet40reportForSharing +
        todaytazbeet70reportForSharing +
        todaytazbeet110reportForSharing +
        todayweclub25reportForSharing +
        todayweclub40reportForSharing +
        todayweclub65reportForSharing +
        todayweclub100reportForSharing +
        todaywemix165reportForSharing +
        todaywemix240reportForSharing +
        todaygold200fmcreportForSharing +
        todaygold400fmcreportForSharing +
        todaygold600fmcreportForSharing +
        todaygold800fmcreportForSharing +
        todaygold1000fmcreportForSharing +
        todaygold1500fmcreportForSharing +
        todaygold200sareportForSharing +
        todaygold400sareportForSharing +
        todaygold600sareportForSharing +
        todaygold800sareportForSharing +
        todaygold1000sareportForSharing +
        todaygold1500sareportForSharing +
        todayadsl140reportForSharing +
        todayadsl200reportForSharing +
        todayadsl250reportForSharing +
        todayadsl300reportForSharing +
        todayadsl400reportForSharing +
        todayadsl500reportForSharing +
        todayadsl600reportForSharing +
        todayadsl1000reportForSharing +
        todayadsl1500reportForSharing +
        todayadslannualreportForSharing +
        todayfixedreportForSharing +
        todaywalletreportForSharing;
    if (todaysales == "") {
        todaysalesreport = "";
        todaysalesreportForSharing = "";
    } else {
        todaysalesreport = todaysales + "\n" + "--------------------------";
        todaysalesreportForSharing = todaysalesForSharing + "\n" + "```--------------------------```";
    }
    todayadslbillsInput = document.getElementById("todayadslbills").value.split(" ");
    todayadslbills = 0;
    for (i = 0; i < todayadslbillsInput.length; i++) {
        todayadslbills += parseInt(todayadslbillsInput[i]) || 0;
    }
    todaypostpaidbillsInput = document.getElementById("todaypostpaidbills").value.split(" ");
    todaypostpaidbills = 0;
    for (i = 0; i < todaypostpaidbillsInput.length; i++) {
        todaypostpaidbills += parseInt(todaypostpaidbillsInput[i]) || 0;
    }
    todayfixedbillsInput = document.getElementById("todayfixedbills").value.split(" ");
    todayfixedbills = 0;
    for (i = 0; i < todayfixedbillsInput.length; i++) {
        todayfixedbills += parseInt(todayfixedbillsInput[i]) || 0;
    }
    todaycashInput = document.getElementById("todaycash").value.split(" ");
    todaycash = 0;
    for (i = 0; i < todaycashInput.length; i++) {
        todaycash += parseInt(todaycashInput[i]) || 0;
    }
    dailymobile = todaypayg + todaydata + todaysuperkix + todaytazbeet + todayweclub + todaywemix + todaygold || 0;
    utdmobile = utdpayg + utddata + utdsuperkix + utdtaz + utdweclub + utdwemix + utdwegold || 0;
    targetmobile = targetpayg + targetdata + targetsuperkix + targettaz + targetwemix + targetweclub + targetwegold || 0;
    vsPAYG = ~~Number(Math.round((utdpayg / targetpayg) * 100)) || 0;
    vsData = ~~Number(Math.round((utddata / targetdata) * 100)) || 0;
    vsSuperKix = ~~Number(Math.round((utdsuperkix / targetsuperkix) * 100)) || 0;
    vsTaz = ~~Number(Math.round((utdtaz / targettaz) * 100)) || 0;
    vsWeClub = ~~Number(Math.round((utdweclub / targetweclub) * 100)) || 0;
    vsWeMix = ~~Number(Math.round((utdwemix / targetwemix) * 100)) || 0;
    vsGold = ~~Number(Math.round((utdwegold / targetwegold) * 100)) || 0;
    vsGoldSa = ~~Number(Math.round((utdwegoldsa / utdwegold) * 100)) || 0;
    vsAdsl = ~~Number(Math.round((utdadsl / targetadsl) * 100)) || 0;
    vsAdslHt = ~~Number(Math.round((utdadslht / utdadsl) * 100)) || 0;
    vsFixed = ~~Number(Math.round((utdfixed / targetfixed) * 100)) || 0;
    vsWallet = ~~Number(Math.round((utdwallet / targetwallet) * 100)) || 0;
    vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    reMobile = ~~Number(Math.round((((utdmobile / targetmobile) * 100) / day) * daysinmonth)) || 0;
    dailyrequired = ~~Number(Math.ceil((targetmobile - utdmobile) / (daysinmonth - day))) || 0;
    if (daysinmonth - day == "0" || dailyrequired <= "0") {
        dailyrequiredreport = "-";
    } else {
        dailyrequiredreport = dailyrequired;
    }
    dailyrequiredGold = ~~Number(Math.ceil((targetwegold - utdwegold) / (daysinmonth - day))) || 0;
    if (daysinmonth - day == "0" || dailyrequiredGold <= "0") {
        dailyrequiredGoldreport = "-";
    } else {
        dailyrequiredGoldreport = dailyrequiredGold;
    }
    dailyrequiredWallet = ~~Number(Math.ceil((targetwallet - utdwallet) / (daysinmonth - day))) || 0;
    if (daysinmonth - day == "0" || dailyrequiredWallet <= "0") {
        dailyrequiredWalletreport = "-";
    } else {
        dailyrequiredWalletreport = dailyrequiredWallet;
    }
    if (daysinmonth - day == "0") {
        reMobilereport = "-";
    } else {
        reMobilereport = reMobile + "%";
    }
    var targetArray = [
        "T",
        targetpayg.toString(),
        targetdata.toString(),
        targetsuperkix.toString(),
        targettaz.toString(),
        targetweclub.toString(),
        targetwemix.toString(),
        targetwegold.toString(),
        targetadsl.toString(),
        targetfixed.toString(),
        targetwallet.toString(),
        targetmobile.toString(),
    ];
    var fakeTargetArray = [
        targetpayg.toString(),
        targetdata.toString(),
        targetsuperkix.toString(),
        targettaz.toString(),
        targetweclub.toString(),
        targetwemix.toString(),
        targetwegold.toString(),
        targetadsl.toString(),
        targetfixed.toString(),
        targetwallet.toString(),
        targetmobile.toString(),
    ];
    let maxTarget = Math.max(...fakeTargetArray).toString().length;
    if (maxTarget < 5) {
        newMaxTarget = 5;
    } else {
        newMaxTarget = maxTarget;
    }
    var targetArrayAdjusted = correctLength(targetArray, newMaxTarget);
    function correctLength(array, length) {
        array.map(function (v, i) {
            if (array[i].length < length) {
                array[i] += Array(length + 1 - array[i].length).join(" ");
            }
        });
        return array;
    }
    targetHeader = targetArrayAdjusted[0];
    targetpaygAdjusted = targetArrayAdjusted[1];
    targetdataAdjusted = targetArrayAdjusted[2];
    targetsuperkixAdjusted = targetArrayAdjusted[3];
    targettazAdjusted = targetArrayAdjusted[4];
    targetweclubAdjusted = targetArrayAdjusted[5];
    targetwemixAdjusted = targetArrayAdjusted[6];
    targetwegoldAdjusted = targetArrayAdjusted[7];
    targetadslAdjusted = targetArrayAdjusted[8];
    targetfixedAdjusted = targetArrayAdjusted[9];
    targetwalletAdjusted = targetArrayAdjusted[10];
    targetmobileAdjusted = targetArrayAdjusted[11];
    var utdArray = [
        "A",
        utdpayg.toString(),
        utddata.toString(),
        utdsuperkix.toString(),
        utdtaz.toString(),
        utdweclub.toString(),
        utdwemix.toString(),
        utdwegold.toString(),
        utdadsl.toString(),
        utdfixed.toString(),
        utdwallet.toString(),
        utdmobile.toString(),
    ];
    var fakeUtdArray = [
        utdpayg.toString(),
        utddata.toString(),
        utdsuperkix.toString(),
        utdtaz.toString(),
        utdweclub.toString(),
        utdwemix.toString(),
        utdwegold.toString(),
        utdadsl.toString(),
        utdfixed.toString(),
        utdwallet.toString(),
        utdmobile.toString(),
    ];
    let maxUtd = Math.max(...fakeUtdArray).toString().length;
    if (maxUtd < 5) {
        newMaxUtd = 5;
    } else {
        newMaxUtd = maxUtd;
    }
    var utdArrayAdjusted = correctLength(utdArray, newMaxUtd);
    function correctLength(array, length) {
        array.map(function (v, i) {
            if (array[i].length < length) {
                array[i] += Array(length + 1 - array[i].length).join(" ");
            }
        });
        return array;
    }
    achievedHeader = utdArrayAdjusted[0];
    utdpaygAdjusted = utdArrayAdjusted[1];
    utddataAdjusted = utdArrayAdjusted[2];
    utdsuperkixAdjusted = utdArrayAdjusted[3];
    utdtazAdjusted = utdArrayAdjusted[4];
    utdweclubAdjusted = utdArrayAdjusted[5];
    utdwemixAdjusted = utdArrayAdjusted[6];
    utdwegoldAdjusted = utdArrayAdjusted[7];
    utdadslAdjusted = utdArrayAdjusted[8];
    utdfixedAdjusted = utdArrayAdjusted[9];
    utdwalletAdjusted = utdArrayAdjusted[10];
    utdmobileAdjusted = utdArrayAdjusted[11];
    document.getElementById("salesreport").value =
        "Date: " +
        date +
        "\n" +
        "Name: " +
        yourname +
        "\n" +
        "--------------------------" +
        todaysalesreport +
        "\n" +
        "* Today Lines: " +
        dailymobile +
        "\n" +
        "* Daily Required: " +
        dailyrequiredreport +
        "\n" +
        "* RE: " +
        reMobilereport +
        "\n" +
        "* We Gold SA: " +
        vsGoldSa +
        "%" +
        "\n" +
        "* ADSL High Tariff: " +
        vsAdslHt +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "Product:   " +
        targetHeader +
        " " +
        achievedHeader +
        " VS" +
        "\n" +
        "--------------------------" +
        "\n" +
        "PAYG   :   " +
        targetpaygAdjusted +
        " " +
        utdpaygAdjusted +
        " " +
        vsPAYG +
        "%" +
        "\n" +
        "Data   :   " +
        targetdataAdjusted +
        " " +
        utddataAdjusted +
        " " +
        vsData +
        "%" +
        "\n" +
        "Kix    :   " +
        targetsuperkixAdjusted +
        " " +
        utdsuperkixAdjusted +
        " " +
        vsSuperKix +
        "%" +
        "\n" +
        "Tazbeet:   " +
        targettazAdjusted +
        " " +
        utdtazAdjusted +
        " " +
        vsTaz +
        "%" +
        "\n" +
        "We Club:   " +
        targetweclubAdjusted +
        " " +
        utdweclubAdjusted +
        " " +
        vsWeClub +
        "%" +
        "\n" +
        "We Mix :   " +
        targetwemixAdjusted +
        " " +
        utdwemixAdjusted +
        " " +
        vsWeMix +
        "%" +
        "\n" +
        "We Gold:   " +
        targetwegoldAdjusted +
        " " +
        utdwegoldAdjusted +
        " " +
        vsGold +
        "%" +
        "\n" +
        "ADSL   :   " +
        targetadslAdjusted +
        " " +
        utdadslAdjusted +
        " " +
        vsAdsl +
        "%" +
        "\n" +
        "Fixed  :   " +
        targetfixedAdjusted +
        " " +
        utdfixedAdjusted +
        " " +
        vsFixed +
        "%" +
        "\n" +
        "Wallet :   " +
        targetwalletAdjusted +
        " " +
        utdwalletAdjusted +
        " " +
        vsWallet +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "Total  :   " +
        targetmobileAdjusted +
        " " +
        utdmobileAdjusted +
        " " +
        vsMobile +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "* ADSL Bills: " +
        todayadslbills +
        "\n" +
        "* Postpaid Bills: " +
        todaypostpaidbills +
        "\n" +
        "* Fixed Bills: " +
        todayfixedbills +
        "\n" +
        "* Cash: " +
        todaycash +
        " LE";
    salesreportForSharing =
        "Date: " +
        date +
        "\n" +
        "Name: " +
        yourname +
        "\n" +
        "```--------------------------```" +
        todaysalesreportForSharing +
        "\n" +
        "* Today Lines: " +
        dailymobile +
        "\n" +
        "* Daily Required: " +
        dailyrequiredreport +
        "\n" +
        "* RE: " +
        reMobilereport +
        "\n" +
        "* We Gold SA: " +
        vsGoldSa +
        "%" +
        "\n" +
        "* ADSL High Tariff: " +
        vsAdslHt +
        "%" +
        "\n" +
        "```--------------------------" +
        "\n" +
        "Product:   " +
        targetHeader +
        " " +
        achievedHeader +
        " VS" +
        "\n" +
        "--------------------------" +
        "\n" +
        "PAYG   :   " +
        targetpaygAdjusted +
        " " +
        utdpaygAdjusted +
        " " +
        vsPAYG +
        "%" +
        "\n" +
        "Data   :   " +
        targetdataAdjusted +
        " " +
        utddataAdjusted +
        " " +
        vsData +
        "%" +
        "\n" +
        "Kix    :   " +
        targetsuperkixAdjusted +
        " " +
        utdsuperkixAdjusted +
        " " +
        vsSuperKix +
        "%" +
        "\n" +
        "Tazbeet:   " +
        targettazAdjusted +
        " " +
        utdtazAdjusted +
        " " +
        vsTaz +
        "%" +
        "\n" +
        "We Club:   " +
        targetweclubAdjusted +
        " " +
        utdweclubAdjusted +
        " " +
        vsWeClub +
        "%" +
        "\n" +
        "We Mix :   " +
        targetwemixAdjusted +
        " " +
        utdwemixAdjusted +
        " " +
        vsWeMix +
        "%" +
        "\n" +
        "We Gold:   " +
        targetwegoldAdjusted +
        " " +
        utdwegoldAdjusted +
        " " +
        vsGold +
        "%" +
        "\n" +
        "ADSL   :   " +
        targetadslAdjusted +
        " " +
        utdadslAdjusted +
        " " +
        vsAdsl +
        "%" +
        "\n" +
        "Fixed  :   " +
        targetfixedAdjusted +
        " " +
        utdfixedAdjusted +
        " " +
        vsFixed +
        "%" +
        "\n" +
        "Wallet :   " +
        targetwalletAdjusted +
        " " +
        utdwalletAdjusted +
        " " +
        vsWallet +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "Total  :   " +
        targetmobileAdjusted +
        " " +
        utdmobileAdjusted +
        " " +
        vsMobile +
        "%" +
        "\n" +
        "--------------------------```" +
        "\n" +
        "* ADSL Bills: " +
        todayadslbills +
        "\n" +
        "* Postpaid Bills: " +
        todaypostpaidbills +
        "\n" +
        "* Fixed Bills: " +
        todayfixedbills +
        "\n" +
        "* Cash: " +
        todaycash +
        " LE";
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
    doc.document.write("<html lang=en><head><title>Sales Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body><div>");
    doc.document.write(document.getElementById("salesreport").value.replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
    document.getElementById("printFrame").contentWindow.print();
}
function Save__1() {
    let x = parseInt(localStorage.getItem("currentUser"));
    localStorage.setItem("yourname.agent." + x, document.getElementById("yourname").value || "Agent " + x);
    localStorage.setItem("achievedpayg.agent." + x, utdpayg);
    localStorage.setItem("targetpayg.agent." + x, document.getElementById("targetpayg").value);
    localStorage.setItem("achieveddata.agent." + x, utddata);
    localStorage.setItem("targetdata.agent." + x, document.getElementById("targetdata").value);
    localStorage.setItem("achievedsuperkix.agent." + x, utdsuperkix);
    localStorage.setItem("targetsuperkix.agent." + x, document.getElementById("targetsuperkix").value);
    localStorage.setItem("achievedtaz.agent." + x, utdtaz);
    localStorage.setItem("targettaz.agent." + x, document.getElementById("targettaz").value);
    localStorage.setItem("achievedweclub.agent." + x, utdweclub);
    localStorage.setItem("targetweclub.agent." + x, document.getElementById("targetweclub").value);
    localStorage.setItem("achievedwemix.agent." + x, utdwemix);
    localStorage.setItem("targetwemix.agent." + x, document.getElementById("targetwemix").value);
    localStorage.setItem("achievedwegoldfmc.agent." + x, utdwegoldfmc);
    localStorage.setItem("achievedwegoldsa.agent." + x, utdwegoldsa);
    localStorage.setItem("targetwegold.agent." + x, document.getElementById("targetwegold").value);
    localStorage.setItem("achievedadsl140.agent." + x, utdadsl140);
    localStorage.setItem("achievedadslht.agent." + x, utdadslht);
    localStorage.setItem("targetadsl.agent." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.agent." + x, utdfixed);
    localStorage.setItem("targetfixed.agent." + x, document.getElementById("targetfixed").value);
    localStorage.setItem("achievedwallet.agent." + x, utdwallet);
    localStorage.setItem("targetwallet.agent." + x, document.getElementById("targetwallet").value);
    document.getElementById("save__1").disabled = true;
    document.getElementById("save__2").disabled = true;
    document.getElementById("save__1").innerHTML = "Saved";
    document.getElementById("save__2").innerHTML = "Saved";
    localStorage.setItem("agentRestore", "true");
    localStorage.setItem("users", sessionStorage.getItem("users"));
    localStorage.setItem("selectedUser", localStorage.getItem("currentUser"));
    localStorage.setItem("activeUsers", localStorage.getItem("users") - localStorage.getItem("removedUsers"));
}
function Save__2() {
    Save__1();
}
function RemoveUser() {
    let x = parseInt(localStorage.getItem("selectedUser"));
    let text = "Are you sure you want to delete " + '"' + localStorage.getItem("yourname.agent." + x) + '"?';
    if (confirm(text) == true) {
        localStorage.setItem("deleteUser" + x, "true");
        localStorage.removeItem("yourname.agent." + x);
        localStorage.removeItem("achievedpayg.agent." + x);
        localStorage.removeItem("targetpayg.agent." + x);
        localStorage.removeItem("achieveddata.agent." + x);
        localStorage.removeItem("targetdata.agent." + x);
        localStorage.removeItem("achievedsuperkix.agent." + x);
        localStorage.removeItem("targetsuperkix.agent." + x);
        localStorage.removeItem("achievedtaz.agent." + x);
        localStorage.removeItem("targettaz.agent." + x);
        localStorage.removeItem("achievedweclub.agent." + x);
        localStorage.removeItem("targetweclub.agent." + x);
        localStorage.removeItem("achievedwemix.agent." + x);
        localStorage.removeItem("targetwemix.agent." + x);
        localStorage.removeItem("achievedwegoldfmc.agent." + x);
        localStorage.removeItem("achievedwegoldsa.agent." + x);
        localStorage.removeItem("targetwegold.agent." + x);
        localStorage.removeItem("achievedadsl140.agent." + x);
        localStorage.removeItem("achievedadslht.agent." + x);
        localStorage.removeItem("targetadsl.agent." + x);
        localStorage.removeItem("achievedfixed.agent." + x);
        localStorage.removeItem("targetfixed.agent." + x);
        localStorage.removeItem("achievedwallet.agent." + x);
        localStorage.removeItem("targetwallet.agent." + x);
        let selectedUser = localStorage.getItem("users");
        for (i = 1; i <= selectedUser; i++) {
            if (localStorage.getItem("deleteUser" + i) == "true") continue;
            selectedUser = parseInt([i]);
            localStorage.setItem("selectedUser", selectedUser);
        }
        localStorage.setItem("activeUsers", localStorage.getItem("activeUsers") - 1);
        localStorage.setItem("removedUsers", parseInt(localStorage.getItem("removedUsers")) + 1 || 1);
        if (localStorage.getItem("activeUsers") < "1") {
            for (i = 1; i <= localStorage.getItem("users"); i++) {
                localStorage.removeItem("deleteUser" + i);
            }
            localStorage.removeItem("activeUsers");
            localStorage.removeItem("currentUser");
            localStorage.removeItem("selectedUser");
            localStorage.removeItem("removedUsers");
            localStorage.removeItem("agentRestore");
            localStorage.removeItem("users");
        }
        window.location.href = "agent.html";
    } else {
        return false;
    }
}
