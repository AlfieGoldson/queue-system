const { gql } = require('apollo-server');

module.exports = gql`
    enum GameMode {
        1V1
        2V2
    }
    enum Region {
        USE
        EU
        SEA
        BRZ
        AUS
        USW
        JPN
    }
    type User {
        id: ID!
        name: String!
        discordID: String!
    }
    enum QueueStatus {
        Active
        Canceled
        Successful
    }
    type Queue {
        id: ID!
        player: User!
        gamemode: GameMode!
        status: QueueStatus!
        region: Region!
        match: Match
    }
    type Team {
        id: ID!
        players: [User!]!
    }
    enum MatchStatus {
        Started
        Cancelled
        Resolved
    }
    type MatchReport {
        id: ID!
        match: Match!
        team1Score: Int
        team2Score: Int
        winner: Team
    }
    type Match {
        id: ID!
        team1: Team!
        team2: Team!
        team1Report: MatchReport
        team2Report: MatchReport
        result: MatchReport
        status: MatchStatus!
    }
    type Query {
        users(name: String): [User]
    }
    type Mutation {
        createUser(name: String!, discordID: String!): User!
    }
`