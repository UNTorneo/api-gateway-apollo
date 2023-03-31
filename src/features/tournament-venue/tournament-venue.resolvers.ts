import { courtTMMutationResolvers, courtTMQueryResolvers } from "./courts/courts-tv.resolvers";
import { ownerTMMutationResolvers, ownerTMQueryResolvers } from "./owner/owner-tv.resolvers";
import { photosTMMutationResolvers, photosTMQueryResolvers } from "./photos/photos-tv.resolvers";
import { scheduleTMMutationResolvers, scheduleTMQueryResolvers } from "./schedule/schedule-tv.resolvers";

export const tournamentVenueQueryResolvers = {
    ...ownerTMQueryResolvers,
    ...courtTMQueryResolvers,
    ...photosTMQueryResolvers,
    ...scheduleTMQueryResolvers,
}

export const tournamentVenueMutationResolvers = {
    ...ownerTMMutationResolvers,
    ...courtTMMutationResolvers,
    ...photosTMMutationResolvers,
    ...scheduleTMMutationResolvers,
}