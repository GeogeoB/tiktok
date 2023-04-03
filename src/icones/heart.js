import { useEffect, useRef, useContext } from "react";

function Heart({info, setVideoInfos, k}) {

    const heart = useRef(null)

    const heartClick = () => {
        let k_ = ((k % 3) + 3) % 3;

        if (heart != null) {
            if(!heart.current.classList.contains("red")) {
                heart.current.classList.add("red");
                heart.current.classList.add("heartAnimation");
    
                setTimeout(() => {
                    heart.current.classList.remove("heartAnimation");
                }, 1000)
            } else {
                heart.current.classList.remove("red");
            }

            setVideoInfos((oldInfo) => {

                let newInfo = [{... oldInfo[0]}, {... oldInfo[1]}, {... oldInfo[2]}]

                if (k_ == 1) {
                    newInfo[0].like = !newInfo[0].like
                } else if (k_ == 0) {
                    newInfo[1].like =  !newInfo[1].like
                } else if (k == 2) {
                    newInfo[2].like =  !newInfo[2].like
                }

                return newInfo
            })
        }
    }

    useEffect(() => {
        if (info.like) {
            heart.current.classList.add("red");
        } else {
            heart.current.classList.remove("red");
        }
    }, [info.like])

    return (
        <svg ref={heart} xmlns="http://www.w3.org/2000/svg" className="icone" viewBox="0 0 512 512" onClick={heartClick}>
            <path
                d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" />
        </svg>
    )
}

export default Heart;