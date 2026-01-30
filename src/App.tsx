import { useState } from 'react';
import StartPoint from './components/StartPoint.tsx';

export default function App() {
    const [firstRun, setFirstRun] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('has_seen_welcome');
            return saved === null; // true if not seen before
        }
        return true;
    });

    // mark the welcome as done
    const completeFirstRun = () => {
        setFirstRun(false);
        localStorage.setItem('has_seen_welcome', 'true');
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-black">
            <StartPoint firstRun={firstRun} onComplete={completeFirstRun} />
        </div>
    );
}
