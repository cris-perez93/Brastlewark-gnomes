import {
  GET_GNOMES,
  GET_GNOMES_SUCCESFULLY,
  GET_GNOMES_ERROR,
  GET_GNOME_FILTER_NAME,
  GET_GNOME_FILTER_ERROR,
} from "../types";

export function getGnomesAction() {
  return async (dispatch) => {
    dispatch(getGnomes());

    try {
      const url =
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

      const response = await fetch(url);
      const gnomes = await response.json();

      dispatch(getGnomesSuccesfully(gnomes.Brastlewark));
    } catch (error) {
      console.log(error);
      dispatch(getGnomesError());
    }
  };
}

const getGnomes = () => ({
  type: GET_GNOMES,
  payload: true,
});

const getGnomesSuccesfully = (gnomes) => ({
  type: GET_GNOMES_SUCCESFULLY,
  payload: gnomes,
});

const getGnomesError = () => ({
  type: GET_GNOMES_ERROR,
  payload: true,
});

export function filterGnomeName(name) {
  return async (dispatch) => {
    dispatch(getGnomeFilterName(name));
  };
}

const getGnomeFilterName = (name) => ({
  type: GET_GNOME_FILTER_NAME,
  payload: name,
});
