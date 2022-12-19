import { Review } from "../models/review.model";
import { Model } from "mongoose";

export class ReviewRepository {
  constructor(private readonly reviewModel: Model<Review>) {}

  async getAll(): Promise<Review[]> {
    const reviews = await this.reviewModel.find();

    return reviews;
  }

  async getById(id: string): Promise<Review> {
    const review = await this.reviewModel.findById(id);

    if (review === null) {
      return {} as Review;
    }

    return review;
  }

  async create(review: Review): Promise<Review> {
    const newReview = this.reviewModel.create(review);
    return newReview;
  }

  async update(id: string, review: Review): Promise<Review> {
    const {dataEdicao, resenha} = review
    const updatedReview = await this.reviewModel.findByIdAndUpdate(id, {
      $push: { resenha: resenha, dataEdicao: dataEdicao }
    }, {
      new: true,
    });

    if (updatedReview === null) {
      return {} as Review;
    }

    return updatedReview;
  }

}
