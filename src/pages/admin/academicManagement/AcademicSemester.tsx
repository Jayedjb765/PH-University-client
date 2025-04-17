import { useGetAllSemestersQuery } from "@/redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return <div>This is Academic semester component</div>;
};

export default AcademicSemester;
