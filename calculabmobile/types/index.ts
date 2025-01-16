export type AppParamList = {
  index: undefined;
  login: undefined;
  register: undefined;
  roadmap: undefined;
  level1: undefined;
  level2: undefined;
  level3: undefined;
  profile: undefined;
  leaderboard: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}