import React, { useCallback } from 'react';
import { SearchContainer } from '@organisms';
import { SearchTemplate } from '@templates';
import { useAppDispatch, useAppSelector } from '@hooks';
import { fetchGithubUsers, type RootState } from '@store';

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { githubUsers } = useAppSelector(
    (state: RootState) => state.app,
  );

  const handleSearch = useCallback(
    (query: string) => {
      if (query.trim()) {
        dispatch(fetchGithubUsers(query));
      }
    },
    [dispatch],
  );
  const searchSection = useCallback(
    () => (
      <SearchContainer
        onSearch={handleSearch}
        searchResult={githubUsers}
      />
    ),
    [githubUsers, handleSearch],
  );

  return <SearchTemplate searchSection={searchSection()} />;
};

export default SearchPage;
