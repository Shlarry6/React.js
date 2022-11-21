import { Fragment, useEffect } from "react";
import {
  useParams,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Commments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    <p className="centered">{error}</p>;
  }
  if (!loadedQuote.text) {
    return <p>No quote found...</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route
          path={`/quotes${params.quoteId}`}
          element={
            <div className="centered">
              <Link className="btn--flat" to={`/quotes${params.quoteId}/comments`}>
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path={`/quotes${params.quoteId}/comments`} element={<Commments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
