import React, {Component} from 'react';

class EditMode extends Component {

    changeComps = (e) => {
        let obj = {
            value: e.target.textContent.replace('$', ''),
            item: e.target.dataset.key
        };

        this.props.changeComp(obj)
    };

    changeCol = (e) => {
        let obj = {
            value: e.target.textContent.replace('$', ''),
            item: e.target.dataset.key
        };

        this.props.changeCol(obj);
    };

    changeRental = (e) => {
        let obj = {
            value: e.target.textContent,
            item: e.target.dataset.key
        };

        this.props.changeRental(obj);
    };

    changeRoadSide = (e) => {
        let obj = {
            value: e.target.textContent,
            item: e.target.dataset.key
        };

        this.props.changeRoad(obj);
    };

    render() {

        let compOptions = this.props.compOptions.map((val, idx) => {
            return (
                <li key={idx} data-key={idx}
                    style={{backgroundColor: this.props.compCheckedVal === idx.toString() ? '#30C1C6' : 'white'}}>
                    {val === 'No Coverage' ? val.toUpperCase() : val}
                </li>
            )
        });

        let colOptions = this.props.colOptions.map((val, idx) => {
            return (
                <li key={idx} data-key={idx}
                    style={{backgroundColor: this.props.colCheckedVal === idx.toString() ? '#30C1C6' : 'white'}}>
                    {val === 'No Coverage' ? val.toUpperCase() : val}
                </li>
            )
        });

        let rentalOptions = this.props.rentalOptions.map((val, idx) => {
            return (
                <li key={idx} data-key={idx}
                    style={{backgroundColor: this.props.rentCheckedVal === idx.toString() ? '#30C1C6' : 'white'}}>
                    {val.toUpperCase()}
                </li>
            )
        });

        console.log('Road: ', this.props.roadSideOptions);
        let roadSideOptions = this.props.roadSideOptions.map((val, idx) => {
            return (
                <li key={idx} data-key={idx}
                    style={{backgroundColor: this.props.roadCheckedVal === idx.toString() ? '#30C1C6' : 'white'}}>
                    {val.toUpperCase()}
                </li>
            )
        });

        return (
            <div className='editDetails'>
                <div className="row">
                    <div className="col">
                        {this.props.compDeductTitle}
                    </div>
                </div>
                <div className="row">
                    <ul onClick={this.changeComps}>
                        <div className="col options">
                            {compOptions}
                        </div>
                    </ul>
                </div>
                <div className="row">
                    <div className="col">
                        {this.props.colDeductTitle}
                    </div>
                </div>
                <div className="row">
                    <ul onClick={this.changeCol}>
                        <div className="col options">
                            {colOptions}
                        </div>
                    </ul>

                </div>
                <div className="row">
                    <div className="col">
                        {this.props.rentalTitle}
                    </div>
                </div>
                <div className="row">
                    <ul onClick={this.changeRental} className='rentalRoad'>
                        <div className="col options">
                            {rentalOptions}
                        </div>
                    </ul>
                </div>
                <div className="row">
                    <div className="col">
                        {this.props.roadSideTitle}
                    </div>
                </div>
                <div className="row">
                    <ul onClick={this.changeRoadSide} className='rentalRoad'>
                        <div className="col options">
                            {roadSideOptions}
                        </div>
                    </ul>

                </div>
            </div>
        )
    }
}

export default EditMode