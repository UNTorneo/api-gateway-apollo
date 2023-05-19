import { ContextValue } from "../../..";

export const teamsQueryResolvers = {
    getTeams: async (_, __, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getTeams();
    },
    getTeam: async (_, {id}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getTeam(id);
    },
}

export const teamsMutationResolvers = {
    addTeam: async (_, {team}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.addTeam(team);
    },
    deleteTeam: async (_, {id}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.deleteTeam(id);
    },
    updateTeam: async (_, {id, team}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.updateTeam(id, team);
    },
    registerTeam: async (_, {teamId, tournamentId}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.registerTeam(teamId, tournamentId);
    },
    registerMember: async (_, {teamId, userId}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.registerMember(teamId, userId);
    },
}