function compareObjects(a, b) {

    if (a === null) {
        if (b === null) {
            return true
        }
        console.log(`a is null and b is not.`);
        return false
    } else if (b === null) {
        if (a === null) {
            return true
        }
        console.log(`b is null and a is not.`);
        return false
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
        console.log("Wrong number of properties!", a, b);
        return false
    }

    for (const key in a) {
        console.log(`Checking ${key}... `);
        const
            valueA = a[key],
            valueB = b[key];

        if (typeof valueA !== typeof valueB) {
            console.log(`${key} Wrong typeof! ${typeof valueA} is not equal to ${typeof valueB}  `);
            return false
        }

        if (valueA === undefined) {
            if (valueB === undefined) {
                continue;
            }
            console.log(`${key} valueA is undefined and valueB is not.`);
            return false
        }


        if (typeof valueA === "object") {
            console.log(`${key}: checking objects`);
            if (!compareObjects(valueA, valueB)) {
                console.log(`${key} Objects are not similar`);
                return false
            }
        } else if (valueA !== valueB) {
            console.log(`${key}: Primitive value not equal - ${valueA} !== ${valueB}`);
            return false
        }
    }
    return true
}

const
    obj1 = {
        empty: {},

        size: 3,
        color: "Red",
        shape: "Square",
        address: {
            street: "Jaffo"
        },
        city: "Tel Aviv",
        car: null
    },
    obj2 = {
        empty: null,

        color: "Red",
        size: 3,
        shape: "Square",
        address: {
            street: "Jaffo"
        },
        city: "Tel Aviv",
        car: null
    }

console.log("RESULT:");
console.log(compareObjects(obj1, obj2))