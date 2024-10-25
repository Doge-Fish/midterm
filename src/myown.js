import "./styles.css";
import Box1 from "./tbutton";

export default function myown(){
    return(
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
            }}
        >
            <Box1 />   
        </div>
    )
}