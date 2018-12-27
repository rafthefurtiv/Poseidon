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

} 