import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SearchBox,
  SearchBtn,
  SearchInput,
  SearchWrapper,
} from './SearchBar.styled';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value.trim();

    if (!searchQuery) {
      toast.info('Enter your search data 💖');
      return;
    }

    setSearchParams({ search: searchQuery });

    e.currentTarget.reset();
  };

  return (
    <SearchWrapper>
      <SearchBox onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="search"
          autoComplete="off"
          defaultValue={search}
          placeholder="Search your movie by title"
        />
        <SearchBtn type="submit"></SearchBtn>
      </SearchBox>
    </SearchWrapper>
  );
};
