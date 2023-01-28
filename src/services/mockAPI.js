const movies = [
    {
        id: 1,
        name: "City of God",
        year: 2002,
        director: "Fernando Meirelles.",
        plot: "Buscapé was raised in a very violent environment. Despite the feeling that all odds were against him, he finds out that life can be seen with other eyes…",
        cast: ["Alexander Rodrigues,", " Leandro Firmino,", " Phellipe Haagensen,", " Douglas Silva."],
        genres: ["Crime,", " Drama."],
        img: "/assets/images/movies/cityOfGod.png",
        trailer: "https://www.youtube.com/embed/JYKs35P2fZw",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailCityOfGod.png"
    },
    {
        id: 2,
        name: "Inception",
        year: 2010,
        director: "Christopher Nolan.",
        plot: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: “inception”, the implantation of another persons idea into a targets subconscious.",
        cast: ["Leonardo DiCaprio,", " Joseph Gordon-Levitt,", " Ken Watanabe,", " Tom Hardy."],
        genres: ["Science-Fiction,", " Action,", " Adeventure."],
        img: "/assets/images/movies/inception.png",
        trailer: "https://www.youtube.com/embed/8hP9D6kZseM",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailInception.png"
    },
    {
        id: 3,
        name: "Se7en",
        year: 1995,
        director: "David Fincher.",
        plot: "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the “seven deadly sins” in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer’s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
        cast: ["Brad Pitt,", " Morgan Freeman,", " Gwyneth Paltrow,", " R. Lee Ermey."],
        genres: ["Thriller,", " Crime,", " Mistery."],
        img: "/assets/images/movies/seven.png",
        trailer: "https://www.youtube.com/embed/SpKbZ_3zlb0",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailSe7en.png"
    },
    {
        id: 4,
        name: "Parasite",
        year: 2019,
        director: "Bong Joon-ho.",
        plot: "All unemployed, Ki-taek’s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        cast: ["Song Kang-ho,", " Lee Sun-kyun,", " Cho Yeo-jeong,", " Choi Woo-shik."],
        genres: ["Comedy,", " Drama,", " Thriller."],
        img: "/assets/images/movies/parasite.png",
        trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailParasite.png"
    },
    {
        id: 5,
        name: "Pulp Fiction",
        year: 1994,
        director: "Quentin Tarantino.",
        plot: "A burger-loving hit man, his philosophical partner, a drug-addled gangster’s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        cast: ["John Travolta,", " Samuel L.Jackson,", " Uma Thurman,", " Bruce Willis."],
        genres: ["Crime,", " Thirller."],
        img: "/assets/images/movies/pulpFiction.png",
        trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailPulpFiction.png"
    },
    {
        id: 6,
        name: "The Matrix",
        year: 1999,
        director: ["Lilly Wachowski,", " Lana Wachowski."],
        plot: "The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        cast: ["Keanu Reeves,", " Laurence Fishburne,", " Carrie-Anne Moss,", " Hugo Weaving."],
        genres: ["Science-Fiction,", "Action."],
        img: "/assets/images/movies/matrix.png",
        trailer: "https://www.youtube.com/embed/m8e-FF8MsqU",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailTheMatrix.png"
    },
    {
        id: 7,
        name: "The Professional",
        year: 1994,
        director: "Luc Besson.",
        plot: "Léon, the top hit man in New York, has earned a rep as an effective “cleaner”. But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathildas thoughts turn to revenge, and she considers following in Léons footsteps.",
        cast: ["Jean Reno,", " Natalie Portman,", " Gary Oldman,", " Danny Aiello."],
        genres: ["Action,", " Drama,", " Crime."],
        img: "/assets/images/movies/theProfessional.png",
        trailer: "https://www.youtube.com/embed/FAOzXGibKJc",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailTheProfessional.png"
    },
    {
        id: 8,
        name: "Whiplash",
        year: 2014,
        director: "Damien Chazelle.",
        plot: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
        cast: ["Miles Teller,", " J.K Simmons,", " Melissa Benoist,", " Austin Stowell."],
        genres: ["Drama,", " Music."],
        img: "/assets/images/movies/whiplash.png",
        trailer: "https://www.youtube.com/embed/Qa34Q7wo_oQ",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailWhiplash.png"
    },
    {
        id: 9,
        name: "Green Mile.",
        year: 1999,
        director: "Frank Darabont.",
        plot: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal peoples ailments. When the cell blocks head guard, Paul Edgecomb, recognizes Coffeys miraculous gift, he tries desperately to help stave off the condemned mans execution.",
        cast: ["Tom Hanks,", " David Morse,", " Bonnie Hunt,", " Michael Clarke Duncan"],
        genres: ["Fantasy,", " Crime,", " Drama."],
        img: "/assets/images/movies/greenMile.png",
        trailer: "https://www.youtube.com/embed/Bg7epsq0OIQ",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailGreenMile.png"
    },
    {
        id: 10,
        name: "Fight Club",
        year: 1999,
        director: "David Finche.r",
        plot: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground “fight clubs” forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
        cast: ["Edward Norton,", " Brad Pitt,", " Helena Bonham Carter,", " Meat Loaf."],
        genres: ["Drama,", " Comedy,", " Thriller."],
        img: "/assets/images/movies/fightClub.png",
        trailer: "https://www.youtube.com/embed/SUXWAEX2jlg",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailFightClub.png"
    },
    {
        id: 11,
        name: "Interstellar",
        year: 2014,
        director: "Christopher Nolan.",
        plot: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        cast: ["Mathew McConaughey,", " Anne Hathaway,", " Jessica Chastain,", " Mackenzie Foy."],
        genres: ["Science-Fiction,", " Drama,", " Adeventure"],
        img: "/assets/images/movies/interstellar.png",
        trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailInterstellar.png"
    },
    {
        id: 12,
        name: "GoodFellas",
        year: 1990,
        director: "Martin Scorsese.",
        plot: "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        cast: ["Ray Liotta,", " Robert De Niro,", " Joe Pesci,", " Lorraine Bracco"],
        genres: ["Drama,", " Crime"],
        img: "/assets/images/movies/goodfellas.png",
        trailer: "https://www.youtube.com/embed/xWMxvFvhAB8",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailGoodfellas.png"
    },
    {
        id: 13,
        name: "Psycho",
        year: 1960,
        director: "Alfred Hitchcock.",
        plot: "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
        cast: ["Anthony Perkins,", " Janet Leigh,", " Vera Miles,", " John Gavin."],
        genres: ["Drama,", " Thriller,", " Horror"],
        img: "/assets/images/movies/psycho.png",
        trailer: "https://www.youtube.com/embed/NG3-GlvKPcg",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailPsycho.png"
    },
    {
        id: 14,
        name: "Saving Private Ryan.",
        year: 1998,
        director: "Steven Spilberg",
        plot: "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
        cast: ["Tom Hanks,", " Tom Sizemore,", " Edward Burns,", " Matt Damon."],
        genres: ["War,", " History,", " Drama"],
        img: "/assets/images/movies/savingPrivateRyan.png",
        trailer: "https://www.youtube.com/embed/zwhP5b4tD6g",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailSavingPrivateRyan.png"
    },
    {
        id: 15,
        name: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan.",
        plot: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        cast: ["Christian Bale", " Heath Ledger", " Michael Caine", " Gary Oldman."],
        genres: ["Action,", " Drama,", " Thriller,", " Crime"],
        img: "/assets/images/movies/theDarkKnight.png",
        trailer: "https://www.youtube.com/embed/emYLYfuZAbU",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailBatmanTheDarkKnight.png"
    },
    {
        id: 16,
        name: "The Prestige",
        year: 2006,
        director: "Christopher Nolan.",
        plot: "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy – full of obsession, deceit and jealousy with dangerous and deadly consequences.",
        cast: ["Hugh Jackman", " Christian Bale", " Michael Caine", " Scarlett Johansson."],
        genres: ["Drama,", " Mystery,", " Science-Fiction"],
        img: "/assets/images/movies/thePrestige.png",
        trailer: "https://www.youtube.com/embed/9n2B5WW4SKk",
        category:"movie",
        portada:"/assets/images/portada/portadaItemDetailThePrestige.png"
    },
]
//datos harcodeados puro y estatico. Quiero que sean dinamicos

//Promesa getItems () : me retorna todos los productos
export function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(movies)
        }, 0)
    })
};

//Promesa getSingleItem (idItem) : me retorna el producto seleccionado
export function getSingleItem(idItem) {
    return new Promise((resolve, reject) => {
        let itemFind = movies.find((item) => {
            return item.id === parseInt(idItem)
        })
        setTimeout(() => {
            if (itemFind) resolve(itemFind)
            else reject(new Error("item no encontrado"))
        }, 1000)
    })
};

//Promesa getItemsByCategory (cat) : me retorna la ctaegoria seleccionada