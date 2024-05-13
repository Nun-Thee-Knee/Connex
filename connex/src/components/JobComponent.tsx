

type JobComponent = {
    name: string,
    jobRoles: string[],
    description: string,
    salary: string,
    date: Date
}

const JobComponent = ({name, jobRoles, description, salary, date}:JobComponent) => {
  return (
    <div className="h-auto w-96 cursor-pointer border-[1px] border-lime-500 p-5 hover:scale-95 rounded-xl">
      <center className="flex flex-col gap-4">
      <h1 className="font-bold uppercase text-xl text-pink-500 underline">{name}</h1>
      <h1 className="font-bold">Job Roles: {jobRoles.map((item)=>{return <>{item}, </>})}</h1>
      <p className="text-indigo-200">{description}</p>
      <h1 className="font-bold text-purple-500">Salary: Rs.{salary}/month</h1>
      <h1 className="text-zinc-700">{JSON.stringify(date).slice(1,11)}</h1>
      </center>
    </div>
  );
};

export default JobComponent;
