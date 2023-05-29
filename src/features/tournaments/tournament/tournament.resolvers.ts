import { ContextValue } from "../../..";
import { checkToken } from "../../../core/middlewares/checkJWT";
import { ErrorResponse } from "../../users/token/token.interfaces";
export const tournamentQueryResolvers = {
    getTournaments: async (_, __, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getTournaments();
    },
    getTournament: async (_, {id}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getTournament(id);
    },
    getTournamentsInProgress: async (_, __, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getTournamentsInProgress();
    },
    getTournamentsByStatus: async (_, {status}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.getTournamentsByStatus(status);
    },
}

export const tournamentMutationResolvers = {
    addTournament:async (_, {tournament}, {dataSources}: ContextValue) => {
        const jwtoken = (dataSources as any).headers.token;
        if(!checkToken(jwtoken))return {error:'Tu sesión ha expirado, inicia sesión nuevamente'};
        return dataSources.tournamentApi.addTournament(tournament);
    },
    deleteTournament:async (_, {id}, {dataSources}: ContextValue) => {
        const jwtoken = (dataSources as any).headers.token;
        if(!checkToken(jwtoken))return {error:'Tu sesión ha expirado, inicia sesión nuevamente'};
        return dataSources.tournamentApi.deleteTournament(id);
    },
    updateTournament:async (_, {id, tournament}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.updateTournament(id, tournament);
    },
    startTournament:async (_, {id}, {dataSources}: ContextValue) => {
        const jwtoken = (dataSources as any).headers.token;
        if(!checkToken(jwtoken))return {error:'Tu sesión ha expirado, inicia sesión nuevamente'};
        return dataSources.tournamentApi.startTournament(id);
    },
    endTournament:async (_, {id}, {dataSources}: ContextValue) => {
        const jwtoken = (dataSources as any).headers.token;
        if(!checkToken(jwtoken))return {error:'Tu sesión ha expirado, inicia sesión nuevamente'};
        return dataSources.tournamentApi.endTournament(id);
    },
}