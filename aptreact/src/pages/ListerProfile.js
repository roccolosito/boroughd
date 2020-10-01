import React from "react";
import "../components/ListerProfile/ListerProfile.css";
import Lister from "../components/ListerProfile/Lister";
import Upload from "../components/ListerProfile/Upload";
import Manage from "../components/ListerProfile/Manage";

function ListerProfile() {
    return (
        // This is the main page to show components: LISTER to show the user their profile, UPLOAD for user to make posts, and MANAGE to update or delete an existing post
        <div>
            <Lister/>
            <Upload/>
            <Manage/>
        </div>
    )
}

export default ListerProfile;