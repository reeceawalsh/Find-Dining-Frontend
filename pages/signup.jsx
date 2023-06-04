import { useRouter } from "next/router";
import { useUser } from "@component/lib/authContext";
import { useEffect } from "react";
import Register from "@component/components/Register";

export default function RegisterPage() {
    const router = useRouter();
    const { user, loading } = useUser();

    useEffect(() => {
        // Redirect logged-in users to the homepage
        if (user) {
            router.push("/home");
        }
    }, [user, router]);
    return (
        <div>
            <Register />
        </div>
    );
}
