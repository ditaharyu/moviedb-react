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

export interface GenreMovie {
    id?: number,
    name?: string,
}

export interface DetailMovie {
    id?: number,
    genres?: GenreMovie[]
    overview?: string,
    poster_path?: string,
    release_date?: string,
    runtime?: number,
    status?: string,
    tagline?: string,
    title?: string,
}
