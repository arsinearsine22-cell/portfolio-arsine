const B = '/projets/broyeur-riz/'
const G = '/projets/granules-volaille/'
const PP = '/projets/presse-plieuse/'

export const projets = [
  {
    id: 'broyeur-riz',
    image: '/imageprojet/projets/conception-3d.jpg',
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
            { value: '450 MPa', label: 'Contrainte admissible' },
            { value: '22 mm', label: 'Diamètre d’arbre retenu' },
          ],
          images: [
            { src: B + '03-calcul marteau.jpg', caption: 'Données de calcul' },
            { src: B + '04-calculs.jpg', caption: 'Données de calcul' },
            { src: B + '05-reactions.jpg', caption: 'Réactions aux paliers et moment fléchissant' },
            { src: B + '06-diametre.jpg', caption: 'Calcul du diamètre de l’arbre' },
          ],
        },
        {
          title: '04 · Choix des matériaux',
          images: [{ src: B + '07-materiaux.jpg', caption: 'Matériaux par pièce' }],
        },
        {
          title: '05 · Simulation numérique',
           text: "L'étude statique du marteau donne une contrainte maximale de 21,6 MPa pour une limite d'élasticité de 620 MPa. L'étude statique de l'arbre donne une contrainte maximale de 1,19 MPa pour une limite d'élasticité de 241 MPa.",
           images: [
            { src: B + '08-marteau.jpg', caption: 'Simulation statique du marteau' },
            { src: B + '09-simulation.jpg', caption: "Simulation statique de l'arbre" }
           ],
        },
        {
          title: '06 · Réalisation',
          images: [
            { src: B + '12-realisation-1.jpg', caption: 'Marteau, arbre et poulie : modèle 3D et pièces réalisées' },
            { src: B + '13-realisation-2.jpg', caption: 'Trémie, coque centrale et verseur' },
            { src: B + '14-realisation-3.jpg', caption: 'Tamis, bâti et machine assemblée' },
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
    id: 'granules-volaille',
    image: '/imageprojet/projets/image granulé.jpg',
    title: 'Machine à granulés pour volailles',
    desc: 'Cahier des charges, dimensionnement, conception, simulation et réalisation d’une granuleuse.',
    tags: ['Conception', 'Simulation', 'Réalisation'],
        detail: {
      intro:
        'Dimensionnement, conception et réalisation d’une machine à granulés pour aliment de volaille.',
      kpis: [
        { value: '120 kg/h', label: 'Capacité' },
        { value: '2,2 kW', label: 'Puissance du moteur' },
        { value: '500 tr/min', label: 'Vitesse de rotation' },
      ],
      sections: [
        {
          title: '01 · Modèle 3D',
          images: [{ src: G + '01-modele-3d.jpg', caption: 'Modèle 3D de la machine à granulés' }],
        },
        {
          title: '02 · Schéma cinématique',
          images: [{ src: G + '02-cinematique.jpg', caption: 'Schéma cinématique de la machine' }],
        },
        {
          title: '03 · Dimensionnement',
          text: 'La capacité de 120 kg/h fixe le débit de granulés, d’où le nombre de trous de la matrice, sa vitesse de rotation, son épaisseur et la force nécessaire à la granulation.',
          values: [
            { value: 'Ø4 × 15 mm', label: 'Granulé (0,15 g)' },
            { value: '13 275 /min', label: 'Débit de granulés' },
            { value: '531', label: 'Trous de la matrice' },
            { value: 'Ø220 mm', label: 'Diamètre de la matrice' },
            { value: '9,28 mm', label: 'Épaisseur de la matrice' },
            { value: '500 tr/min', label: 'Vitesse de la matrice' },
            { value: '5,75 m/s', label: 'Vitesse linéaire' },
            { value: '262,63 N', label: 'Force avec 2 rouleaux' },
            { value: '1 506,5 W', label: 'Puissance requise' },
            { value: '20 mm', label: 'Diamètre d’arbre retenu' },
          ],
          images: [
            { src: G + '03-granule-debit.jpg', caption: 'Granulé, débit d’extrusion et vitesse de la matrice' },
            { src: G + '04-matrice-rouleau.jpg', caption: 'Diamètre et épaisseur de la matrice, force de granulation' },
            { src: G + '07-moteur-arbre.jpg', caption: 'Choix du moteur et dimensionnement de l’arbre' },
          ],
        },
        {
          title: '04 · Transmission par poulie et courroie',
          values: [
            { value: 'Type A', label: 'Courroie trapézoïdale' },
            { value: 'Ø85 / Ø255 mm', label: 'Poulies' },
            { value: '300 mm', label: 'Entraxe' },
            { value: '1 250 mm', label: 'Longueur primitive' },
            { value: '15,7 m/s', label: 'Vitesse de la courroie' },
            { value: '2,244 kW', label: 'Puissance admissible' },
          ],
          images: [
            { src: G + '08-transmission-1.jpg', caption: 'Puissance de service et choix des poulies' },
            { src: G + '09-transmission-2.jpg', caption: 'Longueur de courroie et nombre de courroies' },
          ],
        },
        {
          title: '05 · Choix des matériaux',
          images: [{ src: G + '05-materiaux.jpg', caption: 'Matériaux par pièce' }],
        },
        {
          title: '06 · Vérification par simulation',
          text: 'L’étude statique de la matrice donne une contrainte maximale d’environ 35,7 MPa pour une limite d’élasticité de 172,3 MPa, avec un déplacement maximal de 0,043 mm.',
          images: [{ src: G + '06-simulation.jpg', caption: 'Contraintes et déplacements de la matrice' }],
        },
        {
          title: '07 · Réalisation',
          images: [{ src: G + '10-realisation.jpg', caption: 'Matrice, rouleau, arbre et bâti : modèle 3D et pièces réalisées' }],
        },
        {
          title: '08 · Vidéo',
          videos: [{ src: G + 'video-modele.mp4', caption: 'Animation SolidWorks de la machine' }],
        },
        {
          title: '09 · Mises en plan',
          text: 'Cliquez sur un plan pour l’agrandir.',
        images: [
            { src: G + 'plan-ensemble.jpg', caption: 'Dessin d’ensemble de la machine à granulés · A3' },
            { src: G + 'plan-matrice.jpg', caption: 'Matrice · A4 · échelle 1:4' },
            { src: G + 'plan-rouleau.jpg', caption: 'Rouleau · A4 · échelle 1:2' },
            { src: G + 'plan-rouleaux-assembles.jpg', caption: 'Rouleaux assemblés · A3 · échelle 2:3' },
            { src: G + 'plan-arbre.jpg', caption: 'Arbre · A4 · échelle 1:3' },
            { src: G + 'plan-manivelle.jpg', caption: 'Manivelle · A4' },
          ],
        },
      ],
    },
  },
  {
    id: 'presse-plieuse',
    image: '/imageprojet/projets/image plieuse.jpg',
    title: 'Presse plieuse hydraulique',
    desc: 'Dessin d’ensemble et plans de la poutre et du poinçon.',
    tags: ['Hydraulique', 'Mise en plan', 'SolidWorks'],
        detail: {
      intro:
        'Conception du système mécanique, hydraulique et du calcul par éléments finis d’une presse plieuse hydraulique pour tôles d’acier.',
      kpis: [
        { value: '250 kN', label: 'Force de pliage' },
        { value: '2 × 125 kN', label: 'Vérins hydrauliques' },
        { value: '1,8 kW', label: 'Moteur' },
      ],
      sections: [
        {
          title: '01 · Modèle 3D',
          images: [{ src: PP + '01-modele-3d.jpg', caption: 'Modèle 3D de la presse plieuse' }],
        },
        {
          title: '02 · Cahier des charges',
          text: 'Longueur de pliage de 1 000 à 1 500 mm, épaisseur maximale de 2 mm, acier, pliage en V.',
          images: [{ src: PP + '02-cahier-des-charges.jpg', caption: 'Cahier des charges et abaque de pliage' }],
        },
        {
          title: '03 · Composants',
          images: [{ src: PP + '03-composants.jpg', caption: 'Poutre, matrice, poinçon, butée réglable et circuit hydraulique' }],
        },
        {
          title: '04 · Dimensionnement',
          values: [
            { value: '16 mm', label: 'Ouverture du V' },
            { value: '11,36 mm', label: 'Aile minimale' },
            { value: '250 kN', label: 'Force de pliage' },
            { value: '125 kN', label: 'Force par vérin' },
          ],
          images: [{ src: PP + '04-dimensionnement.jpg', caption: 'Ouverture du V, rayon, bord minimal et force de pliage' }],
        },
        {
          title: '05 · Calcul RDM',
          values: [
            { value: '18 750 N·m', label: 'Moment fléchissant max' },
            { value: '79,22 cm³', label: 'Module de résistance minimal' },
            { value: '62,2 MPa', label: 'Contrainte de compression' },
            { value: '15 × 180 mm', label: 'Section du poinçon' },
          ],
          images: [
            { src: PP + '05-rdm-1.jpg', caption: 'Poutre : charge répartie et moment fléchissant' },
            { src: PP + '06-rdm-2.jpg', caption: 'Vérification au flambement et dimensionnement du poinçon' },
          ],
        },
        {
          title: '06 · Vérification par simulation',
          text: 'Deux résultats de simulation de la poutre : contrainte maximale de 205 MPa pour une limite d’élasticité de 352 MPa (58 %, déformation de 5,7 mm), puis 315 MPa (89 %).',
          images: [
            { src: PP + '07-simulation-1.jpg', caption: 'Contraintes et déplacements de la poutre' },
            { src: PP + '08-simulation-2.jpg', caption: 'Seconde simulation de la poutre' },
          ],
        },
        {
          title: '07 · Étude hydraulique',
          values: [
            { value: 'Ø63 / Ø36 mm', label: 'Vérin : alésage / tige' },
            { value: '44,88 L', label: 'Réservoir' },
            { value: '1,8 kW', label: 'Moteur de la pompe' },
          ],
          images: [
            { src: PP + '09-hydraulique-1.jpg', caption: 'Vérin, débit et cylindrée de la pompe' },
            { src: PP + '10-hydraulique-2.jpg', caption: 'Moteur, réservoir et tuyauterie' },
            { src: PP + '11-hydraulique-3.jpg', caption: 'Diamètres normalisés des tuyauteries' },
          ],
        },
        {
          title: '08 · Circuit hydraulique',
          images: [
            { src: PP + '12-circuit.jpg', caption: 'Circuit hydraulique sous Automation Studio' },
            { src: PP + '13-nomenclature.jpg', caption: 'Nomenclature du circuit (16 composants)' },
            { src: PP + '14-simulation-hydraulique.jpg', caption: 'Simulation hydraulique' },
          ],
        },
        {
          title: '09 · Mises en plan',
          text: 'Cliquez sur un plan pour l’agrandir.',
          images: [
            { src: PP + 'plan-ensemble.jpg', caption: 'Presse plieuse hydraulique · A3 · échelle 1:20' },
            { src: PP + 'plan-poutre.jpg', caption: 'Poutre · A4 · échelle 1:35' },
            { src: PP + 'plan-poincon.jpg', caption: 'Poinçon · A4 · échelle 1:5' },
          ],
        },
      ],
    },
  },
  {
    id: 'bambou',
    image: '/imageprojet/projets/bambou.jpg',
    title: 'Tige de bambou perforée',
    desc: 'Étude mécanique par éléments finis d’une tige de bambou perforée.',
    tags: ['MEF', 'SolidWorks ', 'ANSYS CZM'],
  },
]