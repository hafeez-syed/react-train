import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';
import { capitalize } from '../utils/helpers';
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o';

class App extends Component {
  // this method is not doing enough, it is here just for understanding
  doThing = () => {
    this.props.selectRecipe({})
  };
  render() {
      console.log('Props', this.props);
    const { calendar, remove} = this.props;
    const mealOrder = ['breakfast', 'lunch', 'dinner'];
    return (
      <div className='container'>
          <ul className='meal-types'>
              {mealOrder.map((mealType) => (
                  <li key={mealType} className='subheader'>
                      {capitalize(mealType)}
                  </li>
              ))}
          </ul>
      </div>
    );
  }
}

function mapStateToProp ({calendar, food}) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    return {
        calendar: dayOrder.map((day) => ({
            day,
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null;
                
                return meals;
            }, {})
        }))
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectRecipe: (data) => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalendar(data))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(App);
