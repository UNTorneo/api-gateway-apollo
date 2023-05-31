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
    startMatch:async (_, {id}, {dataSources}: ContextValue) => {
        const jwtoken = (dataSources as any).headers.token;
        if(! await checkToken(jwtoken))return {error:'Tu sesión ha expirado, inicia sesión nuevamente'};
        return dataSources.tournamentApi.startMatch(id);
    },
    endMatch:async (_, {id}, {dataSources}: ContextValue) => {
        const jwtoken = (dataSources as any).headers.token;
        if(! await checkToken(jwtoken))return {error:'Tu sesión ha expirado, inicia sesión nuevamente'};
        return dataSources.tournamentApi.endMatch(id);
    },
}