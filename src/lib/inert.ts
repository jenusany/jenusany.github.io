/** React 18 doesn't type `inert`, but passes it through to the DOM as a string attribute. */
export const inertProps = (on: boolean) => (on ? ({ inert: "" } as object) : {});
