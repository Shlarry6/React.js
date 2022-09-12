import './App.css';
import Header from './components/UI/Header';
import GoalItem from './components/Goals/GoalItem';
import './components/Goals/GoalList.css';

const goals = [
  {
    title: "Teach React in a highly-understandable way",
    description: "I want to ensure, that you get the most out of this book and you learn all about React!"
  },
  {
    title: "Allow you to practice what you learned",
    description: "Reading and learning is fun and helpful but you only master a topic, if you really work with it! That's why I want to prepare many excercises that allow you to practice what you learned."
  },
  {
    title: "Motivate you to continue learning",
    description: "As a developer, learning never ends. I want to ensure that you enjoy learning and you're motivated to dive into advanced (React) resources after finishing this book. Maybe my complete React video courses?"
  }
];


function App() {
  return (
    <div>
      <Header />
      <div className="list">
        {goals.map((goal) => {
          return <GoalItem value={goal}/>
        })}
      </div>
    </div>
  );
}

export default App;
