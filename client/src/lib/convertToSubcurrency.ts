import config from '../../tailwind.config';
function convertToSubcurrency(amount:number , factor = 100) {
    return Math.round(amount * factor);
}

export default convertToSubcurrency ;