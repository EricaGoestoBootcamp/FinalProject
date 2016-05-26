$(document).ready(function () {


    // Color changer

    $("#GranpasArmchair").click(function () {
        $("#ChangeStyle").attr("href", ROOT + "Content/StyleSheet1.css");
        return false;
    });

    $("#GreenTheme").click(function () {
        $("#ChangeStyle").attr("href", ROOT + "Content/StyleSheet2.css");
        return false;
    });

    $("#GrayTheme").click(function () {
        $("#ChangeStyle").attr("href", ROOT + "Content/StyleSheet3.css");
        return false;
    });

    $("#BlueTheme").click(function () {
        $("#ChangeStyle").attr("href", ROOT + "Content/StyleSheet4.css");
        return false;
    });
});