const initialState = {
    mode: 'view',
    compDeductible: {
        value: '',
        options: [],
        title: 'Comprehensive Deductible',
        checkedVal: '0',
        tempVal: '',
        updated: false
    },
    collDeductible: {
        value: '',
        options: [],
        title: 'Collision Deductible',
        checkedVal: '0',
        tempVal: '',
        updated: false
    },
    rentalCar: {
        value: '',
        options: [],
        title: 'Rental Reimbursement',
        checkedVal: '0',
        tempVal: '',
        updated: false
    },
    roadside: {
        value: '',
        options: [],
        title: 'Roadside Assistance',
        checkedVal: '0',
        tempVal: '',
        updated: false
    },
    carTitle: '',
    change: false
};

export default initialState;