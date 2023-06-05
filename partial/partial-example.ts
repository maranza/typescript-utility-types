interface PartialExample {
    name: string;
    enableHyperJump: boolean;
}

const ship1 = {
    name: 'ship1',
    enableHyperJump: true
}

// =============================================================
//                   WITHOUT Partial
// =============================================================
const updateStarship = (id: number, fieldsToUpdate: PartialExample) => {
    return {...ship1, fieldsToUpdate};
}; // Without using partial.
const printStarship = () => {
    console.log(ship1)
};

updateStarship(1, {name: 'No Partial', enableHyperJump: true}); // we have to provide all fields of the object when updating only one, otherwise it throws an error
printStarship();


// =============================================================
//                   Using Partial
// =============================================================

const updateStarshipPartial = (id: number, fieldsToUpdate: Partial<PartialExample>) => {
    return {...ship1, fieldsToUpdate}
};
const printStarshipPartial = () => {
    console.log(ship1);
};

// only the field we want to update
updateStarshipPartial(2, {name: 'With Partial'});
printStarship();
