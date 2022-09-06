import React  from 'react'
import { Line } from 'rc-progress';

export default function Progressbar({items}) {
    return (
        <div className="progressbar-wrap">

            {items.map((item, index) => {
                return (
                    <div key={index} className="progressbar-item">
                        <h3>{item.title}</h3>
                        <Line strokeLinecap='round' gapPosition='top' percent={item.percent} trailWidth="3" trailColor="#EEEEEE" strokeWidth="1.5" strokeColor="#F66B5D" />
                    </div>
                )
            })}

        </div>
    )
}
