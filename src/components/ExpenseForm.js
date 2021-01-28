import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import numeral from 'numeral';

export class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense
        ? numeral(props.expense.amount / 100)
            .format('0,0.00')
            .toString()
        : '',
      createAt: props.expense ? moment(props.expense.createAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createAt) => {
    if (createAt) {
      this.setState(() => ({ createAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
      // set error state equal to 'Please provide description and amount'
    } else {
      // clear error state
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createAt: this.state.createAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input
          className='text-input'
          type='text'
          value={this.state.description}
          onChange={this.onDescriptionChange}
          placeholder='description'
          autoFocus
        />
        <input
          className='text-input'
          type='text'
          value={this.state.amount}
          onChange={this.onAmountChange}
          placeholder='amount'
        />
        <SingleDatePicker
          date={this.state.createAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className='textarea'
          onChange={this.onNoteChange}
          value={this.state.note}
          placeholder='put a expense note (optional)'
        ></textarea>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
