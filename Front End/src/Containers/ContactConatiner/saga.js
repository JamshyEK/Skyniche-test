import { put, takeEvery } from "redux-saga/effects";
import {
    FETCH_CONTACT_INIT_ACTION,
    FETCH_CONTACT_SUCCESS_ACTION,
    FETCH_CONTACT_FAIL_ACTION,
    ADD_CONTACT_INIT_ACTION,
    ADD_CONTACT_SUCCESS_ACTION,
    ADD_CONTACT_FAIL_ACTION,
    DELETE_CONTACT_INIT_ACTION, DELETE_CONTACT_SUCCESS_ACTION, DELETE_CONTACT_FAIL_ACTION, EDIT_CONTACT_INIT_ACTION,
    EDIT_CONTACT_SUCCESS_ACTION, EDIT_CONTACT_FAIL_ACTION
} from "./action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function* fetchContact(value) {
    let pageno = !value ||
        !value.value || !value.value.pageno
        ? 1
        : value.value.pageno;


    try {
        const res = yield fetch(
            `http://localhost:5000/users/getUsers`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
            }
        );
        if (!res.ok) {
            let errJSON = {};
            try {
                errJSON = yield res.json();
            } catch { }
            throw Object.assign(res, errJSON);
        } else {
            const resJSON = yield res.json();
            console.log(resJSON, "--------------")
            yield put({
                type: FETCH_CONTACT_SUCCESS_ACTION,
                payload: resJSON,
            });
        }
    } catch (err) {
        if (err.ok === false) {
            yield put({ type: FETCH_CONTACT_FAIL_ACTION, error: err });
        } else {
        }
    }
}




function* addContact(value) {
    console.log(value,"-----------")

    try {


        const contactValue = {
            name: value.value.name,
            email: value.value.email,
            phone: value.value.phone,
            desig: value.value.desig,
            joinDate: value.value.joinDate,
        };

        const res = yield fetch(`http://localhost:5000/users/addUsers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactValue),
        });

        if (!res.ok) {

            let errJSON = {};
            try {
                errJSON = yield res.json();
            } catch {
                throw Object.assign(res, errJSON);
            }
        } else {
            const resJSON = yield res.json();

            yield put({
                type: FETCH_CONTACT_INIT_ACTION,
            });

            yield toast.success("Contact added successfully", {
                autoClose: 3000,
            });

            yield put({
                type: ADD_CONTACT_SUCCESS_ACTION,
                payload: resJSON,
            });
        }
    } catch (err) {
        if (err.ok === false) {
            yield put({
                type: ADD_CONTACT_FAIL_ACTION,
                error: err,
            });
        }
    }
}




function* deleteContact(value) {
    let id = value.value.id;


    try {
        const res = yield fetch(`http://localhost:5000/users/deleteUsers/` + id, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            let errJSON = {};
            try {
                errJSON = yield res.json();
            } catch { }
            throw Object.assign(res, errJSON);
        } else {
            yield put({ type: FETCH_CONTACT_INIT_ACTION });
            yield toast.success("Deleted successfully", {
                autoClose: 3000,
            });
            //const resJSON =
            yield res.json();

            yield put({
                type: DELETE_CONTACT_SUCCESS_ACTION,
            });
        }
    } catch (err) {
        if (err.ok === false) {
            yield put({ type: DELETE_CONTACT_FAIL_ACTION, error: err });
        } else {
        }
    }
}



function* editContact(value) {


    const contactValue = {
        id: value.value._id,
        name: value.value.name,
        email: value.value.email,
        phone: value.value.phone,
        desig: value.value.desig,
    };
    try {
        const res = yield fetch(`http://localhost:5000/users/updateUsers/`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactValue),
        });
        if (!res.ok) {

            let errJSON = {};
            try {
                errJSON = yield res.json();
            } catch { }
            throw Object.assign(res, errJSON);
        } else {
            const resJSON = yield res.json();

            yield put({
                type: FETCH_CONTACT_INIT_ACTION,
            });
            yield toast.success("Contact updated successfully", {
                autoClose: 3000,
            });
            yield put({
                type: EDIT_CONTACT_SUCCESS_ACTION,
                payload: resJSON,
            });
        }
    } catch (err) {
        if (err.ok === false) {
            yield put({ type: EDIT_CONTACT_FAIL_ACTION, error: err });
        } else {
        }
    }
}

export function* ContactActionWatcher() {
    yield takeEvery(FETCH_CONTACT_INIT_ACTION, fetchContact);
    yield takeEvery(ADD_CONTACT_INIT_ACTION, addContact);
    yield takeEvery(DELETE_CONTACT_INIT_ACTION, deleteContact);
    yield takeEvery(EDIT_CONTACT_INIT_ACTION, editContact);

}
