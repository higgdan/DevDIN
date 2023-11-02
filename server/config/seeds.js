const db = require('./connection');

const { Game, Genre, Platform, Developer, Publisher } = require('../models')

db.once('open', async () => {

    const genres = await Genre.insertMany([    
        { name: 'Adventure' }, //0
        { name: 'Arcade' }, //1
        { name: 'Fighting' }, //2
        { name: 'Quiz/Trivia' }, //3
        { name: 'Beat \'em up' }, //4
        { name: 'Hack Ad Slash' }, //5
        { name: 'Visual Novel' }, //6
        { name: 'Indie' }, //7
        { name: 'Puzzle' }, //8
        { name: 'Point-and-click' }, //9
        { name: 'Shooter' }, //10
        { name: 'Music/Rhythm' }, //11
        { name: 'Platform' }, //12
        { name: 'Strategy' }, //13
        { name: 'Simulator' } //14

    ])

    console.log('Genres seeded');

    const platforms = await Platform.insertMany([
        { name: 'iOS' },
        { name: 'Android' },
        { name: 'Steam' },
        { name: 'Epic Games Store' },
        { name: 'Nintendo Switch' },
        { name: 'Playstation 4' },
        { name: 'Playstation 5' },
        { name: 'XBox One' },
        { name: 'Xbox Series S|X' },
        { name: 'itch.io' },
        { name: 'GOG.com' }
    ])

    console.log('Platforms seeded');

    const developers = await Developer.insertMany([
        {
            name: 'Vivek Studios',
            country: 'Australia',
            website: 'https://www.vivinkstudios.com/',
        },
        {
            name: 'SMG Studio',
            country: 'Australia',
            state: "NSW",
            website: 'https://www.smgstudio.com/',
        },
        {
            name: 'Studio Folly',
            country: 'Australia',
            state: 'VIC',
            city: 'Melbourne',
            website: 'https://folly.studio/',
        },
        {
            name: 'Studio Drydock',
            country: 'Australia',
            state: 'VIC',
            city: 'Melbourne',
            website: 'https://studiodrydock.com/',
        },
        {
            name: 'Cranky Watermelon',
            country: 'Australia',
            state: 'NSW',
            city: 'Sydney',
            website: 'https://crankywatermelon.com/',
        },
        {
            name: 'Witch Beam',
            country: 'Australia',
            state: 'QLD',
            city: 'Brisbane',
            website: 'https://witchbeam.com.au/',
        },
    ])

    console.log("Developers seeded");

    const publishers = await Publisher.insertMany([
        {
            name: 'Team 17'
        }
    ])

    console.log("Publishers seeded");

    const games = await Game.insertMany([
        { 
            name: 'Ailuri',
            genres: [genres[0]._id, genres[12], genres[8]._id],
            platforms: [platforms[2]._id, platforms[4]._id, platforms[5]._id, platforms[6]._id, platforms[7]._id,],
            trailer: 'https://www.youtube.com/embed/mncj5a0Ngr4',
            release: '2023-12-12',
            website: 'https://www.vivinkstudios.com/',
            presskit: 'https://www.vivinkstudios.com/press-kit',
            developer: developers[0]._id,
        },
        {
            name: 'Moving Out 2',
            genres: [genres[8]._id, genres[13]._id],
            platforms: [platforms[3]._id, platforms[5]._id],
            trailer: 'https://www.youtube.com/embed/mncj5a0Ngr4',
            release: '2023-12-13',
            website: 'https://www.movingout2.com/',
            developer: developers[1]._id,
            publisher: publishers[0]._id
        },
        {
            name: 'Gubbins',
            genres: [genres[8]._id],
            platforms: [platforms[0]._id, platforms[1]._id],
            trailer: 'https://www.youtube.com/watch?v=vVEI3iT6Cb4',
            release: '2023-11-14',
            website: 'https://folly.studio/',
            presskit: 'https://folly.studio/Press-Kit-1',
            developer: developers[2]._id,
        },
        {
            name: 'Death Squared',
            genres: [genres[7]._id, genres[8]._id, genres[12]._id],
            platforms: [platforms[1]._id, platforms[2]._id],
            trailer: 'https://www.youtube.com/watch?v=vVEI3iT6Cb4',
            release: '2022-2-18',
            website: 'https://folly.studio/',
            presskit: 'https://folly.studio/Press-Kit-1',
            developer: developers[1]._id,
            publisher: publishers[0]._id
        },
        {
            name: 'Wylde Flowers',
            genres: [genres[0]._id, genres[7]._id, genres[14]._id],
            platforms: [platforms[0]._id, platforms[2]._id, platforms[5]._id],
            trailer: 'https://www.youtube.com/watch?v=LM_BFIaVQh8',
            release: '2023-11-8',
            website: 'https://wyldeflowersgame.com/',
            presskit: 'https://wyldeflowersgame.com/press.html',
            developer: developers[3]._id,
        },
        {
            name: 'Boomerang Fu',
            genres: [genres[1]._id, genres[2]._id, genres[7]._id],
            platforms: [platforms[2]._id, platforms[4]._id, platforms[5]._id, platforms[6]._id],
            trailer: 'https://www.youtube.com/watch?v=KDipkvR4wkc',
            release: '2020-08-13',
            website: 'https://www.boomerangfu.com/',
            presskit: 'https://1drv.ms/u/s!Aott1pBRm74WuDo4hdkG1wLlJ_oj?e=DEpswK',
            developer: developers[4]._id,            
        },
        {
            name: 'Unpacking',
            genres: [genres[1]._id, genres[2]._id, genres[7]._id],
            platforms: [platforms[2]._id, platforms[4]._id, platforms[5]._id, platforms[6]._id],
            trailer: 'https://www.youtube.com/watch?v=vPcoMltTVXE',
            release: '2021-11-02',
            website: 'https://www.unpackinggame.com/',
            presskit: 'https://witchbeam.com.au/presskit/sheet.php?p=unpacking',
            developer: developers[5]._id,            
        },
    ])

    console.log("Games Seeded");

    process.exit();
});