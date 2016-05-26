$(document).ready(function () {


    var CookieStyle = getCookie("style");

    if (CookieStyle != "")
    {
        $("#ChangeStyle").attr("href", CookieStyle);
    }



    // Stylesheet changer

    $("#GranpasArmchair").click(function () {
        $("#ChangeStyle").attr("href", ROOT + "Content/StyleSheet1.css");
        setCookie("style",ROOT + "Content/StyleSheet1.css",365);
        return false;
    });

    $("#GreenTheme").click(function () {
        $("#ChangeStyle").attr("href", ROOT + "Content/StyleSheet2.css");
        setCookie("style", ROOT + "Content/StyleSheet2.css", 365);
        return false;
    });

    $("#GrayTheme").click(function () {
        $("#ChangeStyle").attr("href", ROOT + "Content/StyleSheet3.css");
        setCookie("style", ROOT + "Content/StyleSheet3.css", 365);
        return false;
    });

    $("#BlueTheme").click(function () {
        $("#ChangeStyle").attr("href", ROOT + "Content/StyleSheet4.css");
        setCookie("style", ROOT + "Content/StyleSheet4.css", 365);
        return false;
    });
});
/*cookie is used to change stylesheet */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}