import axios from 'axios'
import { Popular, Search, DetailMovie } from '../types'
import { useQuery } from 'react-query'

// global custom axios for TMDB
const axiosMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDI5ZTU0Nzg2NDdiYjA3NDg1ZDUwNzdiODM0M2Q5NCIsInN1YiI6IjY1NTRlMDg2NTM4NjZlMDExYzA3MmFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.siRpjQ_vWW25ex0Dy34XIbgrQq6MzlWkCZfyZnkBu1Q'
  }
})

// place all api here
async function getPopular() {
  const response = await axiosMovie.get<Popular>(`/movie/popular`)
  return response.data
}

export function usePopular(){
  return useQuery('popular', getPopular)
}

export async function getSearch(title:string) {
  const response = await axiosMovie.get<Search>(`/search/movie`, {
    params: { query: title }
  })
  return response.data
}

export function useSearch(title: string) {
  return useQuery(['search', title], () => getSearch(title))
}

export async function getDetail(id: number) {
  const response = await axiosMovie.get<DetailMovie>(`/movie/${id}`, {
    params: { movie_id: id }
  })
  return response.data
}

export function useDetail(id: number) {
  return useQuery(['detail', id], () => getDetail(id))
}
