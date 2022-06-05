import React from 'react';

function App () {
    return (
        <nav>
            <a className="link-logo" href="https://www.nike.com/"><img src="https://cdn.worldvectorlogo.com/logos/nike-4.svg" alt="nike_logo" width={80} /></a>
            <ul className="navigation-list clearfix">
                <li>
                    <a className="navigation-link" href="https://www.nike.com/w/new-3n82y">New & Featured</a>
                </li>
                <li>
                    <a className="navigation-link" href="https://www.nike.com/men">Men</a>
                </li>
                <li>
                    <a className="navigation-link" href="https://www.nike.com/women">Women</a>
                </li>
                <li>
                    <a className="navigation-link" href="https://www.nike.com/kids">Kids</a>
                </li>
                <li>
                    <a className="navigation-link" href="https://www.nike.com/men">Men</a>
                </li>
                <li>
                    <a className="navigation-link" href="https://www.nike.com/w/sale-3yaep">Sale</a>
                </li>
            </ul>
            <input className="input-search" type="text" autoComplete="off" placeholder="Search" />
        </nav>
    );
}

export default App;