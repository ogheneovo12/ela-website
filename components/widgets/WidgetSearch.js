import React  from 'react'
import { FiSearch } from 'react-icons/fi'

export default function WidgetSearch() {
    return (
        <>
            <div className="blog-sidebar-widget widget_search">
                <form>
                    <input type="search" name="search" placeholder="Search" />
                    <button type="submit"><FiSearch className="search-icon" /></button>
                </form>
            </div>
        </>
    )
}
