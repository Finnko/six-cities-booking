interface IReview {
  id: number;
  comment: string;
  rating: number;
  date: string;
  user: {
    id: number;
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };

}

export { IReview };
