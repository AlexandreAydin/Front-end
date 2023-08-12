import COURSES from "../../data/testData";
import CourseModel from "../../data/CourseModel";
import { createCourse } from "../actions/ActionCreateCourse";
import {
            ADD_TO_CART,
            REMOVE_COURSE_CART,
            DELETE_COURSE ,
            EDIT_COURSE,
            CREATE_COURSE
        } from "../constants";


const initialState = {
    existingCourses: COURSES,
    loggedInmemberCourses: COURSES.filter(course => course.instructorId ==="1")

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
            existingCourses: copyExistingCourses,
            loggedInmemberCourses: state.loggedInmemberCourses
           }


        case REMOVE_COURSE_CART: 
            const indexCourseToDeleteFromCart = state.existingCourses.findIndex(course => course.id === action.prodId);
            const copyExistingCoursesRemove= [...state.existingCourses]
            copyExistingCoursesRemove[indexCourseToDeleteFromCart].selected =false;

            return {
                ...state,
                existingCourses: copyExistingCoursesRemove,
                loggedInmemberCourses: state.loggedInmemberCourses
                }
            
        case DELETE_COURSE : 
                return {
                    ...state,
                    existingCourses:state.existingCourses.filter(course => course.id != action.courseId),
                    loggedInmemberCourses: state.loggedInmemberCourses.filter(course => course.id != action.courseId)
                }
        
        case EDIT_COURSE: 
                const idCourse = action.courseId;
                const indexCourseToUptade =  state.loggedInmemberCourses.findIndex (course => course.id === idCourse );

                new CourseModel(
                    idCourse, 
                    action.updatedCourse.title,
                    action.updatedCourse.descrion,
                    action.updatedCourse.image,
                    state.loggedInmemberCourses[indexCourseToUptade].price,
                    state.loggedInmemberCourses[indexCourseToUptade].selected,
                    state.loggedInmemberCourses[indexCourseToUptade].instructorId,
                )

                const newloggedInmemberCourses = [...state.loggedInmemberCourses];
                newloggedInmemberCourses[indexCourseToUptade] = updatedCourse

                const indexExistingCourses = state.existingCourses.findIndex(course =>course.id === idCourse)
                const newExistingCourses = [...state.existingCourses];
                newExistingCourses [indexExistingCourses]= updatedCourse

                return {
                    ...state,
                    existingCourses:newExistingCourses,
                    loggedInmemberCourses:newloggedInmemberCourses  
                }
        
        case CREATE_COURSE: 
                const newCourse =   new CourseModel(
                    Date.now().toString(),
                    action.newCourse.title,
                    action.newCourse.description,
                    action.newCourse.timage,
                    action.newCourse.price,
                    false,
                    "1"
                );

                return {
                    ...state,
                    existingCourses: state.existingCourses.concat(newCourse),
                    loggedInmemberCourses: state.loggedInmemberCourses.concat(newCourse) 
                }


        default: 
            return state;
    }

    return state
}


export default reducerCourses;