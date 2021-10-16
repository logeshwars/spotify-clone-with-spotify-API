export const initialstate = {
  user: null,
  token: null,
  playlist: [],
  playing: false,
  item: null,

  // "BQBTGg-ssZw3beUbDngGYnrL84ZoP7vt4M-jSqQ0kxyqLIX0TB…Y-FhxTLIZWb17OUdOBQrEhFO1cbdNrm-v0ZZFOyGrwm1P1Ho9",
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Set_User":
      return {
        ...state,
        user: action.user,
      };
    case "Set_Token":
      return {
        ...state,
        token: action.token,
      };
    case "Set_Playlists":
      return {
        ...state,
        playlist: action.playlists,
      };
    case "SetDiscoverWeekly":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
