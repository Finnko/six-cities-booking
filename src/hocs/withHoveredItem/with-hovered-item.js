import React from 'react';

const withHoveredItem = (Component) => (
  class WithHoveredItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        hoveredItem: null
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(data) {
      this.setState({
        hoveredItem: data
      });
    }

    handleMouseLeave() {
      this.setState({
        hoveredItem: null
      });
    }

    render() {
      return (
        <Component {...this.props} hoveredItem={this.state.hoveredItem} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
      );
    }
  }
);

export default withHoveredItem;
