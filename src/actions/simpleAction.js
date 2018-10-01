import utils from '../util/utilities';
import * as types from './types';

const initAction = () => dispatch => {
    //simulating a fetch
    utils.getVehicleData().then((data) => {
        dispatch({
            type: types.INIT_INSURANCE,
            payload: data
        });
    }).catch((err) => {
        //would dispatch an error event here
        console.log(err);
    })
};


const editAction = () => (dispatch, getState) => {
    let currState = getState().insurance;
    let coverageOptions = {};

    //simulating a fetch
    utils.getCoverageDetails().then((data) => {
        data.coverageOptions.forEach((val) => {
            if (currState[val.name]) {
                coverageOptions[val.name] = val.options
            }
        });

        dispatch({
            type: types.EDIT_MODE,
            payload: coverageOptions
        });
    }).catch((err) => {
        //would dispatch error event here
        console.log(err);
    })
};

//action for comprehensive
const changeComp = (obj) => (dispatch) => {
    dispatch({
        type: types.UPDATE_COMP,
        payload: obj
    })
};

//action for collision
const changeCol = (obj) => (dispatch) => {
    dispatch({
        type: types.UPDATE_COL,
        payload: obj
    })
};

//action for rental
const changeRental = (obj) => (dispatch) => {
    dispatch({
        type: types.UPDATE_RENTAL,
        payload: obj
    })
};

//action for roadside
const changeRoad = (obj) => (dispatch) => {
    dispatch({
        type: types.UPDATE_ROAD,
        payload: obj
    })
};

//action for saving
const saveChanges = () => (dispatch) => {
    dispatch({
        type: types.SAVE_MODE
    })
};

//action for canceling
const cancelChanges = () => (dispatch) => {
    dispatch({
        type: types.CANCEL_MODE
    })
};
export {initAction, editAction, changeComp, changeCol, changeRental, changeRoad, saveChanges, cancelChanges}