import {useEffect, useState} from "react";

export const useIntersectionObserver = (opts) => {

    const { parentRef, childRef } = opts

    const options = {
        root: parentRef.current,
        rootMargin: '0px',
        threshold: .5,
    }

    const [intersected, setIntersected] = useState(false)

    useEffect(() => {
        const intersectionObserverInstance = createIntersectionObserver()
        return () => {
            try {
                intersectionObserverInstance.unobserve(childRef.current)
            } catch (e) {

            }
        }
    }, [parentRef, childRef])

    function createIntersectionObserver() {
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIntersected(entry.isIntersecting)
            })
        }, options)
        intersectionObserver.observe(childRef.current)
        return intersectionObserver
    }

    return intersected

}
