import { courtTMMutationResolvers, courtTMQueryResolvers } from "./courts/courts-tv.resolvers";
import { ownerTMMutationResolvers, ownerTMQueryResolvers } from "./owner/owner-tv.resolvers";
import { photosTMMutationResolvers, photosTMQueryResolvers } from "./photos/photos-tv.resolvers";

export const tournamentVenueQueryResolvers = {
    ...ownerTMQueryResolvers,
    ...courtTMQueryResolvers,
    ...photosTMQueryResolvers,
}

export const tournamentVenueMutationResolvers = {
    ...ownerTMMutationResolvers,
    ...courtTMMutationResolvers,
    ...photosTMMutationResolvers,
}