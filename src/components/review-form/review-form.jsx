import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
  }

  render() {
    const {rating, comment} = this.props;
    return <form className={`reviews__form form${loadingStatus === LoadingStatus.FAILED ? ` reviews__form--error` : ``}`}
                 action="#"
                 method="post"
                 onSubmit={this.handleReviewSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={onCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{``}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{` `}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!rating || loadingStatus === LoadingStatus.DISABLED || (comment.length < 50 || comment.length > 300)}
        >
          Submit
        </button>
      </div>
    </form>;
  }
}


export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
