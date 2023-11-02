import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
    query getGames {
        games {
            _id
            name
            genres
            platforms
            trailer
            release
            website
            presskit
            developer
            publisher
        }
    }
`;

export const QUERY_DEVELOPERS = gql`
    query Developers {
        developers {
            _id
            name
            website        
            games {
            name
            }
        }
    }
`;


export const QUERY_GAMES_RELEASE_MONTH = gql`
    query GetGamesWithinRange($month: Int!, $year: Int!) {
        getGamesWithinRange(month: $month, year: $year) {
            name
            release
            developer {
                name
            }
        }
    }
`;

export const GET_GAMES_BY_STATE = gql`
    query GetGamesByState($stateName: String!) {
        getGamesByState(stateName: $stateName) {            
            name
            genres {
                name
            }
            platforms {
                name
            }
            trailer
            developer {
                name
            }
            publisher {
                name
            }            
        }
    }
`;

export const GET_GAMES_BY_CITY = gql`
    query GetGamesByCity($cityName: String!) {
        getGamesByCity(cityName: $cityName) {
            name
            genres {
            name
            }
            platforms {
            name
            }
            trailer
            developer {
            name
            }
            publisher {
            name
            }
        }
    }
`;