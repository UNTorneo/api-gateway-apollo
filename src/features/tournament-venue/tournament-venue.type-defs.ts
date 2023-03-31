import { courtsTVMutationsDef, courtsTVQuerysDef, courtsTVTypesDef } from "./courts/courts-tv.type-defs";
import { ownerTVMutationsDef, ownerTVQuerysDef, ownerTVTypesDef } from "./owner/owner-tv.type-defs";
import { photosTVMutationsDef, photosTVQuerysDef, photosTVTypesDef } from "./photos/photos-tv.type-defs";
import { schedulesTVMutationsDef, schedulesTVQuerysDef, schedulesTVTypesDef } from "./schedule/schedule-tv.type-defs";
import { venuesTVMutationsDef, venuesTVQuerysDef, venuesTVTypesDef } from "./venue/venue-tv.type-defs";

const _tournamentVenueTypesDef = [
    ownerTVTypesDef,
    courtsTVTypesDef,
    photosTVTypesDef,
    schedulesTVTypesDef,
    venuesTVTypesDef,
]
const _tournamentVenueQuerysDef = [
    ownerTVQuerysDef,
    courtsTVQuerysDef,
    photosTVQuerysDef,
    schedulesTVQuerysDef,
    venuesTVQuerysDef,
]
const _tournamentVenueMutationsDef = [
    ownerTVMutationsDef,
    courtsTVMutationsDef,
    photosTVMutationsDef,
    schedulesTVMutationsDef,
    venuesTVMutationsDef,
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