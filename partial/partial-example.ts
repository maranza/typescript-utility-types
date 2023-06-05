interface PartialExample {
    name: string;
    enableHyperJump: boolean;
}

// Without using partial.
const updateStarship = (id: number, starship: PartialExample) => {};

// we have to provide all fields of the object when updating only one, otherwise it throws an error
updateStarship(1, {name: 'explorer', enableHyperJump: true});

// =========== Using Partial ==============

const updateStarshipPartial = (id: number, starship: Partial<PartialExample>) => {};

// only the field we want to update
updateStarshipPartial(1, {name: 'explorer'});
