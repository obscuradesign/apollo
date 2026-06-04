import React from 'react';
export const ALevel1 = React.memo(function ALevel1({ getColor, onHover, onClick, activeSegments = new Set() }) {
    // Check if a junction should be visible (hidden by default)
    const jVis = (junctionId) => activeSegments.has("ART-1:" + junctionId.toLowerCase()) ? 0 : 0;
    // Check if a path segment should be visible
    const sVis = (segId) => activeSegments.has("ART-1:" + segId) ? 1 : 0;

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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720" role="img" aria-label="Art Building Floor 1 map">
            <g id="Floor_11" data-name="Floor_1">
                <path id="hallway" d="M480.6 129.4v70.5h33.5v-8.1h70.6V472H562v84.7h-47.9v-10.6h-27.6l-3 10.6h-285v-59.3h-32.3l-8.5-16.9 8.5-17.8-8.6-18.3 8.6-17.5-8.6-18.3 8.6-17.8-8.6-18.5 8.6-17-8.6-18.9 8.6-17.1-8.6-17.2 8.6-18-8.6-19.1 8.6-15.4h29.3l3-103.5v-16.7z" fill="#e5e5e5" aria-hidden="true" />
                <path id="a-100" d="M198.5 475h120.3v81.7H198.5z" {...r("a-100")} />
                <path id="a-102" d="M321.8 475h92.9v81.7h-92.9z" {...r("a-102")} />
                <path id="a-102a" d="M414.7 475h26.2v54.3h-26.2z" {...r("a-102a")} />
                <path id="a-103" d="M414.7 532.2h26.2v24.5h-26.2z" {...r("a-103")} />
                <path id="a-110" d="M514.1 530.7H562v26h-47.9z" {...r("a-110")} />
                <path id="a-112" d="M528.8 475H562v52.7h-47.9v-31h14.7z" {...r("a-112")} />
                <path id="a-114" d="M514.1 442.2h34.3v29.7h-34.3z" {...r("a-114")} />
                <path id="a-116" d="M548.4 442.2h36.3v29.7h-36.3z" {...r("a-116")} />
                <path id="a-118" d="M514.1 334.9h70.6v107.3h-70.6z" {...r("a-118")} />
                <path id="a-119" d="M514.1 268.2h70.6v63.7h-70.6z" {...r("a-119")} />
                <path id="a-120" d="M514.1 191.8h70.6v73.3h-70.6z" {...r("a-120")} />
                <path id="a-124" d="M380.8 190.7h99.8v78.4h-99.8z" {...r("a-124")} />
                <path id="a-125" d="M248.4 129.4h232.1v58.2H248.4z" {...r("a-125")} />
                <path id="a-125a" d="M198.5 164.1h22.6v23.6h-22.6z" {...r("a-125a")} />
                <path id="a-125b" d="M198.5 129.4h49.9v58.3h-27.3v-23.6h-22.6z" {...r("a-125b")} />
                <path id="a-126" d="M237.2 190.7h143.6v78.4H237.2z" {...r("a-126")} />
                <path id="a-126a" d="M198.5 190.7h38.7v78.4h-38.7z" {...r("a-126a")} />
                <g id="Walls" aria-hidden="true">
                    <path d="M198.5 138.1h-3v-11.7h73.9v3h-70.9zM483.6 142.2h-3v-12.8H278.4v-3h205.2zM483.6 190.7H195.5v-44.6h3v41.6h282.1v-1.3h3zM480.6 157.7h3v20.7h-3z" />
                    <path d="M483.6 272.1h-81.9v-3h78.9v-79.9h3zM319.3 269.1H385v3h-65.7zM302.8 272.1H195.5v-82.9h3v79.9h104.3z" />
                    <path d="M237.2 262.5h3v8h-3zM237.2 189.2h3v58.7h-3zM248.4 176.5h3v12.7h-3zM248.4 127.9h3v39.7h-3zM224.1 167.7h-3v-3.6H197v-3h27.1zM221.1 176.5h3v12.7h-3zM380.8 261.2h3v9.4h-3zM380.8 189.2h3v56.7h-3zM511.1 234h3v36.6h-3z" />
                    <path d="M587.7 475h-7.2v-3h4.2V191.8h-70.6v34.3h-3v-37.3h76.6zM567.6 475h-56.5v-16.8h3V472h53.5zM511.1 438.3h3v12.5h-3zM511.1 277.8h3v152.4h-3z" />
                    <path d="M512.6 331.9h73.6v3h-73.6zM562 473.5h3V566h-3zM482.1 196.9h7.8v3h-7.8zM504.8 196.9h7.8v3h-7.8z" />
                    <path d="M563.5 559.7h-52.4v-20.3h3v17.3h49.4zM486.5 559.7h-291V472h104v3h-101v81.7h285v-23.8h-12.2v-3h15.2zM316.7 472h67.7v3h-67.7z" />
                    <path d="M318.8 473.5h3v84.7h-3zM474 486.1h-8.5V475h-65.6v-3h68.6v11.1h5.5z" />
                    <path d="M440.8 473.5h3v84.7h-3zM411.7 547.6h3v10.6h-3zM411.7 498.3h3v41.1h-3zM411.7 473.5h3v16.8h-3z" />
                    <path d="M486.5 518.4h-44.2v-3h41.2v-41.9h3z" />
                    <path d="M482.1 483.1h2.9v3h-2.9zM511.1 514.9h3v16.4h-3z" />
                    <path d="M512.6 527.7h50.9v3h-50.9zM511.1 488.7h3v15.7h-3z" />
                    <path d="M528.8 496.7h-16.2v-3h13.2v-20.2h3zM511.1 473.5h3v7.7h-3zM512.6 439.2H568v3h-55.4zM580.8 439.2h5.3v3h-5.3z" />
                    <path d="M545.4 440.7h3v7.5h-3zM545.4 455h3v18.5h-3zM512.6 265.2h73.6v3h-73.6zM474.1 516.9h3v4h-3zM474.1 528.6h3v2.8h-3zM162.3 508.3l-2.2-2.1s3.1-3.4 3.1-9.5-1.1-4.5-2.3-6.6c-1.5-2.5-3.3-5.4-3.3-10.5s1.6-7 3-9 2.6-3.7 2.6-8-1.1-5.8-2.4-7.7c-1.5-2.2-3.2-4.7-3.2-10.6s1.8-8.9 3.4-11.3c1.2-1.8 2.2-3.2 2.2-6.2s-1.1-5-2.3-7.2c-1.5-2.6-3.2-5.6-3.2-11.1s1.7-8 3.1-10.3c1.3-2 2.4-3.8 2.4-7.5s-1.4-6.7-2.8-9.4c-1.4-2.6-2.8-5.3-2.8-9.1s1.5-6.4 2.9-8.8c1.4-2.3 2.7-4.5 2.7-8.2s-1.2-6-2.6-8.5c-1.5-2.8-3-5.8-3-10.4s1.6-7.4 3.1-9.7c1.3-2.2 2.5-4 2.5-7.4s-1.3-6-2.8-8.6c-1.4-2.5-2.8-5-2.8-8.7s1.5-6.9 3-9.9c1.3-2.7 2.6-5.3 2.6-8.1s-1-4.6-2.2-6.9c-1.6-3.1-3.4-6.6-3.4-12.2s1.8-8.2 3.3-10.6c1.3-1.9 2.2-3.5 2.2-6.3 0-6.3-2.8-9.8-2.9-9.8l2.3-2c.1.2 3.6 4.2 3.6 11.7s-1.4 5.9-2.7 7.9c-1.5 2.3-2.8 4.4-2.8 9s1.5 7.9 3 10.8c1.3 2.6 2.5 5 2.5 8.3s-1.5 6.5-2.9 9.4c-1.4 2.8-2.7 5.5-2.7 8.6s1.1 4.9 2.4 7.2c1.5 2.6 3.1 5.6 3.1 10s-1.5 6.7-2.9 9c-1.4 2.2-2.6 4.3-2.6 8.1s1.3 6.4 2.7 9c1.4 2.7 2.9 5.6 2.9 9.9s-1.6 7.3-3.1 9.8c-1.3 2.2-2.5 4.2-2.5 7.3s1.1 5.2 2.4 7.7c1.5 2.8 3.1 5.9 3.1 10.8s-1.5 6.9-2.9 9.2c-1.4 2.1-2.7 4.2-2.7 8.6s1.4 7.1 2.8 9.6c1.3 2.3 2.7 4.7 2.7 8.7s-1.4 5.9-2.7 7.9c-1.4 2.1-2.9 4.3-2.9 9.6s1.3 6.9 2.7 8.9c1.4 2.1 2.9 4.3 2.9 9.4s-1.7 7.7-3.1 9.7c-1.3 1.8-2.4 3.4-2.4 7.3s1.4 6.5 2.8 8.9c1.3 2.2 2.7 4.5 2.7 8.1 0 7.4-3.8 11.4-3.9 11.6Z" />
                    <path d="M164.7 246.6h7.4v3h-7.4zM184.9 246.6H197v3h-12.1zM561.6 190.3h-3v-29.4h-46v-3h49z" />
                    <path d="M512.6 173.4H548v3h-35.4z" />
                    <path d="M515.3 159.4h2v15.5h-2zM519.3 159.4h2v15.5h-2zM523.3 159.4h2v15.5h-2zM527.3 159.4h2v15.5h-2zM531.3 159.4h2v15.5h-2zM535.3 159.4h2v15.5h-2zM539.3 159.4h2v30.9h-2zM543.3 159.4h2v30.9h-2zM535.3 175.7h2v13.4h-2z" />
                    <g>
                        <path d="M531.3 176.3h2v.5h-2zM533.3 187.3h-2v-1.1h2zm0-2.1h-2v-1.1h2zm0-2.1h-2V182h2zm0-2.1h-2v-1.1h2zm0-2.1h-2v-1.1h2zM531.3 188.4h2v.5h-2z" />
                    </g>
                    <g>
                        <path d="M414.7 530.7h26.1M414.7 529.2h26.2v3h-26.2z" />
                    </g>
                    <path d="M501.2 546.1h9.8v3h-9.8zM165 497.4h4.8v3H165zM191.9 497.4h3.6v3h-3.6z" />
                </g>
                <g id="Bathroom-Sign-1" aria-hidden="true">
                    <g id="Bathroom-Sign-2">
                        <path id="b-sign4" d="m454.8 534.8-1 4.6c-.5 1.2-2.2 1-2.3-.4.5-2.1.7-4.3 1.3-6.4q.45-1.65 2.1-1.8c1.4-.1 3.7-.1 5 0s1.8.6 2.1 1.6c.3 2 1.1 4.2 1.3 6.2.2 1.6-1.5 2.1-2.2.8l-1-4.9v15.1l-.2.4s-.2.2-.3.2c-.8.5-1.6.2-1.8-.7v-8.6c0-.4-.5-.6-.6 0-.2 2.7.2 5.7 0 8.4 0 .8-.7 1.3-1.5 1.2s-.6-.4-.7-.6-.1-.4-.1-.4v-14.7Z" />
                        <path id="b-sign1" d="M459 529.7c-1.9 2-4.9-.9-3-2.9s4.9 1 3 2.9" />
                    </g>
                </g>
                <g id="Bathroom-Sign-3" aria-hidden="true">
                    <path id="b-sin5" d="m450.7 499.7 2.1-7.5-2 4.4c-.7 1.1-2.4.5-2.2-.9l3.2-7.2c.3-.5.7-.6 1.3-.6 1.3 0 3.4-.1 4.7 0s.8.2 1.1.6c.9 2.2 2.1 4.4 3 6.6.2.4.3.7.3 1.1-.1.9-1.2 1.2-1.9.7s-.3-.4-.4-.6c-.7-1.3-1.2-2.8-1.9-4.2l-.2-.4 2.1 8h-1.8v6.9l-.1.3c-.6 1.1-2.2.6-2.2-.6v-6.4c0-.2-.4-.1-.6-.1v6.9s-.1.3-.2.3c-.3.5-1.2.7-1.7.3s-.5-.5-.5-.7v-6.8h-2Z" />
                    <path id="b-sign2" d="M455.4 483.2c2.7-.1 2.9 4.1.2 4.2-2.7 0-2.9-4-.2-4.2" />
                </g>
                <g id="Pathing" aria-hidden="true">
                    <path id="Segment_1" d="M180.86 454.51V274.18" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_1"), transition: "opacity 0.3s" }} />
                    <path id="Segment_2" d="M311.07 274.18H180.86" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_2"), transition: "opacity 0.3s" }} />
                    <path id="Segment_3" d="M393.34 274.18h-82.27" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_3"), transition: "opacity 0.3s" }} />
                    <path id="Segment_4" d="M493.87 274.18H393.34" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_4"), transition: "opacity 0.3s" }} />
                    <path id="Segment_5" d="M493.87 434.26V274.18" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_5"), transition: "opacity 0.3s" }} />
                    <path id="Segment_6" d="M493.87 454.51v-20.25" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_6"), transition: "opacity 0.3s" }} />
                    <path id="Segment_7" d="M493.87 454.51v55.14" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_7"), transition: "opacity 0.3s" }} />
                    <path id="Segment_8" d="M493.87 524.72v-15.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_8"), transition: "opacity 0.3s" }} />
                    <path id="Segment_9" d="M493.87 524.72v10.66" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_9"), transition: "opacity 0.3s" }} />
                    <path id="Segment_10" d="M478.05 454.51h15.82" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_10"), transition: "opacity 0.3s" }} />
                    <path id="Segment_11" d="M392.16 454.51h85.89" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_11"), transition: "opacity 0.3s" }} />
                    <path id="Segment_12" d="M308.13 454.51h84.03" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_12"), transition: "opacity 0.3s" }} />
                    <path id="Segment_13" d="M180.86 454.51h127.27" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_13"), transition: "opacity 0.3s" }} />
                    <path id="Segment_14" d="M493.87 230.04v44.14" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_14"), transition: "opacity 0.3s" }} />
                    <path id="Segment_15" d="M493.87 230.04v-62.88" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_15"), transition: "opacity 0.3s" }} />
                    <path id="Segment_16" d="M493.87 149.95v17.21" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_16"), transition: "opacity 0.3s" }} />
                    <path id="Segment_17" d="M180.86 274.18V142.12" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_17"), transition: "opacity 0.3s" }} />
                    <path id="a-100-seg" d="M308.13 454.51v20.45" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-100-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-102-seg" d="M392.16 454.51v20.45" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-102-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-102a-seg" d="M392.16 454.51v20.45" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-102a-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-103-seg" d="M392.16 454.51v20.45" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-103-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-110-seg" d="M493.87 535.38h20.22" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-110-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-112-seg" d="M514.09 509.65h-20.22" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-112-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-114-seg" d="M493.87 454.51h20.22" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-114-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-116-seg" d="M493.87 454.51h20.22" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-116-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-118-seg" d="M493.87 434.26h20.22" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-118-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-119-seg" d="M493.87 274.18h20.22" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-119-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-120-seg" d="M514.09 230.04h-20.22" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-120-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-125-seg" d="M493.87 149.95h-13.3" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-125-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-125a-seg" d="M180.86 142.12h17.64" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-125a-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-124-seg" d="M393.34 269.07v5.11" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-124-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-126b-seg" d="M180.86 142.12h17.64" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-126b-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-126-seg" d="M311.07 274.18v-5.11" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-126-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-126a-seg" d="M180.86 142.12h17.64" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-126a-seg"), transition: "opacity 0.3s" }} />
                    <path id="a-level2-mens-restroom" d="M493.87 524.72h-19.76" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-level2-mens-restroom"), transition: "opacity 0.3s" }} />
                    <path id="a-level1-womens-restroom" d="M478.05 454.51v31.6" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("a-level1-womens-restroom"), transition: "opacity 0.3s" }} />
                    <path id="Southeast-building-exit" d="M493.87 535.38v10.73" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Southeast-building-exit"), transition: "opacity 0.3s" }} />
                    <path id="Southwest-building-exit" d="M180.86 454.51v42.91" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Southwest-building-exit"), transition: "opacity 0.3s" }} />
                    <path id="Northwest-building-exit" d="M172.09 142.12h8.77" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Northwest-building-exit"), transition: "opacity 0.3s" }} />
                    <path id="Northeast-building-exit" d="M493.87 149.95V132.7" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Northeast-building-exit"), transition: "opacity 0.3s" }} />
                    <path id="exit" d="M493.87 167.16h59.45v15.46h-22.06" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("exit"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_1" cx="180.86" cy="274.18" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_1"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_2" cx="311.07" cy="274.18" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_2"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_3" cx="393.34" cy="274.18" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_3"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_4" cx="493.87" cy="274.18" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_4"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_5" cx="493.87" cy="230.04" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_5"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_6" cx="493.87" cy="167.16" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_6"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_7" cx="493.87" cy="149.95" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_7"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_8" cx="493.87" cy="434.26" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_8"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_9" cx="493.87" cy="454.51" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_9"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_10" cx="478.05" cy="454.51" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_10"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_11" cx="392.16" cy="454.51" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_11"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_12" cx="308.13" cy="454.51" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_12"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_13" cx="493.87" cy="509.65" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_13"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_14" cx="493.87" cy="524.72" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_14"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_15" cx="493.87" cy="535.38" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_15"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_16" cx="180.86" cy="454.51" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_16"), transition: "opacity 0.3s" }} />
                    <circle id="Junction_17" cx="180.86" cy="142.12" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_17"), transition: "opacity 0.3s" }} />
                </g>
            </g>
        </svg>
    );
});

export default ALevel1;
