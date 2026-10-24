const B = '/projets/broyeur-riz/'

export const projets = [
  {
    id: 'broyeur-riz',
    emoji: '🌾',
    title: 'Broyeur à riz',
    desc: 'Broyeur à riz de 40 kg/h, moteur 3 kW, 3 000 tr/min : calcul RDM, simulation, mises en plan et réalisation en atelier.',
    tags: ['RDM', 'SolidWorks', 'Réalisation'],
    detail: {
      intro:
        'Conception, validation RDM et dimensionnement des pièces mécaniques selon les règles et normes de conception, jusqu’à la réalisation en atelier.',
      kpis: [
        { value: '40 kg/h', label: 'Capacité' },
        { value: '3 kW', label: 'Moteur' },
        { value: '3 000 tr/min', label: 'Vitesse' },
      ],
      sections: [
        {
          title: '01 · Modèle 3D',
          images: [{ src: B + '01-modele-3d.jpg', caption: 'Modèle 3D du broyeur à riz' }],
        },
        {
          title: '02 · Schéma cinématique',
          text: 'Le moteur entraîne la poulie motrice, qui transmet le mouvement par courroie à la poulie réceptrice montée sur l’arbre porte-marteaux, guidé par deux paliers.',
          images: [{ src: B + '02-cinematique.jpg', caption: 'Schéma cinématique et nomenclature' }],
        },
        {
          title: '03 · Dimensionnement analytique',
          values: [
            { value: '314,15 rad/s', label: 'Vitesse angulaire' },
            { value: '3 481,8 N', label: 'Force centrifuge' },
            { value: '9,54 N·m', label: 'Moment de torsion' },
            { value: '95,4 N', label: 'Force tangentielle' },
            { value: '47,7 N', label: 'Effort radial' },
            { value: '150 MPa', label: 'Contrainte admissible' },
            { value: '22 mm', label: 'Diamètre d’arbre retenu' },
          ],
          images: [
            { src: B + '03-calculs.jpg', caption: 'Données de calcul' },
            { src: B + '04-reactions.jpg', caption: 'Réactions aux paliers et moment fléchissant' },
            { src: B + '05-diametre.jpg', caption: 'Calcul du diamètre de l’arbre' },
          ],
        },
        {
          title: '04 · Choix des matériaux',
          images: [{ src: B + '06-materiaux.jpg', caption: 'Matériaux par pièce' }],
        },
        {
          title: '05 · Simulation numérique',
          text: 'L’étude statique de l’arbre donne une contrainte maximale de 1,19 MPa pour une limite d’élasticité de 241,275 MPa : la pièce est conforme, avec une marge très large.',
          images: [{ src: B + '07-simulation.jpg', caption: 'Simulation statique de l’arbre' }],
        },
        {
          title: '06 · Réalisation',
          images: [
            { src: B + '08-realisation-1.jpg', caption: 'Marteau, arbre et poulie : modèle 3D et pièces réalisées' },
            { src: B + '09-realisation-2.jpg', caption: 'Trémie, coque centrale et verseur' },
            { src: B + '10-realisation-3.jpg', caption: 'Tamis, bâti et machine assemblée' },
          ],
        },
        {
          title: '07 · Vidéos',
          text: 'Animations SolidWorks du modèle 3D et essai de la machine réelle en marche.',
          videos: [
            { src: B + 'video-eclate.mp4', caption: 'Animation SolidWorks · vue éclatée de l’assemblage' },
            { src: B + 'video-modele.mp4', caption: 'Animation SolidWorks · modèle 3D du broyeur' },
            { src: B + 'video-machine.mp4', caption: 'Machine réelle en marche · broyage et tamisage de la farine de riz', portrait: true },
          ],
        },
        {
          title: '08 · Mises en plan',
          text: 'Cliquez sur un plan pour l’agrandir.',
          images: [
            { src: B + 'plan-ensemble.jpg', caption: 'Dessin d’ensemble · A3 · échelle 1:13' },
            { src: B + 'plan-arbre.jpg', caption: 'Plan de l’arbre · A3 · cotation et tolérancement' },
            { src: B + 'plan-marteau.jpg', caption: 'Plan du marteau · A4 · ISO 2768-m' },
            { src: B + 'plan-batis.jpg', caption: 'Mise en plan du bâti · A4' },
          ],
        },
      ],
    },
  },
  {
    id: 'tri-oeufs',
    emoji: '🥚',
    title: 'Machine de tri des œufs',
    desc: 'Machine mécanique de tri par poids, 7 000 œufs/h, 20 positions de tri, mécanisme bielle-manivelle et convoyeur oscillant.',
    tags: ['Dimensionnement', 'Cinématique', 'SolidWorks'],
  },
  {
    id: 'granules-volaille',
    emoji: '🐔',
    title: 'Machine à granulés pour volailles',
    desc: 'Cahier des charges, dimensionnement, conception, simulation et réalisation d’une granuleuse.',
    tags: ['Conception', 'Simulation', 'Réalisation'],
  },
  {
    id: 'presse-plieuse',
    emoji: '🔧',
    title: 'Presse plieuse hydraulique',
    desc: 'Dessin d’ensemble et plans de la poutre et du poinçon.',
    tags: ['Hydraulique', 'Mise en plan', 'SolidWorks'],
  },
  {
    id: 'bambou',
    emoji: '🎋',
    title: 'Tige de bambou perforée',
    desc: 'Étude mécanique par éléments finis d’une tige de bambou perforée.',
    tags: ['MEF', 'SolidWorks Simulation', 'ANSYS'],
  },
  {
    id: 'arbre',
    emoji: '🔩',
    title: 'Arbre de transmission',
    desc: 'Dessin de définition coté avec ajustements et tolérancement.',
    tags: ['Cotation', 'Tolérancement', 'Mise en plan'],
  },
]