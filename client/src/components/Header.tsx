import * as React from 'react';
import '../components/Header.css';

export interface IAppProps {
    name: string;
}

interface MenuElement {
    id: number;
    name: string;
    href: string;
}

export default function Header() {
    const menuElements: Array<MenuElement> = [
        {
            id: 1,
            name: 'Home',
            href: '#',
        },
        {
            id: 2,
            name: 'Library',
            href: '#',
        },
        {
            id: 3,
            name: 'All words',
            href: '#',
        },
    ];

    const selectItem = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        document.querySelectorAll('label').forEach((element) => {
            if (element.textContent === e.currentTarget.textContent) {
                if (e.currentTarget.classList.value === 'label') {
                    element.classList.replace('label', 'label-active');
                }
            } else {
                element.classList.replace('label-active', 'label');
            }
        });

        console.log(e.currentTarget.textContent);
    };
    return (
        <div className='Header'>
            <div className='Header-links'>
                {menuElements.map((element, index) => {
                    return (
                        <>
                            <label
                                className={
                                    index === 0 ? 'label-active' : 'label'
                                }
                                key={element.id}
                                onClick={(e) => selectItem(e)}
                            >
                                {element.name}
                            </label>
                        </>
                    );
                })}
            </div>
            <div className='Header-personalAccount'>
                <p>User name</p>
                <div className='Header-personalAccount-image'></div>
            </div>
        </div>
    );
}
