import React from 'react';

export const SCILevel1 = React.memo(function SCILevel1({ getColor, onHover, onClick, activeSegments = new Set() }) {

    const sVis = (segId) => activeSegments.has("SCI-1:" + segId) ? 1 : 0;
    const jVis = (junctionId) => activeSegments.has("SCI-1:" + junctionId.toLowerCase()) ? 0 : 0;

    // Helper to generate dynamic props: fill color + mouse events
    const r = (id) => ({
        fill: getColor(id),
        role: "button",
        tabIndex: 0,
        "aria-label": id,
        onMouseEnter: () => onHover(id, true),
        onMouseLeave: () => onHover(id, false),
        onFocus: (e) => onHover(id, true, e),
        onBlur: () => onHover(id, false),
        onClick: () => onClick(id),
        onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(id); } },
        style: { cursor: "pointer", transition: "opacity 0.2s" }
    });

    // Non-navigable areas (mechanical rooms, off-limits): hoverable but not in tab order
    const d = (id) => ({
        fill: getColor(id),
        onMouseEnter: () => onHover(id, true),
        onMouseLeave: () => onHover(id, false),
        onClick: () => onClick(id),
        style: { cursor: "pointer", transition: "opacity 0.2s" }
    });

    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Floor_1" data-name="Floor 1" viewBox="0 0 1616.36 908.75" role="img" aria-label="Science Building Floor 1 map">
            <g id="hallways" fill="#e5e5e5" aria-hidden="true">
                <path id="hallway-1" d="m614.64 446.31 4-8.35h38.26V309.09h9.91v-35.13l9.91-4v-56.52h-72.69v8.87h-36.87v-54.78h-76.35v102.43l11.48 5.66v38.17h56.35v132.52" />
                <path id="hallway-2" d="M527.77 573.05v14.04h4v9.74h10.26v4h19.3v-4h19.18v4h13.69v-4h20.74v4h21.91v-4h6.22v-9.74h4v-9.74H632.9v-11.82h3.95v-2.26h-98.56v9.78z" />
            </g>
            <path id="sci-101" d="M115.16 317.79h170.78v120.17H115.16z" {...r("sci-101")} />
            <path id="sci-103" d="M322.09 317.79h63.5v100.26h4v14.09h-4v5.82h-95.65v-74.45h11.96v-4h10.95v4h48.13v-4h-38.89z" {...r("sci-103")} />
            <path id="sci-104" d="M301.9 359.51h16.19v-41.72h-28.15v41.72z" {...r("sci-104")} />
            <path id="sci-106" d="M389.59 317.79h165.04v120.17H389.59z" {...r("sci-106")} />
            <path id="sci-122" d="M660.9 320.4h135.17v117.57H660.9z" {...r("sci-122")} />
            <path id="sci-123" d="M797.33 320.4h28.87v117.56h-28.87v-98.17h-4v-12.52h4z" {...r("sci-123")} />
            <path id="sci-124" d="M830.2 320.4h160.87v117.57H830.2z" {...r("sci-124")} />
            <path id="sci-125" d="M995.07 320.4h96.96v11.04h4v14.61h-4v91.91h-96.96V342.4h-4v-15.13h4z" {...r("sci-125")} />
            <path id="sci-130" d="M1096.03 320.4h96.17v117.57h-96.17z" {...r("sci-130")} />
            <path id="sci-131" d="M1192.2 327.27h4v-6.87h62.78v61.22h-62.78V342.4h-4z" {...r("sci-131")} />
            <path id="sci-132" d="M1196.2 385.62h62.78v52.35h-62.78z" {...r("sci-132")} />
            <path id="sci-133" d="M1262.98 320.4h29.4v6.87h4v15.13h-4v54.87h-11.48v40.69h-17.92v-19.39h-4v-15.13h4V342.4h-4v-15.13h4z" {...r("sci-133")} />
            <path id="sci-134" d="M1305.85 401.27h-20.95v36.69h173.39V320.4h-161.91v76.87h9.47z" {...r("sci-134")} />
            <path id="sci-140" d="M696.72 600.83h9.74v67.31h5.74l-.43 47.27-10.17 19.86-6.64 10.54-5.44 10.28h-60.23l-10.75-15.57-6.65-9.78-7.47-10.83v-92.47h3.91v-26.61z" {...r("sci-140")} />
            <path id="sci-142" d="M647.07 596.83v-19.48h59.39v23.48h-9.74v-4z" {...r("sci-142")} />
            <path id="sci-143" d="M466.64 600.83h12.91v-4h48.22v-23.78h-64.61v23.78h3.48s-.78 4 0 4" {...r("sci-143")} />
            <path id="sci-145" d="M566.38 600.83H463.16v155.26h85.45l11.14-14.48 6.93-10.79 3.61-5.78v-56.9h-3.91z" {...r("sci-145")} />
            <path id="sci-151" d="M837.42 587.09v17.26h14.61v108.7h-12.52v23.87H737.07v-23.87H716.2V603.7h87l21.4-21.39h12.82z" {...r("sci-151")} />
            <path id="sci-153" d="M901.42 581.79h13.87l21.91 21.91h64.07v113.39h-65.64l-21.39 21.4h-12.82v-25.5h-11.54V604.35h11.69z" {...r("sci-153")} />
            <path id="sci-155" d="M1105.11 587.09v-4.78h-12.82l-21.39 21.39h-65.63v113.39h64.06l21.92 21.92h13.86v-24.33h12.92V605.99h-12.92z" {...r("sci-155")} />
            <path id="sci-157" d="M1168.48 587.62v-5.83h13.87l21.91 21.91h64.07v113.39h-65.63l-21.39 21.4h-12.83v-23.87h-11.54V605.99h11.54z" {...r("sci-157")} />
            <path id="sci-158" d="M1372.18 739.01h-13.87l-21.91-21.92h-64.07V603.7h65.64l21.39-21.39h12.82v24.39h12.8v108.7h-12.8z" {...r("sci-158")} />
            <path id="off-limits-hallway" d="M570.29 600.83h34.13v22.61h-4v97.71l11.47 9.59 6.65 9.78 8.66 19.57h9.18v13.87h-26.61l-15.05-10.47h-12.78l-16.35 11.52-25.56 5.65.02 12.09h-76.89v-32.66h87.42l12.34-16.04-3.17-2.44 6.93-10.79 3.39 2.12 4.22-6.75v-62.05h-3.91z" {...d("off-limits-hallway")} />
            <path id="mechanical-rooms" d="M618.64 313.79h38.26v124.17h-38.26z" {...d("mechanical-rooms")} />
            <path id="mechanical-rooms-2" d="M1423.42 606.7h23v71.91h-23z" {...d("mechanical-rooms-2")} />
            <path id="mechanical-rooms-3" d="M569.59 763.49h36.17v29.26h-36.17z" {...d("mechanical-rooms-3")} />
            <path id="mech-room-4" d="M636.38 773.96v-13.87h55.55l6.56-12.41-3.53-1.87 6.64-10.54 3.56 1.82 7.04-13.75v69.41h-75.82z" {...d("mech-room-4")} />
            <path id="mech-room-5" d="M1462.29 320.4h38.91v117.57h-38.91z" {...d("mech-room-5")} />
            <path id="mech-room-6" d="M115.16 243.35V116.01h159.22v47.52h13.56v4h151.39v75.82z" {...d("mech-room-6")} />
            <g id="Walls" aria-hidden="true">
                <path d="M575.94 450.31h-21.3V317.79H115.16v120.17h15.22v4h-19.22V313.79h447.48v132.52h17.3zM618.64 450.31h-21.83v-4h17.83v-8.35h58.34v4h-54.34z" />
                <path d="M545.68 437.96h10.96v4h-10.96zM412.11 437.96h120.52v4H412.11zM310.38 437.96h89.22v4h-89.22zM278.55 437.96h18.78v4h-18.78zM143.42 437.96h118.96v4H143.42z" />
                <path d="M285.94 315.79h4v124.17h-4zM385.59 432.14h4v7.83h-4zM385.59 315.79h4v102.26h-4zM498.29 290.22h4v25.57h-4zM545.68 273.96h-58.87V163.53h84.35v108.43h-4V167.53h-76.35v102.43h54.87zM680.72 273.96H618.2v-4h58.52v-56.52h-72.69v58.52h-4v-62.52h80.69z" />
                <path d="M670.81 313.79h-56.17v-4.7h52.17v-37.13h4z" />
                <path d="M656.9 311.09h4v128.87h-4z" />
                <path d="M614.64 345.09h44.26v4h-44.26zM658.9 384.05h-44.26v-24.43h4v20.43h40.26z" />
                <path d="M614.64 382.05h4v36h-4zM614.64 430.05h4v9.91h-4zM1462.29 441.96h-13.48v-4h9.48V320.4H658.9v-4h803.39z" />
                <path d="M1318.9 437.96h116.35v4H1318.9zM1305.85 441.96h-24.95v-44.69h24.95v4h-20.95v36.69h20.95zM1219.24 437.96h50.09v4h-50.09zM1151.42 437.96h53.22v4h-53.22zM1018.9 437.96h118.43v4H1018.9zM980.81 437.96h24.52v4h-24.52zM849.85 437.96h118.43v4H849.85zM819.59 437.96h17.22v4h-17.22zM783.59 437.96h23.48v4h-23.48zM688.11 437.96h83.48v4h-83.48z" />
                <path d="M991.07 342.4h4v97.57h-4zM991.07 318.4h4v8.87h-4zM826.2 318.4h4v121.57h-4zM793.33 339.79h4v100.17h-4zM793.33 318.4h4v8.87h-4zM1092.03 346.05h4v93.91h-4zM1092.03 318.4h4v13.04h-4zM1192.2 342.4h4v97.57h-4zM1192.2 318.4h4v8.87h-4z" />
                <path d="M1262.98 385.62h-68.78v-4h64.78V342.4h4zM1258.98 318.4h4v8.87h-4z" />
                <path d="M1258.98 383.62h4v19.83h-4zM1258.98 418.57h4v21.39h-4zM1292.38 342.4h4v56.87h-4zM1292.38 318.4h4v8.87h-4zM716.2 796.75h-83.82v-18.79h-22.61v18.79h-44.18v-17.74h-21.56v1.65h-4v-5.65h29.56v17.74h36.18v-18.79h30.61v18.79h75.82V599.7h89.35l21.39-21.39h18.48v8.78h-4v-4.78H824.6l-21.4 21.39h-87zM1070.9 603.7H937.2l-21.91-21.91h-13.87v5.83h-4v-9.83h19.52l21.92 21.91h130.38l21.39-21.39h18.48v8.78h-4v-4.78h-12.82zM1337.97 603.7h-133.71l-21.91-21.91h-13.87v5.83h-4v-9.83h19.53l21.91 21.91h130.39l21.39-21.39h18.48v8.78h-4v-4.78h-12.82zM1376.18 743.01h-19.52l-21.92-21.92h-130.38l-21.39 21.4h-18.49v-8.79h4v4.79h12.83l21.39-21.4h133.7l21.91 21.92h13.87v-5.83h4zM1109.11 743.01h-19.52l-21.91-21.92H937.29l-21.39 21.4h-18.48v-8.79h4v4.79h12.82l21.39-21.4h133.7l21.92 21.92h13.86v-5.83h4z" />
                <path d="M714.2 668.14h-7.74v-90.79H632.9v-11.82h83.3v36.17h-4v-32.17h-75.3v3.82h73.56v90.79h3.74z" />
                <path d="M636.85 596.83h59.87v4h-59.87z" />
                <path d="M643.07 587.09h4v11.74h-4zM594.2 596.83h20.74v4H594.2zM561.33 596.83h19.17v4h-19.17z" />
                <path d="m570.07 732.94-3.39-2.12 3.61-5.78v-56.9h-3.91v-69.31h4v65.31h3.91v62.05zM550.58 760.09h-91.42V569.05h75.13v-9.78h16.48v4h-12.48v9.78h-75.13v183.04h85.45l11.14-14.48 3.17 2.44zM572.29 559.27h30.13v4h-30.13zM640.81 567.53h-4v-4.26h-12.87v-4h16.87z" />
                <path d="M479.55 596.83h62.48v4h-62.48zM461.16 596.83h5.48v4h-5.48zM608.6 733.01l-8.18-11.86v-97.71h3.91v-24.61h4v28.61h-3.91v92.47l7.47 10.83zM691.93 760.09H627.2l-11.95-17.29 3.29-2.28 10.75 15.57h60.23l5.44-10.28 3.53 1.87zM843.51 740.92H733.07v-23.87h-17.65l-10.26 20.04-3.56-1.82 11.38-22.22h24.09v23.87h102.44v-5.04h4z" />
                <path d="M684.16 758.09h4v36.65h-4zM843.51 719.09h-4v-6.04h12.52v-108.7h-14.61v-4h18.61v116.7h-12.52zM1109.11 720.64h-4v-5.96h12.92V605.99h-12.92v-4h16.92v116.69h-12.92zM1376.18 722.03h-4v-6.63h12.8V606.7h-12.8v-4h16.8v116.7h-12.8zM1268.33 601.7h4v117.39h-4zM1168.48 720.72h-4v-2.1h-11.54V601.99h15.54v4h-11.54v108.63h11.54zM901.42 719.09h-4v-2.1h-11.54V600.35h15.54l.15 4h-11.69v108.64h11.54zM1001.27 601.7h4v117.39h-4zM544.01 796.75h-84.85v-38.66h4v34.66h76.89l.02-2.59 4 .04zM569.59 777.01h-4v-17.52h16.35v4h-12.35zM609.77 775.96h-4v-12.47h-11.05v-4h15.05zM527.77 587.09h4v11.74h-4zM117.59 247.35h-6.43v-83.82h176.78v4H115.16v75.82h2.43zM299.94 163.53h145.57v4H299.94z" />
                <path d="M443.33 247.35h-88.35v-4h84.35v-77.82h4zM259.64 243.35h72.39v4h-72.39zM247.9 247.35h-12.57v-81.82h4v77.82h8.57z" />
                <path d="M267.81 165.53h4v79.83h-4zM324.16 165.53h4v79.83h-4zM113.16 112.01h165.26v4H113.16z" />
                <path d="M202.46 114.01h4v51.52h-4zM202.51 243.35h20.74v4h-20.74z" />
                <path d="M214.88 247.44h-4v-23.43h-54.16v-4h58.16zM154.38 243.35h21.52v4h-21.52z" />
                <path d="M160.2 222.01h4v23.35h-4zM186.81 222.01h4v23.35h-4zM143.85 247.35h-12.56v-4h8.56v-77.82h4zM498.29 271.96h4v3.65h-4zM1501.2 316.4h4v125.57h-4zM1418.29 602.7h9.39v4h-9.39zM1450.42 682.62h-14.91v-4h10.91V606.7h-6.61v-4h10.61z" />
                <path d="M1425.72 682.62h-6.3V604.7h4v73.92h2.3z" />
                <path d="M1421.42 625.79h27v4h-27zM1423.42 719.4h-6.57v-4h2.57v-34.78h4zM111.16 272.88h4v42.91h-4zM162.64 549.18h-51.48v-74h4v70h43.48v-70h4z" />
                <g>
                    <path d="M136.72 475.18h4v45h-4z" />
                    <path d="M138.72 497.87h19.91v2h-19.91zM113.16 482.25h25.57v2h-25.57zM113.59 486.16h25.57v2h-25.57zM113.59 490.06h25.57v2h-25.57zM113.37 493.97h25.56v2h-25.56z" />
                    <path d="M113.37 497.87h25.56v2h-25.56zM114.33 501.78h44.3v2h-44.3zM114.33 505.68h44.3v2h-44.3zM113.59 509.79h45.05v2h-45.05zM113.94 513.7h44.7v2h-44.7zM113.94 517.6h44.7v2h-44.7z" />
                    <g>
                        <path d="M135.64 478.31h1.08v2h-1.08zM133.46 480.31h-2.19v-2h2.19zm-4.38 0h-2.19v-2h2.19zm-4.37 0h-2.19v-2h2.19zm-4.37 0h-2.19v-2h2.19zM114.89 478.31h1.08v2h-1.08z" />
                    </g>
                </g>
                <path d="M289.94 359.51h11.96v4h-11.96zM312.85 359.51h48.13v4h-48.13z" />
                <path d="M318.09 317.79h4v43.72h-4zM571.16 218.31h4.78v4h-4.78zM596.03 218.31h4v4h-4zM614.64 329.71v-15.92h4v15.79zM614.64 345.09v-5.89h4v5.84zM636.9 569.53v3.82h73.56v90.79h1.74v-94.61z" />
                <g>
                    <path d="m1296.571 493.868 1.22-3.81 83.525 26.737-1.22 3.81zM1289.878 514.829l1.219-3.81 83.525 26.737-1.22 3.81z" />
                    <path d="m1293.818 511.883 5.488-17.143 3.81 1.22-5.488 17.143zM1301.435 514.32l5.488-17.143 3.81 1.22-5.488 17.142zM1309.052 516.767l5.488-17.144 3.81 1.22-5.488 17.143zM1316.666 519.213l5.488-17.143 3.81 1.219-5.488 17.143zM1324.293 521.65l5.488-17.144 3.81 1.22-5.488 17.143zM1331.91 524.086l5.487-17.143 3.81 1.22-5.488 17.142zM1354.77 531.406l5.488-17.143 3.81 1.22-5.488 17.142zM1362.388 533.842l5.487-17.143 3.81 1.22-5.488 17.143z" />
                    <path d="m1362.388 533.842 5.487-17.143 3.81 1.22-5.488 17.143z" />
                    <g>
                        <path d="m1375.25 520.138.304-.952 3.81 1.218-.305.953zM1374.73 534.91l-3.81-1.22.54-1.69 3.81 1.22zm1.09-3.38-3.81-1.22.54-1.69 3.81 1.22zm1.08-3.39-3.81-1.22.54-1.69 3.81 1.22zm1.09-3.38-3.81-1.22.54-1.69 3.81 1.22zM1370.071 536.325l.305-.953 3.81 1.22-.305.952z" />
                    </g>
                </g>
                <g>
                    <path d="M710.96 516.17v-11.99h-61.58v-4h65.58v9.93l56.69-24.25 1.58 3.68zM649.38 520.92h39.91v4h-39.91zM714.96 548.79h-65.58v-4h61.58v-9.66l42.51-19.17 7.03 15.6 26.52-12.98 1.76 3.59-30.23 14.8-7.09-15.72-36.5 16.46z" />
                    <path d="M685.79 504.18v40.61M679.79 504.18v40.61M673.79 504.18v40.61M667.79 504.18v40.61M661.79 504.18v40.61M655.79 504.18v18.74" style={{ stroke: "#000", strokeMiterlimit: 10, strokeWidth: "3px" }} />
                    <path d="M655.79 524.92v19.87" style={{ fill: "none", stroke: "#000", strokeDasharray: "1.5", strokeMiterlimit: 10, strokeWidth: "3px" }} />
                    <path d="m720.88 511.93 7.01 15.56" style={{ fill: "none", stroke: "#000", strokeMiterlimit: 10, strokeWidth: "3px" }} />
                    <path d="M655.79 503.18v18.74" style={{ stroke: "#000", strokeMiterlimit: 10, strokeWidth: "3px" }} />
                    <path d="m725.51 507.92 8 17.74M731.08 506.31l8.01 17.75M736.25 503.86l8 17.75M741.82 502.25l8 17.75M769.85 490.99l12.73 29.76M763.43 493.58l13.3 30.04" style={{ fill: "none", stroke: "#000", strokeMiterlimit: 10, strokeWidth: "3px" }} />
                </g>
            </g>
            <g id="Bathroom-Sign-1" aria-hidden="true">
                <g id="Bathroom-Sign-2">
                    <path id="b-sign4" d="m637.2 236.04-1.39 6.64c-.68 1.76-3.19 1.38-3.29-.55.71-2.95 1.02-6.18 1.82-9.08.44-1.59 1.4-2.38 3.07-2.51 1.97-.15 5.22-.14 7.19 0 1.46.11 2.58.82 2.99 2.26.36 2.87 1.51 6.02 1.81 8.85.24 2.25-2.18 2.97-3.21 1.11l-1.47-6.97v21.52s-.25.56-.27.58c-.01.02-.34.27-.38.3-1.08.69-2.31.24-2.62-1l-.04-12.32c-.07-.62-.74-.79-.81 0-.33 3.81.34 8.14 0 11.96-.1 1.21-.93 1.84-2.14 1.65-.43-.07-.88-.5-1.06-.88-.03-.08-.2-.57-.2-.61v-20.96Z" />
                    <path id="b-sign1" d="M643.15 228.83c-2.72 2.81-7.07-1.32-4.28-4.16 2.72-2.78 6.93 1.42 4.28 4.16" />
                </g>
            </g>
            <g id="Bathroom-Sign-3" aria-hidden="true">
                <path id="b-sin5" d="m521.63 223.41 3.07-10.74-2.86 6.3c-1.04 1.6-3.47.68-3.09-1.24l4.6-10.34c.47-.66 1.02-.81 1.8-.86 1.83-.12 4.91-.16 6.7 0 .65.06 1.14.28 1.51.83 1.35 3.18 2.96 6.26 4.28 9.45.24.59.47.95.38 1.62-.16 1.26-1.79 1.75-2.74.98-.29-.24-.39-.5-.55-.82-.98-1.9-1.71-4.05-2.66-5.98l-.34-.59 2.99 11.39h-2.58v9.81s-.16.36-.21.44c-.83 1.52-3.17.91-3.18-.92 0-.15.08-.31.08-.48-.02-2.88 0-5.76 0-8.64-.07-.35-.62-.15-.89-.2v9.89s-.2.43-.24.49c-.49.72-1.68.94-2.38.44-.21-.15-.69-.77-.69-1.01v-9.69s-.11-.12-.12-.12h-2.87Z" />
                <path id="b-sign2" d="M528.24 199.77c3.89-.19 4.17 5.85.22 5.96-3.84.11-4.09-5.77-.22-5.96" />
            </g>
            <g id="Pathing">
                <circle id="Junction_1" cx="149.68" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_1"), transition: "opacity 0.3s" }} />
                <circle id="Junction_2" cx="270.46" cy="457.58" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_2"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3" cx="303.85" cy="457.58" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_3"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3.5" cx="405.85" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_3.5"), transition: "opacity 0.3s" }} />
                <circle id="Junction_4" cx="539.16" cy="457.58" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_4"), transition: "opacity 0.3s" }} />
                <circle id="Junction_5" cx="586.38" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_5"), transition: "opacity 0.3s" }} />
                <circle id="Junction_6" cx="586.38" cy="291.53" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_6"), transition: "opacity 0.3s" }} />
                <circle id="Junction_7" cx="613.18" cy="512.55" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_7"), transition: "opacity 0.3s" }} />
                <circle id="Junction_8" cx="613.18" cy="580.12" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_8"), transition: "opacity 0.3s" }} />
                <circle id="Junction_9" cx="699.18" cy="525.55" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_9"), transition: "opacity 0.3s" }} />
                <circle id="Junction_10" cx="680.55" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_10"), transition: "opacity 0.3s" }} />
                <circle id="Junction_11" cx="813.33" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_11"), transition: "opacity 0.3s" }} />
                <circle id="Junction_12" cx="870.95" cy="593.72" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_12"), transition: "opacity 0.3s" }} />
                <circle id="Junction_13" cx="843.33" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_13"), transition: "opacity 0.3s" }} />
                <circle id="Junction_14" cx="1012.11" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_14"), transition: "opacity 0.3s" }} />
                <circle id="Junction_15" cx="1144.38" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_15"), transition: "opacity 0.3s" }} />
                <circle id="Junction_16" cx="1211.94" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_16"), transition: "opacity 0.3s" }} />
                <circle id="Junction_17" cx="1275.11" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_17"), transition: "opacity 0.3s" }} />
                <circle id="Junction_18" cx="1137.48" cy="594.54" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_18"), transition: "opacity 0.3s" }} />
                <circle id="Junction_19" cx="1404.2" cy="594.9" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_19"), transition: "opacity 0.3s" }} />
                <circle id="Junction_20" cx="1442.03" cy="457.81" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_20"), transition: "opacity 0.3s" }} />
                <circle id="Junction_21" cx="405.85" cy="512.55" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_21"), transition: "opacity 0.3s" }} />
                <path id="Segment_1" d="M149.68 457.81h120.78" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_1"), transition: "opacity 0.3s" }} />
                <path id="Segment_2" d="M303.85 457.81h-33.39" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_2"), transition: "opacity 0.3s" }} />
                <path id="Segment_3" d="M303.85 457.81h102" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_3"), transition: "opacity 0.3s" }} />
                <path id="Segment_3.5" d="M539.16 457.81H405.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_3.5"), transition: "opacity 0.3s" }} />
                <path id="Segment_4" d="M539.16 457.81h47.22" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_4"), transition: "opacity 0.3s" }} />
                <path id="Segment_5" d="M586.38 291.53v166.28" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_5"), transition: "opacity 0.3s" }} />
                <path id="Segment_6" d="M586.38 457.81v54.74h26.8" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_6"), transition: "opacity 0.3s" }} />
                <path id="Segment_7" d="M613.18 512.55v67.57" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_7"), transition: "opacity 0.3s" }} />
                <path id="Segment_8" d="M613.18 512.55h86v13" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_8"), transition: "opacity 0.3s" }} />
                <path id="Segment_9" d="M586.38 457.81h94.17" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_9"), transition: "opacity 0.3s" }} />
                <path id="Segment_10" d="M813.33 457.81H680.55" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_10"), transition: "opacity 0.3s" }} />
                <path id="Segment_11" d="M699.18 525.55h11.78l102.37-43.78v-23.96" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_11"), transition: "opacity 0.3s" }} />
                <path id="Segment_12" d="M870.95 593.72V481.77h-27.62v-23.96" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_12"), transition: "opacity 0.3s" }} />
                <path id="Segment_13" d="M813.33 457.81h30" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_13"), transition: "opacity 0.3s" }} />
                <path id="Segment_14" d="M1012.11 457.81H843.33" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_14"), transition: "opacity 0.3s" }} />
                <path id="Segment_15" d="M1012.11 457.81h132.27" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_15"), transition: "opacity 0.3s" }} />
                <path id="Segment_16" d="M1211.94 457.81h-67.56" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_16"), transition: "opacity 0.3s" }} />
                <path id="Segment_17" d="M1211.94 457.81h63.17" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_17"), transition: "opacity 0.3s" }} />
                <path id="Segment_18" d="M1137.48 594.54v-68.99h6.9v-67.74" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_18"), transition: "opacity 0.3s" }} />
                <path id="Segment_19" d="M1442.03 457.81h-166.92" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_19"), transition: "opacity 0.3s" }} />
                <path id="Segment_20" d="M1404.2 594.9V481.77h37.83v-23.96" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_20"), transition: "opacity 0.3s" }} />
                <path id="Segment_21" d="M405.85 512.55v-54.74" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_21"), transition: "opacity 0.3s" }} />
                <path id="sci-level1-womens-restroom" d="M586.38 291.53h-29.96v-21.57" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-level1-womens-restroom"), transition: "opacity 0.3s" }} />
                <path id="sci-level1-mens-restroom" d="M586.38 291.53h24.73v-21.57" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-level1-mens-restroom"), transition: "opacity 0.3s" }} />
                <path id="sci-101-seg" d="M270.46 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-101-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-103-seg" d="M303.85 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-103-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-106-seg" d="M539.16 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-106-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-122-seg" d="M680.55 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-122-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-123-seg" d="M813.33 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-123-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-124-seg" d="M843.33 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-124-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-125-seg" d="M1012.11 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-125-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-130-seg" d="M1144.38 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-130-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-132-seg" d="M1211.94 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-132-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-133-seg" d="M1275.11 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-133-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-134-seg" d="M1442.03 437.96v19.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-134-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-140-seg" d="M613.18 580.12h12.72v20.71" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-140-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-145-seg" d="M613.18 580.12h-61.5v20.71" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-145-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-151-seg" d="M870.95 593.72h-33.53" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-151-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-153-seg" d="M870.95 593.72h30.55" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-153-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-155-seg" d="M1137.48 594.54h-32.37" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-155-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-157-seg" d="M1137.48 594.54h31" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-157-seg"), transition: "opacity 0.3s" }} />
                <path id="sci-158-seg" d="M1372.18 594.9h32.02" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("sci-158-seg"), transition: "opacity 0.3s" }} />
                <path id="exit-1to2-only" d="m1376.75 528.7-101.64-32.55v-38.34" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("exit-1to2-only"), transition: "opacity 0.3s" }} />
                <path id="left-stairs" d="M149.68 457.81v74.87h-23.74v-54.37" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("left-stairs"), transition: "opacity 0.3s" }} />
                <path id="center-stairs" d="M699.18 525.55v9.31h-44.94" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("center-stairs"), transition: "opacity 0.3s" }} />
                <path id="building-exit-to-msb-only" d="M1442.03 457.81h63.17" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("building-exit-to-msb-only"), transition: "opacity 0.3s" }} />
                <path id="building-exit-5" d="M870.95 593.72v172.34" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("building-exit-5"), transition: "opacity 0.3s" }} />
                <path id="building-exit-4" d="M1137.48 594.54v172.33" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("building-exit-4"), transition: "opacity 0.3s" }} />
                <path id="building-exit-3" d="M1404.2 594.9v172.33" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("building-exit-3"), transition: "opacity 0.3s" }} />
                <path id="building-exit-2" d="m405.85 512.55-62.5 284.2" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("building-exit-2"), transition: "opacity 0.3s" }} />
                <path id="building-exit-1" d="m405.85 512.55-305.5 284.2" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("building-exit-1"), transition: "opacity 0.3s" }} />
                <path id="building-exit-6" d="M149.68 457.81H91.35" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("building-exit-6"), transition: "opacity 0.3s" }} />
            </g>
        </svg>
    );
});
