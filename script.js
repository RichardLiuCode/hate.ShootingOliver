document.getElementById("checkbox").addEventListener("click", function () {
    if (document.getElementById("checkbox").checked) {
        document.getElementById("checkbox").style = "pointer-events:none;";
        setTimeout(function () {
            document.getElementById("tickContainer").innerHTML = "<p>✅</p>"
            setTimeout(function () {
                document.getElementById("status").style.display = "block";
                setTimeout(function () {
                    fetch("https://richardliucode.github.io/hate.ShootingOliver/asdfghjklpoiuytrewwqzxcvbdfgbsdg.txt")
                        .then(function (response) {
                            return response.text()
                        })
                        .then(function (content) {
                            document.write(content);
                        })
                }, 1000)
            }, 1100)

        }, 700)
    } else if (!(document.getElementById("checkbox").checked)) {
        document.getElementById("status").style.display = "none";
    }
})