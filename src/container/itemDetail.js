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

const mapStateToProps = (state) => {
    const { isFetching, recipe } = state.detailedRecipe;
    return {
        recipe,
        isFetching,
    };
};

const connectedItemDetail = connect(mapStateToProps, mapDispatchToProps)(ItemDetail);

export default connectedItemDetail;
