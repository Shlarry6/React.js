import Layout from "./components/Layout/Layout";
import CategoryList from "./components/Categories/CategoryList";

const App = () => {
  let content;

  switch (window.location.pathname) {
    case "/":
      content = <></>;
      break;
    case "/categories":
      content = (
        <>
          <CategoryList />
        </>
      );
      break;
    default:
      content = <div>The content you requested could not be found.</div>;
  }

  return <Layout>{content}</Layout>;
};

export default App;
