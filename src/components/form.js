import React from 'react';

class Form extends React.Component {
    render() {
        return(
            <div className="form__container">
                <form onSubmit = {this.props.weatherMethod}>
                    <input className="form__input" type="text" name="city" placeholder="Enter town name"></input>
                    <button className="form__button">Search weather</button>
                </form>
            </div>
        );
    }
}

export default Form;