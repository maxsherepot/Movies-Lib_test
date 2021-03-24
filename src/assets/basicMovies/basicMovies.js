import { v4 as uuidv4 } from 'uuid';



const basicMovies = [
    {
        title: "I am Legend",
        imageUrl: "https://i.redd.it/60tb33ntybi31.jpg",
        id: uuidv4(),
        description: "Robert Neville (Will Smith), a brilliant scientist, is a survivor of a man-made plague that transforms humans into bloodthirsty mutants. He wanders alone through New York City, calling out for other possible survivors, and works on finding a cure for the plague using his own immune blood. Neville knows he is badly outnumbered and the odds are against him, and all the while, the infected wait for him to make a mistake that will deliver Neville into their hands."
    },

    {
        title: "Sin city",
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426131_so.jpg",
        id: uuidv4(),
        description: "A movie that explores the dark and miserable town, Basin City, tells the story of three different people, all caught up in violent corruption."
    },

    {
        title: "Only the Brave",
        imageUrl: "https://www.film.ru/sites/default/files/movies/posters/18624642-982165.jpg",
        id: uuidv4(),
        description: "Through hope, determination, sacrifice and the drive to protect families and communities, the Granite Mountain Hotshots become one of the most elite firefighting teams in the country. While most people run from danger, they run toward it -- watching over lives, homes and everything people hold dear, forging a unique brotherhood that comes into focus with one fateful fire in Yarnell, Ariz."
    },
    
    {
        title: "Papillon",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg",
        id: uuidv4(),
        description: "The epic story of Henri 'Papillon' Charrière, a safecracker from the Parisian underworld who is framed for murder and condemned to life in the notorious penal colony on Devil's Island. Determined to regain his freedom, Papillon forms an unlikely alliance with convicted counterfeiter Louis Dega, who in exchange for protection, agrees to finance Papillon's escape."
    },
];


export default basicMovies;