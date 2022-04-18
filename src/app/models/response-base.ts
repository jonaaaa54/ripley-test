export type ResponseBase<T> = {
  /** Status of the response. */
  readonly ok: boolean;
  /** Message of the response. */
  readonly message: string;
  /** Data of the response. */
  data: Readonly<T>;
};
