'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react';

const SearchPage = () => {
     const searchParams = useSearchParams();
     const query = searchParams.get('query');

     console.log(query);

     return (
          <div>
               <h1>Search Results for: {query}</h1>
          </div>
     );
}

export default SearchPage;
