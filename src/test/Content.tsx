import {MainButton, useShowPopup} from "@vkruglikov/react-telegram-web-app";

export const Content = () => {
    const showPopup = useShowPopup();

    const handleClick = () =>
        showPopup({
            message: "This is test popup"
        });

    return (
        <MainButton text={"Show popup"} onClick={handleClick}/>
    );
}
