import React from 'react';
export const CPCLevel2 = React.memo(function CPCLevel2({ getColor, onHover, onClick, activeSegments = new Set() }) {
    // Check if a junction should be visible (hidden by default)
    const jVis = (junctionId) => activeSegments.has("CPC-2:" + junctionId.toLowerCase()) ? 0 : 0;
    // Check if a path segment should be visible
    const sVis = (segId) => activeSegments.has("CPC-2:" + segId) ? 1 : 0;
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

    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Floor_2" data-name="Floor 2" viewBox="0 0 720 720" role="img" aria-label="CPC Floor 2 map">
            <path id="hallway" d="M93.61 212.83v282.43h208.17v46.96h34.68l4-15.65h20.45l4 15.65h161.66v-6H628.3V304.48H480.65v-91.65z" fill="#e5e5e5" aria-hidden="true" />
            <path id="mech-room" d="M448.65 395.57h29.13v23.26h-29.13z" {...r("mech-room")} />
            <path id="mech-room-2" d="M420.48 395.57h24.17v23.26h-24.17z" data-name="mech-room" {...r("mech-room-2")} />
            <path id="cpc-201" d="M518.04 354.83v36.74h13.31v31.26h-36.92V476h-2v18.2h2v48.02h32.14v-6H628.3V336.5z" {...r("cpc-201")} />
            <path id="cpc-206" d="M344.57 212.83h136.08v134H379.7v4.3h-35.13z" {...r("cpc-206")} />
            <path id="cpc-207" d="M364.91 398.76h51.57v24.07h73.95V476h2v18.2h-2v48.02H364.91l-4-15.65h-20.45v-93.18h24.45z" {...r("cpc-207")} />
            <path id="cpc-214" d="M207.8 212.83v134h97.44v4.3h35.33v-138.3z" {...r("cpc-214")} />
            <path id="cpc-216" d="M93.61 212.83H203.8v134h-32.28v4.3h-42.95v-6.46H93.61z" {...r("cpc-216")} />
            <path id="cpc-216a" d="M109.35 344.67v4H93.61v47.26h15.74v4h9.98v-4h3.28V393h48.91v-37.87h-46.95v-6.46h-5.24v-4z" {...r("cpc-216a")} />
            <path id="cpc-218" d="M264.26 397H126.61v2.93h-33v95.33h170.65z" {...r("cpc-218")} />
            <g id="Walls" aria-hidden="true">
                <path d="M530.57 546.22H360.92v-15.65h-20.46v15.65h-42.67v-46.96H89.61V208.83h395.04v91.56h157.04v56.44h-9.39v183.39H530.56v6Zm-165.66-4h161.65v-6H628.3V352.83h9.39v-48.44H480.65v-91.56H93.61v282.43h208.17v46.96h34.67v-15.65h28.46z" />
                <path d="M490.43 494.2h4v50.02h-4zM340.46 528.57h-4V390.46h28.45v4.3h25.98v4h-29.98v-4.3h-20.45zM297.78 471.7h4v25.57h-4zM268.26 497.26h-4V397h-65.3v-4h69.3zM126.61 399.93h-7.28v-4h3.28V393h57.37v4h-53.37zM91.61 395.93h17.74v4H91.61z" />
                <path d="M175.52 395h-4v-48.17h8.46v4h-4.46zM198.96 346.83h83.54v4h-83.54z" />
                <path d="M173.52 355.13h-48.95v-6.46h-5.24v-4h9.24v6.46h44.95zM91.61 344.67h17.74v4H91.61zM203.8 210.83h4v138h-4zM344.57 355.13h-43.33v-4.3h-7.59v-4h11.59v4.3h35.33v-140.3h4z" />
                <path d="M383.7 355.13h-41.13v-4h37.13v-4.3h11.97v4h-7.97zM493.02 354.15h-12.37v-3.32h-77.62l-.02-4h81.64v3.32h8.37z" />
                <path d="M480.65 302.39h4v46.04h-4zM518.04 382.61h-4v-28.46h-9.87v-4h13.87zM494.43 476h-4v-53.17h-73.95v-24.07h-5.96v-4h9.96v24.07h73.95z" />
                <path d="M531.35 422.83h-38.92v-4h34.92v-23.26h-68.57v-4h72.57zM432.04 391.57h17.48v4h-17.48z" />
                <path d="M444.65 393.57h4v27.26h-4zM477.78 393.57h4v27.26h-4zM420.48 396.76h-4v-5.19h6.04v4h-2.04zM360.91 491.65h4v36.91h-4zM364.91 468.7h-4v-35.31h-22.45v-4h26.45z" />
                <path d="M360.91 396.76h4v34.63h-4zM338.46 477.52h24.46v4h-24.46zM628.22 302.39h11.48v52.43h-11.48z" />
                <path d="M516.04 354.7h28.34l15.46 7.04 13.5-2.5 12.03-1.02 8.51 3.03 7.53-5.97 7.54-2.35h14.18l2.25 3.23h4.92V336.5H510.11v14.09zM536.91 317.7h74.35v5h-74.35zM320.11 408.04h-4v-4h-25.76v-13.58h34.39v6.19h13.72v4h-17.72v-6.19h-26.39v5.58h25.76zM316.11 419.52h4v7.57h-4z" />
                <path d="M320.11 434.65h-4v-9.56h22.35v4h-18.35zM338.46 456.09h-22.35v-8.92h4v4.92h18.35z" />
                <path d="M301.78 460.51h-4v-8.42h20.33v4h-16.33zM320.11 402.04h-4v-5.39h6.63v4h-2.63z" />
                <path d="M293.85 393.83h27.39v6.52h-27.39zM316.46 479.52h5v45h-5zM482.65 252.22h-61.08V242h4v6.22h57.08zM406.39 252.22H279.62V242h4v6.22h118.77V242h4zM266.11 252.22H205.8v-4h56.31V242h4z" />
                <path d="M283.62 333.61h-8.55v-4h4.55v-79.39h4zM292.09 329.61h12.23v4h-12.23z" />
                <path d="M295.17 331.61h4v17.22h-4zM322.12 288.91h40.89v4h-40.89zM281.62 288.91h27.88v4h-27.88zM265.58 318.93h-8.17v-53.2h8.17v4h-4.17v45.2h4.17z" />
                <path d="M245.91 265.73h13.5v4h-13.5zM205.8 307.7h53.61v4H205.8zM261.41 348.83h-4v-19.22h8.17v4h-4.17zM410.85 333.61h-8.46v-83.39h4v79.39h4.46zM389.47 348.83h-4v-19.22h7.67v4h-3.67z" />
                <path d="M375.92 288.91h28.47v4h-28.47zM482.65 311.5h-54.92v-46.16h17.45v4h-13.45v38.16h50.92z" />
                <path d="M421.12 265.34h8.61v4h-8.61zM431.73 318.74h-10.61v-4h6.61v-5.24h4zM428.89 348.44h-4v-14.83h-3.77v-4h7.77z" />
                <g id="stairs">
                    <path d="M605.48 319.3h2v17.2h-2zM601.48 319.3h2v17.2h-2zM597.48 319.3h2v17.2h-2zM593.48 319.3h2v17.2h-2zM605.48 302.39h2v16.91h-2zM601.48 302.39h2v16.91h-2zM597.48 302.39h2v16.91h-2zM593.48 302.39h2v16.91h-2zM589.48 302.39h2v16.91h-2zM585.48 302.39h2v16.91h-2zM581.48 302.39h2v16.91h-2zM577.48 302.39h2v16.91h-2zM573.48 302.39h2v16.91h-2z" />
                    <g>
                        <path d="M569.48 302.39h2v.5h-2zM571.48 317.74h-2v-1.06h2zm0-2.12h-2v-1.06h2zm0-2.12h-2v-1.06h2zm0-2.12h-2v-1.06h2zm0-2.12h-2v-1.06h2zm0-2.13h-2v-1.06h2zm0-2.12h-2v-1.06h2zM569.48 318.8h2v.5h-2z" />
                    </g>
                </g>
                <g id="stairs-2" data-name="stairs">
                    <path d="M318.96 483.39h19.5v2h-19.5zM318.96 487.39h19.5v2h-19.5zM318.96 491.39h19.5v2h-19.5zM318.96 495.39h19.5v2h-19.5zM299.78 483.39h19.17v2h-19.17zM299.78 487.39h19.17v2h-19.17zM299.78 491.39h19.17v2h-19.17zM299.78 495.39h19.17v2h-19.17zM318.96 499.39h19.5v2h-19.5zM318.96 503.39h19.5v2h-19.5zM318.96 507.39h19.5v2h-19.5zM318.96 511.39h19.5v2h-19.5zM299.78 499.39h19.17v2h-19.17zM299.78 503.39h19.17v2h-19.17zM299.78 507.39h19.17v2h-19.17zM299.78 511.39h19.17v2h-19.17zM318.96 515.39h19.5v2h-19.5zM318.96 519.39h19.5v2h-19.5zM299.78 515.39h19.17v2h-19.17zM299.78 519.39h19.17v2h-19.17z" />
                </g>
                <path d="M481.78 395.57h45.57v23.26h-45.57z" />
                <path d="M340.46 394.46h20.46v34.94h-20.46z" />
            </g>
            <g id="Bathroom-Sign-1" aria-hidden="true">
                <g id="Bathroom-Sign-2">
                    <path id="b-sign4" d="m451.79 324.66-1.12 5.32a1.353 1.353 0 0 1-2.63-.44c.57-2.36.82-4.94 1.46-7.27.35-1.27 1.12-1.91 2.46-2.01 1.58-.12 4.18-.12 5.76 0 1.17.09 2.06.66 2.39 1.81.29 2.3 1.21 4.82 1.45 7.09.19 1.8-1.74 2.38-2.57.89l-1.18-5.58v17.23s-.2.44-.21.47c-.01.02-.27.22-.31.24-.86.56-1.85.19-2.1-.8l-.03-9.86c-.06-.49-.6-.63-.65 0-.26 3.05.27 6.52 0 9.57-.08.97-.75 1.47-1.71 1.32-.34-.05-.71-.4-.85-.71-.03-.06-.16-.46-.16-.49z" />
                    <path id="b-sign1" d="M456.55 318.88c-2.18 2.25-5.66-1.05-3.43-3.33 2.17-2.22 5.55 1.14 3.43 3.33" />
                </g>
            </g>
            <g id="Bathroom-Sign-3" aria-hidden="true">
                <path id="b-sin5" d="m226.86 333.76 2.46-8.6-2.29 5.05c-.83 1.28-2.78.54-2.48-.99l3.68-8.28c.37-.53.82-.65 1.44-.69 1.46-.09 3.93-.12 5.37 0 .52.05.92.22 1.21.67 1.08 2.54 2.37 5.01 3.43 7.57.19.47.38.76.31 1.3-.13 1.01-1.43 1.41-2.19.78-.23-.19-.31-.4-.44-.66-.79-1.52-1.37-3.24-2.13-4.79l-.27-.47 2.39 9.12h-2.07v7.86s-.13.29-.17.35c-.67 1.22-2.54.73-2.55-.74 0-.12.07-.25.07-.39-.01-2.31 0-4.61 0-6.92-.05-.28-.5-.12-.71-.16v7.92s-.16.34-.19.39c-.39.58-1.34.75-1.91.36-.17-.12-.55-.62-.55-.81v-7.76s-.09-.1-.1-.1h-2.3Z" />
                <path id="b-sign2" d="M232.16 314.83c3.11-.15 3.34 4.68.17 4.77-3.07.09-3.28-4.62-.17-4.77" />
            </g>
            <g id="Pathing" aria-hidden="true">
                <path id="Exit_1" d="M309.4 521.4v11.9h19.9v-67.2h-50v-95.2" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Exit_1"), transition: "opacity 0.3s" }} />
                <path id="Exit_2" d="M498.2 370.9v-41h125.7v-18.5h-54.4" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Exit_2"), transition: "opacity 0.3s" }} />
                <path id="Segment_1" d="M400.7 370.9h97.5" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_1"), transition: "opacity 0.3s" }} />
                <path id="Segment_2" d="M400.7 370.9H288.1" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_2"), transition: "opacity 0.3s" }} />
                <path id="Segment_3" d="M288.1 370.9h-8.8" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_3"), transition: "opacity 0.3s" }} />
                <path id="Segment_4" d="M189.5 370.9h89.8" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_4"), transition: "opacity 0.3s" }} />
                <path id="cpc-201-seg" d="M498.2 370.9v16.2H518" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("cpc-201-seg"), transition: "opacity 0.3s" }} />
                <path id="cpc-207-seg" d="M400.7 398.8v-27.9" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("cpc-207-seg"), transition: "opacity 0.3s" }} />
                <path id="cpc-206-seg" d="M400.7 346.8v24.1" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("cpc-206-seg"), transition: "opacity 0.3s" }} />
                <path id="cpc-214-seg" d="M288.1 370.9v-24.1" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("cpc-214-seg"), transition: "opacity 0.3s" }} />
                <path id="cpc-216-seg" d="M189.5 370.9v-24.1" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("cpc-216-seg"), transition: "opacity 0.3s" }} />
                <path id="cpc-218-seg" d="M189.5 397v-26.1" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("cpc-218-seg"), transition: "opacity 0.3s" }} />
                <circle id="Junction_1" cx="189.5" cy="370.9" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_1"), transition: "opacity 0.3s" }} />
                <circle id="Junction_2" cx="279.3" cy="370.9" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_2"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3" cx="288.1" cy="370.9" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_3"), transition: "opacity 0.3s" }} />
                <circle id="Junction_4" cx="400.7" cy="370.9" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_4"), transition: "opacity 0.3s" }} />
                <circle id="Junction_5" cx="498.2" cy="370.9" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_5"), transition: "opacity 0.3s" }} />
            </g>
        </svg>
    );
});

export default CPCLevel2;
