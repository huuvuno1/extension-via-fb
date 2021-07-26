function getLink(param) {
    return link = `https://www.facebook.com/ajax/login/help/identify.php?ctx=recover&jazoest=21106&lsd=AVrvzTkiFtw&email=${param}&did_submit=1&__user=0&__a=1&__dyn=7xeUmBwjbg7ebwKBWo5O12wAxu13wqovzEdEc8uxa0z8S2S4o720SUhwem0nCq1ewcG0KEswaq0woy1Qw5MKdwl8G0DE7e2l0Fwwwi831wnEfo5m1mwKw8y4Ueo2swkEbEaU2ewnE2Lw5dwp8Gdw&__csr=&__req=u&__hs=18833.PHASED%3ADEFAULT.2.0.0.0&dpr=1&__ccg=MODERATE&__rev=1004155716&__s=smg2xe%3Anpg505%3Ab6z3dx&__hsi=6988858561258983126-0&__comet_req=0&__spin_r=1004155716&__spin_b=trunk&__spin_t=1627220437`;
}

window.onload = () => {
    document.querySelector("#start").addEventListener('click', () => {
        let mails = document.querySelector('#list_mail').value;
        mails.trim().split("\n").forEach(async mail => {
            check(mail);
            await sleep(3000);
        });
    })

}

function check(pram) {
    var xhttp = new XMLHttpRequest() || ActiveXObject();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText.includes('window.location.href')) {
                let result = document.getElementById('result');
                result.value += pram + "\n";
            } else if (this.responseText.includes(`"error":1357004`)) {
                document.getElementById('result').value = "Logout facebook ra mới dùng được bạn êi"
            }
        }
    }
    xhttp.open('POST', getLink(pram),true);
    xhttp.send();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}