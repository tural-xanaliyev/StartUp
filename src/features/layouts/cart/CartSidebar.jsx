import React from "react";
import styles from "./card.module.css";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";

const CartSidebar = ({ isOpen, onClose }) => {
    return (
        <Drawer
            className={styles.card_sidebar}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size={"sm"}
        >
            <div className={styles.card_content}>
                <DrawerOverlay />
                <DrawerContent>
                    <div className={styles.cart}>
                        <div>
                            <div className={styles.cart_sidebar_header}>
                                <h3>Cart</h3>
                                <DrawerCloseButton
                                    className={styles.top_close_btn}
                                />
                            </div>
                            <DrawerBody>
                                <div className={styles.card_body}>
                                <p>No products in the cart.</p>
                                </div>
                            </DrawerBody>
                        </div>
                    </div>
                </DrawerContent>
            </div>
        </Drawer>
    );
};

export default CartSidebar;
