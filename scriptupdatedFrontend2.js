import { getCookies } from "./inijs/cookies.js";
import { patchHeader } from "./inijs/api.js";
import { upadateFrontend } from "./inijs/gudangAPI.js";

export default function editFrontend(){
    let tokenkey = "token";
    let tokenvalue = getCookies("login");

    let npm = parseInt(document.getElementById('npm').value);
    let nama = document.getElementById('nama').value;
    let rilisjs = document.getElementById('rilisjs').value;
    let pemanggilanjs = document.getElementById('pemanggilanjs').value;
    let kelengkapancss = document.getElementById('kelengkapancss').value;
    let customdomain = document.getElementById('customdomain').value;
    let status = document.getElementById('status').checked;

    let datainjson = {
        "npm": npm, 
        "nama": nama,
        "rilisjs": rilisjs,
        "pemanggilanjs": pemanggilanjs,
        "kelengkapancss": kelengkapancss,
        "customdomain": customdomain,
        "status": status
    };

    patchHeader(upadateFrontend,datainjson,tokenkey,tokenvalue,responseFunction)
}

function responseFunction(result) {
    if (result.status == true) {
        alert('berhasil update')
        console.log("Berhasil update")
        window.location.href = "getFrontend.html";
    } else {
        alert('gagal update')
        console.log("Gagal")
    }
}


