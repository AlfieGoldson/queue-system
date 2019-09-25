const { gql } = require('apollo-server');

module.exports = gql`
    enum GameMode {
        Singles
        Doubles
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
    enum UserStatus {
        Idle
        InQueue
        InMatch
    }
    type User {
        id: ID!
        name: String!
        discordID: String!
        status: UserStatus
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
        users(name: String, discordID: String): [User!]!
        queues(userID: ID): [Queue!]!
        matches(userID: ID): [Match!]!
    }
    type Mutation {
        userCreate(name: String, discordID: String!): User!
        userChangeName(user: ID!, name: String): User!
        userAddTeam(user: ID!, team: ID!): User!
        userAddMatch(user: ID!, match: ID!): User!
        userAddQueue(user: ID!, queue: ID!): User!

        queueCreate(player: ID!, gameMode: GameMode!, region: Region!): Queue!
        queueUpdate(queue: ID!, status: QueueStatus!, match: ID): Queue!

        teamCreate(players: [ID!]!): Team!

        matchCreate(team1: ID!, team2: ID!, region: Region, gameMode: GameMode): Match!
        matchReport(match: ID!, team1Score: Int, team2Score: Int): Match!
        matchResolve(match: ID!, status: MatchStatus, report: ID!): Match!
    }
`