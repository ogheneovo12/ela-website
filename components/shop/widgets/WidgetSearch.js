import React  from 'react'
import { FiSearch } from 'react-icons/fi'

export default function WidgetSearch() {
    return (
        <>
            <div className="shop-widget widget_search">
                <form>
                    <input type="search" name="search" placeholder="Search" />
                    <button type="submit" className="theme-button"><FiSearch className="icon" /></button>
                </form>
            </div>
        </>
    )
}
