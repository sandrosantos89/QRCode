import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode'

export default function QRCodeCanvas({ text }) {
    const canvasref = useRef()

    useEffect(() => {
        QRCode.toCanvas(canvasref.current, text, { width: 300 },(error)=> {
            console.log(error)
        })
    }, [text])

    return (
        <div>
            <canvas ref={canvasref} id="canvas"></canvas>
        </div>
    )
}
