// Hashes that tie a translation to the English text it was made from (see TRANSLATION.md).
import { createHash } from 'node:crypto';

const sha256 = (value) => createHash('sha256').update(value).digest('hex');

/** `sourceHash` of a translated Markdown file: the whole English file, frontmatter included. */
export const sourceHashOf = (source) => sha256(source).slice(0, 16);

/** Stamp of one translated UI string: its English value. */
export const stringHashOf = (value) => sha256(value).slice(0, 8);
