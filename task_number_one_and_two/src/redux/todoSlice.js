import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo-app',
    initialState: {
        todoList: [],
        isToggle: {
            textToggle: [],
            isCancel: false,
            idToggle: null
        },
        filter: {
            foundusString: ''
        }
    },
    reducers: {
        add: (state, action) => {
            let isCoincidence = false;
            let newState = [];

            state.todoList.forEach(el => {
                if (el.id === state.isToggle.idToggle) {
                    isCoincidence = true
                }
            });

            if (isCoincidence) {
                newState = state.todoList.map(el => {
                    if (el.id === state.isToggle.idToggle) {
                        return {...el, text: `${action.payload.name} ${action.payload.price}`}
                    } 
                    return el
                });
                isCoincidence = false;
                state.isToggle.idToggle = null
            } else {
                newState = [...state.todoList, 
                    {
                        id: state.todoList.length,
                        text: `${action.payload.name} ${action.payload.price}`
                    }
                ];
                isCoincidence = false;
                state.isToggle.idToggle = null
            }
            state.todoList = [...newState];
            state.isToggle.isCancel = false;
        },
        remove: (state, action) => {
            state.todoList = state.todoList.filter((item) => item.id !== action.payload)
        },
        toggle: (state, action) => {
            const rootState = state.isToggle; //Для визуальной красоты кода
            const rootPayload = action.payload; //Для визуальной красоты кода

            rootState.isCancel = rootPayload.isCancel === false ? rootPayload.isCancel : true; // контроллер за кнопкой "CANCEL"
            rootState.idToggle = rootPayload.id; // id изменяемого элемента
            rootState.textToggle = state.todoList.filter((item) => item.id === rootPayload.id) // передаю объект для изменения
        },
        filter: (state, action) => {
            state.filter.foundusString = action.payload; 
        }
    }
});

// В каких-то моментах код является чуть-чуть "костыльным", но, думаю, имеет право на жизнь. 

export const { add, remove, toggle, filter } = todoSlice.actions;

export default todoSlice.reducer;