type SingleTaskProps = {
  task: string;
};

const SingleTask: React.FC<SingleTaskProps> = ({ task }) => {
  return (
    <>
      <div className="flex gap-5 task">
        {/* <label htmlFor="completed"></label>
        <input type="checkbox" name="completed" id="" />
        <label htmlFor="Task"></label>
        <input type="text" name="Task" id="" /> */}
        <p>{task}</p>
      </div>
    </>
  )
}

export default SingleTask;