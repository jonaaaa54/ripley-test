export interface Row<T> {
  /** Values of the table. */
  values: T;
};

export interface Column<T> {
  /** Headers. or columns. */
  name: keyof T;
};