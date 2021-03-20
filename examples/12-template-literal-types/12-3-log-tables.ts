// imagine you have to create table which logs each change operation
// on every value - full auditable, always available
type PatientEntity = {
  id: string;
  name: string;
  birthDateUtc: Date;
  sex: 'Female' | 'Male';
};

type ChangeLog<T> = {
  id: string;
  entityId: string;
  createdDateUtc: Date;
} & {
  [K in keyof T as `${string & K}_${'old' | 'new'}`]?: T[K];
};

// we rather won't change `id`
// type OnlyValues<T> = Omit<T, 'id'>;
// PS we can also do it in `FieldLog`
// [K in keyof Omit<T, 'id'> as `${string & K}_${'old' | 'new'}`]?: string;

const patientLog: ChangeLog<PatientEntity> = {
  id: 'foo',
  entityId: 'bar',
  createdDateUtc: new Date(),
  // name_old: false, <-- won't compile
  birthDateUtc_old: new Date(),
};

export {};
