$(document).ready(function() {
    $("#submit").click(function() {
        var username = $("#username").val();
        if (username.toLowerCase() === 'david')
        {
            window.location.href = 'dashboard_david.html';
        }
        else if (username.toLowerCase() === 'dp') {
            window.location.href = 'dashboard_Frank.html';
        }
        else if (username.toLowerCase() === 'sp') {
            window.location.href = 'dashboard_Jim.html';
        }
        else if (username.toLowerCase() === 'sm') {
            window.location.href = 'dashboard_John.html';
        }
        else if (username.toLowerCase() === 'advisor') {
            window.location.href = 'dashboard_Joseph.html';
        }
        else if (username.toLowerCase() === 'michael') {
            window.location.href = 'dashboard_michael.html';
        }
//        else if (username.toLowerCase() === 'tech') {
//            window.location.href = 'dashboard_tech.html';
//        }
        else if (username.toLowerCase() === 'john') {
            window.location.href = 'dashboard_ccp.html';
        }
        else if (username.toLowerCase() === 'dpnomser') {
            window.location.href = 'dashboard_dp.html';
        }
        else if (username.toLowerCase() === 'edward') {
            window.location.href = 'dashboard_exec.html';
        }
    });
});