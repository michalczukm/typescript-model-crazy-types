type Client = {
  name: string;
  budget: number;
  contracts: {
    id: string;
    volume: number;
  }[];
  accountId: string;
  description: string;
  lastLoginDate?: Date;
};

// some (only picked) examples of utility types

// ============== pick only selected types
type DisplayClient = Pick<Client, 'name' | 'description'>;

declare const displayClient: DisplayClient;

// ============== omit only selected types
type ClientWithoutDisplay = Omit<Client, 'name' | 'description'>;

declare const clientWithoutDisplay: ClientWithoutDisplay;

// ============== client with all fields optional - nice for stuff like drafts
type OptionalClient = Partial<Client>;

declare const optionalClient: OptionalClient;

// ============== make all fields required
type RequiredClient = Required<Client>;

declare const requiredClient: RequiredClient;

type InvoiceType = 'internal' | 'external' | 'other';

type AllInvoicesType = InvoiceType | 'all';

type AfterExclude = Exclude<AllInvoicesType, 'internal' | 'external'>; // - internal, - internal

// ============== NOW, FUNCTIONS ========================

const addClient = (
  client: Client,
  endpoint: string,
  method: 'POST' | 'PUT'
): Promise<{ isSuccessful: boolean }> => {
  return Promise.resolve({
    isSuccessful: true,
  });
};

type ReturnFromAddClient = ReturnType<typeof addClient>;
type AddClientParams = Parameters<typeof addClient>;

export {};
