export const types = {
  create: "funds/create",
};

const initialState = {
  funds: [
    {
      name: "Wind Fund",
      value: 1032.23,
      graph: require("../../assets/wind-fund.png"),
    },
    {
      name: "Solar Fund",
      value: 1032.23,
      graph: require("../../assets/solar-fund.png"),
    },
    {
      name: "Nature Fund",
      value: 1032.23,
      graph: require("../../assets/nature-fund.png"),
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
