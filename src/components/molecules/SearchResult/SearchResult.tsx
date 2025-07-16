import { Accordion } from '@atoms';
import type { GithubSearchResponse } from '@services';
import type React from 'react';

type SearchResultProps = {
  result: GithubSearchResponse[];
};

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  if (result.length > 0) {
    return (
      <div className="px-4 w-full">
        {result.map((item, index) => (
          <Accordion user={item} key={`accordion-${index}`}/>
        ))}
      </div>
    );
  }
  return null;
};

export default SearchResult;
