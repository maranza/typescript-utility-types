interface PartialExample {
    name: string;
    enableHyperJump: boolean;
}

// =============================================================
//                   WITHOUT Partial
// =============================================================
const updateStarship = (id: number, starship: PartialExample) => {}; // Without using partial.

updateStarship(1, {name: 'explorer', enableHyperJump: true}); // we have to provide all fields of the object when updating only one, otherwise it throws an error


// =============================================================
//                   Using Partial
// =============================================================

const updateStarshipPartial = (id: number, starship: Partial<PartialExample>) => {};

// only the field we want to update
updateStarshipPartial(2, {name: 'explorer'});
