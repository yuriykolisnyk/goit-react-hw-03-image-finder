import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
  };

  scroll = () => {
    this.props.onClick();
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 130,
        behavior: 'smooth',
      });
    }, 500);
  };

  render() {
    return (
      <button onClick={this.scroll} className="Button" type="button">
        Load more
      </button>
    );
  }
}

export default Button;
