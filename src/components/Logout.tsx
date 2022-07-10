import { useAppDispatch } from "../app/hooks";

export default function Logout() {
    const dispatch = useAppDispatch();
    dispatch({ type: "UNSET_ADMIN" });
    return <div className="full-screen center-screen common-background-color">
        {setTimeout(() => {
            window.parent.location.href = "/";
        }, 1)}

    </div>;
}