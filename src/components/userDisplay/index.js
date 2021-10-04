import { addCommentThunk } from '../../store/modules/user/thunks'
import { useDispatch } from "react-redux";
import { useState } from 'react';

const UserDisplay = () => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState();
  

    return (
        <div>
            <input
            type='text'
            placeholder='Digite um comentário'
            onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={() => dispatch(addCommentThunk(comment))}>
            New comment
            </button>
           
        </div>
       
    )
}
export default UserDisplay;