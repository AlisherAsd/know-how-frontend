export interface CoursesResponseItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CoursesCreateData {
  title: string
  description: string
  courseText: string
  tags: string[]
}