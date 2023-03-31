export const schedulesTVTypesDef = `#graphql
    type Schedule {
        id: Int!
        openHour: String!
        closeHour: String!
        weekDay: Int!
        courtId: Int!
        price: Int!
    }

    input AddSchedule {
        openHour: String!
        closeHour: String!
        weekDay: Int!
        courtId: Int!
        price: Int!
    }

    input UpdateSchedule {
        id: Int
        openHour: String
        closeHour: String
        weekDay: Int
        courtId: Int
        price: Int
    }
`;

export const schedulesTVQuerysDef = `#graphql
    getSchedules: [Schedule]
    getSchedule(id: Int!): Schedule
    getSchedulesByCourtId(courtId: Int!): [Schedule]
`;

export const schedulesTVMutationsDef = `#graphql
    addSchedule(schedule: AddSchedule): RequestResponse
    deleteSchedule(id: Int!): RequestResponse
    updateSchedule(id: Int!, schedule: UpdateSchedule!): RequestResponse
`;