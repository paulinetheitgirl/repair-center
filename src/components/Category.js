import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategory } from '../actionsAndReducers/ticket';
import PropTypes from 'prop-types';

const Category = ({ ticket, setCategory }) => (
  <form>
    {['IPhone', 'Macbook', 'IPad'].map((category, index) => (
      <Link to='/model'
        className={`btn d-block btn-secondary ${category === ticket.category ? 'active' : ''}`}
        key={index} onClick={() => setCategory(category)}>{category}
      </Link>
    ))}
  </form>
);
Category.propTypes = {
  ticket: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  ticket: state.ticket
})

const mapActionToProps = ({
  setCategory
})

//export default Category
export default connect(mapStateToProps, mapActionToProps)(Category)