const UPDATE_NEW_POST = "UPDATE-NEW-POST";
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST, text, });

const ADD_POST = "ADD-POST";
export const addPost = () => ({ type: ADD_POST });

const initialState = {
    posts: [
        { id: 0, likes: Math.ceil(Math.random() * 100), text: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл" },
        { id: 1, likes: Math.ceil(Math.random() * 100), text: "Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн" },
        { id: 2, likes: Math.ceil(Math.random() * 100), text: "Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский" },
        { id: 3, likes: Math.ceil(Math.random() * 100), text: "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан" },
    ],
    newPostText: "",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST:
            state.newPostText = action.text;
            return state;
        case ADD_POST:
            state.posts.push({ id: state.posts.length, likes: Math.ceil(Math.random() * 100), text: state.newPostText, });
            state.newPostText = "";
            return state;
        default:
            return state;
    }
}