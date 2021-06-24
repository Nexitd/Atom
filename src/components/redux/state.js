import {rerenderEntireTree} from '../../render'

let state = {
    profilePage: {
        postData: [
            {
                id: 1,
                message: 'Hi, how are you?',
                likesCount: 12
            },
            {
                id: 2,
                message: 'It is my first post',
                likesCount: 23
            }
        ],
        newPostText: 'it-kamasutra.com'

    },

    dialogsPage: {
        dialogsData: [
            {
                id: 1,
                name: 'Anna'
            },
            {
                id: 2,
                name: 'Nikita'
            },
            {
                id: 3,
                name: 'Andrey'
            },
            {
                id: 4,
                name: 'Ded'
            }
        ],


        messagesData: [
            {
                id: 1,
                message: 'Hi'
            },
            {
                id: 2,
                message: 'Hi hi'
            },
            {
                id: 3,
                message: 'How are you?'
            },
            {
                id: 4,
                message: 'Y0'
            }
        ]
    },

    sidebar: {
        friendsInfo: [
            {
                name: "Test"
            },
            {
                name: "Super Test"
            },
            {
                name: "TEsT"
            }
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 21
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;