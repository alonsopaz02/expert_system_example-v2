import { personas } from './personas';

// Estados genéticos
const genSano = new Set(["mathias", "margarita", "noelia", "rodrigo", "gerson", "melany", "nicolas", "eduardo", "ariana", "joslenys", "esther", "maria", "wendy", "melva", "alonso", "alexandra", "jhon"]);
const genHemofilia = new Set(["bryan", "luis", "wilson"]);
const genPortadora = new Set(["victoria", "jhosselin", "tesla"]);

// Función para determinar si una persona es sana
function estadoSano(persona) {
    if (genSano.has(persona.nombre)) return true;

    const madre = persona.progenitores.find(p => p.esMujer());
    const padre = persona.progenitores.find(p => p.esVaron());

    const madreEstado = madre ? estadoHemofilia(madre) : 'desconocido';
    const padreEstado = padre ? estadoHemofilia(padre) : 'desconocido';

    return madreEstado === 'sano' && padreEstado === 'sano';
}

// Función para determinar si una persona tiene hemofilia
function estadoEnfermo(persona) {
    if (genHemofilia.has(persona.nombre)) return true;

    const madre = persona.progenitores.find(p => p.esMujer());
    const padre = persona.progenitores.find(p => p.esVaron());

    if (madre && estadoPortador(madre) && persona.esVaron()) return true;
    if (padre && estadoEnfermo(padre) && persona.esVaron()) return false;

    return false;
}

// Función para determinar si una persona es portadora
function estadoPortador(persona) {
    if (genPortadora.has(persona.nombre)) return true;

    const madre = persona.progenitores.find(p => p.esMujer());
    const padre = persona.progenitores.find(p => p.esVaron());

    if (padre && estadoEnfermo(padre) && persona.esMujer()) return true;
    if (madre && estadoPortador(madre) && persona.esMujer()) return true;

    return false;
}

// Función para determinar el estado genético de una persona
function estadoHemofilia(persona) {
    if (genHemofilia.has(persona.nombre)) return 'enfermo';
    if (genPortadora.has(persona.nombre)) return 'portador';
    if (genSano.has(persona.nombre)) return 'sano';

    const madre = persona.progenitores.find(p => p.esMujer());
    const padre = persona.progenitores.find(p => p.esVaron());

    const hermanosVarones = Object.values(personas).filter(p => p.progenitores === persona.progenitores && p.esVaron() && p.nombre !== persona.nombre);
    const hermanas = Object.values(personas).filter(p => p.progenitores === persona.progenitores && p.esMujer() && p.nombre !== persona.nombre);

    // Verificación de descendientes
    const descendientes = Object.values(personas).filter(p => p.progenitores.includes(persona));

    for (const descendiente of descendientes) {
        if (genPortadora.has(descendiente.nombre) && persona.esVaron()) {
            genHemofilia.add(persona.nombre);
            return 'enfermo';
        }
        if (genHemofilia.has(descendiente.nombre) && persona.esVaron()) {
            genPortadora.add(persona.nombre);
            return 'portador';
        }
    }

    const madreEstado = madre ? estadoHemofilia(madre) : 'desconocido';
    const padreEstado = padre ? estadoHemofilia(padre) : 'desconocido';

    if (madreEstado === 'sano' && padreEstado === 'sano') {
        genSano.add(persona.nombre);
        return 'sano';
    }

    if (padreEstado === 'enfermo') {
        return persona.esVaron() ? 'sano' : 'portador';
    }

    if (madreEstado === 'portador' && persona.esVaron()) {
        for (const hermano of hermanosVarones) {
            if (genHemofilia.has(hermano.nombre)) {
                genSano.add(persona.nombre);
                return 'sano';
            }
            if (genSano.has(hermano.nombre)) {
                genHemofilia.add(persona.nombre);
                return 'enfermo';
            }
        }
        genHemofilia.add(persona.nombre);
        return 'enfermo';
    }

    if (madreEstado === 'portador' && persona.esMujer()) {
        for (const hermana of hermanas) {
            if (genPortadora.has(hermana.nombre)) {
                genSano.add(persona.nombre);
                return 'sano';
            }
            if (genSano.has(hermana.nombre)) {
                genPortadora.add(persona.nombre);
                return 'portador';
            }
        }
        genPortadora.add(persona.nombre);
        return 'portador';
    }

    return 'desconocido';
}

// Función para encontrar la pareja de una persona
function encontrarPareja(persona) {
    for (const hijo of Object.values(personas)) {
        if (hijo.progenitores.includes(persona)) {
            return hijo.progenitores.find(progenitor => progenitor !== persona);
        }
    }
    return null;
}

// Función para calcular probabilidad de hemofilia en descendencia
function probabilidadDescendenciaHemofilia(persona, pareja) {
    const estadoPersona = estadoHemofilia(persona);
    const estadoPareja = estadoHemofilia(pareja);

    if (persona.esVaron()) {
        if (estadoPersona === 'enfermo') {
            return estadoPareja === 'portador' ? 
                { hijos_varones: 0.5, hijas_portadoras: 0.5, hijas_con_hemofilia: 0.5 } :
                { hijos_varones: 0.0, hijas_portadoras: 1.0, hijas_con_hemofilia: 0.0 };
        } else {
            return estadoPareja === 'portador' ? 
                { hijos_varones: 0.5, hijas_portadoras: 0.5, hijas_con_hemofilia: 0.0 } :
                { hijos_varones: 0.0, hijas_portadoras: 0.0, hijas_con_hemofilia: 0.0 };
        }
    }

    if (persona.esMujer()) {
        if (estadoPersona === 'portador') {
            return estadoPareja === 'enfermo' ? 
                { hijos_varones: 0.5, hijas_portadoras: 0.5, hijas_con_hemofilia: 0.5 } :
                { hijos_varones: 0.5, hijas_portadoras: 0.5, hijas_con_hemofilia: 0.0 };
        } else if (estadoPersona === 'enfermo') {
            return estadoPareja === 'sano' ?
                { hijos_varones: 1.0, hijas_portadoras: 1.0, hijas_con_hemofilia: 0.0 } :
                { hijos_varones: 1.0, hijas_portadoras: 0.0, hijas_con_hemofilia: 1.0 };
        }
    }

    return null;
}

export {
    estadoSano,
    estadoEnfermo,
    estadoPortador,
    estadoHemofilia,
    encontrarPareja,
    probabilidadDescendenciaHemofilia
};