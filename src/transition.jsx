import { motion } from "framer-motion";

// Set to true to restore the page transition animations.
const ENABLE_PAGE_TRANSITIONS = false;

const transition = (OgComponent) => {
    if (!ENABLE_PAGE_TRANSITIONS) return OgComponent;

    const Transition = () => (
        <>
            <OgComponent />
            <motion.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
    Transition.displayName = `Transition(${OgComponent.displayName || OgComponent.name || "Component"})`;
    return Transition;
};

export default transition;
