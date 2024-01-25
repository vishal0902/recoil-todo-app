import {atom, selector} from 'recoil'

export const todoAtom = atom({
    key: "todoAtom",
    default: []
})

export const filterTextAtom = atom({
    key: "filterTextAtom",
    default:  ""
})

export const filterSelector = selector({
    key: "filterSelector",
    get: ({get})=>{
        const searchText = get(filterTextAtom)
        const todos = get(todoAtom)
        if(searchText)
        {
            return todos.filter((todo)=>todo.title.includes(searchText)||todo.description.includes(searchText)) 
        } else {
            return []
        }
    }
})