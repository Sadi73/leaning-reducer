export const chooseColor = (category) => {
    switch (category) {
        case 'To-Do':
            return 'indigo-600';
        case 'On Progress':
            return 'yellow-600';
        case 'Done':
            return 'green-600';
        case 'Revise':
            return 'red-600';
    }

}