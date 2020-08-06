export interface ISearchClassesPayload {
  subject: string;
  week_day: string;
  time: string;
}
export interface ISearchClassesAction {
  type: "REQUEST_SEARCH_CLASSES";
  payload: ISearchClassesPayload;
}
export function searchClasses(
  payload: ISearchClassesPayload
): ISearchClassesAction {
  return {
    type: "REQUEST_SEARCH_CLASSES",
    payload,
  };
}
