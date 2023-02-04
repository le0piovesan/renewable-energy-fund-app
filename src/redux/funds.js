export const types = {
  create: "funds/create",
};

const initialState = {
  funds: [
    {
      name: "Wind Fund",
      value: 1032.23,
      graph: require("../../assets/wind-fund.png"),
      icon: require("../../assets/wind-icon.png"),
      plotBackground: require("../../assets/wind-plot-bg.png"),
      color: "#4A88D0",
    },
    {
      name: "Solar Fund",
      value: 1032.23,
      graph: require("../../assets/solar-fund.png"),
      icon: require("../../assets/solar-icon.png"),
      plotBackground: require("../../assets/solar-plot-bg.png"),
      color: "#F0A719",
    },
    {
      name: "Nature Fund",
      value: 1032.23,
      graph: require("../../assets/nature-fund.png"),
      icon: require("../../assets/nature-icon.png"),
      plotBackground: require("../../assets/nature-plot-bg.png"),
      color: "#0FDF8F",
    },
  ],
};

export default function funds(state = initialState, action) {
  switch (action.type) {
    case types.create:
      return { ...state, funds: [...state.funds, action.payload] };
    default:
      return state;
  }
}

export const Funds = {
  createFund: (fund) => ({
    type: types.create,
    payload: fund,
  }),
};
