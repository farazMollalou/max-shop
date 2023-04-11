import { addActionType, resetActionType, minusActionType } from "./actionTypes"

const reducer = (state = 0, action) => {
    switch (action.type) {
        case addActionType: {
            return state + 1
        }
        case minusActionType: {
            return state + 1
        }
        case resetActionType: {
            return 0
        }

        default:
            break;
    }
}

export default reducer