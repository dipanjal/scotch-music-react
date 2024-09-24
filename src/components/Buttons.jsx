const isString = (value, errorMessage=null) => {
    const isStringType = (value instanceof String || typeof value === 'string')
    if (!isStringType) {
        const defaultMessage = `This Button expects TextValue only, got ${typeof value}`
        errorMessage = errorMessage || defaultMessage
        throw new Error(errorMessage);
    }
}

const metadata = {
    BUY_NOW_NAV: {
        href: "#",
        style: "buy",
        defaultText: "BUY NOW",
        validate: isString  // this button only supports string now
    },
    BUY_NOW_LARGE: {
        href: "#",
        style: "buy-cta",
        defaultText: "BUY NOW",
        validate: isString  // this button only supports string now
    }
}

function createButton(isNav, children) {
    const meta = isNav ? metadata.BUY_NOW_NAV : metadata.BUY_NOW_LARGE;

    if (children) {
        meta.validate(children)
    }

    const content = children || meta.defaultText;
    return <a href={meta.href} className={meta.style}>{content}</a>
}

function Button({ isNav=false, children }) {
    return createButton(isNav, children)
}

export default Button