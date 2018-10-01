import React, {Component} from 'react';

class ViewMode extends Component{

    handleClick = () => {
        this.props.editData()
    };

    render(){
        return(
            <div>
                <div className='row viewDetails'>
                    <div className="col-10">
                        {this.props.compDeductTitle}
                    </div>
                    <div className="col-2">
                        {this.props.compDeduct}
                    </div>
                </div>
                <div className="row viewDetails">
                    <div className="col-10">
                        {this.props.colDeductTitle}
                    </div>
                    <div className="col-2">
                        {this.props.colDeduct}
                    </div>
                </div>
                <div className="row viewDetails">
                    <div className="col-10">
                        {this.props.rentalTitle}
                    </div>
                    <div className="col-2">
                        {this.props.rentalReimbursement}
                    </div>
                </div>
                <div className="row viewDetails">
                    <div className="col-10">
                        {this.props.roadSideTitle}
                    </div>
                    <div className="col-2">
                        {this.props.roadSideAssistance}
                    </div>
                </div>
                <div className="row editSection">
                    <div className="col editText" onClick={this.handleClick}>
                        EDIT COVERAGE
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewMode;