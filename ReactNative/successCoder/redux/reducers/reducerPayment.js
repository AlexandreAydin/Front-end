import { ADD_PAYMENT } from "../constants";
import PaymentModel from "../../data/PaymentModel";
import moment from 'moment';

const initialState = {
    payment: []
}

const reducerPayment = (state= initialState,action) => {
    switch(action.type){

        case ADD_PAYMENT: 
            const newPayment = new PaymentModel(
                Date.now().toString(),
                action.orderInfos.course,
                action.orderInfos.total,
                moment(new Date()).format('DD MM YYYY hh:mm')

            );

            return{
                ...state,
                payment:state.payment.concat(newPayment)
            }

        default: 
            return state;
    }
}

export default reducerPayment
