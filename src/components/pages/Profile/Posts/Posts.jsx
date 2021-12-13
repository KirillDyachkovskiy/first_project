import c from "./Posts.module.scss";

import { Title } from "./Title";
import { SubmitPost } from "./SubmitPost";
import { Wall } from "./Wall";

const Posts = (props) => {
    const { state, dispatch } = props;
    return (
        <section className={c.posts}>
            <SubmitPost profile={state} dispatch={dispatch} />
            <Title />
            <Wall posts={state.posts} />
        </section>
    );
}

export { Posts };