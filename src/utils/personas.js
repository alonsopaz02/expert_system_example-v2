class Persona {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
        this.progenitores = [];
    }

    agregarProgenitor(progenitor) {
        this.progenitores.push(progenitor);
    }

    esVaron() {
        return this.genero === 'varon';
    }

    esMujer() {
        return this.genero === 'mujer';
    }
}

// Inicialización de personas
const personas = {
    // Varones
    "mathias": new Persona("mathias", "varon"),
    "rodrigo": new Persona("rodrigo", "varon"),
    "bryan": new Persona("bryan", "varon"),
    "jhonn": new Persona("jhonn", "varon"),
    "ricardo": new Persona("ricardo", "varon"),
    "carlos": new Persona("carlos", "varon"),
    "martin": new Persona("martin", "varon"),
    "alejandro": new Persona("alejandro", "varon"),
    "felix": new Persona("felix", "varon"),
    "anderson": new Persona("anderson", "varon"),
    "alonso": new Persona("alonso", "varon"),
    "jose": new Persona("jose", "varon"),
    "augusto": new Persona("augusto", "varon"),
    "sebastian": new Persona("sebastian", "varon"),
    "manolo": new Persona("manolo", "varon"),
    "manuel": new Persona("manuel", "varon"),
    "gerson": new Persona("gerson", "varon"),
    "jesus": new Persona("jesus", "varon"),
    "joel": new Persona("joel", "varon"),
    "juan": new Persona("juan", "varon"),
    "leo": new Persona("leo", "varon"),
    "joaquin": new Persona("joaquin", "varon"),
    "darwin": new Persona("darwin", "varon"),
    "gabriel": new Persona("gabriel", "varon"),
    "jhair": new Persona("jhair", "varon"),
    "renzo": new Persona("renzo", "varon"),
    "luis": new Persona("luis", "varon"),
    "nicolas": new Persona("nicolas", "varon"),
    "wilson": new Persona("wilson", "varon"),
    "eduardo": new Persona("eduardo", "varon"),

    // Mujeres
    "margarita": new Persona("margarita", "mujer"),
    "victoria": new Persona("victoria", "mujer"),
    "noelia": new Persona("noelia", "mujer"),
    "jhosselin": new Persona("jhosselin", "mujer"),
    "fiorella": new Persona("fiorella", "mujer"),
    "flor": new Persona("flor", "mujer"),
    "joslenys": new Persona("joslenys", "mujer"),
    "aliric": new Persona("aliric", "mujer"),
    "alejandra": new Persona("alejandra", "mujer"),
    "maria": new Persona("maria", "mujer"),
    "lizbeth": new Persona("lizbeth", "mujer"),
    "carolina": new Persona("carolina", "mujer"),
    "alexandra": new Persona("alexandra", "mujer"),
    "esther": new Persona("esther", "mujer"),
    "vivian": new Persona("vivian", "mujer"),
    "milagros": new Persona("milagros", "mujer"),
    "elena": new Persona("elena", "mujer"),
    "cecilia": new Persona("cecilia", "mujer"),
    "camila": new Persona("camila", "mujer"),
    "isabel": new Persona("isabel", "mujer"),
    "amy": new Persona("amy", "mujer"),
    "aracely": new Persona("aracely", "mujer"),
    "melany": new Persona("melany", "mujer"),
    "tesla": new Persona("tesla", "mujer"),
    "melva": new Persona("melva", "mujer"),
    "ariana": new Persona("ariana", "mujer"),
    "yudi": new Persona("yudi", "mujer"),
    "johana": new Persona("johana", "mujer"),
};

// Asignación de progenitores
const progenitorRelations = [
    ["mathias", ["ricardo"]],
    ["margarita", ["ricardo"]],
    ["rodrigo", ["fiorella", "carlos"]],
    ["victoria", ["fiorella", "carlos"]],
    ["bryan", ["martin"]],
    ["noelia", ["martin"]],
    ["jhonn", ["flor"]],
    ["jhosselin", ["flor"]],
    ["ricardo", ["alejandro", "felix"]],
    ["fiorella", ["alejandro", "felix"]],
    ["alejandro", ["anderson"]],
    ["joslenys", ["anderson"]],
    ["martin", ["aliric"]],
    ["flor", ["aliric"]],
    ["felix", ["alejandra", "jose", "augusto"]],
    ["aliric", ["alejandra", "jose", "augusto"]],
    ["alejandra", ["sebastian"]],
    ["alonso", ["sebastian"]],
    ["sebastian", ["joel"]],
    ["esther", ["joel"]],
    ["jose", ["manolo", "manuel", "vivian"]],
    ["maria", ["manolo", "manuel", "vivian"]],
    ["vivian", ["yudi", "johana"]],
    ["gerson", ["yudi", "johana"]],
    ["augusto", ["jesus", "milagros"]],
    ["lizbeth", ["jesus", "milagros"]],
    ["luis", ["jhair"]],
    ["melany", ["jhair"]],
    ["nicolas", ["isabel", "amy"]],
    ["tesla", ["isabel", "amy"]],
    ["wilson", ["renzo"]],
    ["melva", ["renzo"]],
    ["eduardo", ["aracely"]],
    ["ariana", ["aracely"]],
    ["jhair", ["darwin", "joaquin"]],
    ["isabel", ["darwin", "joaquin"]],
    ["renzo", ["cecilia", "gabriel", "camila"]],
    ["aracely", ["cecilia", "gabriel", "camila"]],
    ["darwin", ["lizbeth", "carolina", "juan"]],
    ["cecilia", ["lizbeth", "carolina", "juan"]],
    ["juan", ["leo", "elena"]],
    ["alexandra", ["leo", "elena"]],
];

// Asignar progenitores en el objeto personas
progenitorRelations.forEach(([padre, hijos]) => {
    hijos.forEach(hijo => {
        personas[hijo].agregarProgenitor(personas[padre]);
    });
});

// Exportar la clase Persona y el objeto personas
export { Persona, personas };
