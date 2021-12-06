const initialState = {
  isModalSelected: {},
};

export default function modalTypeReducer(state = initialState, action) {
  switch (action.type) {
    case 'MODAL_TYPE_REQUEST': {
      return {
        ...state,
        isModalSelected: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
