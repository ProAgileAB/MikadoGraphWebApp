# TODO

## Dev Environment

 * [] Eslint
 * [] src folder
 * [] fix the broken parser.pegjs, it doesn't parse in the online editor anymore

## Performance

 * [] Only parse file if file has changed

## UX

 * [] Only work on one file at the time
 * [] Show current file name
 * [] Show syntax example before opening file.
 * [] Show checkmark (or shape change) on done steps

## Parser annoyances

The parser requires a newline at end of .mikado file.

More generally, having empty whitespace lines (for grouping, formatting) would be great.

Node identifiers do not accept numbers: Format2 is not valid.

Syntax errors in generated digraph format are not transparent; ideally shouldn't be
but during development would need at least logging of digraph string

.mikado file parse error are logged to console, would like them visible in graph!

Re-generating parser now requires
 1) copy-paste .pegjs file to online parser generator
 2) generate parser
 3) download and overwrite current parser.js file
I believe the pegjs CLI can help us out here...
