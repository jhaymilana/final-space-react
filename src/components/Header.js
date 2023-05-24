import { Component } from 'react';

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <header>
        <div className='container flexbox'>
          <h1>{title}</h1>
        </div>
      </header>
    )
  }
}

export default Header;