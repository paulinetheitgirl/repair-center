import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIssue } from '../actionsAndReducers/ticket';
import PropTypes from 'prop-types';

const Issue = ({ ticket, setIssue }) => (
  <form>
    <p>{JSON.stringify(ticket)}</p>
    <textarea rows="3" value={ticket.issue} onChange={(event) => setIssue(event.target.value)}></textarea>
  </form>
);
Issue.propTypes = {
  ticket: PropTypes.object.isRequired,
  setIssue: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  ticket: state.ticket
})

const mapActionToProps = ({
  setIssue
})

//export default Category
export default connect(mapStateToProps, mapActionToProps)(Issue)