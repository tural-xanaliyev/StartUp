import React from "react";
import { Collapse } from "@chakra-ui/react";
import { BiChevronUp, BiChevronDown } from 'react-icons'
const toogle = [
    {
        id: 1,
        title: "Is my technology allowed on tech?",
        content:
            "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable",
    },
    {
        id: 2,
        title: "Is my technology allowed on tech?",
        content:
            "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable",
    },
    {
        id: 3,
        title: "Is my technology allowed on tech?",
        content:
            "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable",
    },
    {
        id: 4,
        title: "Is my technology allowed on tech?",
        content:
            "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable",
    },
];

const HomeTogle = () => {

    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
    const rendered = toogle.map(item => {
        return (
            <>
                <div>
                    <h5>{item.title}</h5>
                    <button variantColor="blue" onClick={handleToggle}>
                        <BiChevronUp />
                    </button>
                </div>
                <Collapse mt={4} isOpen={show}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </Collapse>
            </>
        )
    })
    return <div>

    </div>;
};

export default HomeTogle;
