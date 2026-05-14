export interface CoursesResponseItem {
  id: number;
  title: string;
  description: string;
  courseText: string;
  price: number;
  tags: string[];
  rating: number;
  authorId: number;
  username?: string;
  image?: string;
  reviews?: number;
}

export interface CoursesCreateData {
  title: string;
  description: string;
  courseText: string;
  tags: string[];
}

export interface CourseActionParams {
  id: number;
}
