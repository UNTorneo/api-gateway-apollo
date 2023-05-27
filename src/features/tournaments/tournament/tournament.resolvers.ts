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
    addTournament:async (_, {token,tournament}, {dataSources}: ContextValue) => {
        const tokenResponse = await checkToken(token);
        console.log('TokenResponse',tokenResponse);
        const errorResponse = {'error':"Sesión expirada, inicia sesión de nuevo."} as ErrorResponse;
        
        if(!tokenResponse)return errorResponse;
        return dataSources.tournamentApi.addTournament(tournament);
    },
    deleteTournament:async (_, {token,id}, {dataSources}: ContextValue) => {
        const tokenResponse = await checkToken(token);
        console.log('TokenResponse',tokenResponse);
        const errorResponse = {'error':"Sesión expirada, inicia sesión de nuevo."} as ErrorResponse;
        
        if(!tokenResponse)return errorResponse;
        return dataSources.tournamentApi.deleteTournament(id);
    },
    updateTournament:async (_, {id, tournament}, {dataSources}: ContextValue) => {
        return dataSources.tournamentApi.updateTournament(id, tournament);
    },
    startTournament:async (_, {token,id}, {dataSources}: ContextValue) => {
        const tokenResponse = await checkToken(token);
        console.log('TokenResponse',tokenResponse);
        const errorResponse = {'error':"Sesión expirada, inicia sesión de nuevo."} as ErrorResponse;
        
        if(!tokenResponse)return errorResponse;
        return dataSources.tournamentApi.startTournament(id);
    },
    endTournament:async (_, {token,id}, {dataSources}: ContextValue) => {
        const tokenResponse = await checkToken(token);
        console.log('TokenResponse',tokenResponse);
        const errorResponse = {'error':"Sesión expirada, inicia sesión de nuevo."} as ErrorResponse;
        if(!tokenResponse)return errorResponse;
        return dataSources.tournamentApi.endTournament(id);
    },
}