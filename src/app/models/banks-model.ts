export interface Bank {
  /** Name of the bank. */
  name: string;
  /** Id of the bank. */
  id: string;
};

export interface Banks {
  /** List of banks. */
  banks: Bank[];
};
