import { useReducer } from "react";

export const useSortFilter = () => {
  const SORT_FILTER_DEFAULT_STATE = {
    filter: {
      work: false,
      study: false,
      personal: false,
      health: false,
      travel: false,
      high:false,
      medium:false,
      low:false
    },
    sort: "LATEST_TO_OLDEST",
  };

  const sortFilterReducer = (sortFilterState, action) => {
    switch (action.type) {
      case "FILTER_BY_WORK":
        return {
          ...sortFilterState,
          filter: { ...sortFilterState.filter, work: action.payload.value },
        };
      case "FILTER_BY_STUDY":
        return {
          ...sortFilterState,
          filter: { ...sortFilterState.filter, study: action.payload.value },
        };
      case "FILTER_BY_PERSONAL":
        return {
          ...sortFilterState,
          filter: {
            ...sortFilterState.filter,
            personal: action.payload.value,
          },
        };
      case "FILTER_BY_HEALTH":
        return {
          ...sortFilterState,
          filter: {
            ...sortFilterState.filter,
            health: action.payload.value,
          },
        };
      case "FILTER_BY_TRAVEL":
        return {
          ...sortFilterState,
          filter: {
            ...sortFilterState.filter,
            travel: action.payload.value,
          },
        };
      case "FILTER_BY_HIGH":
        return {
          ...sortFilterState,
          filter: {
            ...sortFilterState.filter,
            high: action.payload.value,
          },
        };
      case "FILTER_BY_MEDIUM":
        return {
          ...sortFilterState,
          filter: {
            ...sortFilterState.filter,
            medium: action.payload.value,
          },
        };
      case "FILTER_BY_LOW":
        return {
          ...sortFilterState,
          filter: {
            ...sortFilterState.filter,
            low: action.payload.value,
          },
        };
      case "SORT":
        return {
          ...sortFilterState,
          sort: action.payload.value,
        };
      case "RESET":
        return {
          ...SORT_FILTER_DEFAULT_STATE,
        };
      default:
        return sortFilterState;
    }
  };

  const [sortFilterState, sortFilterDispatch] = useReducer(
    sortFilterReducer,
    SORT_FILTER_DEFAULT_STATE
  );

  return { sortFilterState, sortFilterDispatch };
};
