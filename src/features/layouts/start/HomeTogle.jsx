import React from "react";
import styles from './home.module.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from "@chakra-ui/react";
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
    const rendered = toogle.map((item) => {
        return (
            <>
                <AccordionItem key={`item:${item.id}`}>
                    <h5>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                                {item.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h5>
                    <div className={styles.accordion_content}><AccordionPanel pb={4} marginTop='-25px'>{item.content}</AccordionPanel></div>
                </AccordionItem>
            </>
        );
    });
    return (
        <div>
            <Accordion allowToggle>{rendered}</Accordion>
        </div>
    );
};

export default HomeTogle;
