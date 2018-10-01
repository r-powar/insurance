import vehicleData from '../data/vehicle';
import coverageData from '../data/coverages';

//simulating a fetch behavior for vehicle data
const getVehicleData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(vehicleData){
                resolve(vehicleData)
            }else{
                reject(new Error('failed request'));
            }
        } , 1000)
    });
};

//simulating fetch behavior for coverage data
const getCoverageDetails = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(coverageData){
                resolve(coverageData);
            }else{
                reject(new Error('failed request'));
            }
        }, 1000)
    })
};

export default {getVehicleData, getCoverageDetails}
