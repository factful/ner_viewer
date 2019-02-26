# Notes

## Notes on entity display

The major issue are spans which are nested or overlapping.

Overlapping can be turned into a special case of nesting, with the additional complication of highlighting the overlap (where it's not a strict nesting)

Examples

```
<a>this is a <b>sentence</a> with invalid markup</b>
```

That could be turned into

```
<c><a>this is a</a> <overlap>sentence</overlap> <b>with invalid markup</b></c>
```

I am going to punt on this as follows:

- Fully hierarchical nested entities will be displayed as nested.
- Throw an error for any overlapping entities.

## Entity processing

Let's follow spaCy's example.  We'll ask for:

- A string of text
- A list of entities
- Each entity has a start position (relative to the start of the text), an end position, and a label.

We'll iterate over the entity list to check a few things:

- sort the list by start position
- make sure there aren't any overlaps.

Then, using the base text as an index, scan the text, and pull tokens/characters off the index, and when encountering a position with an entity, insert the tags for the entity, starting from the longest, to the shortest for that start position.  consume the rest of length of the shortest element, close that entity, consume the rest of the length of the next element, until all of the entities currently open are closed.