import { NetworkHandler } from "../../utilities/networkhandler.v2.min.js";
const SalaView = {
    status: null,
    waiting: null,
    init: () => {
        SalaView.setForm();
    },
    setCall: (code, name) => {
        var banner = document.getElementById("banner");
        banner.innerHTML = name;
        banner.style.display = "flex"
        var screen = document.getElementById("screen");
        screen.innerHTML = '';
        try {
            var callFrame = window.DailyIframe.createFrame();
            callFrame.join({
                url: 'https://massmedios.daily.co/' + code
            })
        } catch (error) {
            console.error(error);
        }
        document.body.insertAdjacentHTML('beforeend', '<button id="salir">Salir</button>');
        document.getElementById('salir').addEventListener('click', () => SalaView.setDefault());
    },
    setControls: (agenda) => {
        var agendaob = JSON.parse(agenda);
        let content = '';
        content += '<div id="controls">';
        content += '<button id="agenda-btn">AGENDA</button>';
        content += '<div><table>';
        content += '<tr><th>Hora</th><th>Nombre</th></tr>';
        for (let row of agendaob) {
            let active = '';
            if (row.oauth == "Y") active = 'class="active"'
            content += '<tr id="' + row.code + '-row" ' + active + '><td>' + row.startdt + '</td><td>' + row.name + '</td></tr>';
        }
        content += '</table></div>';
        content += '</div>';
        document.getElementById("container-space").insertAdjacentHTML('beforeend', content);
        for (let row of agendaob) {
            SalaView.toogleAgenda(row.code)
        }
        document.getElementById("agenda-btn").addEventListener('click', () => {
            document.getElementById('controls').classList.toggle("active")
        })
    },
    toogleAgenda: (code) => {
        document.getElementById(code + "-row").addEventListener("click", async() => {
            $("body").css("cursor", "progress");
            let response = await NetworkHandler.getrequest("sala/oauth?code=" + code)
            if (response.status == "error") toastr.error(response.message);
            else document.getElementById(code + "-row").classList.toggle("active");
            $("body").css("cursor", "default");
        })
    },
    setForm: async() => {
        NetworkHandler.setupform(document.getElementById("login-form"), "sala/login", (success) => {
            if (success.status == "success") {
                if (success.type != "W") SalaView.setCall(success.code, success.name)
                else SalaView.setWaiting(success.email);
                if (success.type == "A") SalaView.setControls(success.agenda);
                else if (success.type == "V") SalaView.status = setInterval(function() { SalaView.checkStatus(success.meeting); }, 3000);
            } else toastr.error(success.message)
        }, (error) => {
            console.log(error)
        });
    },
    checkStatus: async(meeting) => {
        let response = await NetworkHandler.getrequest("sala/status?code=" + meeting);
        if (response.schedule == false) {
            toastr.error("La reunión ha sido terminada por el anfitrión");
            SalaView.setDefault();
        }
    },
    setWaiting: (email) => {
        document.getElementById("screen").innerHTML = '<div class="waiting"><img src="resources/images/brand/title.png" alt="Rueda de Negocios Virtual y Multisectorial" class="waiting title"><span class="waiting">ESPERANDO A QUE EL ANFITRIÓN INICIE LA REUNIÓN</span><img src="resources/images/brand/logo.png" alt="Rueda de Negocios Virtual y Multisectorial" class="waiting logo"></div>';
        SalaView.waiting = setInterval(async() => {
            var response = await NetworkHandler.getrequest("sala/login?email=" + email);
            if (response.status == "success") {
                if (response.type != "W") {
                    clearInterval(SalaView.status);
                    clearInterval(SalaView.waiting);
                    SalaView.setCall(response.code, response.name)
                    SalaView.status = setInterval(async() => { await SalaView.checkStatus(response.meeting); }, 3000);
                }
            } else {
                SalaView.setDefault();
                toastr.error(response.message)
            }
        }, 3000)
    },
    setDefault: () => {
        location.reload();
    }
};
document.addEventListener("DOMContentLoaded", SalaView.init)