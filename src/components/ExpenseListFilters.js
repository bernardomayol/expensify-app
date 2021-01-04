import React, {Component} from 'react'
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends Component {
  
    state = {
      focusedInput : null
    }

    onDatesChange = ({ startDate, endDate }) => {
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
    }

  render(){
    return (
      <div>
        <input type='text' value={this.props.filters.text} onChange={(e) =>{
          this.props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select value={this.props.filters.sortBy} onChange={(e) => {
          if (e.target.value === 'date')
          this.props.dispatch(sortByDate())
            else this.props.dispatch(sortByAmount())
        }}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
    showClearDates={true}
    isOutsideRange={() => false}
    numberOfMonths={1}
  />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}
export default connect(mapStateToProps)(ExpenseListFilters);
