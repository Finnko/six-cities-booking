import React, {PureComponent} from 'react';

const withForm = (Component) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: null,
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
      this.handleDefault = this.handleDefault.bind(this);
    }

    handleRatingChange(evt) {
      this.setState({
        rating: parseInt(evt.target.value, 10)
      });
    }

    handleCommentChange(evt) {
      this.setState({
        comment: evt.target.value
      });
    }

    handleFormReset() {
      this.setState({
        comment: ``,
        rating: null
      });
    }

    render() {
      const {comment, rating} = this.state;

      return (
        <Component
          {...this.props}
          comment={comment}
          rating={rating}
          onRatingChange={this.handleRatingChange}
          onCommentChange={this.handleCommentChange}
          onFormReset={this.handleFormReset}
        />
      );
    }
  }

  return WithForm;
};

export default withForm;
