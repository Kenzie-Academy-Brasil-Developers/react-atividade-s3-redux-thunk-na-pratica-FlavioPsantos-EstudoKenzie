import { useSelector } from "react-redux";

const UserRender = () => {
    const { user } = useSelector(state => state)
    return (

        <div>
            {
                user.comments.map(
                    item =>
                        <p>{item}</p>
                )
            }
        </div>

    )
}
export default UserRender;