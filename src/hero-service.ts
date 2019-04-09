import axios from 'axios';

import { Hero } from './hero';

const api = 'api';

class HeroService {
  public deleteHero(hero: Hero) {
    return axios.delete(`${api}/hero/${hero.id}`);
  }

  public getHeroes() {
    return axios.get<Hero[]>(`${api}/heroes`);
  }

  public addHero(hero: Hero) {
    return axios.post(`${api}/hero/`, { hero });
  }

  public updateHero(hero: Hero) {
    return axios.put(`${api}/hero/${hero.id}`, { hero });
  }
}

// Export a singleton instance in the global namespace
export const heroService = new HeroService();
