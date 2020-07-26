import {initialTodoState} from "../states/todoState";
import {ProjectActionTypes} from "../actions/projectAction";
import {TaskActionTypes} from "../actions/taskAction";

export default (state = initialTodoState, action) => {
    switch (action.type) {
        case ProjectActionTypes.selectedCategory:
            return Object.assign({}, state, {
                selectedCategory: action.category_id
            })
        case ProjectActionTypes.selectedProject:
            return Object.assign({}, state, {
                selectedProject: action.project_id
            })
        case ProjectActionTypes.addProject:
            return Object.assign({}, state, {
                projects: [
                    ...state.projects,
                    action.project
                ]
            })
        case TaskActionTypes.addTask:
            return Object.assign({}, state, {
                tasks: [
                    ...state.tasks,
                    action.task
                ]
            })
        case TaskActionTypes.closedTask:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    return task.id !== action.task_id ?
                        task :
                        Object.assign({}, task, {status: !task.status});
                })
            };
        default:
            return state
    }
}