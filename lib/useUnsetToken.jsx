import { useCookies } from "react-cookie";

const useUnsetToken = () => {
    const [_, removeCookie] = useCookies(["jwt", "username", "id"]);
    const unsetToken = () => {
        removeCookie("jwt", { path: "/" });
        removeCookie("username", { path: "/" });
        removeCookie("id", { path: "/" });
        removeCookie("email", { path: "/" });
        removeCookie("orcidAccount", { path: "/" });
    };

    return unsetToken;
};

export default useUnsetToken;
