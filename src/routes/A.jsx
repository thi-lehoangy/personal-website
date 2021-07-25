import React from "react";
import { TextHeading, Text } from "../components/letters/DisplayComps";

function A() {
    return (
        <div className="display" id={"display"}>
            <TextHeading heading="About Me" />
            <Text text="My name is Thi Le (pronounced like 'tea 🍵'), 
            and I am an incoming transfer student and a CS sophomore 
            at the University of North Carolina – Chapel Hill. " />
        </div>
    )
}

export default A;