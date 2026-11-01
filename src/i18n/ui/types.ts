/** A UI string catalog: "<namespace>.<name>" → text. `{param}` placeholders are filled by t(). */
export type Catalog = Readonly<Record<string, string>>;
