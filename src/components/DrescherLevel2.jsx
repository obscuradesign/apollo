import React from 'react';


export const DrescherLevel2 = React.memo(function DrescherLevel2({ getColor, onHover, onClick, activeSegments = new Set() }) {
    
    // Check if a junction should be visible (hidden by default)
    const jVis = (junctionId) => activeSegments.has("DRSCHR-2:" + junctionId.toLowerCase()) ? 0 : 0;
    
    // Check if a path segment should be visible
    const sVis = (segId) => {
        return activeSegments.has("DRSCHR-2:" + segId) ? 1 : 0;
    };

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

    const wallStyle = { stroke: "#000", strokeMiterlimit: 10, strokeWidth: ".5px" };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 792 576" role="img" aria-label="Drescher Hall Floor 2 map">
            <g id="hallways" fill="#e5e5e5" aria-hidden="true">
                <polygon id="hallway" points="63.37 236.4 63.37 286.67 67.41 295.28 73.36 299.59 83.36 301.02 92.74 299 98.91 293.2 101.61 288.87 101.61 342.17 446.33 342.17 436.16 346.35 430.61 353.46 429.5 362.16 431.46 371.31 436.93 376.93 445.48 380.52 529.22 380.52 529.22 342.58 690.57 342.58 690.57 289.74 728.46 289.74 728.46 241.09 724.41 231.7 717.04 226.8 707.13 225.3 698.46 228.7 693.7 233.12 690.37 238.28 690.37 181.28 101.46 181.28 101.46 237.04 63.37 236.4" />
            </g>
            <polygon id="drschr-201" points="429.35 290.14 423.56 290.14 423.56 341.48 476.36 341.48 476.36 286.87 462.22 286.87 462.22 292.73 439.52 292.73 439.52 290.14 429.35 290.14" {...r("drschr-201")} />
            <polygon id="drschr-202" points="419.62 273.14 413.87 273.14 396.99 273.14 396.99 275.52 377.7 275.52 377.7 280.3 370.29 280.3 370.29 286.49 370.29 341.48 421.99 341.48 421.99 273.14 419.62 273.14" {...r("drschr-202")} />
            <polygon id="drschr-203" points="319.17 269.41 325.06 269.41 325.06 280.3 370.29 280.3 370.29 286.49 368.71 286.49 368.71 341.48 317.08 341.48 317.08 286.49 317.08 280.84 317.08 269.41 319.17 269.41" {...r("drschr-203")} />
            <polyline id="drschr-204" points="315.5 341.48 263.94 341.48 263.94 273 265.24 273 270.68 273 272.82 273 272.82 275.42 285.12 275.42 291.05 275.42 305.52 275.42 305.52 273 308.48 273 315.5 273 315.5 280.84 317.08 280.84 317.08 286.49 315.5 286.49" {...r("drschr-204")} />
            <polygon id="drschr-204a" points="274.4 258.31 274.4 273.84 285.12 273.84 285.12 275.42 291.05 275.42 291.05 273.84 291.26 273.84 291.26 258.31 274.4 258.31" {...r("drschr-204a")} />
            <polygon id="drschr-205" points="260.21 269.41 254.15 269.41 254.15 283.14 223.81 283.14 223.81 280.95 210.25 280.95 210.25 341.48 262.36 341.48 262.36 269.41 260.21 269.41" {...r("drschr-205")} />
            <polygon id="drschr-206" points="216.52 258.21 211.04 258.21 210.25 258.21 210.25 279.37 225.39 279.37 225.39 281.56 252.57 281.56 252.57 258.21 216.52 258.21" {...r("drschr-206")} />
            <polygon id="drschr-207" points="208.68 341.48 208.68 280.95 195.39 280.95 195.39 283.14 166.15 283.14 166.15 269.31 165.57 269.31 159.82 269.31 157.87 269.31 157.87 341.48 208.68 341.48" {...r("drschr-207")} />
            <polygon id="drschr-208" points="156.29 269.31 154.34 269.31 148.19 269.31 146.36 269.31 146.36 277.11 127.8 277.11 127.8 271.09 114.59 271.09 114.59 276.32 113.01 276.32 113.01 269.31 111.2 269.31 105.17 269.31 102.4 269.31 102.4 341.48 156.29 341.48 156.29 269.31" {...r("drschr-208")} />
            <polygon id="drschr-209" points="144.79 256.88 144.79 255.54 114.59 255.54 114.59 269.51 129.38 269.51 129.38 275.54 144.79 275.54 144.79 261.81 144.79 256.88" {...r("drschr-209")} />
            <polygon id="drschr-210" points="134.89 232.6 139.82 232.6 142.36 232.6 142.36 236.4 155.78 236.4 155.78 181.93 102.4 181.93 102.4 232.6 134.89 232.6" {...r("drschr-210")} />
            <polygon id="drschr-211" points="157.35 181.93 157.35 232.6 187.76 232.6 192.82 232.6 195.53 232.6 195.53 236.4 208.68 236.4 208.68 181.93 157.35 181.93" {...r("drschr-211")} />
            <polygon id="drschr-212" points="210.25 181.93 210.25 239.93 223.81 239.93 223.81 236.4 225.83 236.4 232.54 236.4 262.16 236.4 262.16 181.93 210.25 181.93" {...r("drschr-212")} />
            <polygon id="drschr-213" points="263.73 181.93 263.73 236.4 293.76 236.4 300.34 236.4 302.63 236.4 302.63 239.93 315.3 239.93 315.3 181.93 263.73 181.93" {...r("drschr-213")} />
            <polygon id="drschr-214" points="316.87 181.93 316.87 232.81 346.76 232.81 352.24 232.81 354.4 232.81 354.4 236.4 367.48 236.4 367.48 181.93 316.87 181.93" {...r("drschr-214")} />
            <polygon id="drschr-215" points="441.54 232.26 446.74 232.26 474.99 232.26 474.99 181.93 424.52 181.93 424.52 232.26 441.54 232.26" {...r("drschr-215")} />
            <polygon id="drschr-216" points="515.8 264.99 490.02 264.99 478.79 264.99 448.9 264.99 448.9 233.83 515.8 233.83 515.8 264.99" {...r("drschr-216")} />
            <polygon id="drschr-217" points="476.57 181.93 476.57 232.26 518.37 232.26 523.85 232.26 527.58 232.26 527.58 181.93 476.57 181.93" {...r("drschr-217")} />
            <polygon id="drschr-218" points="581.4 181.93 529.16 181.93 529.16 232.26 530.83 232.26 536.07 232.26 536.07 228.83 581.4 228.83 581.4 181.93" {...r("drschr-218")} />
            <polygon id="drschr-219a" points="615.34 268 617.7 268 617.7 247.29 619.27 247.29 619.27 241.4 617.7 241.4 617.7 215.14 602.87 215.14 602.87 216.71 602.09 216.71 602.09 223.19 603.66 223.19 603.66 242.91 602.09 242.91 602.09 248.42 602.87 248.42 602.87 249.99 581.4 249.99 581.4 230.41 568.19 230.41 568.19 239.62 566.61 239.62 566.61 245.54 567.4 245.54 567.4 247.12 566.61 247.12 566.61 253.18 568.19 253.18 568.19 262.77 581.4 262.77 581.4 255.64 582.98 255.64 582.98 267.95 585.62 267.95 591.23 267.95 610.82 267.95 615.34 268" {...r("drschr-219a")} />
            <polygon id="drschr-219b" points="566.61 253.18 566.61 247.12 537.65 247.12 537.65 262.12 566.61 262.6 566.61 253.18" {...r("drschr-219b")} />
            <polygon id="drschr-219c" points="566.61 239.62 566.61 245.54 537.65 245.54 537.65 230.41 566.61 230.41 566.61 239.62" {...r("drschr-219c")} />
            <polygon id="drschr-219d" points="602.09 242.91 602.09 248.42 582.98 248.42 582.98 233.83 602.09 233.83 602.09 242.91" {...r("drschr-219d")} />
            <polygon id="drschr-219e" points="602.09 223.19 602.09 216.71 582.98 216.71 582.98 232.26 602.09 232.26 602.09 223.19" {...r("drschr-219e")} />
            <polygon id="drschr-219f" points="617.7 204.97 619.27 204.97 619.27 210.86 617.7 210.86 617.7 215.14 602.87 215.14 582.98 215.14 582.98 181.93 617.7 181.93 617.7 204.97" {...r("drschr-219f")} />
            <polygon id="drschr-220" points="689.5 181.93 619.27 181.93 619.27 204.97 619.27 210.86 619.27 241.4 619.27 247.29 619.27 265.54 654.37 265.54 654.37 272.52 655.22 272.52 655.22 273.38 689.5 273.38 689.5 181.93" {...r("drschr-220")} />
            <polygon id="drschr-221" points="636.67 295.29 636.67 341.79 689.5 341.79 689.5 295.29 643.04 295.29 636.67 295.29" {...r("drschr-221")} />
            <polygon id="drschr-222" points="628.35 295.29 582.98 295.29 582.98 341.79 635.09 341.79 635.09 295.29 633.69 295.29 628.35 295.29" {...r("drschr-222")} />
            <polygon id="drschr-223" points="523.18 312.85 528.44 312.75 531.65 302.8 525.47 297.64 529.06 290.18 536.09 286.3 541.23 281.81 548.55 281.3 555.01 279.1 556.41 288.6 562.7 291.09 566.97 291.07 569.22 286.35 570.31 283.73 577.99 285.98 581.48 292.41 581.48 341.79 530.01 341.79 528.44 326.35 520.39 326.35 520.39 312.44 523.18 312.85" {...r("drschr-223")} />

            <g id="Walls" aria-hidden="true">
                <path d="M82.64,301.83c-19.28,0-19.89-16.83-19.89-17v-48.88h38.07v-55.6h590.25v94.6h-37.42v-2.43h1.58v.86h34.27v-91.45H102.4v55.6h-38.07v47.28c.02.61.6,15.44,18.32,15.44s18.16-14.84,18.18-15.47v-33.25s1.57,0,1.57,0v33.28c0,.2-.86,17.02-19.76,17.02Z" style={wallStyle} />
                <rect x="81.79" y="254.75" width="1.58" height="27.53" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25" />
                <rect x="101.61" y="232.6" width="33.28" height="1.57" />
                <polygon points="157.35 237.98 140.78 237.98 140.78 234.18 139.82 234.18 139.82 232.6 142.36 232.6 142.36 236.4 155.78 236.4 155.78 181.14 157.35 181.14 157.35 237.98" />
                <polygon points="691.07 295.29 643.04 295.29 643.04 293.72 689.5 293.72 689.5 288.99 727.67 288.99 727.67 232.22 729.25 232.22 729.25 290.57 691.07 290.57 691.07 295.29" />
                <polygon points="530.01 381.27 436.16 381.27 436.16 379.69 528.44 379.69 528.44 341.79 689.5 341.79 689.5 294.51 691.07 294.51 691.07 343.36 530.01 343.36 530.01 381.27" />
                <path d="M513.2,395.65c-15.18,0-15.68-15-15.68-15.15l1.57-.03c.01.56.48,13.61,14.11,13.61s15.18-13.11,15.24-13.67l1.57.16c-.02.15-1.68,15.09-16.81,15.09Z" style={wallStyle} />
                <polygon points="477.93 343.06 100.82 343.06 100.82 284.82 102.4 284.82 102.4 341.48 476.36 341.48 476.36 286.87 462.22 286.87 462.22 292.73 439.52 292.73 439.52 290.14 429.35 290.14 429.35 288.56 441.09 288.56 441.09 291.15 460.64 291.15 460.64 285.3 477.93 285.3 477.93 343.06" />
                <rect x="617.7" y="181.14" width="1.58" height="23.83" />
                <rect x="617.7" y="210.86" width="1.58" height="30.54" />
                <polygon points="654.37 267.11 617.7 267.11 617.7 247.29 619.27 247.29 619.27 265.54 654.37 265.54 654.37 267.11" />
                <polygon points="602.87 249.99 581.4 249.99 581.4 181.14 582.98 181.14 582.98 248.42 602.87 248.42 602.87 249.99" />
                <rect x="602.09" y="223.19" width="1.58" height="19.72" />
                <rect x="582.19" y="215.14" width="20.68" height="1.57" />
                <rect x="582.19" y="232.26" width="20.68" height="1.58" />
                <path d="M582.98,272.61l-1.34-1.34c-8.41-8.42-22.66-7.59-22.81-7.58h-22.75s0-34.85,0-34.85h46.12v1.58h-44.55v31.71h21.13c.54-.04,13.68-.8,22.63,6.8v-13.27h1.58v16.97Z" style={wallStyle} />
                <rect x="581.4" y="289.2" width="1.58" height="53.38" />
                <rect x="582.19" y="293.72" width="46.15" height="1.58" />
                <rect x="633.69" y="293.72" width="4.38" height="1.58" />
                <rect x="635.09" y="294.51" width="1.58" height="48.07" />
                <rect x="582.19" y="268" width="3.42" height="1.58" />
                <rect x="591.23" y="268" width="19.58" height="1.58" />
                <polygon points="619.27 269.58 615.34 269.58 615.34 268 617.7 268 617.7 266.33 619.27 266.33 619.27 269.58" />
                <path d="M530.01,319.74h-1.58v-6.98c0-.24-.13-6.52,4.56-11.63l1.16,1.06c-4.24,4.62-4.14,10.48-4.14,10.54v7.01Z" style={wallStyle} />
                <path d="M537.54,297.58l-1.09-1.14c.17-.16,16.84-15.71,35.24-2.57l-.91,1.28c-17.32-12.37-32.6,1.82-33.24,2.43Z" style={wallStyle} />
                <path d="M556.31,343.36c-10.59,0-17.9-6.6-18.2-6.88l1.07-1.16c.07.06,7.17,6.47,17.14,6.47s15.65-6.35,15.71-6.41l1.18,1.04c-.25.28-6.25,6.94-16.89,6.94Z" style={wallStyle} />
                <path d="M534.44,332.53c-1.62-2.23-2.58-3.87-2.99-4.61h-2.23v-1.57h3.19l.22.43s.96,1.91,3.08,4.82l-1.27.93Z" style={wallStyle} />
                <path d="M577.33,332.69l-.97-1.24.48.62-.49-.62c.05-.04,5.04-4.12,5.04-15.56h1.58c0,12.28-5.42,16.62-5.65,16.8Z" style={wallStyle} />
                <path d="M532.45,303.24l-9.05-4.93.3-.67c.08-.19,8.68-18.54,31.93-18.54h.79v10.26h-1.58v-8.68c-19.18.36-27.65,13.82-29.37,16.96l7.73,4.21-.75,1.38Z" style={wallStyle} />
                <path d="M581.48,292.41c-2.48-5.28-9.05-7.94-11.17-8.67l-1.09,2.62-1.45-.6,1.64-3.93.67.19c.39.11,9.56,2.78,12.82,9.74l-1.43.67Z" style={wallStyle} />
                <path d="M582.98,315.22h-1.58c0-8.52-5.11-14.77-5.16-14.84l-.55-.66,6.05-4.19.9,1.3-4.66,3.23c1.38,1.91,5,7.65,5,15.16Z" style={wallStyle} />
                <rect x="569.49" y="337.95" width="1.58" height="4.32" />
                <rect x="446.74" y="232.26" width="71.63" height="1.58" />
                <rect x="523.85" y="232.26" width="6.98" height="1.58" />
                <rect x="527.58" y="181.14" width="1.58" height="51.91" />
                <polygon points="517.38 266.57 490.02 266.57 490.02 264.99 515.8 264.99 515.8 233.05 517.38 233.05 517.38 266.57" />
                <polygon points="478.79 266.57 447.32 266.57 447.32 233.05 448.9 233.05 448.9 264.99 478.79 264.99 478.79 266.57" />
                <polygon points="441.54 233.83 422.95 233.83 422.95 181.14 424.52 181.14 424.52 232.26 441.54 232.26 441.54 233.83" />
                <polygon points="417.3 233.83 394.73 233.83 394.73 181.14 396.31 181.14 396.31 232.26 417.3 232.26 417.3 233.83" />
                <rect x="375.8" y="232.26" width="19.72" height="1.58" />
                <polygon points="370.18 233.83 367.48 233.83 367.48 181.14 369.05 181.14 369.05 232.26 370.18 232.26 370.18 233.83" />
                <polygon points="146.36 277.11 127.8 277.11 127.8 271.09 113.8 271.09 113.8 269.51 129.38 269.51 129.38 275.54 144.79 275.54 144.79 261.81 146.36 261.81 146.36 277.11" />
                <polygon points="114.59 276.32 113.01 276.32 113.01 253.97 146.36 253.97 146.36 256.88 144.79 256.88 144.79 255.54 114.59 255.54 114.59 276.32" />
                <rect x="101.61" y="267.73" width="3.56" height="1.57" />
                <rect x="111.2" y="267.73" width="2.6" height="1.57" />
                <rect x="145.57" y="267.73" width="2.62" height="1.57" />
                <rect x="154.34" y="267.73" width="5.48" height="1.57" />
                <rect x="156.29" y="269.07" width="1.58" height="73.2" />
                <polygon points="254.15 283.14 223.81 283.14 223.81 280.95 195.39 280.95 195.39 283.14 166.15 283.14 166.15 269.31 165.57 269.31 165.57 267.73 167.73 267.73 167.73 281.56 193.82 281.56 193.82 279.37 225.39 279.37 225.39 281.56 252.57 281.56 252.57 258.21 216.52 258.21 216.52 256.64 254.15 256.64 254.15 283.14" />
                <polygon points="210.25 342.27 208.68 342.27 208.68 256.64 211.04 256.64 211.04 258.21 210.25 258.21 210.25 342.27" />
                <polygon points="225.39 241.5 208.68 241.5 208.68 181.14 210.25 181.14 210.25 239.93 223.81 239.93 223.81 236.4 225.83 236.4 225.83 237.98 225.39 237.98 225.39 241.5" />
                <polygon points="316.87 241.5 301.05 241.5 301.05 237.94 300.34 237.94 300.34 236.37 302.63 236.37 302.63 239.93 315.3 239.93 315.3 181.14 316.87 181.14 316.87 241.5" />
                <polygon points="167.73 268.52 166.15 268.52 166.15 260.2 169.95 260.2 169.95 261.77 167.73 261.77 167.73 268.52" />
                <polygon points="202.27 261.77 199.02 261.77 199.02 258.21 177.18 258.21 177.18 260.99 175.6 260.99 175.6 256.64 200.6 256.64 200.6 260.2 202.27 260.2 202.27 261.77" />
                <rect x="187.65" y="257.42" width="1.57" height="24.93" />
                <rect x="156.57" y="232.6" width="31.19" height="1.57" />
                <polygon points="209.47 237.98 193.95 237.98 193.95 234.18 192.82 234.18 192.82 232.6 195.53 232.6 195.53 236.4 209.47 236.4 209.47 237.98" />
                <rect x="232.54" y="236.4" width="61.22" height="1.58" />
                <rect x="316.09" y="232.81" width="30.68" height="1.57" />
                <polygon points="369.05 237.98 352.82 237.98 352.82 234.38 352.24 234.38 352.24 232.81 354.4 232.81 354.4 236.4 367.48 236.4 367.48 233.05 369.05 233.05 369.05 237.98" />
                <rect x="536.86" y="245.54" width="30.54" height="1.58" />
                <polygon points="582.19 264.34 566.61 264.34 566.61 253.18 568.19 253.18 568.19 262.77 582.19 262.77 582.19 264.34" />
                <rect x="566.61" y="229.62" width="1.58" height="10" />
                <path d="M691.06,241.51l-1.56-.23c.02-.17,2.59-16.56,19.92-16.56s19.8,16.4,19.82,16.57l-1.56.22c-.09-.62-2.32-15.21-18.26-15.21s-18.27,14.59-18.36,15.21Z" style={wallStyle} />
                <path d="M446.8,381.26c-.18-.02-18.24-1.99-18.24-19.75s18.05-20,18.23-20.02l.18,1.56c-.69.08-16.83,2.12-16.83,18.46s16.13,18.12,16.82,18.19l-.15,1.57Z" style={wallStyle} />
                <rect x="448.8" y="360.59" width="27.25" height="1.58" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25" />
                <polygon points="530.01 343.37 491.38 343.06 491.4 341.48 528.44 341.78 528.44 327.92 518.82 327.92 518.82 310.61 523.42 311.29 523.18 312.85 520.39 312.44 520.39 326.35 530.01 326.35 530.01 343.37" />
                <polygon points="515.6 380.48 514.02 380.48 514.02 363.39 498.41 363.39 498.41 342.58 499.98 342.58 499.98 361.82 515.6 361.82 515.6 380.48" />
                <rect x="514.02" y="342.46" width="1.58" height="20.15" />
                <polygon points="263.94 342.27 262.36 342.27 262.36 269.41 260.21 269.41 260.21 267.83 263.94 267.83 263.94 342.27" />
                <rect x="315.5" y="286.49" width="1.57" height="55.78" />
                <polygon points="317.08 280.84 315.5 280.84 315.5 267.83 319.17 267.83 319.17 269.41 317.08 269.41 317.08 280.84" />
                <polygon points="377.7 280.3 325.06 280.3 325.06 255.47 326.63 255.47 326.63 278.72 376.12 278.72 376.12 256.26 372.68 256.26 372.68 254.69 377.7 254.69 377.7 280.3" />
                <rect x="332.62" y="254.69" width="33.9" height="1.57" />
                <polygon points="369.05 279.51 367.48 279.51 367.48 272.28 344.81 272.28 344.81 279.51 343.24 279.51 343.24 270.71 369.05 270.71 369.05 279.51" />
                <rect x="356.28" y="255.47" width="1.57" height="16.02" />
                <rect x="368.71" y="286.49" width="1.58" height="55.78" />
                <polygon points="423.56 342.27 421.99 342.27 421.99 273.14 419.62 273.14 419.62 271.57 423.56 271.57 423.56 342.27" />
                <polygon points="396.99 275.52 376.91 275.52 376.91 273.94 395.42 273.94 395.42 271.57 413.87 271.57 413.87 273.14 396.99 273.14 396.99 275.52" />
                <polygon points="410.55 272.35 408.98 272.35 408.98 259.86 384.29 259.86 384.29 258.28 410.55 258.28 410.55 272.35" />
                <polygon points="285.12 275.42 272.82 275.42 272.82 256.74 292.84 256.74 292.84 264.29 305.52 264.29 305.52 271.43 308.48 271.43 308.48 273 303.95 273 303.95 265.86 291.26 265.86 291.26 258.31 274.4 258.31 274.4 273.84 285.12 273.84 285.12 275.42" />
                <polygon points="305.52 275.42 291.05 275.42 291.05 273.84 303.95 273.84 303.95 272.22 305.52 272.22 305.52 275.42" />
                <rect x="291.26" y="265.08" width="1.58" height="9.55" />
                <rect x="263.94" y="271.43" width="1.3" height="1.57" />
                <rect x="270.68" y="271.43" width="2.93" height="1.57" />
                <rect x="262.16" y="181.93" width="1.57" height="54.47" />
                <rect id="filler" x="292.84" y="265.86" width="11.11" height="7.98" />
                <polygon points="515.8 258.93 490.02 258.93 490.02 257.63 515.8 255.99 515.8 258.93" />
                <rect x="474.99" y="181.93" width="1.58" height="50.33" />
                <polygon points="366.52 254.69 372.68 254.69 376.12 256.26 376.12 278.72 326.63 278.72 326.63 255.47 332.62 255.47 366.52 254.69" />
                <rect x="64.33" y="255.9" width="36.5" height=".79" />
                <rect x="64.32" y="257.34" width="36.5" height=".79" />
                <rect x="64.33" y="259.11" width="36.5" height=".79" />
                <rect x="64.33" y="260.55" width="36.5" height=".79" />
                <rect x="64.33" y="262.15" width="36.5" height=".79" />
                <rect x="64.33" y="263.59" width="36.5" height=".79" />
                <rect x="64.33" y="265.36" width="36.5" height=".79" />
                <rect x="64.33" y="266.8" width="36.5" height=".79" />
                <rect x="64.32" y="268.79" width="36.5" height=".79" />
                <rect x="64.32" y="270.22" width="36.5" height=".79" />
                <rect x="64.33" y="272" width="36.5" height=".79" />
                <rect x="64.32" y="273.43" width="36.5" height=".79" />
                <rect x="64.33" y="275.04" width="36.5" height=".79" />
                <rect x="64.32" y="276.48" width="36.5" height=".79" />
                <rect x="64.33" y="278.25" width="36.5" height=".79" />
                <rect x="64.33" y="279.69" width="36.5" height=".79" />
                <rect x="72.58" y="254.03" width="1.58" height="30.35" />
                <rect x="91.17" y="255.99" width="1.58" height="27.45" />
                <rect x="450.1" y="343.06" width=".79" height="36.5" />
                <rect x="451.54" y="343.06" width=".79" height="36.5" />
                <rect x="453.31" y="343.06" width=".79" height="36.5" />
                <rect x="454.75" y="343.06" width=".79" height="36.5" />
                <rect x="456.35" y="343.06" width=".79" height="36.5" />
                <rect x="457.79" y="343.06" width=".79" height="36.5" />
                <rect x="459.56" y="343.06" width=".79" height="36.5" />
                <rect x="461" y="343.06" width=".79" height="36.5" />
                <rect x="462.98" y="343.06" width=".79" height="36.5" />
                <rect x="464.42" y="343.06" width=".79" height="36.5" />
                <rect x="466.19" y="343.06" width=".79" height="36.5" />
                <rect x="467.63" y="343.06" width=".79" height="36.5" />
                <rect x="469.23" y="343.06" width=".79" height="36.5" />
                <rect x="470.67" y="343.06" width=".79" height="36.5" />
                <rect x="472.44" y="343.06" width=".79" height="36.5" />
                <rect x="473.88" y="343.06" width=".79" height="36.5" />
                <rect x="448.23" y="369.73" width="30.35" height="1.58" />
                <rect x="446.33" y="351.14" width="31.3" height="1.58" />
                <rect x="708.59" y="244.37" width="1.58" height="27.53" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25" />
                <rect x="691.12" y="269.96" width="36.5" height=".79" />
                <rect x="691.12" y="268.52" width="36.5" height=".79" />
                <rect x="691.12" y="266.75" width="36.5" height=".79" />
                <rect x="691.12" y="265.31" width="36.5" height=".79" />
                <rect x="691.12" y="263.71" width="36.5" height=".79" />
                <rect x="691.12" y="262.27" width="36.5" height=".79" />
                <rect x="691.12" y="260.5" width="36.5" height=".79" />
                <rect x="691.12" y="259.06" width="36.5" height=".79" />
                <rect x="691.13" y="257.08" width="36.5" height=".79" />
                <rect x="691.13" y="255.64" width="36.5" height=".79" />
                <rect x="691.12" y="253.87" width="36.5" height=".79" />
                <rect x="691.13" y="252.43" width="36.5" height=".79" />
                <rect x="691.12" y="250.82" width="36.5" height=".79" />
                <rect x="691.13" y="249.39" width="36.5" height=".79" />
                <rect x="691.12" y="247.61" width="36.5" height=".79" />
                <rect x="691.12" y="246.18" width="36.5" height=".79" />
                <rect x="717.8" y="242.26" width="1.58" height="30.35" />
                <rect x="699.2" y="243.21" width="1.58" height="27.45" />
                <polygon points="517.38 255.99 518.59 255.99 519.67 270.47 516.33 270.47 516.13 266.57 517.38 255.99" />
                <path d="M499.2,342.58h30.03v38.69s-2.09,10.52-11.54,13.12-16.98-4.58-16.98-4.58l-2.42-9.32h17.31v-17.87h-16.54l.14-20.03Z" />
            </g>
            <g id="Bathroom-Sign-2" aria-hidden="true">
                <g id="Bathroom-Sign-2-2" data-name="Bathroom-Sign-2">
                    <path id="b-sign4" d="M379.7,205.12l-.83,3.95c-.41,1.05-1.9.82-1.96-.33.42-1.75.61-3.68,1.08-5.41.26-.95.83-1.42,1.83-1.49,1.17-.09,3.11-.09,4.28,0,.87.07,1.53.49,1.78,1.34.22,1.71.9,3.58,1.08,5.27.14,1.34-1.3,1.77-1.91.66l-.88-4.15v12.81s-.15.33-.16.35c0,.01-.2.16-.23.18-.64.41-1.37.14-1.56-.6l-.02-7.33c-.04-.37-.44-.47-.48,0-.19,2.27.2,4.85,0,7.12-.06.72-.55,1.09-1.27.98-.25-.04-.53-.3-.63-.53-.02-.04-.12-.34-.12-.36v-12.47Z" />
                    <path id="b-sign1" d="M383.24,200.82c-1.62,1.68-4.21-.78-2.55-2.48s4.13.84,2.55,2.48Z" />
                </g>
            </g>
            <g id="Bathroom-Sign-4" aria-hidden="true">
                <path id="b-sin5" d="M406.3,211.87l1.83-6.39-1.7,3.75c-.62.95-2.06.4-1.84-.74l2.74-6.16c.28-.39.61-.48,1.07-.51,1.09-.07,2.92-.09,3.99,0,.39.03.68.16.9.49.8,1.89,1.76,3.73,2.55,5.62.14.35.28.56.23.97-.1.75-1.06,1.04-1.63.58-.17-.14-.23-.3-.33-.49-.58-1.13-1.02-2.41-1.58-3.56l-.2-.35,1.78,6.78h-1.54v5.84s-.1.21-.12.26c-.5.9-1.89.54-1.9-.55,0-.09.05-.18.05-.29-.01-1.72,0-3.43,0-5.15-.04-.21-.37-.09-.53-.12v5.89s-.12.25-.14.29c-.29.43-1,.56-1.42.26-.13-.09-.41-.46-.41-.6v-5.77s-.07-.07-.07-.07h-1.71Z" />
                <path id="b-sign2" d="M410.23,197.8c2.31-.11,2.48,3.48.13,3.55-2.28.07-2.44-3.44-.13-3.55Z" />
            </g>
            <g id="Bathroom-Sign-1" aria-hidden="true">
                <g id="Bathroom-Sign-2-3" data-name="Bathroom-Sign-2">
                    <path id="b-sign4-2" data-name="b-sign4" d="M197.19,268.45l-.58,2.77c-.28.73-1.33.57-1.37-.23.3-1.23.42-2.57.76-3.78.18-.66.58-.99,1.28-1.04.82-.06,2.17-.06,3,0,.61.05,1.07.34,1.25.94.15,1.2.63,2.51.75,3.69.1.94-.91,1.24-1.34.46l-.61-2.9v8.97s-.1.23-.11.24c0,0-.14.11-.16.13-.45.29-.96.1-1.09-.42v-5.13c-.04-.26-.33-.33-.35,0-.14,1.59.14,3.39,0,4.98-.04.51-.39.77-.89.69-.18-.03-.37-.21-.44-.37-.01-.03-.08-.24-.08-.25v-8.73Z" />
                    <path id="b-sign1-2" data-name="b-sign1" d="M199.67,265.44c-1.13,1.17-2.94-.55-1.78-1.73s2.89.59,1.78,1.73Z" />
                </g>
            </g>
            <g id="Bathroom-Sign-3" aria-hidden="true">
                <path id="b-sin5-2" data-name="b-sin5" d="M175.51,273.23l1.28-4.47-1.19,2.63c-.43.67-1.45.28-1.29-.52l1.91-4.31c.2-.28.43-.34.75-.36.76-.05,2.04-.06,2.79,0,.27.02.48.11.63.35.56,1.32,1.23,2.61,1.78,3.94.1.24.2.39.16.68-.07.52-.74.73-1.14.41-.12-.1-.16-.21-.23-.34-.41-.79-.71-1.69-1.11-2.49l-.14-.25,1.24,4.74h-1.08v4.09s-.07.15-.09.18c-.35.63-1.32.38-1.33-.39,0-.06.04-.13.03-.2,0-1.2,0-2.4,0-3.6-.03-.15-.26-.06-.37-.08v4.12s-.08.18-.1.2c-.2.3-.7.39-.99.18-.09-.06-.29-.32-.29-.42v-4.04s-.05-.05-.05-.05h-1.19Z" />
                <path id="b-sign2-2" data-name="b-sign2" d="M178.26,263.38c1.62-.08,1.74,2.44.09,2.48-1.6.05-1.71-2.41-.09-2.48Z" />
            </g>
            <g id="Pathing" aria-hidden="true">
                <line id="Segment_1" x1="108.19" y1="245.97" x2="137.36" y2="245.97" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_1"), transition: "opacity 0.3s" }} />
                <polyline id="Segment_2" points="137.36 245.97 150.03 245.97 150.03 249.07 162.69 249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_2"), transition: "opacity 0.3s" }} />
                <line id="Segment_3" x1="172.78" y1="249.07" x2="162.69" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_3"), transition: "opacity 0.3s" }} />
                <line id="Segment_4" x1="172.78" y1="249.07" x2="190.29" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_4"), transition: "opacity 0.3s" }} />
                <line id="Segment_5" x1="205.48" y1="249.07" x2="190.29" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_5"), transition: "opacity 0.3s" }} />
                <polyline id="Segment_7" points="229.19 249.07 213.78 249.07 205.48 249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_7"), transition: "opacity 0.3s" }} />
                <line id="Segment_8" x1="229.19" y1="249.07" x2="257.18" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_8"), transition: "opacity 0.3s" }} />
                <line id="Segment_9" x1="297.05" y1="249.07" x2="257.18" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_9"), transition: "opacity 0.3s" }} />
                <line id="Segment_10" x1="297.05" y1="249.07" x2="311.99" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_10"), transition: "opacity 0.3s" }} />
                <line id="Segment_11" x1="322.11" y1="249.07" x2="311.99" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_11"), transition: "opacity 0.3s" }} />
                <line id="Segment_12" x1="322.11" y1="249.07" x2="349.57" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_12"), transition: "opacity 0.3s" }} />
                <line id="Segment_13" x1="372.99" y1="249.07" x2="349.57" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_13"), transition: "opacity 0.3s" }} />
                <line id="Segment_14" x1="372.99" y1="249.07" x2="416.75" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_14"), transition: "opacity 0.3s" }} />
                <line id="Segment_15" x1="426.46" y1="249.07" x2="416.75" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_15"), transition: "opacity 0.3s" }} />
                <line id="Segment_16" x1="426.46" y1="249.07" x2="436.16" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_16"), transition: "opacity 0.3s" }} />
                <polyline id="Segment_17" points="436.16 249.07 436.16 275.93 484.41 275.93" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_17"), transition: "opacity 0.3s" }} />
                <line id="Segment_18" x1="526.73" y1="275.93" x2="484.41" y2="275.93" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_18"), transition: "opacity 0.3s" }} />
                <path id="Segment_19" d="M526.73 275.93h36.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_19"), transition: "opacity 0.3s" }} />
                <line id="Segment_20" x1="588.42" y1="275.93" x2="562.8" y2="275.93" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_20"), transition: "opacity 0.3s" }} />
                <polyline id="Segment_21" points="588.42 275.93 588.42 281.97 631.02 281.97" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_21"), transition: "opacity 0.3s" }} />
                <line id="Segment_22" x1="631.02" y1="281.97" x2="640.55" y2="281.97" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_22"), transition: "opacity 0.3s" }} />
                <line id="Segment_23" x1="526.73" y1="275.93" x2="526.73" y2="246.33" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("Segment_23"), transition: "opacity 0.3s" }} />
                <line id="drschr-201-seg" x1="426.46" y1="249.07" x2="426.46" y2="290.14" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-201-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-202-seg" x1="416.75" y1="249.07" x2="416.75" y2="273" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-202-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-203-seg" x1="322.11" y1="249.07" x2="322.11" y2="269.41" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-203-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-204-seg" x1="311.99" y1="249.07" x2="311.99" y2="273" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-204-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-205-seg" x1="257.18" y1="249.07" x2="257.18" y2="269.41" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-205-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-207-seg" x1="162.69" y1="249.04" x2="162.69" y2="269.33" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-207-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-208-seg" x1="108.19" y1="245.97" x2="108.19" y2="269.31" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-208-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-level2-mens-restroom" x1="205.48" y1="249.04" x2="205.48" y2="261.77" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-level2-mens-restroom"), transition: "opacity 0.3s" }} />
                <line id="drschr-level2-womens-restroom" x1="172.78" y1="249.07" x2="172.78" y2="261.77" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-level2-womens-restroom"), transition: "opacity 0.3s" }} />
                <line id="drschr-210-seg" x1="137.36" y1="245.97" x2="137.36" y2="232.6" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-210-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-211-seg" x1="190.29" y1="232.6" x2="190.29" y2="248.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-211-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-212-seg" x1="229.19" y1="236.4" x2="229.19" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-212-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-213-seg" x1="297.05" y1="236.4" x2="297.05" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-213-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-214-seg" x1="349.5" y1="232.81" x2="349.5" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-214-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-level2-womens-restroom-2" x1="372.99" y1="232.26" x2="372.99" y2="249.07" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-level2-womens-restroom-2"), transition: "opacity 0.3s" }} />
                <polyline id="drschr-level2-mens-restroom-2" points="416.75 249.07 416.75 240.66 420.12 240.66 420.12 232.26" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-level2-mens-restroom-2"), transition: "opacity 0.3s" }} />
                <polyline id="drschr-215-seg" points="436.16 249.07 436.16 240.66 444.14 240.66 444.14 232.26" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-215-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-216-seg" x1="484.41" y1="275.93" x2="484.41" y2="264.99" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-216-seg"), transition: "opacity 0.3s" }} />
                <polyline id="drschr-217-seg" points="526.73 246.33 521.11 246.33 521.11 232.26" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-217-seg"), transition: "opacity 0.3s" }} />
                <polyline id="drschr-218-seg" points="526.73 246.33 533.45 246.33 533.45 232.26" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-218-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-219-seg" x1="588.42" y1="275.93" x2="588.42" y2="267.95" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-219-seg"), transition: "opacity 0.3s" }} />
                <polyline id="drschr-220-seg" points="640.55 281.97 640.55 269.82 654.37 269.82" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-220-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-221-seg" x1="640.55" y1="281.97" x2="640.55" y2="295.29" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-221-seg"), transition: "opacity 0.3s" }} />
                <line id="drschr-222-seg" x1="631.02" y1="281.97" x2="631.02" y2="295.29" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-222-seg"), transition: "opacity 0.3s" }} />
                <polyline id="drschr-223-seg-1" points="568.1 288.71 562.8 286.18 562.8 275.93" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-223-seg-1"), transition: "opacity 0.3s" }} />
                <path id="drschr-223-seg-2" d="M526.09 312.8v-6.43l-11.02-5.24 11.66-25.2" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("drschr-223-seg-2"), transition: "opacity 0.3s" }} />
                <polyline id="exit-center" points="484.41 275.93 484.41 366 443.33 366 443.33 356.58 473.88 356.58" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("exit-center"), transition: "opacity 0.3s" }} />
                <polyline id="exit-right" points="640.55 281.97 714.05 281.97 714.05 239.11 704.62 239.11 704.62 269.96" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("exit-right"), transition: "opacity 0.3s" }} />
                <polyline id="exit-left" points="108.19 245.97 87.34 245.97 87.34 287.72 77.92 287.72 77.92 256.69" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("exit-left"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3" cx="108.19" cy="245.97" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_3"), transition: "opacity 0.3s" }} />
                <circle id="Junction_4" cx="205.48" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_4"), transition: "opacity 0.3s" }} />
                <circle id="Junction_5" cx="190.29" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_5"), transition: "opacity 0.3s" }} />
                <circle id="Junction_6" cx="172.78" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_6"), transition: "opacity 0.3s" }} />
                <circle id="Junction_7" cx="162.69" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_7"), transition: "opacity 0.3s" }} />
                <circle id="Junction_8" cx="137.36" cy="245.97" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_8"), transition: "opacity 0.3s" }} />
                <circle id="Junction_9" cx="229.19" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_9"), transition: "opacity 0.3s" }} />
                <circle id="Junction_10" cx="257.18" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_10"), transition: "opacity 0.3s" }} />
                <circle id="Junction_11" cx="297.05" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_11"), transition: "opacity 0.3s" }} />
                <circle id="Junction_12" cx="349.5" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_12"), transition: "opacity 0.3s" }} />
                <circle id="Junction_13" cx="311.99" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_13"), transition: "opacity 0.3s" }} />
                <circle id="Junction_14" cx="322.11" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_14"), transition: "opacity 0.3s" }} />
                <circle id="Junction_15" cx="372.99" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_15"), transition: "opacity 0.3s" }} />
                <circle id="Junction_16" cx="416.75" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_16"), transition: "opacity 0.3s" }} />
                <circle id="Junction_17" cx="426.46" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_17"), transition: "opacity 0.3s" }} />
                <circle id="Junction_18" cx="436.16" cy="249.07" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_18"), transition: "opacity 0.3s" }} />
                <circle id="Junction_19" cx="484.41" cy="275.93" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_19"), transition: "opacity 0.3s" }} />
                <circle id="Junction_20" cx="526.73" cy="275.93" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_20"), transition: "opacity 0.3s" }} />
                <circle id="Junction_21" cx="562.8" cy="275.93" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_21"), transition: "opacity 0.3s" }} />
                <circle id="Junction_22" cx="588.42" cy="275.93" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_22"), transition: "opacity 0.3s" }} />
                <circle id="Junction_23" cx="631.02" cy="281.97" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_23"), transition: "opacity 0.3s" }} />
                <circle id="Junction_24" cx="640.55" cy="281.97" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_24"), transition: "opacity 0.3s" }} />
                <circle id="Junction_25" cx="526.73" cy="246.33" r="4" fill="#16a34a" style={{ opacity: jVis("Junction_25"), transition: "opacity 0.3s" }} />
            </g>
        </svg>
    );
});
