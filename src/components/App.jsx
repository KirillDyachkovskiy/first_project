import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

import { Messenger } from "./pages/Messenger";
import { Notfound } from "./pages/Notfound";
import { Profile } from "./pages/Profile";


const App = (props) => {
  const { state, dispatch } = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout state={state.ui} />} >
          <Route index element={<Profile state={state.pages.profile} dispatch={dispatch} />} />
          <Route path="messenger/*" element={<Messenger state={state.pages.messenger} dispatch={dispatch} />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };