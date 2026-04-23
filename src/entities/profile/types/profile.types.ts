export interface GivenGrades {
  id: number;
  grade: number;
  userId: number;
  course: {
    id: number;
    title: string;
    description: string;
    courseText: string;
    price: number;
    tags: [string];
    rating: number;
    authorId: number;
  };
}

export interface PurchasedCourses {
  id: number;
  title: string;
  description: string;
  courseText: string;
  price: number;
  tags: [string];
  rating: number;
  authorId: number;
}

export interface ProfileBalance {
  id: number;
  userId: number;
  coins: number;
}

export interface ProfileResponse {
  id: number;
  username: string;
  email: string;
  balance: ProfileBalance;
  purchasedCourses: PurchasedCourses[];
  countOfPurchasedCourses: number;
  givenGrades: GivenGrades[];
  countOfGivenGrades: number;
}
