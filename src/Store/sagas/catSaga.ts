import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess, getCatsFetch } from "../catSlice";

type catJson = {
  weight: {
      imperial: string,
      metric: string
    },
    id: string,
    name: string,
    cfa_url: string,
    vetstreet_url: string,
    vcahospitals_url: string,
    temperament: string,
    origin: string,
    country_codes: string,
    country_code: string,
    description: string,
    life_span: string,
    indoor: number,
    lap: number,
    alt_names: string,
    adaptability: number,
    affection_level: number,
    child_friendly: number,
    dog_friendly: number,
    energy_level: number,
    grooming: number,
    health_issues: number,
    intelligence: number,
    shedding_level: number,
    social_needs: number,
    stranger_friendly: number,
    vocalisation: number,
    experimental: number,
    hairless: number,
    natural: number,
    rare: number,
    rex: number,
    suppressed_tail: number,
    short_legs: number,
    wikipedia_url: string,
    hypoallergenic: number,
    reference_image_id: string
}

type catImage = {
  id: string,
  url: string,
  width: number,
  height: number
}

export type cat = {
  id: string,
  name: string,
  temperament: string,
  description: string,
  image: string
}

function* workGetCatsFetch() {
  const cats: cat[] = [];
  const mainCatsData: Response = yield call(() => fetch('https://api.thecatapi.com/v1/breeds?limit=10'));
  const formattedMainCatsData: catJson[] = yield mainCatsData.json();

  const catsImage: Response = yield call(() => fetch('https://api.thecatapi.com/v1/images/search?limit=10'));
  const formattedCatsImage: catImage[] = yield catsImage.json();

  formattedMainCatsData.forEach((cat, index) => {
    cats.push({
      id: cat.id,
      name: cat.name,
      temperament: cat.temperament,
      description: cat.description,
      image: formattedCatsImage[index].url
    });
  });
  yield put(getCatsSuccess(cats));
}

function* catSaga() {
  yield takeEvery(getCatsFetch, workGetCatsFetch);
}

export default catSaga;