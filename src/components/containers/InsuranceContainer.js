import {connect} from 'react-redux';
import * as allActions from '../../actions/simpleAction'
import InsuranceDetails from '../InsuranceDetails'


const mapStateToProps = (state) => {
    return {
        title: state.insurance.carTitle,
        compDeduct: state.insurance.compDeductible.value,
        colDeduct: state.insurance.collDeductible.value,
        rentalReimbursement: state.insurance.rentalCar.value,
        roadSideAssistance: state.insurance.roadside.value,
        newCompDeduct: state.insurance.compDeductible.tempVal,
        newColDeduct: state.insurance.collDeductible.tempVal,
        newRentalReim: state.insurance.rentalCar.tempVal,
        newRoadSide: state.insurance.roadside.tempVal,
        compDeductTitle: state.insurance.compDeductible.title,
        colDeductTitle: state.insurance.collDeductible.title,
        rentalTitle: state.insurance.rentalCar.title,
        roadSideTitle: state.insurance.roadside.title,
        compOptions: state.insurance.compDeductible.options,
        colOptions: state.insurance.collDeductible.options,
        rentalOptions: state.insurance.rentalCar.options,
        roadSideOptions: state.insurance.roadside.options,
        compCheckedVal: state.insurance.compDeductible.checkedVal,
        colCheckedVal: state.insurance.collDeductible.checkedVal,
        rentCheckedVal: state.insurance.rentalCar.checkedVal,
        roadCheckedVal: state.insurance.roadside.checkedVal,
        isCompUpdated: state.insurance.compDeductible.updated,
        isColUpdated: state.insurance.collDeductible.updated,
        isRentUpdated: state.insurance.rentalCar.updated,
        isRoadUpdated: state.insurance.roadside.updated,
        change: state.insurance.change,
        mode: state.insurance.mode
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => {
            dispatch(allActions.initAction());
        },

        editData: () => {
            dispatch(allActions.editAction());
        },

        changeComp: (obj) => {
            dispatch(allActions.changeComp(obj));
        },

        changeCol: (obj) => {
            dispatch(allActions.changeCol(obj));
        },

        changeRental: (obj) => {
            dispatch(allActions.changeRental(obj));
        },

        changeRoad: (obj) => {
            dispatch(allActions.changeRoad(obj));
        },

        saveChanges: () => {
            dispatch(allActions.saveChanges());
        },

        cancelChanges: () => {
            dispatch(allActions.cancelChanges());
        }
    }
};
const InsuranceContainer = connect(mapStateToProps, mapDispatchToProps)(InsuranceDetails);

export default InsuranceContainer;