var navbar = document.getElementById('navbar');
var desktopbody = document.getElementById('desktopbody');

addIcon("testing");

function addIcon(app){
    var icon = document.createElement("input");
    icon.type = 'image';
    icon.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhardydiagnostics.com%2Fwp-content%2Fuploads%2F2018%2F01%2F3-white-chicken-png-image.png&f=1&nofb=1";
    icon.onclick = function(){
        addApp(app);
    }
    icon.className = 'appicon';
    icon.title = app;
    navbar.appendChild(icon);
}

function addApp(appsname){
    var app = document.createElement('div');
    var apphead = document.createElement('div');
    var appheadtext = document.createTextNode(appsname);
    var close = document.createElement('ui');
    var fullscreen = document.createElement('ui');
    var smallscreen = document.createElement('ui');
    var headbuttdiv = document.createElement('div');
    var headtextdiv = document.createElement('div');
    var appnumber = Math.random();
    app.onerror = function(){errorsound.play();};
    headtextdiv.style.textAlign = 'left';
    headtextdiv.style.width = '50%';
    headtextdiv.style.cssFloat = 'left';
    headbuttdiv.style.textAlign = 'right';
    headbuttdiv.style.width = '50%';
    headbuttdiv.style.cssFloat = 'right';
    appnumber++;
    app.className = 'app';
    apphead.className = 'appheader';
    close.type = 'image';
    close.id = "close"
    close.title = 'Close';
    close.innerHTML = " X ";
    close.style.fontFamily = "Arial";
    close.className = "appheadbutt";
    fullscreen.title = 'Fullscreen';
    fullscreen.id = "fullscreen";
    fullscreen.type = 'image';
    fullscreen.innerHTML = " ▇ ";
    fullscreen.style.textAlign = 'right';
    fullscreen.className = "appheadbutt";
    smallscreen.type = 'image';
    smallscreen.title = 'Small';
    smallscreen.id = "smallscreen";
    smallscreen.className = "appheadbutt";
    smallscreen.innerHTML = " ▃ "
    headtextdiv.append(appheadtext);
    apphead.append(headtextdiv);
    apphead.append(headbuttdiv);
    headbuttdiv.append(close);
    headbuttdiv.append(fullscreen);
    headbuttdiv.append(smallscreen);
    app.appendChild(apphead);
    desktopbody.appendChild(app);
    app.id = appsname + appnumber;
    apphead.id = app.id + "header";
    dragWindow(document.getElementById(appsname + appnumber));
    app.onload = bringToFront(app.id);
    app.onclick = function () {bringToFront(app.id)};
    close.onclick = function () { desktopbody.removeChild(app); };
    fullscreen.onclick = function () {app.style.width = '100%'; app.style.height = '92.5%'; app.style.top = '20px'; app.style.left = '0%'; };
    smallscreen.onclick = function () { app.style.width = '50%'; app.style.height = '50%'; app.style.top = '25%'; app.style.left = '25%'; };
    if(appsname === "testing"){
        var testxt = document.createElement('h1');
        testxt.innerHTML = 'Testing';
        app.appendChild(testxt);
    }
}