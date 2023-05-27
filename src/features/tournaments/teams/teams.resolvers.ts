import { ContextValue } from "../../..";
import { checkToken } from "../../../core/middlewares/checkJWT";
import { ErrorResponse } from "../../users/token/token.interfaces";
export const teamsQueryResolvers = {
    getTeams: async (_, __, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getTeams();
    },
    getTeam: async (_, {id}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getTeam(id);
    },
}

export const teamsMutationResolvers = {
    addTeam: async (_, {token,team}, {dataSources}: ContextValue) => {
        const tokenResponse = await checkToken(token);
        console.log('TokenResponse',tokenResponse);
        const errorResponse = {'error':"Sesión expirada, inicia sesión de nuevo."} as ErrorResponse;
        
        if(!tokenResponse)return errorResponse;
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
    registerMember: async (_, {token,teamId, userId}, {dataSources}: ContextValue) => {
        const tokenResponse = await checkToken(token);
        console.log('TokenResponse',tokenResponse);
        const errorResponse = {'error':"Sesión expirada, inicia sesión de nuevo."} as ErrorResponse;
        
        if(!tokenResponse)return errorResponse;
        return dataSources.tournamentApi.registerMember(teamId, userId);
    },
}