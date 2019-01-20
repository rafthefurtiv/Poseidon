"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gara_component_1 = require("./gara.component");
var AtletaComponent = /** @class */ (function () {
    function AtletaComponent() {
        this.userName = '';
        this.soprannome = '';
        this.gare = [];
        this.aloneDorato = false;
        this.annoIscrizione = 0;
        this.dataNascita = 'dsadasd';
        this.gareSvolte = 0;
        this.descrizione = '';
        this.nome = '';
        this.cognome = '';
        this.punteggio = 0;
        this.sesso = 0; // 0-Maschio, 1-Femmina
        this.specialita = '';
        this.squalifiche = 0;
        this.medaglieArgento = 0;
        this.medaglieBronzo = 0;
        this.medaglieOro = 0;
        this.medaglieArgentoStaff = 0;
        this.medaglieBronzoStaff = 0;
        this.medagleOrostaff = 0;
        this.pathCover = 'https://firebasestorage.googleapis.com/v0/b/poseidon-8bcf8.appspot.com/o/ary.png?alt=media&token=82ece0d6-7665-4379-a1db-968e1d177ef4';
        this.pathImage = 'https://firebasestorage.googleapis.com/v0/b/poseidon-8bcf8.appspot.com/o/ary_image.png?alt=media&token=a563870c-b4bd-435c-beac-7d0995cdffe3';
    }
    AtletaComponent.prototype.toString = function () {
        // Completare;
        return 'Username: ' + this.userName + ' Soprannome: ' + this.soprannome + ' Gare: ' + this.gare.length;
    };
    // Non usare per ora
    AtletaComponent.prototype.formalizza = function (atl) {
        try {
            this.userName = atl.userName;
        }
        catch (err) { }
        try {
            this.soprannome = atl.soprannome;
        }
        catch (err) { }
        try {
            this.gare = atl.gare;
        }
        catch (err) { }
        try {
            this.aloneDorato = atl.aloneDorato;
        }
        catch (err) {
            console.error("Errore: " + err);
        }
        try {
            this.annoIscrizione = atl.annoIscrizione;
        }
        catch (err) { }
        try {
            this.dataNascita = atl.dataNascita;
        }
        catch (err) { }
        try {
            this.gareSvolte = atl.gareSvolte;
        }
        catch (err) { }
        try {
            this.descrizione = atl.descrizione;
        }
        catch (err) { }
        try {
            this.nome = atl.nome;
        }
        catch (err) { }
        try {
            this.cognome = atl.cognome;
        }
        catch (err) { }
        try {
            this.punteggio = atl.punteggio;
        }
        catch (err) { }
        try {
            this.sesso = atl.sesso;
        }
        catch (err) { }
        try {
            this.specialita = atl.specialita;
        }
        catch (err) { }
        try {
            this.squalifiche = atl.squalifiche;
        }
        catch (err) { }
        try {
            this.medaglieArgento = atl.medaglieArgento;
        }
        catch (err) { }
        try {
            this.medaglieBronzo = atl.medaglieBronzo;
        }
        catch (err) { }
        try {
            this.medaglieOro = atl.medaglieOro;
        }
        catch (err) { }
        try {
            this.medaglieArgentoStaff = atl.medaglieArgentoStaff;
        }
        catch (err) { }
        try {
            this.medaglieBronzoStaff = atl.medaglieBronzoStaff;
        }
        catch (err) { }
        try {
            this.medagleOrostaff = atl.medagleOrostaff;
        }
        catch (err) { }
        //this. = atl.;
    };
    AtletaComponent.makeAtletaProva = function () {
        var gara1 = new gara_component_1.GaraComponent();
        gara1.categoria = 'M20';
        gara1.nomeGara = '50SL';
        gara1.tempo = 31.01;
        var gara2 = new gara_component_1.GaraComponent();
        gara2.categoria = 'M35';
        gara2.nomeGara = '100SL';
        gara2.tempo = 67.59;
        var atl1 = new AtletaComponent();
        atl1.userName = 'UtProva';
        atl1.soprannome = 'Sopr';
        atl1.gare[atl1.gare.length] = gara1;
        atl1.gare[atl1.gare.length] = gara2;
        return atl1;
    };
    AtletaComponent.getCategoria = function (atl) {
        var date = new Date(atl.dataNascita);
        var settembre = new Date();
        if (settembre.getMonth() < 9) {
            settembre.setFullYear(settembre.getFullYear() - 1); // per conteggiare l'anno di Settembre
        }
        var anni = settembre.getFullYear() - date.getFullYear();
        anni += 1;
        if (anni >= 55) {
            return "M55";
        }
        else if (anni >= 50) {
            return "M50";
        }
        else if (anni >= 45) {
            return "M45";
        }
        else if (anni >= 40) {
            return "M40";
        }
        else if (anni >= 35) {
            return "M35";
        }
        else if (anni >= 30) {
            return "M30";
        }
        else if (anni >= 25) {
            return "M25";
        }
        else if (anni >= 20) {
            return "M20";
        }
        else {
            return "U20";
        }
    };
    return AtletaComponent;
}());
exports.AtletaComponent = AtletaComponent;
//# sourceMappingURL=atleta.component.js.map