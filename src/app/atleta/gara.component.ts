

export class GaraComponent {

    constructor(){}

    public nomeGara = '';

    public categoria = '';

    public tempo = 0;

    public lunghezza = ''




    static garaProva(){
        var gara = new GaraComponent();

        gara.categoria = 'M20';
        gara.nomeGara = '100SL';
        gara.tempo = 0;
        gara.lunghezza = 'V.C.';

        return gara;
    }


}
