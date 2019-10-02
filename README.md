# Overview
A basic demo clientside application built on React 16.10. Includes:
- Mock api requests to static dummy database
- Basic data filtering
- Basic data display in a table format
- Sample scatterplot chart

**Demo**: https://eddielee394.github.io/react-seismic-activity-demo/

## Installation
- clone repository
- run `yarn install` to install dependencies
- run `yarn start` to load the app on `http://localhost:3000`
- to run test suites, run `yarn test`

## Tests
- `App` component rendering
- `Utils/Api` repository methods
- `LocationContainer` unit tests


## Todos
- [ ] add global state management (redux or mobex)
- [ ] cooler styling & ThemeProvider implementation
- [ ] react router support & routing configuration
- [ ] dynamic charting and more complex chart functionality
- [ ] Add additional integration tests for `LocationChart` & `LocationTable` components

## Known Issues
TBD

### Unit Tests
- `LocationContainer` snapshot tests not rendering notification element

## Shout outs
- [React Vis](https://github.com/uber/react-vis) - super sweet charts
- [MUI DataTables](https://github.com/gregnb/mui-datatables) - Material UI inspired datatables component
- [Axios](https://github.com/axios/axios) -  http client
- [React Testing Library](https://github.com/testing-library/react-testing-library) & [Jest](https://github.com/facebook/jest) - testing utilities
- [Material UI](https://github.com/mui-org/material-ui) - ui components & theming
- [TailwindCSS](https://github.com/tailwindcss/tailwindcss) - style framework
