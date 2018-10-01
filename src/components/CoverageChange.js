import React, {Component} from 'react';

const NoChange = () => {
    return (
        <div className="row viewDetails">
            <div className='col'>
                No Changes
            </div>
        </div>
    )
};

const ShowChanges = ({title, oldVal, newVal}) => {
    return (
        <div className="row viewDetails">
            <div className="col-9">
                {title}
            </div>
            <div className="col-3">
                <span>{oldVal} --> {newVal}</span>
            </div>
        </div>
    )
};
const Changes = (val) => {
    return (
        <div>
            {val.isCompUpdated &&
            <ShowChanges title={val.compDeductTitle} oldVal={val.compDeduct} newVal={val.newCompDeduct}/>
            }
            {val.isColUpdated &&
            <ShowChanges title={val.colDeductTitle} oldVal={val.colDeduct} newVal={val.newColDeduct}/>
            }
            {val.isRentUpdated &&
            <ShowChanges title={val.rentalTitle} oldVal={val.rentalReimbursement} newVal={val.newRentalReim}/>
            }
            {val.isRoadUpdated &&
            <ShowChanges title={val.roadSideTitle} oldVal={val.roadSideAssistance} newVal={val.newRoadSide}/>
            }
        </div>
    )
};

class CoverageChange extends Component {

    saveChanges = () => {
      this.props.saveChanges();
    };

    cancelChanges = () => {
        this.props.cancelChanges()
    };

    render() {
        return (
            <div>
                <div className="container details">
                    <div className='row title'>
                        Coverage Changes
                    </div>

                    {!this.props.change ? <NoChange/> : <Changes {...this.props}/>}

                    <div className="row saveSection">
                        <div onClick={this.saveChanges} className="col-4 saveButton" role='button'>
                            SAVE CHANGES
                        </div>
                    </div>
                    <div className='row cancelSection'>
                        <div onClick={this.cancelChanges} className="col cancelText">
                            CANCEL CHANGES
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CoverageChange;