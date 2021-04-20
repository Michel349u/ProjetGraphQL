const users = [
  {
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
  }
]

const posts = [
  {
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
  },
  {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
  },
  {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '2'
  }
]

const TypeVin ={
  CHAMPAGNE: 'Champagne',
  VIN_BLANC: 'Vin blanc',
  VIN_ROSE: 'Vin rosé',
  VIN_ROUGE: 'Vin rouge'
}

const TypeRobe ={
  SCINTILLANTE: 'Scintillante', 
  ROUGE_VIF: 'Rouge vif un peu violacé',
  ROUGE_CERISE: 'Rouge cerise',
  ROUGE_ORANGE: 'Rouge avec des nuances orangées',
  ROUGE_BRUN: 'Rouge brun à brique',
  JAUNE_PALE: 'jaune pâle, presque transparent',
  JAUNE_VERT: 'jaune avec des reflets un peu verts',
  JAUNE_PAILLE: 'jaune paille',
  JAUNE_OR: 'jaune d’or cuivré',
  JAUNE_BRUN: 'jaune brun',
  ROSE_PALE: 'rose pâle, incolore',
  ROSE_SAUMONE: 'rose saumoné',
  ROSE_ORANGE: 'rose orangé'
}



const vins = [
  {id: '1', nom: 'Moët et Chandon',  typev: TypeVin.CHAMPAGNE,  typer: TypeRobe.SCINTILLANTE},
  {id: '2', nom: 'CHATEAU CALET 2012',  typev: TypeVin.VIN_ROUGE,  typer: TypeRobe.ROUGE_CERISE},
  {id: '3', nom: 'CHHATEAU SUDUIRAUT 2010',  typev: TypeVin.VIN_BLANC,  typer: TypeRobe.JAUNE_PAILLE},
  {id: '4', nom: 'ROSE 2019 - CHATEAU HENRI BONNAUD',  typev: TypeVin.VIN_ROSE,  typer: TypeRobe.ROSE_SAUMONE},
]

const badges = [
  {id: 1, intitule: '1'},
  {id: 2, intitule: '2'},
  {id: 3, intitule: '3'},
  {id: 4, intitule: '4'},
  {id: 5, intitule: '5'},
  {id: 6, intitule: '6'},
  {id: 7, intitule: '7'},
  {id: 8, intitule: '8'},
  {id: 9, intitule: '9'},
  {id: 10, intitule: '10'}
]


const comments = [
  {
    id: '102',
    text: 'This worked well for me. Thanks!',
    author: '3',
    post: '10'
  },
  {
    id: '103',
    text: 'Glad you enjoyed it.',
    author: '1',
    post: '10'
  },
  {
    id: '104',
    text: 'This did no work.',
    author: '2',
    post: '11'
  },
  {
    id: '105',
    text: 'Nevermind. I got it to work.',
    author: '1',
    post: '12'
  }
]

const db = {
  users,
  posts,
  comments,
  vins,
  badges
}

export { db as default }
