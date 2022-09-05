import * as React from 'react';
import '../components/Main.css';

interface TrackerData {
    id: number;
    content: string;
}

interface PostsData {
    id: number;
    name: string;
    countWords: number;
}

export default function Main() {
    const trackerData: Array<TrackerData> = [
        { id: 1, content: 'coming soon..' },
    ];

    const postsData: Array<PostsData> = [
        { id: 1, name: 'Unit 1', countWords: 5 },
        { id: 2, name: 'Unit 2', countWords: 12 },
        { id: 3, name: 'Unit 3', countWords: 31 },
        { id: 4, name: 'Unit 4', countWords: 45 },
        { id: 5, name: 'Unit 5', countWords: 66 },
        { id: 6, name: 'Unit 6', countWords: 75 },
        { id: 7, name: 'Unit 7', countWords: 88 },
        { id: 8, name: 'Unit 8', countWords: 94 },
    ];

    return (
        <div className='Main'>
            <div className='Main-tracker'>
                <h1>Tracker</h1>
                <div className='Main-tracker-div'>
                    {trackerData.map((element) => {
                        return (
                            <>
                                <div key={element.id}>
                                    <h3>{element.content}</h3>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className='Main-sets'>
                <h1>Recent study sets</h1>
                <div className='Main-sets-div'>
                    <div></div>
                    {postsData.map((element, index) => {
                        return (
                            <>
                                <div
                                    className={
                                        index < 5 ? 'div-yellow' : 'div-orange'
                                    }
                                    key={element.id}
                                >
                                    <h1>{element.name}</h1>
                                    <h3>{element.countWords} items</h3>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
