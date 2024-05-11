'use client'
type jobType = {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    workRoles: string[],
    work: string,
    createdById: string,
    stipend: string,
    Applications: string[]
}


const Jobs = ({jobList}:{jobList:jobType[]}) => {
  return <div>Jobs</div>;
};

export default Jobs;
