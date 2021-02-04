export const SET_LAUNCHES = "SET_LAUNCHES";

interface ILauncheSite {
  site_name_long: string;
}
export interface ILaunches {
  mission_name: string;
  launch_date_local: string;
  launch_site: ILauncheSite;
}
interface ActionTypes {
  SET_LAUNCHES: Array<ILaunches>;
}

export interface MessageAction {
  type: keyof ActionTypes;
  payload: Array<ILaunches>;
}

export function setLaunches(launches: Array<ILaunches>): LaunchActionsTypes {
  return {
    type: SET_LAUNCHES,
    payload: launches,
  };
}

export type LaunchActionsTypes = MessageAction;
