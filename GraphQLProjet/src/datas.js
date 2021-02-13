const vignoble = 'vignoble'
const utilisateur = 'utilisateur'
const TypePerson = {
    USER: 'User',
    VIGNOBLE: 'Vignoble'
}
const TypeVin ={
    CHAMPAGNE: 'Champagne'
}

const TypeRobe ={
    SCINTILLANTE: 'Scintillante' 
}

const personsData = [
    {id: 1,  lastName: 'SCHNEIDER',  type: TypePerson.VIGNOBLE, logo :'images/logo1.png', address:'zdef'},
    {id: 2,  lastName: 'WEISS', type: TypePerson.VIGNOBLE, logo :'images/logo2.png', address:'feaz'},
    {id: 3,  lastName: 'REINERT', type: TypePerson.VIGNOBLE, logo :'images/logo3.png', address:'feaf'},
    {id: 4,  lastName: 'JOLIVALT', type: TypePerson.VIGNOBLE, logo :'images/logo4.png', address:'feaf'},
    {id: 5,  lastName: 'OBISTRO', type: TypePerson.VIGNOBLE, logo :'images/logo5.png', address:'efafea'},
    {id: 6,  lastName: 'LOL', type: TypePerson.USER }
]


const VinData = [
    {id: 1, nom: 'Moët et Chandon',  typev: TypeVin.CHAMPAGNE,  typer: TypeRobe.SCINTILLANTE, productor: personsData[0].lastName},
]

const vins = async () => {
    return VinData;
}

const vin = async ({id}) => {
    return VinData.find(f => f.id === id);
}


const getPerson = async () => {
    return personsData; 
}

const getVignoble = async ({type}) => {
    const vign = personsData.filter(p => p.type === TypePerson.VIGNOBLE).find(p => p.type === type);
    return vign;
}

const getUser = async ({id}) => {
    const use = personsData.filter(p => p.type === TypePerson.USER).find(p => p.id === id);
    return use;
}



export {
    vins,
    vin,
    getPerson,
    getVignoble,
    getUser
}
