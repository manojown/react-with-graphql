import MainComponent from "./dashboard"

// just a example you import all component and assined to each routes
export const DefaultRoutes = [{
  path: "/",
  component: MainComponent,
  authRequire: true,
  exact: true
}];
// export default {
//   DefaultRoutes
// }