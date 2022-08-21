import React from 'react'

const SchedulePage = () => {
    return (
        <div className='SchedulePage'>
            <h1 className='workout-Title'> 5 Day Push, Pull, Legs </h1>
            <div className="days">
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Monday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Chest , Triceps</h3>
                    </div>
                </div>
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Tuesday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Back , Biceps</h3>
                    </div>
                </div>
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Wednesday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Legs</h3>
                    </div>
                </div>
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Thursday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Chest, Shoulders</h3>
                    </div>
                </div>
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Saturday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Back</h3>
                    </div>
                </div>
            </div>
            <h1 className='workout-Title' > Full Body 3 Day Split </h1>
            <div className="days">
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Monday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Full Body</h3>
                    </div>
                </div>
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Wednesday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Full Body</h3>
                    </div>
                </div>
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Saturday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Full Body</h3>
                    </div>
                </div>
            </div>

            <h1 className='workout-Title' > UPPER LOWER 3 DAY SPLIT </h1>
            <div className="days">
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Monday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Upper </h3>
                    </div>
                </div>
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Wednesday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Lower</h3>
                    </div>
                </div>
                <div className="dayCard">
                    <div className="day">
                        <h3 className='center'>Saturday</h3>
                    </div>
                    <div className="muscle">
                        <h3 className='center'>Upper</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchedulePage