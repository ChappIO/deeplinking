import {writable} from "svelte/store";

function createHistory() {
    const {subscribe, set, update} = writable((() => {
        const stored = localStorage.getItem('history');
        if (stored) {
            return JSON.parse(stored);
        } else {
            return [];
        }
    })());

    subscribe(value => {
        localStorage.setItem('history', JSON.stringify(value));
    });

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    return {
        subscribe,
        add: (item) => {
            update(value => [item, ...value].filter(onlyUnique).slice(0, 10))
        },
        remove: (item) => {
            update(value => value.filter(v => v !== item))
        }
    }
}

export const history = createHistory();