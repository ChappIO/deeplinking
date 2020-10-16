import React, {useEffect, useState} from 'react';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function isValidUrl(value) {
    try {
        const url = new URL(value);
        return url.protocol && url.pathname;
    } catch (e) {
        return false;
    }
}

export const App = () => {
    const [history, setHistory] = useState(() => {
        const stored = window.localStorage.getItem('history');
        if (stored) {
            return JSON.parse(stored);
        } else {
            return [];
        }
    });
    const [value, setValue] = useState('');

    useEffect(() => {
        window.localStorage.setItem('history', JSON.stringify(history));
    }, [history]);

    return (
        <div className="app">
            <h1>Deep linking tester</h1>
            {history.length > 0 && (
                <div className="history box">
                    <h2>Links</h2>
                    {history.map((item, i) => (
                        <a key={i} href={item}>
                            {item}
                            <button onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setHistory(prev => prev.filter(v => v !== item));
                            }}>
                                <i className='fas fa-times-circle'/>
                            </button>
                        </a>
                    ))}
                </div>
            )}
            <div className="box">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setHistory(prev => {
                        const newValues = [value, ...prev];
                        return newValues.filter(onlyUnique).slice(0, 10);
                    });
                }}>
                    <div className="field">
                        <input value={value} required type="url" onChange={e => setValue(e.target.value)}/>
                        <label>URL: my-app://path/to/link</label>
                    </div>
                    <input disabled={!isValidUrl(value)} type="submit" value="Add"/>
                </form>
            </div>
        </div>
    );
}
