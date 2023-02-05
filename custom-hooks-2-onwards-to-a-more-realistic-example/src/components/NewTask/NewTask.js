import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-fetch";

const NewTask = (props) => {
  const applyResponse = (data, body) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, ...body };

    props.onAddTask(createdTask);
  };
  const { isLoading, error, httpRequest } = useHttp(applyResponse);

  const enterTaskHandler = async (taskText) => {
    const httpConfig = {
      url: "https://reactjs-sandbox-7ff49-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      method: "POST",
      body: { text: taskText },
      headers: {
        "Content-Type": "application/json",
      },
    };
    httpRequest(httpConfig);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
