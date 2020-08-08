import { Classes } from "@proffy/network";
import { ISearchClassesSagaAction } from "../sagas/Classes";

export interface IClassesState {
  subject: string;
  week_day: string;
  time: string;
  data: Classes[];
  isLoading: boolean;
  isError: boolean;
}
export type ClassesReducerActions = ISearchClassesSagaAction;

const initialState: IClassesState = {
  data: [],
  subject: "",
  week_day: "",
  time: "",
  isLoading: false,
  isError: false,
};

export default function classes(
  state = initialState,
  action: ClassesReducerActions
) {
  switch (action.type) {
    case "SUCCESS_SEARCH_CLASSES":
      return {
        data: action.payload?.data,
        subject: action.payload?.subject,
        week_day: action.payload?.week_day,
        time: action.payload?.time,
        isLoading: false,
        isError: false,
      };
    case "LOADING_SEARCH_CLASSES":
      return {
        data: [...state.data],
        subject: action.payload?.subject,
        week_day: action.payload?.week_day,
        time: action.payload?.time,
        isLoading: true,
        isError: false,
      };
    case "ERROR_SEARCH_CLASSES":
      return {
        data: [...state.data],
        subject: state.subject,
        week_day: state.week_day,
        time: state.time,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
