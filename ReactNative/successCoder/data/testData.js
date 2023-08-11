// Images Pixabay: https://pixabay.com/fr/users/jmexclusives-10518280/

const COURSES = [
  {
    id: '1',
    title: 'Fomation JavaScript Moderne',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2023/06/05/13/56/cat-8042342_1280.jpg',
    price: 99.99,
    selected: false,
    instructorId: '2'
  }, 
  {
    id: '2',
    title: 'Coder facebook avec React JS',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png',
    price: 49.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '3',
    title: 'Wordpress pour débutants',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1329069809/fr/photo/chat-brun-et-blanc-avec-des-yeux-jaunes-sur-le-dos-regarde-la-cam%C3%A9ra-gros-plan.jpg?s=612x612&w=0&k=20&c=wF1G_kGbPKMUqWFyKqsv4nsv945-OLb5jhaDCxg1YnA=',
    price: 29.49,
    selected: false,
    instructorId: '5'
  }, 
  {
    id: '4',
    title: 'Maîtiser le logiciel Confluence',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1154170220/fr/photo/chat-dans-la-chambre-fermer-%C3%A0-lint%C3%A9rieur-mignon-animal-de-compagnie.jpg?s=612x612&w=0&k=20&c=-SvAqhWa6W047z_79SDj3phvlN0ph06NyWPmqrjWtQo=',
    price: 49.29,
    selected: false,
    instructorId: '1'
  },
  {
    id: '5',
    title: 'Python pour les débutants',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg',
    price: 199.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '6',
    title: 'apprendre CSS3 ',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1289715016/photo/eurasian-nuthatch.webp?b=1&s=612x612&w=0&k=20&c=9fsozEj0OoK3z42STx-phXaglUoFt1wM58VWCNzhdMo=',
    price: 9.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '7',
    title: 'Formation PHP Orienté Objets',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2023/03/23/05/37/bird-7871182_640.jpg',
    price: 29.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '8',
    title: 'Formation SEO de 0 à PRO!',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2023/07/19/04/56/european-shorthair-8136065_640.jpg',
    price: 19.49,
    selected: false,
    instructorId: '1'
  },
  {
    id: '9',
    title: 'Formation Microsoft Clarity',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2023/05/19/12/31/nuthatch-8004440_1280.jpg',
    price: 29.45,
    selected: false,
    instructorId: '1'
  }
];

export default COURSES;