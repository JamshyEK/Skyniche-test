export const FETCH_CONTACT_INIT_ACTION = "FETCH_CONTACT_INIT_ACTION";
export const FETCH_CONTACT_SUCCESS_ACTION =
    FETCH_CONTACT_INIT_ACTION + "_SUCCESS";
export const FETCH_CONTACT_FAIL_ACTION =
    FETCH_CONTACT_INIT_ACTION + "_ERROR";


export const ADD_CONTACT_INIT_ACTION = "ADD_CONTACT_INIT_ACTION";
export const ADD_CONTACT_SUCCESS_ACTION =
    ADD_CONTACT_INIT_ACTION + "_SUCCESS";
export const ADD_CONTACT_FAIL_ACTION =
    ADD_CONTACT_INIT_ACTION + "_ERROR";


export const DELETE_CONTACT_INIT_ACTION = "DELETE_CONTACT_INIT_ACTION";
export const DELETE_CONTACT_SUCCESS_ACTION =
    DELETE_CONTACT_INIT_ACTION + "_SUCCESS";
export const DELETE_CONTACT_FAIL_ACTION =
    DELETE_CONTACT_INIT_ACTION + "_ERROR";


export const EDIT_CONTACT_INIT_ACTION = "EDIT_CONTACT_INIT_ACTION";
export const EDIT_CONTACT_SUCCESS_ACTION =
    EDIT_CONTACT_INIT_ACTION + "_SUCCESS";
export const EDIT_CONTACT_FAIL_ACTION =
    EDIT_CONTACT_INIT_ACTION + "_ERROR";

export const SEARCH_CONTACT_INIT_ACTION = "SEARCH_CONTACT_INIT_ACTION";
export const SEARCH_CONTACT_SUCCESS_ACTION =
    SEARCH_CONTACT_INIT_ACTION + "_SUCCESS";
export const SEARCH_CONTACT_FAIL_ACTION =
    SEARCH_CONTACT_INIT_ACTION + "_ERROR";



export function fetchContact(value) {
    return {
        type: FETCH_CONTACT_INIT_ACTION,
        value: value
    };
}


export function addContact(value) {
    return {
        type: ADD_CONTACT_INIT_ACTION,
        value: value,
    };
}


export function deleteContact(value) {
    return {
        type: DELETE_CONTACT_INIT_ACTION,
        value: value,
    };
}



export function editContact(value) {
    return {
        type: EDIT_CONTACT_INIT_ACTION,
        value: value,
    };
}



export function searchContact(value) {
    return {
        type: SEARCH_CONTACT_INIT_ACTION,
        value: value,
    };
}