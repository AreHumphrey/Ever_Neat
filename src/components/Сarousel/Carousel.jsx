import './Сarousel.css'
import {Children, cloneElement, useEffect, useState} from "react";

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
export const Carousel = ({children}) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            return Math.min(currentOffset + 1000,0)
        })
    }

    const handleRightArrowClick = () => {

        const maxOffset = -(1000 * (pages.length - 1))
        setOffset((currentOffset) => {
            return  Math.max(currentOffset - 1000, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        maxWidth: '1000px',
                        minWidth: '1000px',
                    },
                })
            })
        )
    },[children])

    return (
        <div className="main-container" >
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}/>
            <div className="window">
                <div className="all-items-container"
                     style={
                         {
                             transform: `translateX( ${offset}px)`
                         }
                     }
                >{pages}</div>
            </div>
            <FaChevronRight className="arrow" onClick={handleRightArrowClick}/>
        </div>
    )
}