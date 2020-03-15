import React from 'react';

const withActiveFlag = (Component) => {
  class WithActiveFlag extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isActive: false
      };
      this._handleActiveChange = this._handleActiveChange.bind(this);
    }

    _handleActiveChange() {
      this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    render() {
      return <Component {...this.props} isActive={this.state.isActive} onActiveChange={this._handleActiveChange} />;
    }
  }

  WithActiveFlag.propTypes = {};

  return WithActiveFlag;
};

export default withActiveFlag;
