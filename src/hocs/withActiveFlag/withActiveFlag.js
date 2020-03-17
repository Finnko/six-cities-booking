import React from 'react';

const withActiveFlag = (Component) => {
  class WithActiveFlag extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isActive: false
      };

      this.handleActiveChange = this.handleActiveChange.bind(this);
    }

    handleActiveChange() {
      this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    render() {
      return <Component {...this.props} isActive={this.state.isActive} onActiveChange={this.handleActiveChange} />;
    }
  }

  WithActiveFlag.propTypes = {};

  return WithActiveFlag;
};

export default withActiveFlag;
