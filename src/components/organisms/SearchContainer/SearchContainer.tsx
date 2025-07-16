import React from 'react';
import { SearchForm, SearchResult } from '@molecules';
import type { GithubSearchResponse } from '@services';

type SearchContainerProps = {
  onSearch: (value: string) => void;
  searchResult: GithubSearchResponse[];
};

const SearchContainer: React.FC<SearchContainerProps> = ({
  onSearch,
  searchResult,
}) => {
  return (
    <div className="px-6 rounded-lg">
      <SearchForm
        onSearch={onSearch}
        placeholder="Enter username"
      />
      <SearchResult result={searchResult} />
    </div>
  );
};

export default SearchContainer;
