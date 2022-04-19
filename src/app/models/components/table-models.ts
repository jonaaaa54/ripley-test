export interface Row<T> {
  /** Values of the table. */
  values: T;
};

export interface Column<T> {
  /** Headers. or columns. */
  name: keyof T;
};

export interface TableData {
  /** Total of money make in transference. */
  amount: number;
  /** Name of the receiver. */
  name: string;
  /** Rut of the receiver. */
  rut: string;
  /** Bank of the receiver. */
  bank: string;
  /** Type of account of the receiver. */
  accountType: string;
};
