// ========= unbox data ==========
type Success<T> = {
  isSuccess: true;
  data: T;
};

type Failure = {
  isSuccess: false;
  error: Error;
};

type Result<T> = Success<T> | Failure;

// now we'd like to get only type - so, unbox the type
type PayloadType<T> = T extends Success<infer TPayload> ? TPayload : Error;

type Client = {
  name: string;
  budget: number;
};

const clientSuccess: Result<Client> = {
  isSuccess: true,
  data: {
    name: 'Big corp',
    budget: 100,
  },
};

// now, lets take effective type of clientSuccess variable
type SuccessPayload = PayloadType<typeof clientSuccess>;
/**
 * Result type:
 * type SuccessPayload = {
      name: string;
      budget: number;
   }
 */

const clientFailure: Result<Client> = {
  isSuccess: false,
  error: new Error('😢'),
};

// now, lets take effective type of clientFailure variable
type FailurePayload = PayloadType<typeof clientFailure>;
/**
 * Result type:
 * type FailurePayload = Error
 */

export {};
