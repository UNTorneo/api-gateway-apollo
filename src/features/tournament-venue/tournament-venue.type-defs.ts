import { courtsTVMutationsDef, courtsTVQuerysDef, courtsTVTypesDef } from "./courts/courts-tv.type-defs";
import { ownerTVMutationsDef, ownerTVQuerysDef, ownerTVTypesDef } from "./owner/owner-tv.type-defs";
import { photosTVMutationsDef, photosTVQuerysDef, photosTVTypesDef } from "./photos/photos-tv.type-defs";

const _tournamentVenueTypesDef = [
    ownerTVTypesDef,
    courtsTVTypesDef,
    photosTVTypesDef,
]
const _tournamentVenueQuerysDef = [
    ownerTVQuerysDef,
    courtsTVQuerysDef,
    photosTVQuerysDef,
]
const _tournamentVenueMutationsDef = [
    ownerTVMutationsDef,
    courtsTVMutationsDef,
    photosTVMutationsDef,
]


export const tournamentVenueTypesDef = `#graphql
    ${_tournamentVenueTypesDef.join('\n')}
`;

export const tournamentVenueQuerysDef = `#graphql
    ${_tournamentVenueQuerysDef.join('\n')}
`;

export const tournamentVenueMutationsDef = `#graphql
    ${_tournamentVenueMutationsDef.join('\n')}
`;