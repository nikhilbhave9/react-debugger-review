import { useContext } from "react";

function Context () {

    const website = useContext(WebsiteContext);

    return (
        <div>
            Hi, this is a {website} website.
        </div>
    );  
}

export default Context;