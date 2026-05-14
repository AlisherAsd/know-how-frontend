import { useCourseById, usePayCourse } from "@/entities/courses/composables/useCourses";
import { useScrollTop } from "@/shared/hooks/useScrollTop";
import { useNavigate, useParams } from "react-router-dom";

export const useCoursePage = () => {
  useScrollTop();
  const { id } = useParams();
  const navigate = useNavigate();
  const courseId = Number(id);
  const { data: course } = useCourseById(Number.isFinite(courseId) ? courseId : undefined);
  const { mutateAsync: payCourse, isPending: isPayPending } = usePayCourse();

  async function handlePayCourse() {
    if (!course) return;
    await payCourse({ id: course?.id });
    navigate(`/courses/${course?.id}/lesson/1`);
  }

  return {
    course,
    handlePayCourse,
    isPayPending,
  };
};
