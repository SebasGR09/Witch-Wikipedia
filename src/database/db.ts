import type { Witch } from "../types/Witch";

export const witches: Witch[] = [
    {
        id: 1,
        name: "Gertrud",
        description: "Una bruja asociada con las flores y los jardines.",
        belongsTo: {
            id: 1,
            name: "Desconocida",
            description: "No se conoce su identidad.",
            wish: "No disponible",
            img: "https://static.wikia.nocookie.net/madokamagica/images/d/d9/Namae%26AQ.png/revision/latest?cb=20251009004027&path-prefix=es",
            song: ""
        },
        image: "https://static.wikia.nocookie.net/madokamagica/images/6/69/Card_Gertrud.png/revision/latest?cb=20111111012544&path-prefix=es"
    },
    {
        id: 2,
        name: "Charlotte",
        description: "La bruja de los dulces, con una apariencia peculiar y un gran deseo por los alimentos.",
        belongsTo: {
            id: 2,
            name: "Nagisa Momoe",
            description: "Una chica mágica relacionada con la bruja Charlotte.",
            wish: "Quiero el pastel de queso más delicioso que mi madre podría tener",
            img: "https://static.wikia.nocookie.net/madoka/images/d/da/WnK_Nagisa.png/revision/latest?cb=20260705160448",
            song: "https://www.youtube.com/watch?v=Fa_lqIghzQg"
        },
        image: "https://static.wikia.nocookie.net/madokamagica/images/b/be/Card_Charlotte.png/revision/latest?cb=20111111010626&path-prefix=es"
    },
    {
        id: 3,
        name: "H.N. Elly",
        description: "Una bruja relacionada con las pantallas, la tecnología y los espacios virtuales.",
        belongsTo: {
            id: 3,
            name: "Kirsten",
            description: "Una chica mágica cuya desesperación dio origen a esta bruja.",
            wish: "No disponible",
            img: "https://static.wikia.nocookie.net/madokamagica/images/d/d9/Namae%26AQ.png/revision/latest?cb=20251009004027&path-prefix=es",
            song: ""
        },
        image: "https://static.wikia.nocookie.net/madoka/images/2/26/Card_Elly.png/revision/latest?cb=20150708231908"
    },
    {
        id: 4,
        name: "Elsa Maria",
        description: "Una bruja de apariencia oscura, asociada con las sombras y la penitencia.",
        belongsTo: {
            id: 4,
            name: "Desconocida",
            description: "No se conoce su identidad.",
            wish: "No disponible",
            img: "https://static.wikia.nocookie.net/madokamagica/images/d/d9/Namae%26AQ.png/revision/latest?cb=20251009004027&path-prefix=es",
            song: ""
        },
        image: "https://static.wikia.nocookie.net/madokamagica/images/7/7c/Card_Elsa_Maria.png/revision/latest?cb=20111206013212&path-prefix=es"
    },
    {
        id: 5,
        name: "Oktavia von Seckendorff",
        description: "La bruja sirena, relacionada con la música y el amor.",
        belongsTo: {
            id: 5,
            name: "Sayaka Miki",
            description: "Una chica mágica cuyo amor y desesperación están relacionados con la música.",
            wish: "Quiero curar la mano de Kyosuke Kamijou",
            img: "https://static.wikia.nocookie.net/madoka/images/0/0e/Walpurgis_sayaka_profile.png/revision/latest?cb=20260705160146",
            song: "https://www.youtube.com/watch?v=lxZiVwH93Cg"
        },
        image: "https://static.wikia.nocookie.net/madokamagica/images/7/7b/Card_Oktavia.png/revision/latest?cb=20111110222743&path-prefix=es"
    },
    {
        id: 6,
        name: "Kriemhild Gretchen",
        description: "Una bruja de enorme poder, relacionada con la esperanza y la desesperación.",
        belongsTo: {
            id: 6,
            name: "Madoka Kaname",
            description: "Una chica mágica con un destino extraordinario.",
            wish: "Salvar la vida de una gatita negra llamada Amy // Borrar a todas las brujas del universo antes de que nazcan",
            img: "https://static.wikia.nocookie.net/madoka/images/8/88/Walpurgis_madoka_profile.png/revision/latest/scale-to-width-down/1000?cb=20260705160229",
            song: "https://www.youtube.com/watch?v=nQKptbCZh3A"
        },
        image: "https://static.wikia.nocookie.net/madoka/images/c/c5/Card_Kriemhild.png/revision/latest?cb=20150708232145"
    },
    {
        id: 7,
        name: "Walpurgisnacht",
        description: "Una bruja gigantesca y destructiva capaz de causar enormes catástrofes.",
        belongsTo: {
            id: 7,
            name: "Marguerite",
            description: "Su origen individual no está confirmado en la historia original.",
            wish: "Salvar a todas las Magical Girls",
            img: "https://static.wikia.nocookie.net/madoka/images/7/7b/Marguerite_concept_profile.png/revision/latest?cb=20261003150109",
            song: ""
        },
        image: "https://static.wikia.nocookie.net/madokamagica/images/3/3f/Card_Walpurgis.png/revision/latest?cb=20111129165437&path-prefix=es"
    },
    {
        id: 8,
        name: "Candeloro",
        description: "Una bruja asociada con las velas, los lazos y una apariencia elegante.",
        belongsTo: {
            id: 8,
            name: "Mami Tomoe",
            description: "Una chica mágica que lucha utilizando armas de fuego y cintas.",
            wish: "Quiero vivir",
            img: "https://static.wikia.nocookie.net/madoka/images/d/d9/WnK_Mami.png/revision/latest?cb=20260705160324",
            song: "https://www.youtube.com/watch?v=ObHT2qEsb3o"
        },
        image: "https://static.wikia.nocookie.net/madokamagica/images/d/dc/Candeloro_Card_v2.png/revision/latest?cb=20250816193955&path-prefix=es"
    },
    {
        id: 9,
        name: "Ophelia",
        description: "Una bruja de apariencia oscura, relacionada con los caballos.",
        belongsTo: {
            id: 9,
            name: "Kyoko Sakura",
            description: "Una chica mágica que utiliza una lanza en combate.",
            wish: "Que todos escuchen a mi padre",
            img: "https://static.wikia.nocookie.net/madoka/images/4/49/WnK_Kyoko.png/revision/latest?cb=20260705160418",
            song: "https://www.youtube.com/watch?v=75fxBmh_-xw"
        },
        image: "https://static.wikia.nocookie.net/madokamagica/images/f/ff/Ophelia_Card_v2.png/revision/latest?cb=20240602161327&path-prefix=es"
    },
    {
        id: 10,
        name: "Homulilly",
        description: "Una bruja asociada con relojes, guillotinas y una atmósfera inquietante.",
        belongsTo: {
            id: 10,
            name: "Homura Akemi",
            description: "Una chica mágica capaz de manipular el tiempo.",
            wish: "Quiero volver a repetir mi encuentro con Kaname-san. Pero esta vez en lugar de que ella me proteja quiero ser yo quien pueda protegerla",
            img: "https://static.wikia.nocookie.net/madoka/images/4/46/WnK_Homura.png/revision/latest?cb=20260705160259",
            song: "https://www.youtube.com/watch?v=zBtbNV0mtxY"
        },
        image: "https://static.wikia.nocookie.net/madokamagica/images/4/41/Homulilly_Card2.png/revision/latest?cb=20250816195525&path-prefix=es"
    }
];
