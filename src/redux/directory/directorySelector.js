import {createSelector} from 'reselect';
import directory from '../../components/directory/directory';

const selectDirectory = state => state.directory;

export const selectDirectorySection = createSelector(
    [selectDirectory],

    directory => directory.sections

)