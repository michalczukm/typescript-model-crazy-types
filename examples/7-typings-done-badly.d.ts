// =====

export type ClientType = {
    name: string
}

// =====

export interface ClientInterface {
    name: string;
}


// --- won't work
// class ClientClass {
//     id: string;
// }

// only declaration, like header in C
declare class ClientClass {
    id: string;
}


// ======

// --- won't work
// function handle(input: string): void {
//     // ...
// }

declare function handle(input: string): void;


// =====

// --- won't work
// const PolandISOCode = 'PL';

// ☣️☢️☣️☢️ Warning!!
declare const PolandISOCode = 'PL';

// =====

// ☣️☢️☣️☢️ Warning!!
export enum Continent {
    Africa = 'AF',
    Antarctica = 'AN',
    Asia = 'AS',
    Europe = 'EU',
    NorthAmerica = 'NA',
    Oceania = 'OC',
    SouthAmerica = 'SA'
}