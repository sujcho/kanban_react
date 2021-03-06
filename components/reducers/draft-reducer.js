import Immutable from 'immutable';

import { OPEN_DRAFT, UPDATE_DRAFT, CLOSE_DRAFT } from '../actions/draft-actions';

function createInitialState() {
    const DraftRecord = Immutable.Record({
        id: '',
        title: '',
        description: '',
        status: 'todo'
    });
    
    const DraftStateRecord = Immutable.Record({
        show: false,
        draft: new DraftRecord()
    });
    
    return new DraftStateRecord();
}

export function reduce(state = createInitialState(), action) {
    switch(action.type) {
        case OPEN_DRAFT:
            const cardObj = action.payload;
            let DraftRecord;
            
            if (cardObj) {
                DraftRecord = Immutable.Record(cardObj);
            }
            else{
                DraftRecord = Immutable.Record({
                    id: '',
                    title: '',
                    description: '',
                    status: 'todo'
                });
            }
            
            const DraftStateRecord = Immutable.Record({
                show: true,
                draft: new DraftRecord()
            });
                
            return new DraftStateRecord();
        case CLOSE_DRAFT:
            return createInitialState();
            
        case UPDATE_DRAFT:
            const field = action.payload.field;
            const value = action.payload.value;
            
            return state.setIn(['draft', field], value);
            
        default:
            return state;
    }
}