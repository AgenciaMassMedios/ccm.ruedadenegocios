import { LiveController } from "../../modules/auditorio/livecontroller.v1.min.js";
const AuditorioView = {
    init: () => {
        LiveController.init();
    }
};
document.addEventListener("DOMContentLoaded", AuditorioView.init)