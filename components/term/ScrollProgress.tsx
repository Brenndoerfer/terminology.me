import PropTypes from "prop-types";
import React, { Component, useEffect, useState } from "react";

// const scrollStyle = (width, height = "3", bgcolor = "#F43059", duration = "1") => ({
//     margin: 0,
//     padding: 0,
//     position: "fixed",
//     top: 0,
//     zIndex: "99",
//     backgroundColor: `${bgcolor}`,
//     height: `${height}px`,
//     width: `${width}`,
//     transitionProperty: "width",
//     transitionDuration: `${duration}s`,
//     transitionTimingFunction: `ease-out`,
// });

// class ProgressBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             width: null
//         };
//         this.Scrolling = this.Scrolling.bind(this);
//     }

//     Scrolling() {
//         const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//         const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//         const scrolled = (winScroll / height) * 100;
//         if (height > 0) {
//             this.setState({ width: `${scrolled}%` });
//         } else {
//             this.setState({ width: null });
//         }
//     }

//     componentDidMount() {
//         try {
//             window.addEventListener("scroll", this.Scrolling);
//         } catch (oError) {
//             console.log(oError);
//         }
//     }

//     componentWillUnmount() {
//         try {
//             window.removeEventListener("scroll", this.Scrolling);
//         } catch (oError) {
//             console.log(oError);
//         }
//     }

//     render() {
//         const { width } = this.state;
//         const { height, bgcolor, duration } = this.props;
//         return <div style={scrollStyle(width, height, bgcolor, duration)} />;
//     }
// }

// ProgressBar.propTypes = {
//     height: PropTypes.number,
//     duration: PropTypes.number,
//     color: PropTypes.string.isRequired
// };

// export default ProgressBar;


interface IProgressBarProps {
    width?: number,
    height: string,
    bgcolor: string,
    duration?: string,
    contentRef?: MutableRefObject;
}

export default function ProgressBar(props: IProgressBarProps) {

    const scrollStyle = (width: number, height: string = "3", bgcolor: string = "#F43059", duration: string = "0.5") => ({
        margin: 0,
        padding: 0,
        position: "fixed",
        top: 0,
        zIndex: "99",
        backgroundColor: `${bgcolor}`,
        height: `${height}px`,
        width: width + '%',
        transitionProperty: "width",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: `ease-out`,
    });


    const [width, setWidth] = useState<number>(0);
    const [contentRefObj, _] = useState(props.contentRef)

    useEffect(() => {




        //offsetTop
        const scrolling = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop + document.documentElement.clientHeight - contentRefObj.current.offsetTop - 60;// + document.documentElement.clientHeight
            const height = contentRefObj.current.clientHeight//document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;

            if (height > 0) {
                setWidth(scrolled)
            } else {
                setWidth(0)
            }

            console.log(winScroll, height, scrolled)

        }

        window.addEventListener("scroll", scrolling);
        return () => window.removeEventListener("scroll", scrolling);

    })

    const { height, bgcolor, duration } = props;

    // console.log(scrollStyle(width, height, bgcolor, duration).width)

    return (
        <div style={scrollStyle(width, height, bgcolor, duration)} />
    )

}