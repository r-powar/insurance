import initialState from './initialState';
import * as types from '../actions/types';

const simpleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INIT_INSURANCE:
            const {name, compDeductible, collDeductible, rentalCar, roadside} = action.payload;
            state.carTitle = name;

            Object.assign(state, {
                compDeductible: Object.assign({}, state.compDeductible, {
                    value: '$' + compDeductible,
                    tempVal: '$' + compDeductible
                })
            });

            Object.assign(state, {
                collDeductible: Object.assign({}, state.collDeductible, {
                    value: '$' + collDeductible,
                    tempVal: '$' + collDeductible
                })
            });

            Object.assign(state, {
                rentalCar: Object.assign({}, state.rentalCar, {
                    value: rentalCar === 'false' ? 'No' : 'Yes',
                    tempVal: rentalCar === 'false' ? 'No' : 'Yes'
                })
            });

            Object.assign(state, {
                roadside: Object.assign({}, state.roadside, {
                    value: roadside === 'false' ? 'No' : 'Yes',
                    tempVal: roadside === 'false' ? 'No' : 'Yes'
                })
            });

            return Object.assign({}, state);

        case types.EDIT_MODE:
            let coverage = action.payload;
            state.mode = 'edit';
            for (let i in coverage) {
                if (coverage.hasOwnProperty(i)) {
                    coverage[i].forEach((val) => {
                        if (state[i]) {
                            state[i].options = [...state[i].options, val.name];
                        }

                    })
                }
            }

            return Object.assign({}, state);

        case types.UPDATE_COMP:
            state.change = true;
            return Object.assign({}, state, {
                compDeductible: Object.assign({}, state.compDeductible, {
                    tempVal: action.payload.value === 'NO COVERAGE' ? 'No Coverage' : '$' + action.payload.value,
                    checkedVal: action.payload.item,
                    updated: true
                })
            });

        case types.UPDATE_COL:
            state.change = true;
            return Object.assign({}, state, {
                collDeductible: Object.assign({}, state.collDeductible, {
                    tempVal: action.payload.value === 'NO COVERAGE' ? 'No Coverage' : '$' + action.payload.value,
                    checkedVal: action.payload.item,
                    updated: true
                })
            });

        case types.UPDATE_RENTAL:
            state.change = true;
            return Object.assign({}, state, {
                rentalCar: Object.assign({}, state.rentalCar, {
                    tempVal: action.payload.value === 'YES' ? 'Yes' : 'No',
                    checkedVal: action.payload.item,
                    updated: true
                })
            });

        case types.UPDATE_ROAD:
            state.change = true;
            return Object.assign({}, state, {
                roadside: Object.assign({}, state.roadside, {
                    tempVal: action.payload.value === 'YES' ? 'Yes' : 'No',
                    checkedVal: action.payload.item,
                    updated: true
                })
            });

        case types.SAVE_MODE:
            state.mode = 'view';
            state.change = false;

            Object.assign(state, {
                compDeductible: Object.assign({}, state.compDeductible, {
                    value: state.compDeductible.tempVal,
                    options: [],
                    updated: false
                })
            });
            Object.assign(state, {
                collDeductible: Object.assign({}, state.collDeductible, {
                    value: state.collDeductible.tempVal,
                    options: [],
                    updated: false
                })
            });
            Object.assign(state, {
                rentalCar: Object.assign({}, state.rentalCar, {
                    value: state.rentalCar.tempVal,
                    options: [],
                    updated: false
                })
            });
            Object.assign(state, {
                roadside: Object.assign({}, state.roadside, {
                    value: state.roadside.tempVal,
                    options: [],
                    updated: false
                })
            });

            return Object.assign({}, state);

        case types.CANCEL_MODE:
            state.mode = 'view';
            state.change = false;

            Object.assign(state, {
                compDeductible: Object.assign({}, state.compDeductible, {
                    options: [],
                    updated: false
                })
            });
            Object.assign(state, {
                collDeductible: Object.assign({}, state.collDeductible, {
                    options: [],
                    updated: false
                })
            });
            Object.assign(state, {
                rentalCar: Object.assign({}, state.rentalCar, {
                    options: [],
                    updated: false
                })
            });
            Object.assign(state, {
                roadside: Object.assign({}, state.roadside, {
                    options: [],
                    updated: false
                })
            });

            return Object.assign({}, state);

        default:
            return state;
    }
};

export default simpleReducer;