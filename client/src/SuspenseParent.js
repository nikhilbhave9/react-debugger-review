import { lazy, Suspense } from 'react';

const SuspenseChild = lazy(() => import('./SuspenseChild'));

function SuspenseParent() {

    return (
        <div>
            <h2>Suspense</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <SuspenseChild />
            </Suspense>
        </div>
    );
}

export default SuspenseParent;

