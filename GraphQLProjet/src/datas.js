const acteur = 'acteur';
const realisateur = 'realisateur';
const TypePerson = {
    ACTOR: 'Actor',
    DIRECTOR: 'Director'
}
const Status = {
    ENCOURS: 'en cours de réalisation',
    ANNULE: 'projet abandonné',
    SORTIE: 'sortie'
}

const personsData = [
    {id: 1, firstName: 'Francis', lastName: 'Ford Coppola', dateOfBirth: new Date('1939-04-07'), dateOfDeath: null, type: TypePerson.DIRECTOR},
    {id: 2, firstName: 'Nicolas', lastName: 'Bedos', dateOfBirth: new Date('1979-04-21'), dateOfDeath: null, type: TypePerson.DIRECTOR},
    {id: 3, firstName: 'Marlon', lastName: 'Brando', dateOfBirth: new Date('1924-04-03'), dateOfDeath: new Date('2004-07-01'), type: TypePerson.ACTOR},
    {id: 4, firstName: 'Al', lastName: 'Pacino', dateOfBirth: new Date('1940-04-25'), dateOfDeath: null, type: TypePerson.ACTOR},
    {id: 5, firstName: 'Robert', lastName: 'Duvall', dateOfBirth: new Date('1931-01-05'), dateOfDeath: null, type: TypePerson.ACTOR},
    {id: 6, firstName: 'Jean', lastName: 'Dujardin', dateOfBirth: new Date('1972-06-19'), dateOfDeath: null, type: TypePerson.ACTOR},
    {id: 7, firstName: 'Pierre', lastName: 'Niney', dateOfBirth: new Date('1989-03-13'), dateOfDeath: null, type: TypePerson.ACTOR}
]

const rolesData = [
    {personnage: 'Don Vito Corleone', actor: personsData[2]},
    {personnage: 'Michael Corleone', actor: personsData[3]},
    {personnage: 'Tom Hagen', actor: personsData[4]},
    {personnage: 'OSS 117', actor: personsData[5]},
    {personnage: 'OSS 1001', actor: personsData[6]}
]

const filmsData = [
    {id: 1, title: 'Le Parrain', originalTitle: ' The Godfather', status: Status.SORTIE, director: personsData[0], roles: [rolesData[0]]},
    {id: 2, title: 'OSS 117 : Alert rouge en Afrique noire', originalTitle: 'The Lord of the Ring', status: Status.ENCOURS, director: personsData[1], roles: [rolesData[1]]},
]

const films = async () => {
    return filmsData;
}

const film = async ({id}) => {
    return filmsData.find(f => f.id === id);
}

const director = async ({id}) => {
    const dir = personsData.filter(p => p.type === TypePerson.DIRECTOR).find(p => p.id === id);
    dir.films = filmsData.filter(f => f.director.id === id);
    return dir;
}

const actor = async ({id}) => {
    const act = personsData.filter(p => p.type === TypePerson.ACTOR).find(p => p.id === id);
    act.roles = rolesData.filter(r => r.actor.id === id);
    return act;
}


export {
    films,
    film,
    director,
    actor
}