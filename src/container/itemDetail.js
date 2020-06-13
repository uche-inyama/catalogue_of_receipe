import { connect } from 'react-redux';
import ItemDetail from '../components/itemDetail/itemDetail';
import { getRecipeDetails } from '../actions';

const mapDispatchToProps = (dispatch) => {
    function fetchRecipeDetail(id) {
        return dispatch(getRecipeDetails(id));
    }
    return {
        fetchRecipeDetail,
    };
};

const connectedItemDetail = connect(null, mapDispatchToProps)(ItemDetail);

export default connectedItemDetail;
