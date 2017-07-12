import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setModel } from '../actionsAndReducers/ticket';
import PropTypes from 'prop-types';

const IphoneModel = ({ ticket, setModel }) => (
  <form>
    {categoryToModel(ticket.category).map((model, index) => (
      <Link to='/issue'
        className={`btn d-block btn-secondary ${model === ticket.model ? 'active' : ''}`}
        key={index} onClick={() => setModel(model)}>{model}
      </Link>
    ))}
  </form>
);
IphoneModel.propTypes = {
  ticket: PropTypes.object.isRequired,
  setModel: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  ticket: state.ticket
})

const mapActionToProps = ({
  setModel
})

const model = {
  IPhone: ['IPhone 6s', 'Iphone 6s Plus', 'Iphone 7'],
  Macbook: ['Macbook Air']
}

const categoryToModel = (category) => {
  //return ['IPhone 6s', 'Iphone 6s Plus', 'Iphone 7'];
  return model[category] || model.IPhone;
}

//export default Category
export default connect(mapStateToProps, mapActionToProps)(IphoneModel)