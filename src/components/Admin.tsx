import { useAppSelector } from "../app/hooks";
import { useAppDispatch } from "../app/hooks";

const IsAdmin = () => {
    return useAppSelector(state => state.isAdmin);
}

export default function Admin(props: any) {
    const dispatch = useAppDispatch();
    console.log(IsAdmin());
    dispatch({ type: 'SET_IS_ADMIN' });
    console.log(IsAdmin());
    return (
        <p>Hola!</p>
    );
}