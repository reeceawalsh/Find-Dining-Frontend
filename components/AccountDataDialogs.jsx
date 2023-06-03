import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import useDeleteAccount from "@component/lib/useDeleteAccount";
import { useUser } from "@component/lib/authContext";
import styles from "./styles/accountDataDialogs.module.css";
import useAddToFavourites from "@component/lib/useAddToFavourites";
import useAddToHistory from "@component/lib/useAddToHistory";

const AccountDataDialogs = () => {
    const { user, logout } = useUser();
    const [openSavedData, setOpenSavedData] = useState(false);
    const [openAccount, setOpenAccount] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    // toggles the save data modal open and closed.
    const handleToggleSavedDataModal = () => {
        setOpenSavedData(!openSavedData);
    };

    // toggles the delete account modal open and closed.
    const handleToggleAccountModal = () => {
        setOpenAccount(!openAccount);
    };

    // handles deleting all saved data.
    const useHandleDeleteAllSavedData = (e) => {
        e.preventDefault();
        handleToggleSavedDataModal();
        console.log("Deleting all saved data");
        const favourites = [];
        useAddToFavourites(favourites, user.id);
        const history = [];
        useAddToHistory(history, user.id);
    };

    // handles deleting the users account.
    const useHandleDeleteAccount = (e) => {
        e.preventDefault();
        handleToggleAccountModal();
        const accessToken = user.jwt;
        useDeleteAccount(user.id, accessToken, logout);
        console.log("Deleting account");
    };

    return (
        <div className="container">
            <div className="info-section-container">
                <Button
                    className={styles.deleteButton}
                    variant="outlined"
                    onClick={handleToggleSavedDataModal}
                >
                    Delete all saved data
                </Button>
                <Button
                    className={styles.deleteButtonBold}
                    variant="outlined"
                    onClick={handleToggleAccountModal}
                >
                    Delete account
                </Button>
            </div>

            <Dialog
                fullScreen={fullScreen}
                open={openSavedData}
                onClose={handleToggleSavedDataModal}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete all your saved data?
                        <br></br>(This will include your history and
                        favourites.)
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={(e) => {
                            useHandleDeleteAllSavedData(e);
                        }}
                    >
                        Yes
                    </Button>
                    <Button onClick={handleToggleSavedDataModal} autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                fullScreen={fullScreen}
                open={openAccount}
                onClose={handleToggleAccountModal}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete your account?
                        <br></br>It is unrecoverable.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={(e) => {
                            useHandleDeleteAccount(e);
                        }}
                    >
                        Yes
                    </Button>
                    <Button onClick={handleToggleAccountModal} autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AccountDataDialogs;
