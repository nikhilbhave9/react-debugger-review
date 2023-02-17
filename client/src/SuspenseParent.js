import { lazy, Suspense } from 'react';

const SuspenseChild = lazy(() => import('./SuspenseChild'));

function SuspenseParent() {

    return (
        <div>
            <h3>Part 4: Suspense</h3>
            <Suspense fallback={<div>Loading...</div>}>
                <SuspenseChild />
            </Suspense>
        </div>
    );
}

export default SuspenseParent;

