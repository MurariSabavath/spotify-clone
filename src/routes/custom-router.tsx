import { useLayoutEffect, useState } from 'react';
import { HistoryRouterProps, Router } from 'react-router-dom';

const CustomRouter = ({ history, ...props }: HistoryRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default CustomRouter;
