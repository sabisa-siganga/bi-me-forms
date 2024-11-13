import { useEffect, useState } from "react";
import { AppStyled } from "./AppStyled";
import RenderForms from "./components/RenderForms/RenderForms";
import { QuestionDataInterface } from "./interface/question";
import QuestionList from "../questions.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<QuestionDataInterface[]>([]);

  function fakeRequest() {
    setTimeout(() => {
      const results =
        QuestionList.questions as never as QuestionDataInterface[];

      setData(results);

      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setLoading(true);
    fakeRequest();
  }, []);

  return (
    <AppStyled>
      <h1>Forms</h1>
      {!loading && <RenderForms questions={data} />}

      {loading && <h2>Fetching data...</h2>}
    </AppStyled>
  );
}

export default App;
