import React, { useReducer } from "react"

// Actions
export const INIT_SCREENING = "INIT_SCREENING"
export const SCREENING_POST_ANSWER = "SCREENING_POST_ANSWER"
export const SCREENING_CONCLUDE = "SCREENING_CONCLUDE"

// Reducer
export const reducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_SCREENING: {
      return {
        ...state,
        screening: {}
      };
    }
    case SCREENING_POST_ANSWER: {
      return {
        ...state,
        screening: {
          ...state.screening,
          answers: {
            ...state.screening.answers,
            [payload.questionId]: {
              answer: payload.answerId
            }
          }
        }
      };
    }
    case SCREENING_CONCLUDE: {
      return {
        ...state,
        screening: {
          ...state.screening,
          conclusion: {
            status: payload.status,
            comments: payload.comments,
          }
        }
      }
    }
    default:
      return state;
  }
};

const initialState = {
  screening: { conclusion: {}, answers: {} }
};

export const GlobalStateContext = React.createContext(initialState);

function GlobalState({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalState;