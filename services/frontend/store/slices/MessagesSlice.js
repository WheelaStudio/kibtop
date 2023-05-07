import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: mockMessages(),
}


const MessagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        applingActive: (state, {payload}) => {
            for (let i=0;i<state.messages.length;i++){state.messages[i].isActiveChat = (payload===state.messages[i].id);}
        }
    }
});

export const messageReduser = MessagesSlice.reducer
export const { applingActive } = MessagesSlice.actions



function mockMessages(){
    let result = [];
    const date = new Date();
    for (let i = 0; i < 10; i++){

        result.push(
            {
                id: i,
                reciver: 'another',
                // time: date.toLocaleString().split(' ')[1],
                time: '22:22',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget convallis lacus. Aliquam eu vulputate nulla, vitae bibendum dui. Aliquam rhoncus vitae mi et vulputate. Praesent in finibus ipsum, id mollis turpis. ',
                readMessage: true, 
                unread_message_count: 100, 
                isActiveChat: false,
                sent: false, 
                read: false,
                
                user: {
                    is_verified: false, 
                    username: 'alsikdfgjh',
                    online:false,
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zqmibTnyLx7AWuDvvH80qTtPjBEdEk3DwzM9IDT2wA&s',
                },

            }
            );};

    result[0].readMessage=false;
    result[0].is_verified=true;
    // result[0].isActiveChat=true;

    result[1].readMessage=false;
    result[1].user.online=true;

    result[2].reciver='you';
    result[2].readMessage=false;
    result[2].unread_message_count=0;

    result[3].reciver='you';
    result[3].readMessage=true;
    result[3].unread_message_count=0;

    return result;
}