import React, { Profiler } from 'react';
import Display from './Display';

const App = () => {


    const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interaction) => {

        console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interaction)
    }


    return (
        <>
            <Profiler id="panel" onRender={callback}>
                <Display />
            </Profiler>
        </>
    )
}

export default App