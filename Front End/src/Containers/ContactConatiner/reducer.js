import {
    FETCH_CONTACT_INIT_ACTION, FETCH_CONTACT_SUCCESS_ACTION, FETCH_CONTACT_FAIL_ACTION
} from "./action";

const initialState = {
    processing: true,
    error: false,
};

export default function ContactReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_CONTACT_SUCCESS_ACTION:
            return {
                ...state,
                ContactList: action.payload,
                processing: false,
                error: false,
            };
   

        default:
            return {
                ...state,
            };
    }
}
