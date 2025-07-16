import React, { useState, type ChangeEvent } from 'react';
import { Button, Input } from '@atoms';

type SearchFormProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceDelay?: number;
};

const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  placeholder = 'Enter username',
}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOnSearch = () => {
    onSearch(searchValue);
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="w-full">
        <Input
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full">
        <Button
          type="submit"
          variant="primary"
          onClick={handleOnSearch}
        >
          Search
        </Button>
      </div>
      {searchValue && (
        <div className="w-full">
          <p className="text-sm text-gray-600 mb-2">{`Showing users for "${searchValue}"`}</p>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
