import React, {Component} from 'react';
import ViewMode from './ViewMode';
import EditMode from './EditMode';
import CoverageChange from './CoverageChange';

class InsuranceDetails extends Component{

    componentDidMount(){
        this.props.initData()
    }

    render(){
        return(
            <div>
                <div className='container details'>
                    <div className="row title">
                        {this.props.title}
                    </div>
                    {this.props.mode === 'view' ? <ViewMode {...this.props}/> : <EditMode {...this.props} />}
                </div>
                {this.props.mode === 'edit' ? <CoverageChange {...this.props}/> : null}
            </div>
        )
    }
}

export default InsuranceDetails;