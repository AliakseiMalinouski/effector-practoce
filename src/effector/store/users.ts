import { createStore, createEffect, createEvent } from "effector";

interface UserI {
    id: number,
    name: string,
    email: string,
}



export interface UserStoreI {
    users: UserI[];
}

export const getAllUsers = createEffect(async() => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/2edbe50135cae4c280d41f6dbf79593b/raw/51271ffbaedca7cbde25279a77a5cb6bbfd7ec4a/EffectorUsersPractice");
        if(response.ok) {
            const data = await response.json();
            return data;
        }
        else alert('Error with download');
    } 
    catch(error) {
        console.log(error);
    }
});

export const changeUsersState = createEvent<UserStoreI>();

export const $users = createStore<UserStoreI>({
    users: []
}).on(getAllUsers.doneData, (_, users) => {
    console.log(users)
});



// $users.on(changeUsersState, (state, users) => users);

