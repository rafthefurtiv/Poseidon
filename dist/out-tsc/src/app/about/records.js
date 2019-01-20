"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Records = /** @class */ (function () {
    function Records() {
        this.categoria = '';
        this.sesso = 0;
        this.lunghezza = 0; // 0--corta, 1--lunga
        this.gara = '';
        this.nome = '';
        this.luogo = '';
        this.tempo = '';
    }
    Records.createRecordProva = function () {
        var recProva = new Records();
        recProva.categoria = 'M30';
        recProva.gara = '50SL';
        recProva.lunghezza = 0;
        recProva.luogo = '2018 Aversa';
        recProva.nome = 'Raffaele Barbato';
        recProva.sesso = 0;
        recProva.tempo = '31.34';
        return recProva;
    };
    Records.createBaseRecordSocietari = function () {
        // Ottiene le chiavi per i record societari
        // nella forma di Maschi_Corta_M30_50SL
        var tipoGare = ["50SL", "100SL", "200SL", "400SL", "800SL", "1500SL",
            "50DO", "100DO", "200DO", "50RA", "100RA", "200RA",
            "50FA", "100FA", "200FA", "50MI", "100MI", "200MI", "400MI"];
        var sesso = ["Maschi", "Femmine"];
        var lunghezza = ["Corta", "Lunga"];
        var categoria = ["U20", "M20", "M25", "M30", "M35",
            "M40", "M45", "M45", "M50", "M55", "M60"];
        var keyGenerated = [];
        for (var _i = 0, tipoGare_1 = tipoGare; _i < tipoGare_1.length; _i++) {
            var t = tipoGare_1[_i];
            for (var _a = 0, sesso_1 = sesso; _a < sesso_1.length; _a++) {
                var s = sesso_1[_a];
                for (var _b = 0, lunghezza_1 = lunghezza; _b < lunghezza_1.length; _b++) {
                    var l = lunghezza_1[_b];
                    for (var _c = 0, categoria_1 = categoria; _c < categoria_1.length; _c++) {
                        var c = categoria_1[_c];
                        var str = "" + s + "_" + l + "_" + c + "_" + t;
                        keyGenerated[keyGenerated.length] = str;
                        console.log("Creata stringa: " + str + ".");
                    }
                }
            }
        }
        return keyGenerated;
    };
    return Records;
}());
exports.Records = Records;
//# sourceMappingURL=records.js.map