import COURSES from "../../data/testData";
import { ADD_TO_CART,REMOVE_COURSE_CART } from "../constants";

const initialState = {
    existingCourses: COURSES
}

const reducerCourses = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART: 
            const indexCourseToModify = state.existingCourses.findIndex(course => course.id === action.course.id);

           const copyExistingCourses = [...state.existingCourses];

           // selected qui se trouve dans testdata
           copyExistingCourses[indexCourseToModify].selected = true;

           return {
            ...state,
            existingCourses: copyExistingCourses
           }


           case REMOVE_COURSE_CART: 
                const indexCourseToDeleteFromCart = state.existingCourses.findIndex(course => course.id === action.prodId);
                const copyExistingCoursesRemove= [...state.existingCourses]
                copyExistingCoursesRemove[indexCourseToDeleteFromCart].selected =false;
            return {
                ...state,
                existingCourses: copyExistingCoursesRemove
                }
            

        default: 
            return state;
    }

    return state
}


export default reducerCourses;