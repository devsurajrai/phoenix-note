import {filterNotes} from './filterNotes'
import {sortNotes} from './sortNotes'
const reduce = (accu, current) => (data, state) =>
  current(accu(data, state), state);
const composefilterSort = (...functions) => functions.reduce(reduce);

const getFilteredSortedNotes = composefilterSort(
    filterNotes,
    sortNotes
);

export { getFilteredSortedNotes };