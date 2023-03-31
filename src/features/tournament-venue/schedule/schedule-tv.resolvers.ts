import { ContextValue } from "../../..";

export const scheduleTMQueryResolvers = {
    getSchedules: async (_, __, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getSchedules()
    },
    getSchedule: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getSchedule(id)
    },
    getSchedulesByCourtId: async (_, { courtId }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getSchedulesByCourtId(courtId)
    },
}

export const scheduleTMMutationResolvers = {
    addSchedule: async (_, { schedule }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.addSchedule(schedule)
    },
    deleteSchedule: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.deleteSchedule(id)
    },
    updateSchedule: async (_, { id, schedule }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.updateSchedule(id, schedule)
    },
}