export interface PopularMovie {
    id?: number,
    title?: string,
    poster_path?: string,
}

export interface Popular {
    page: number,
    results: PopularMovie[],
}

export interface SearchMovie {
    id?: number,
    title?: string,
    poster_path?: string,
}

export interface Search {
    page: number,
    results: SearchMovie[],
}

export interface MenuBarProps {
    onSearch: (movies: SearchMovie[]) => void;
}

export interface SearchProps {
    movies: SearchMovie[] | null;
}
  
