// Valid ["<section>", "</section>", "<div>", "</div"]

// Not Valid ["<a>", "<div>", "</a>", "</div"]

// write a function, that takes an array of html tags. Return true if they have valid order and snytax.

const isOpeningTag = (tag) => {
    return tag[1] !== "/";
};

const convertToOpeningTag = (closingTag) => {
    return closingTag[0] + closingTag.slice(2);
};

const isHtmlValid = (tags) => {
    const holder = [];

    for (const tag of tags) {
        if (isOpeningTag(tag)) {
            holder.push(tag);
        } else {
            const lastTag = holder.pop();
            const openingTag = convertToOpeningTag(tag);

            if (lastTag !== openingTag) {
                return false;
            }
        }
    }
    return holder.length === 0;
};

console.log(isHtmlValid(["<section>", "</section>", "<div>", "</div"]));
console.log(isHtmlValid(["<a>", "<div>", "</a>", "</div"]));
console.log(isHtmlValid(["<div>"]));
console.log(isHtmlValid(["</div>", "<>"]));
console.log(isHtmlValid(["<div>", "</div>"]));
console.log(isHtmlValid(["<div>", "</div>", "<div>"]));
console.log(isHtmlValid(["<div>", "</p>"]));
