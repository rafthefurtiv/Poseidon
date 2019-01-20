import { RecursiveTemplateAstVisitor } from "@angular/compiler";

export class Records {

    constructor(){}

    public categoria = '';
    public sesso = 0;
    public lunghezza = 0; // 0--corta, 1--lunga

    public gara = '';
    public nome = '';
    public luogo = '';
    public tempo = '';


    static createRecordProva(){

        let recProva = new Records();

        recProva.categoria = 'M30';
        recProva.gara = '50SL';
        recProva.lunghezza = 0;
        recProva.luogo = '2018 Aversa';
        recProva.nome = 'Raffaele Barbato';
        recProva.sesso = 0;
        recProva.tempo = '31.34';
        

        return recProva;
    }




    static createBaseRecordSocietari(){
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

        for(let t of tipoGare){
            for(let s of sesso){
                for(let l of lunghezza){
                    for(let c of categoria){
                        let str = ""+s+"_"+l+"_"+c+"_"+t;
                        keyGenerated[keyGenerated.length] = str;
                        console.log("Creata stringa: " + str + ".");
                    }
                }
            }
        }

        return keyGenerated;


    }




} 