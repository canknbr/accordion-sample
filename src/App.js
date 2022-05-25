import { useState } from 'react';
import Question from './Question';
import data from './data';
function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <section className="info">
          {question.map(item => {
            return <Question key={item.id} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
