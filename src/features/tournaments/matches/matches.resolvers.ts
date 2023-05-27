import { ContextValue } from "../../..";
import { checkToken } from "../../../core/middlewares/checkJWT";
import { ErrorResponse } from "../../users/token/token.interfaces";
export const matchesQueryResolvers = {
    getMatches: async (_, __, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getMatches();
    },
    getMatch: async (_, {id}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getMatch(id);
    },
    getTournamentMatches: async (_, {tournamentId}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getTournamentMatches(tournamentId);
    },
    getTeamMatches: async (_, {teamId}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getTeamMatches(teamId);
    },
}

export const matchesMutationResolvers = {
    addMatch:async (_, {match}, {dataSources}: ContextValue) => {
        console.log('match :>> ', match);
        return dataSources.tournamentApi.addMatch(match);
    },
    deleteMatch:async (_, {id}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.deleteMatch(id);
    },
    updateMatch:async (_, {id, match}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.updateMatch(id, match);
    },
    startMatch:async (_, {token,id}, {dataSources}: ContextValue) => {
        const tokenResponse = await checkToken(token);
        console.log('TokenResponse',tokenResponse);
        const errorResponse = {'error':"Sesión expirada, inicia sesión de nuevo."} as ErrorResponse;
        if(!tokenResponse)return errorResponse;
        return dataSources.tournamentApi.startMatch(id);
    },
    endMatch:async (_, {token,id}, {dataSources}: ContextValue) => {
        const tokenResponse = await checkToken(token);
        console.log('TokenResponse',tokenResponse);
        const errorResponse = {'error':"Sesión expirada, inicia sesión de nuevo."} as ErrorResponse;
        if(!tokenResponse)return errorResponse;
        return dataSources.tournamentApi.endMatch(id);
    },
}