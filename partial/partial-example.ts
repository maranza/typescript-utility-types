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
    return {...ship1, ...fieldsToUpdate};
}; // Without using partial.
const printStarship = (obj: any) => {
    console.log(obj)
};

var updateStarship1 = updateStarship(1, {name: 'No Partial', enableHyperJump: true}); // we have to provide all fields of the object when updating only one, otherwise it throws an error
printStarship(updateStarship1);


// =============================================================
//                   Using Partial
// =============================================================

const updateStarshipPartial = (id: number, fieldsToUpdate: Partial<PartialExample>) => {
    return {...ship1, ...fieldsToUpdate}
};
const printStarshipPartial = (obj1: any) => {
    console.log(obj1);
};

// only the field we want to update
var updateStarshipPartial1 = updateStarshipPartial(2, {name: 'With Partial'});
printStarshipPartial(updateStarshipPartial1);
