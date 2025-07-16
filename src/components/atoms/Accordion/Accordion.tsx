import React, { useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import type { GithubSearchResponse } from '@services';

type AccordionProps = {
  user: GithubSearchResponse;
};

const Accordion: React.FC<AccordionProps> = ({ user }) => {
  const [isExpand, setIsExpand] = useState(false);
  const { login, id, repos } = user;

  return (
    <div
      key={id}
      className="border mb-2 rounded overflow-hidden bg-white"
    >
      <button
        className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-100"
        onClick={() => setIsExpand((prevState) => !prevState)}
      >
        <span>{login}</span>
        <span>
          {isExpand ? (
            <ChevronDownIcon className="size-6 text-black-500" />
          ) : (
            <ChevronUpIcon className="size-6 text-black-500" />
          )}
        </span>
      </button>
      {isExpand &&
        repos.map((repo) => (
          <div
            className="flex flex-row px-4 py-4 ml-4 mr-2 my-2 rounded text-sm justify-between bg-gray-100"
            key={repo.id}
          >
            <div className='w-3/5'>
              <b className="text-black-500">{repo.name}</b>
              <p className="text-black-500">{repo.description}</p>
            </div>
            <div className='flex flex-row justify-start'>
              <b className='text-black-500'>{repo.stars}</b>
              <StarIcon className="size-6 text-black-500" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accordion;
