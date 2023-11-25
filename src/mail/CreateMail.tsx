import {FC} from "react";
import {Button, Input} from "@mui/joy";

export const CreateMail: FC = () => {
    return (
        <>
            <Input placeholder={"receiver"}/>
            <Button>Send</Button>
        </>
    )
}
