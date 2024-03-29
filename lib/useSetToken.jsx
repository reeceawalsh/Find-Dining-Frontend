import { useCookies } from "react-cookie";

const useSetToken = () => {
    const [_, setCookie] = useCookies(["jwt", "username", "id"]);
    console.log("setting token");
    const setToken = (data) => {
        console.log(data);
        setCookie("jwt", data.jwt, { path: "/" });
        setCookie("username", data.user.username, { path: "/" });
        setCookie("id", data.user.id, { path: "/" });
        setCookie("email", data.user.email, { path: "/" });
        setCookie("orcidAccount", data.user.orcid, { path: "/" });
    };

    return setToken;
};

export default useSetToken;
