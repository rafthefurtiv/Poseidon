

export class GaraComponent {

    constructor(){}

    public nomeGara = '';

    public categoria = '';

    public tempo = 0;




    static garaProva(){
        var gara = new GaraComponent();

        gara.categoria = 'M30';
        gara.nomeGara = '100SL';
        gara.tempo = 33.65;

        return gara;
    }


}
