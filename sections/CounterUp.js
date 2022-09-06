import React  from 'react'
import { FiChevronRight } from 'react-icons/fi'
import SectionsTitle from "../components/common/SectionsTitle";
import { Link } from 'react-router-dom'


export default function CounterUp({secTitle, secSubtitle, counteritems, counterbottomtitle, counterbottombtn, counterbottombtnurl}) {
    return (
        <>
            <section className="counterup-wrapper text-center">
                <div className="container">
                    <SectionsTitle title={secTitle} subtitle={secSubtitle} />
                    <div className="counterup-grid-wrap">

                        {counteritems.map((item, index) => {
                            return (
                                <div className="counterup-items" key={index}>
                                    <div className="counterup-iconbox">
                                        {item.icon}
                                    </div>
                                    <h1 className="counterup-number">{item.number}{item.numsuffix}</h1>
                                    <p className="counterup-title">{item.title}</p>
                                </div>
                            )
                        })}

                    </div>
                    {counterbottomtitle || counterbottombtn ?
                        <div className="counterup-bottom-wrap">
                            {counterbottomtitle?
                                <p>{counterbottomtitle}</p> : ''
                            }
                            {counterbottombtn?
                                <Link to={counterbottombtnurl} className="theme-button">{counterbottombtn} <FiChevronRight className="icon" /></Link>
                                : ''
                            }
                        </div> : ''
                    }
                </div>
            </section>
        </>
    )
}
