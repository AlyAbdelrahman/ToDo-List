export default (state, action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            console.log(state)
            return {
                ...state, data: [...state.data, action.data]
                //         text:action.data.Text,
                // completed:false,
                // deleted:false 
            };
        case 'COMPLETE_TO_DO':
            let CompletedArray = [];
            CompletedArray = state.data.slice();

            const matchedIdElement = CompletedArray.find((item) => item.id === action.data);
            // console.log(matchedIdElement);
            matchedIdElement.completed = true;

            // console.log(CompletedArray)

            return { ...state, data: CompletedArray };

        case 'DELETED_TO_DO':
            let DeletedArray = state.data.slice();

            const matchedDeletedIdElement = DeletedArray.find((item) => item.id === action.data);
            // console.localStorage()
            matchedDeletedIdElement.deleted = true;
            console.log(CompletedArray);

            // console.log(CompletedArray)

            return { ...state, data: DeletedArray };


             case 'REDO_TO_DO':
             let ReDoArray = state.data.slice();
             const matchedRedoIdElement = ReDoArray.find((item) => item.id === action.data);
             matchedRedoIdElement.completed = false;
            //  console.log(CompletedArray);
 
             // console.log(CompletedArray)
 
             return { ...state, data: ReDoArray };
             case 'RECYCLE_TO_DO':
             let RecyleArray = state.data.slice();
             const matchedRecycledoIdElement = RecyleArray.find((item) => item.id === action.data);
             matchedRecycledoIdElement.deleted = false;
            //  console.log(CompletedArray);
 
             // console.log(CompletedArray)
 
             return { ...state, data: RecyleArray };


        default:
            return state;
    }
};
