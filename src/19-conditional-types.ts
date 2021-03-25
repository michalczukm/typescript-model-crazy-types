// ======== filter types from union which fulfill constraint
{
  type Client = {
    name: string;
    budget: number;
  };

  type Employee = {
    firstName: string;
    surname: string;
  };

  type Companies = {
    name: string;
  };

  type Response = Client | Employee | Companies;

  // get only types which has `name` property
  type OnlyWithName<T> = T extends { name: string } ? T : never;

  type ClientsFilter = OnlyWithName<Response>;
}

// ========= get only strings from type ==========
{
  type ClientModel = {
    id: number;
    name: string;
    budget: number;
  };

  type OnlyStringsFields<T> = {
    [OnlyStringKey in {
      [Key in keyof T]: T[Key] extends string ? Key : never;
    }[keyof T]]: T[OnlyStringKey];
  };

  type OnlyStringsFromClient = OnlyStringsFields<ClientModel>;
  /**
   * Result type:
   * type OnlyStringsFromClient = {
        name: string;
      }
   */
}

// ========= create type which fields fulfill constraint ==========
{
  type ClientModel = {
    id: number;
    name: string;
    budget: number;
    address: {
      city: string;
      street: string;
    };
    correspondenceAddress: {
      city: string;
      street: string;
      postOffice: string;
    };
  };

  type FulfillConstraint<T, TConstraint> = {
    [OnlyStringKey in {
      [Key in keyof T]: T[Key] extends TConstraint ? Key : never;
    }[keyof T]]: T[OnlyStringKey];
  };

  type OnlyStringsFromClient = FulfillConstraint<ClientModel, { city: string }>;

  /** Result type
   * type OnlyStringsFromClient = {
      address: {
          city: string;
          street: string;
      };
      correspondenceAddress: {
          city: string;
          street: string;
          postOffice: string;
      };
    }
   */
}

export {};
