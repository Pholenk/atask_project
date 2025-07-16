import React from 'react';

type SearchTemplateProps = {
  searchSection: React.ReactNode;
  content?: React.ReactNode;
};

const SearchTemplate: React.FC<SearchTemplateProps> = ({
  searchSection,
  content,
}) => {
  return (
    <div className="w-screen bg-white flex flex-col">
      <main className="w-full h-md px-12 py-6">
        <section className="mb-6">
          {searchSection}
        </section>

        {content && (
          <section className="bg-gray-100 p-6 rounded-lg min-h-[200px]">
            {content}
          </section>
        )}
      </main>
    </div>
  );
};

export default SearchTemplate;
