"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GaraComponent = /** @class */ (function () {
    function GaraComponent() {
        this.nomeGara = '';
        this.categoria = '';
        this.tempo = 0;
        this.lunghezza = '';
    }
    GaraComponent.garaProva = function () {
        var gara = new GaraComponent();
        gara.categoria = 'M20';
        gara.nomeGara = '100SL';
        gara.tempo = 0;
        gara.lunghezza = 'V.C.';
        return gara;
    };
    return GaraComponent;
}());
exports.GaraComponent = GaraComponent;
//# sourceMappingURL=gara.component.js.map