import { useAppDispatch } from "../app/hooks";

export default function Logout(props: any) {
    const dispatch = useAppDispatch();
    dispatch({ type: "UNSET_ADMIN" });
    return <div className="full-screen center-screen common-background-color">
        {setTimeout(() => {
            window.location.href = "/";
        }, 10)}

    </div>;
}