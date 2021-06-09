import { NetworkHandler } from "../../utilities/networkhandler.v2.min.js";
const StandView = {
    init: async() => {
        var result = await StandView.getInfo();
        StandView.setLogo(result.code);
        StandView.setImages(result.code, result.imgs);
        StandView.setBrochure(result.code);
        if (result.social != '') StandView.setSocial(result.social);
    },
    getInfo: async() => {
        try {
            return await NetworkHandler.getrequest('stands/get?code=' + location.search.split('name=')[1]);
        } catch (ex) {
            window.location = 'stands?errormsg=';
        }
    },
    setLogo: (src) => {
        document.getElementById("img-logo").src = "resources/docs/stands/companies/" + src + "/logo.jpg";
    },
    setImages: (src, images) => {
        for (let i = 1; i < 4 && i < (images + 1); i++) {
            document.getElementById('img-' + i).src = 'resources/docs/stands/companies/' + src + '/images/' + i + '.png';
            document.getElementById('a-' + i).href = 'resources/docs/stands/companies/' + src + '/images/' + i + '.png';
        }
        for (let i = 1; i < (images + 1); i++) {
            document.getElementById("gallery-content").innerHTML += '<a href="resources/docs/stands/companies/' + src + '/images/' + i + '.png" data-lightbox="example-set"><img src="resources/docs/stands/companies/' + src + '/images/' + i + '.png"></a>'
        }
        document.getElementById("social").innerHTML += '<div class="single-box" style="background: #5D178A"><a href="javascript:toggleGallery();""><p>Galería<img class="gal" src="resources/images/social/gallery.svg" alt="Galeria"></p></a></div>'
    },
    setBrochure: (code) => {
        document.getElementById("social").innerHTML += '<div class="single-box" style="background: #F5AE00"><a href="resources/docs/stands/companies/' + code + '/pdf.pdf" target="_blank"><p>Portafolio<img class="brochure" src="resources/images/social/pdf.svg" alt="Catálogo"></p></a></div>'
    },
    setSocial: (social) => {
        var media = JSON.parse(social)
        let label = 'Síguenos en';
        if (media.FB != null) inner(media.FB, "facebook", "3C64A6");
        if (media.IG != null) inner(media.IG, "instagram", "F00075");
        if (media.TW != null) inner(media.TW, "twitter", "00B3E1");
        if (media.WP != null) {
            label = 'Contáctanos';
            inner(media.WP, "whatsapp", "25D366");
        }
        if (media.ML != null) inner(media.ML, "mail", "710627");

        function inner(href, type, color) {
            document.getElementById("social").innerHTML += '<div class="single-box" style="background: #' + color + '"><a href="' + href + '" target="_blank"><p>' + label + ' <img src="resources/images/social/' + type + '.svg" alt="Logo ' + type + '"></p></a></div>'
        }
    }
};
document.addEventListener("DOMContentLoaded", StandView.init)