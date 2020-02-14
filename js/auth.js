function sisb() {
    $("#signinbox").fadeIn(500);
    $("#signupbox").css("display", "none");
}
function susb() {
    $("#signinbox").css("display", "none");
    $("#signupbox").fadeIn(500);
}

function SubmitLoginForm() {
    document.getElementById("signinform").submit();
}
document.getElementById("loginsubmit").onclick = function () {
    if ($("#signinform .inputfield:empty").length === 0) {
        setTimeout(SubmitLoginForm, 3000);
        $("#loginsubmit").addClass("submitfunc");
    }
};

function SubmitLogupForm() {
    document.getElementById("signupform").submit();
}
document.getElementById("signupsubmit").onclick = function() {
    if ($("#signupform .inputfield:empty") === 0) {
        setTimeout(SubmitLogupForm, 3000);
        $("#signupsubmit").addClass("submitfunc");
    }
};
