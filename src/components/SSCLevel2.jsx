import React from 'react';

export const SSCLevel2 = React.memo(function SSCLevel2({ getColor, onHover, onClick, activeSegments = new Set() }) {

    const sVis = (id) => activeSegments.has(id) ? 1 : 0;
    const jVis = (id) => activeSegments.has(id) ? 0 : 0;

    // Helper to generate dynamic props: fill color + mouse events
    const r = (id) => ({
        fill: getColor(id),
        role: "button", tabIndex: 0, "aria-label": id,
        onMouseEnter: () => onHover(id, true),
        onMouseLeave: () => onHover(id, false),
        onFocus: (e) => onHover(id, true, e),
        onBlur: () => onHover(id, false),
        onClick: () => onClick(id),
        onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(id); } },
        style: { cursor: "pointer", transition: "opacity 0.2s" }
    });
    const d = (id) => ({
        fill: getColor(id),
        onMouseEnter: () => onHover(id, true),
        onMouseLeave: () => onHover(id, false),
        onClick: () => onClick(id),
        style: { cursor: "pointer", transition: "opacity 0.2s" }
    });

    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="floor_2" data-name="floor 2" viewBox="0 0 720 720" role="img" aria-label="Student Services Center Floor 2 map">
            <path id="hallway" d="M518.39 59.98h-62.67v70.95h-65.48l-3 2.87h-80.28l-5.35 3-3.52 5.74v74.09l15.19 3v89.54l-14.02 3-3 59.03h-66.65v-59.03l-11.02-2.74-20.61-3h-15.46l-2.41 3-3 4.11h-42.52v76.31l-88.44 3v38.08h171.26l3 34.67v101.12l15.26 3 3 3 15 3v25.3l-27.37 3v67.83h46.42l3.85-79.05h122.28v-83.21l9.19-3v-6.72l-3-3.98h-9.19l-19.44-17.15v-75.85l-3 72h-64.04v-48.46l64.04-3v-17.54l2.61 81.59 19.83 19.11 3-24.59 48.85-83.54v-3l15.78 2.06h71.87l21.45-2.06 3-81.39L606.7 302v-25.43h-62.48v32.86l-61.37-3h-15.26l-11.81 3v65.55l-69.06-3v-40.77l30.99-3v-13l-30.99-3 2.48-85.54 92.54-3 3-42.94v-15.62l-3-28.5 36.65-50.28z" style={{ fill: "#d0d2d3" }} aria-hidden="true" />
            <path id="ssc-201" d="m226.48 76.67-3-3h-7.83l-19.37-6h-33.91v176.22l-27.78 3v63.65h42.52v-4.11h44.48v2.74h42.39v-91.5h-64.57v-69.65h-17.08V96.11h44.15z" {...r("ssc-201")} />
            <path id="ssc-202" d="M162.37 225.17v-8.28h-27.78v27h27.78z" {...r("ssc-202")} />
            <path id="ssc-203" d="M162.37 198.57v-8.16h-27.78v23.48h27.78z" {...r("ssc-203")} />
            <path id="ssc-204" d="M199.41 175.28v57.39h19.57v-18h9.59v-39.39z" {...r("ssc-204")} />
            <path id="ssc-205" d="M134.59 163.54h27.78v23.87h-27.78z" {...r("ssc-205")} />
            <path id="ssc-206" d="M223.02 142.54v5.48h-23.61v24.26h29.16v-29.74z" {...r("ssc-206")} />
            <path id="ssc-207" d="M162.37 145.35v-8.02h-27.78v23.21h27.78z" {...r("ssc-207")} />
            <path id="ssc-208" d="M182.33 126.96v-8.03h37.69v26.09h-37.69z" {...r("ssc-208")} />
            <path id="ssc-209" d="M134.59 110.07h27.78v24.26h-27.78z" {...r("ssc-209")} />
            <path id="ssc-210" d="M182.33 99.11h37.7v16.83h-37.7z" {...r("ssc-210")} />
            <path id="ssc-211" d="M134.59 83.46h27.78v23.61h-27.78z" {...r("ssc-211")} />
            <path id="ssc-212" d="M134.59 44.85h27.78v35.61h-27.78z" {...r("ssc-212")} />
            <path id="ssc-213" d="M165.37 44.85h30.91v22.83h-30.91z" {...r("ssc-213")} />
            <path id="ssc-214" d="M199.28 44.85h24.2v28.83h-24.2z" {...r("ssc-214")} />
            <path id="ssc-215" d="M226.54 44.85h24v28.82h-24.06z" {...r("ssc-215")} />
            <path id="ssc-216" d="M223.02 99.11h16.43v40.43h-16.43z" {...r("ssc-216")} />
            <path id="ssc-217" d="M242.46 99.11h24.52v40.43h-24.52z" {...r("ssc-217")} />
            <path id="ssc-218" d="M299.07 44.85h25.17v28.83h-25.17z" {...r("ssc-218")} />
            <path id="ssc-219" d="M327.24 44.85h30.06v22.83h-30.06z" {...r("ssc-219")} />
            <path id="ssc-220" d="M360.3 44.85h26.94v37.57H360.3z" {...r("ssc-220")} />
            <path id="ssc-221" d="M226.48 73.67v25.44h40.5v40.43h31.63v-5.74h39.19V82.41h22.5V67.67h-64.23V44.85h-69.53z" {...r("ssc-221")} />
            <path id="ssc-222" d="M313.28 219.63v89.54h-46.3v-91.5h28.11v1.96z" {...r("ssc-222")} />
            <path id="ssc-223" d="M339.37 233.59v-6.92h46.83v52.31h-46.83z" {...r("ssc-223")} />
            <path id="ssc-224" d="M339.37 216.17v7.5h38.28v-68.8h-38.28z" {...r("ssc-224")} />
            <path id="ssc-225" d="M348.96 133.8h-8.16V85.41h46.44v48.39z" {...r("ssc-225")} />
            <path id="mech-room" d="M380.65 164.85h24.33v58.83h-24.33z" {...d("mech-room")} />
            <path id="ssc-230" d="M455.78 226.67h59.02l14.42 30.66h12v19.24h-45v29.86h-40.44z" {...r("ssc-230")} />
            <path id="ssc-231" d="M499.22 276.57h19.7v29.87h-19.7z" {...r("ssc-231")} />
            <path id="ssc-232" d="M521.91 276.57h19.3v29.87h-19.3z" {...r("ssc-232")} />
            <path id="ssc-233" d="M517.8 226.67h19.11v30.65H517.8z" {...r("ssc-233")} />
            <path id="ssc-234" d="M539.91 226.67h20.35v30.65h-20.35z" {...r("ssc-234")} />
            <path id="ssc-235" d="M601.35 247.22h28.24v26.35h-28.24z" {...r("ssc-235")} />
            <path id="ssc-236" d="M563.26 226.67h20.41v30.65h-20.41z" {...r("ssc-236")} />
            <path id="ssc-237" d="M601.35 225.96v-7.5h28.24v25.76h-28.24z" {...r("ssc-237")} />
            <path id="ssc-238" d="M527.52 89.33v15.45h56.15v51.2h-26.64v-19.37h-72.29v87.06h101.93v33.66h-45.45v16.24h60.13V67.93h-34.24v18.4h-28.96z" {...r("ssc-238")} />
            <path id="ssc-239" d="M601.35 191.46h28.24v24h-28.24z" {...r("ssc-239")} />
            <path id="ssc-240" d="M601.35 164.85h28.24v23.61h-28.24z" {...r("ssc-240")} />
            <path id="ssc-241" d="M601.35 137.26h28.24v24.59h-28.24z" {...r("ssc-241")} />
            <path id="ssc-242" d="M557.03 131.98h26.64v24h-26.64z" {...r("ssc-242")} />
            <path id="ssc-243" d="M601.35 110.46h28.24v23.8h-28.24z" {...r("ssc-243")} />
            <path id="ssc-244" d="M557.03 104.78h26.64v24.2h-26.64z" {...r("ssc-244")} />
            <path id="ssc-245" d="M601.35 83.46h28.24v24h-28.24z" {...r("ssc-245")} />
            <path id="ssc-246" d="M601.35 44.85h28.24v35.61h-28.24z" {...r("ssc-246")} />
            <path id="ssc-247" d="M567.11 44.85h31.24v23.09h-31.24z" {...r("ssc-247")} />
            <path id="ssc-248" d="M545.46 86.33h-7.31V59.98h6.07V44.85h19.89v41.48z" {...r("ssc-248")} />
            <path id="ssc-249" d="M530.52 104.78h23.51v31.83h-23.51z" {...r("ssc-249")} />
            <path id="ssc-250" d="M481.74 89.33h45.78v47.28h-45.78z" {...r("ssc-250")} />
            <path id="ssc-255" d="M398.85 398.46h48.85v38.09h-48.85z" {...r("ssc-255")} />
            <path id="ssc-256" d="m450.7 398.46-3 30.78v18l3 31.76 14.02 3 3 6.2h63.26l31.04 16.63v91.76H442.15v-38.48H425.2v36.39l-23.09 3v74.35h227.48v-277.7H559.8v4.31h-24.45v-.94h-71.87z" {...r("ssc-256")} />
            <path id="ssc-256l" d="M604.93 421.93h24.65v24.26h-24.65z" {...r("ssc-256l")} />
            <path id="ssc-257" d="M398.85 439.54h48.85V479h-48.85z" {...r("ssc-257")} />
            <path id="ssc-258" d="M604.93 449.2h24.65v31.44h-24.65z" {...r("ssc-258")} />
            <path id="ssc-259" d="M533.98 488.59h28.04v23.87h-28.04z" {...r("ssc-259")} />
            <path id="ssc-260" d="M533.98 515.46h28.04v24.52h-28.04z" {...r("ssc-260")} />
            <path id="ssc-261" d="M562.02 550.35v-7.37h-28.04v21.52h7.04v2.35h21z" {...r("ssc-261")} />
            <path id="ssc-262" d="M581.98 470.72h19.96v31.7h-19.96z" {...r("ssc-262")} />
            <path id="ssc-263" d="M604.93 483.63h24.65v42.26h-24.65z" {...r("ssc-263")} />
            <path id="ssc-264" d="M604.93 543.89h24.65v31.89h-24.65z" {...r("ssc-264")} />
            <path id="ssc-265" d="M581.98 543.89h19.96v31.89h-19.96z" {...r("ssc-265")} />
            <path id="ssc-266" d="M541.02 569.85h21v26.74h-21z" {...r("ssc-266")} />
            <path id="ssc-267" d="M581.98 578.78h19.96v31.89h-19.96z" {...r("ssc-267")} />
            <path id="ssc-268" d="M604.93 578.78h24.65v31.89h-24.65z" {...r("ssc-268")} />
            <path id="ssc-269" d="M602.52 641.07h27.07v30.78h-27.07z" {...r("ssc-269")} />
            <path id="ssc-269a" d="M574.28 641.07h25.24v30.78h-25.24z" {...r("ssc-269a")} />
            <path id="ssc-270" d="M544.02 641.07h27.26v30.78h-27.26z" {...r("ssc-270")} />
            <path id="ssc-271" d="M514.02 641.07h27v30.78h-27z" {...r("ssc-271")} />
            <path id="ssc-272" d="M461.13 646.8h36.85v25.04h-36.85z" {...r("ssc-272")} />
            <path id="ssc-273" d="M514.54 567.5h23.48v29.09h-23.48z" {...r("ssc-273")} />
            <path id="ssc-274" d="M487.54 567.5h24v29.09h-24z" {...r("ssc-274")} />
            <path id="ssc-275" d="M474.3 616.48h23.67v27.33H474.3z" {...r("ssc-275")} />
            <path id="ssc-276" d="M484.54 596.59h-23.21v-25.57h6.39v-3.52h16.82z" {...r("ssc-276")} />
            <path id="ssc-277" d="M447.04 616.48h24.26v27.59h-24.26z" {...r("ssc-277")} />
            <path id="ssc-278" d="M418.09 616.48h25.96v24.59h-25.96z" {...r("ssc-278")} />
            <path id="ssc-279" d="M444.04 644.07v2.73h14.09v25.05h-40.04v-27.78z" {...r("ssc-279")} />
            <path id="ssc-280" d="M367.54 640.15h34.56v31.7h-34.56z" {...r("ssc-280")} />
            <path id="ssc-281" d="M367.54 616.48h34.56v20.67h-34.56z" {...r("ssc-281")} />
            <path id="ssc-282" d="M367.54 592.8h28.31v4.7h6.26v15.98h-34.57z" {...r("ssc-282")} />
            <path id="ssc-283" d="M398.85 570.7h26.35v23.8h-26.35z" {...r("ssc-283")} />
            <path id="ssc-284" d="M464.72 561.11v6.91h-6.39v28.57h-16.18v-35.48z" {...r("ssc-284")} />
            <path id="ssc-285" d="M398.85 543.83h26.35v23.87h-26.35z" {...r("ssc-285")} />
            <path id="ssc-286" d="M432.11 482h32.61v24.59h-32.61z" {...r("ssc-286")} />
            <path id="ssc-287" d="M398.85 482v10.89h9.19v16.7h-9.19v31.24h29.35v17.28h13.95v-7.89h-3v-19.11h25.57v-24.52h-35.61V482z" {...r("ssc-287")} />
            <path id="ssc-287d" d="M442.15 534.11h22.57v24h-22.57z" {...r("ssc-287d")} />
            <path id="ssc-290" d="M309.37 477.89h64.04l2.61 3.85v85.96h-71.09v-87.2h4.44z" {...r("ssc-290")} />
            <path id="ssc-291" d="M275.72 592.8h88.83v79.04h-88.83z" {...r("ssc-291")} />
            <path id="mech-room2" d="M220.41 569.72h15.26v6h18v25.3h-33.26z" {...d("mech-room2")} />
            <path id="ssc-183" d="M46.15 430.93h171.26v206.55h-25.56l-34.7 15.26H97.4l-37.68-20.26V478.8H46.15z" {...r("ssc-183")} />
            <path id="mech-room3" d="M142.35 430.93h53.94v25.37h-53.94z" {...d("mech-room3")} />
            <path id="ssc-297b" d="M74.85 430.93h23.61v25.37H74.85z" {...d("ssc-297b")} />
            <path id="ssc-297c" d="M101.46 430.93h37.89v25.37h-37.89z" {...d("ssc-297c")} />
            <g id="walls" aria-hidden="true">
                <path d="M632.59 674.85H43.15v-285h133.96v-8.55h3v11.55H46.15v279h583.44v-277.7H556.8v-83.08h72.79V44.85H455.72v86.08h-68.48V44.85H134.59v265.69h45.52v12.07h-3v-9.07h-45.52V41.85h258.65v86.08h62.48V41.85h179.87v272.22H559.8v77.08h72.79z" />
                <path d="M180.11 312.04h-3v-5.61h5.41v3h-2.41zM299.26 374.2h-72.65v-62.02h-8.02v-2.74h-20.61v-3h23.61v2.74h77.67zm-69.65-3h66.65v-59.02h-66.65z" />
                <path d="M316.28 312.17h-18.52v-3h15.52v-8.08h3zM313.28 233.59h3v59.09h-3zM316.28 226.15h-3v-6.52h-18.19v-1.96h-66.52v-78.13h70.04v-5.74h8.35v3h-5.35v5.74h-70.04v72.13h66.52v1.96h18.19z" />
                <path d="M295.09 141.04h3v75.13h-3zM263.98 216.17h3v94.5h-3zM223.02 148.02h-43.69v-21.06h3v18.06h37.69v-5.48h10.05v3h-7.05z" />
                <path d="M223.02 141.04h-3V99.11h-37.69v9.06h-3V96.11h43.69z" />
                <path d="M221.52 96.11h10.04v3h-10.04zM239 96.11h20.87v3H239z" />
                <path d="M239.46 97.61h3v43.43h-3zM266.98 96.11h3v44.93h-3zM253.54 76.67H234.3v-3h16.24V43.35h3zM215.65 76.67h-19.37V43.35h3v30.32h16.37zM223.48 43.35h3v33.33h-3zM165.37 246.89h-32.28v-3h29.28v-18.72h3zM165.37 216.89h-32.28v-3h29.28v-15.32h3zM165.37 190.41h-32.28v-3h29.28V171.7h3zM165.37 163.54h-32.28v-3h29.28v-15.19h3zM165.37 126.3h-3v-16.23h-29.28v-3h32.28zM165.37 99.43h-3V83.46h-29.28v-3h32.28zM162.37 43.35h3v30.13h-3z" />
                <path d="M163.87 67.67h24.65v3h-24.65zM133.09 134.33h32.28v3h-32.28zM179.33 115.93h42.2v3h-42.2zM199.41 215.39h-3v-43.11h33.66v3h-30.66zM196.41 146.52h3v17.61h-3zM221.98 235.67h-25.57v-11.93h3v8.93h19.57v-18h11.09v3h-8.09zM340.8 136.8h-17.67v-3h14.67V82.41h50.94v3H340.8zM390.24 136.8h-41.28v-3h38.28v-4.37h3zM627.04 638.07h4.04v3h-4.04zM602.52 673.35h-3v-35.28h19.7v3h-16.7zM177.11 338.85h3v26.8h-3zM131.59 312.04h3v79.3h-3zM327.24 76.67h-20.28v-3h17.28V43.35h3zM360.3 70.67h-24.97v-3h21.97V43.35h3z" />
                <path d="M357.3 69.17h3v6h-3zM296.07 43.35h3v33.33h-3zM339.37 216.17h-3v-64.3h44.28v9.98h16.7v3h-19.7v-9.98h-38.28zM454.22 86.33h5.15v3h-5.15zM538.15 89.33h-70.76v-3h67.76V59.98h-80.93v-3h83.93z" />
                <path d="M544.22 59.98h-7.57v-3h4.57V43.35h3zM567.11 89.33h-21.65v-3h18.65V43.35h3zM601.35 70.93H575.2v-3h23.15V43.35h3z" />
                <path d="M598.35 69.43h3v3.72h-3zM601.35 99.37h-3V80.46h32.74v3h-29.74zM601.35 126.76h-3v-19.3h32.74v3h-29.74zM598.35 146.13h3v34.44h-3z" />
                <path d="M599.85 161.85h31.24v3h-31.24zM598.35 134.26h32.74v3h-32.74zM631.09 218.46h-32.74v-19.11h3v16.11h29.74zM631.09 247.22h-32.74v-21.26h3v18.26h29.74zM631.09 276.57h-32.74v-21.46h3v18.46h29.74zM559.8 312.57h-3v-3.14h-3.71v-3h6.71zM482.85 306.43h62.22v3h-62.22z" />
                <path d="M544.22 307.93h-3v-34.36h58.63v3h-55.63zM521.91 307.93h-3v-34.36h15.2v3h-12.2zM499.22 307.93h-3v-34.36h14.41v3h-11.41zM598.35 188.46h32.74v3h-32.74zM557.03 139.61H478.8V87.83h3v48.78h72.23v-34.83h32.64v18.92h-3v-15.92h-26.64z" />
                <path d="M538.8 101.78h16.73v3H538.8zM586.67 158.98h-32.64v-20.87h3v17.87h26.64v-16.11h3zM555.53 128.98h31.14v3h-31.14zM527.52 97.02h3v41.09h-3zM481.74 138.11h3v27h-3zM586.67 260.33h-16.32v-3h13.32v-30.66H481.74v-45.94h3v42.94h101.93z" />
                <path d="M551.91 260.33h-15v-35.16h3v32.16h12zM529.22 260.33H514.8v-35.16h3v32.16h11.42zM336.37 223.67h146.87v3H336.37z" />
                <path d="M389.2 281.98h-52.83v-48.39h3v45.39h46.83v-53.81h3z" />
                <path d="M455.78 301.8H386.2v-21.32h3v18.32h63.58v-73.63h3z" />
                <path d="M467.59 309.43h-14.81v-9.13h3v6.13h11.81zM618.17 613.67h-16.24v-72.78h16.24v3h-13.24v66.78h13.24zM626.52 540.89h4.57v3h-4.57z" />
                <path d="M631.09 578.78h-52.11v-37.89h3v34.89h49.11zM626.52 610.67h4.57v3h-4.57zM589.28 610.67h14.15v3h-14.15zM589.09 540.89h14.35v3h-14.35z" />
                <path d="M578.98 577.28h3v36.39h-3zM574.28 673.35h-3v-35.28h20.15v3h-17.15zM514.02 659.65h-3v-21.58h52.5v3h-49.5zM511.02 668.52h3v4.83h-3z" />
                <path d="M541.02 639.57h3v33.78h-3zM565.02 599.59h-27V567.5h-73.3v-79.3h69.26v76.3h7.04v32.09h21v-10.24h3zm-97.3-35.09h63.26v-73.3h-63.26z" />
                <path d="M565.02 504.83h-3v-16.24h-28.04v1.11h-3v-4.11h34.04zM565.02 542.98h-32.54v-3h29.54v-16.89h3zM532.48 512.46h32.54v3h-32.54zM562.02 550.35h3v28.7h-3z" />
                <path d="M539.52 566.85h24v3h-24zM495.57 596.59h34.96v3h-34.96z" />
                <path d="M511.54 566h3v32.09h-3zM487.54 599.59H468.7v-3h15.84V566h3zM442.15 550.22h-3v-19.11h27.07v3h-24.07zM461.33 599.59h-22.18v-30.07h3v27.07h16.18v-28.57h6.39V566h3v5.02h-6.39zM439.15 558.11h27.07v3h-27.07zM497.98 668.52h3v4.83h-3zM500.98 659.65h-3v-43.17h-16.31v-3h19.31z" />
                <path d="M499.48 646.8h-55.44v-33.32h19.63v3h-16.63v27.32h52.44z" />
                <path d="M418.09 632.98h-3v-19.5h30.45v3h-27.45zM415.09 641.07h30.46v3h-30.46zM415.09 651.96h3v21.39h-3zM458.13 645.3h3v28.04h-3zM471.3 613.48h3v31.83h-3z" />
                <path d="M367.54 673.35h-3V589.8h34.31v4.7h26.35v-16.04h3v19.04h-32.35v-4.7h-28.31z" />
                <path d="M398.85 591.3h-3v-84.71h12.19v3h-9.19z" />
                <path d="M428.2 559.61h-3v-15.78h-27.85v-3h30.85zM397.35 567.7h30.85v3h-30.85zM408.04 499.87h-3v-3.98h-9.19V395.46h44.54v3h-41.54v94.43h9.19z" />
                <path d="M450.7 482h-53.35v-3h50.35v-31.76h3zM450.7 429.24h-3v-33.78h15.78v3H450.7zM397.35 436.54h53.35v3h-53.35z" />
                <path d="M467.72 489.7h-3V482H449.2v-3h18.52zM439.22 506.59h27v3h-27zM429.11 480.5h3v29.09h-3zM559.8 398.46h-24.45v-3h21.45v-2.81h3zM612.7 525.89h18.39v3H612.7zM601.93 457.22h3v71.67h-3z" />
                <path d="M603.43 505.41h-24.45v-37.69h14.54v3h-11.54v31.69h21.45zM631.09 449.2h-29.16v-19.63h3v16.63h26.16zM601.93 418.93h29.15v3h-29.15zM402.11 596h3v9.26h-3zM402.11 623.98h3v35.35h-3z" />
                <path d="M366.04 637.15h37.56v3h-37.56zM402.11 668h3v5.35h-3zM366.04 613.48h39.06v3h-39.06zM220.41 673.35h-3V406.8h69.52v51.66h-4.1v-3h1.1V409.8h-63.52z" />
                <path d="M218.91 429.83h66.52v3h-66.52zM286.93 529.48h-4.43v-3h1.43v-42.07h-1.43v-3h4.43z" />
                <path d="M218.91 501.37h66.52v3h-66.52zM379.02 570.7h-77.09v-93.2h4.44v-74.61h8.02v3h-5.02v74.61h-4.44v87.2h74.09z" />
                <path d="M376.41 477.89h-68.54v-3h65.54v-69h-47.67v-3h50.67zM376.02 495.96h3v63.65h-3zM285.43 589.8h71.48v3h-71.48zM275.72 673.35h-3V589.8h3.85v3h-.85zM253.67 667.87h3v5.48h-3zM253.67 587.65h3V659h-3z" />
                <path d="M218.91 601.02h36.26v3h-36.26zM286.93 575.72h-51.26v-6h-16.76v-3h19.76v6h45.26v-17.48h-1.43v-3h4.43z" />
                <path d="M253.67 574.22h3v5.35h-3zM377.65 163.35h3v61.83h-3zM404.98 161.86h3v54.97h-3z" />
                <path d="M379.15 196.93h27.33v3h-27.33zM239.15 622.48h3v30.26h-3z" />
                <path d="M226.3 623.98h27.59v2H226.3zM226.3 626.98h27.59v2H226.3zM226.3 629.98h27.59v2H226.3zM226.3 632.98h27.59v2H226.3zM226.3 635.98h14.35v2H226.3zM226.3 638.98h14.35v2H226.3zM226.3 641.98h14.35v2H226.3zM226.3 644.98h14.35v2H226.3zM226.3 647.98h14.35v2H226.3zM226.3 649.98v-47.46l-6.34 1.18v69h6.34zM274.87 484.41h-4.83V468.6h-51.13v-3h54.13v15.81h1.83zM274.28 555.24h-13.24v-15.23h-42.13v-3h45.13v15.23h10.24z" />
                <path d="M264.04 538.51h-3v-12.03h13.24v3h-10.24zM307.87 423.43h67.04v3h-67.04zM379.02 487.48h-3v-5.74h-2.61v-5.35h3v2.35h2.61zM454.87 44v13.57h63.52v29.6h17.09V57.7h6.39V44z" />
                <path d="M469.98 72.21h30.26v3h-30.26z" />
                <path d="M496.74 59.36h2v27.59h-2zM493.74 59.36h2v27.59h-2zM490.74 59.36h2v27.59h-2zM487.74 59.36h2v27.59h-2zM484.74 59.36h2v14.35h-2zM481.74 59.36h2v14.35h-2zM478.74 59.36h2v14.35h-2zM475.74 59.36h2v14.35h-2zM472.74 59.36h2v14.35h-2zM219.57 409.35h65.22v20.93h-65.22zM199.28 597.3h-3v-89.54h22.63v3h-19.63zM199.28 459.3H69.43v-3h126.85v-25.37h-16.89v-3h19.89z" />
                <path d="M197.78 456.3h2.93v3h-2.93zM216.17 456.3h2.74v3h-2.74zM197.78 427.93h2.93v3h-2.93zM216.17 427.93h2.74v3h-2.74zM109.54 427.93h50.28v3h-50.28z" />
                <path d="M139.35 429.43h3v28.37h-3zM69.43 427.93h20.94v3H69.43z" />
                <path d="M71.85 429.43h3v28.37h-3zM44.65 427.93h9.52v3h-9.52zM44.65 456.3h9.52v3h-9.52zM98.46 427.93h3v29.87h-3zM168.11 427.93h3v29.87h-3z" />
                <g>
                    <path d="M44.65 633.98h42.59l9.19 20.26h61.64l10.36-20.26h21.92v5h27.58v31.63H44.65z" />
                    <path d="M219.43 672.11H43.15v-39.63H88.2l9.2 20.26h59.75l10.37-20.26h24.33v5h27.59v34.63Zm-173.28-3h170.28v-28.63h-27.59v-5h-19.5l-10.37 20.26H95.46l-9.2-20.26H46.14v33.63Z" />
                </g>
                <g>
                    <path d="M44.65 480.3h13.57v153.67H44.65z" />
                    <path d="M59.72 635.48H43.16V478.81h16.56zm-13.57-3h10.56V481.81H46.15z" />
                </g>
                <path d="M455.78 374.98h-72.06v-45.27h3v42.27h66.06v-64.05h3zM382.97 312.21h37.08v3h-37.08z" />
                <path d="M406.71 313.71h2v14.87h-2zM403.71 313.71h2v14.87h-2zM400.71 313.71h2v14.87h-2zM397.71 313.71h2v14.87h-2zM452.71 313.71h2v14.87h-2zM409.71 313.71h2v14.87h-2z" />
                <path d="M382.97 328.21h37.08v3h-37.08z" />
                <g>
                    <path d="M415.71 315.03h2v.54h-2zM417.71 326.56h-2v-1.1h2zm0-2.19h-2v-1.1h2zm0-2.2h-2v-1.1h2zm0-2.2h-2v-1.1h2zm0-2.2h-2v-1.1h2zM415.71 327.66h2v.54h-2z" />
                </g>
                <path d="M394.71 313.71h2v14.87h-2zM412.71 313.71h2v14.87h-2zM386.72 313.71h-3V298.8h3.98v3h-.98zM273.04 467.1h-3v-11.68h5.2v3h-2.2zM560.26 226.67h3v33.65h-3zM559.8 306.43h6.2V302h40.7v-25.43h22.89v34.5H559.8zM604.93 480.63h24.65v3h-24.65z" />
                <path d="M564.54 287.73h30.26v3h-30.26z" />
                <path d="M591.3 274.88h2v27.59h-2zM588.3 274.88h2v27.59h-2zM585.3 274.88h2v27.59h-2zM582.3 274.88h2v27.59h-2zM579.3 274.88h2v14.35h-2zM576.3 274.88h2v14.35h-2zM573.3 274.88h2v14.35h-2zM570.3 274.88h2v14.35h-2zM567.3 274.88h2v14.35h-2z" />
                <g>
                    <path d="M196.28 583.41H59.72M196.28 574.41H59.72M196.28 565.41H59.72M196.28 556.41H59.72M196.28 547.41H59.72M196.28 538.41H59.72M196.28 529.41H59.72M196.28 520.41H59.72M196.28 511.41H59.72M217.41 502.41H59.72M217.41 493.41H59.72M217.41 484.41H59.72" style={{ fill: "none", stroke: "#000", strokeMiterlimit: 10 }} />
                </g>
                <path d="M463.48 396.52h63.68v1h-63.68z" />
                <g>
                    <path d="M579.3 290.73h2v.5h-2zM581.3 300.57h-2v-.93h2zm0-1.87h-2v-.93h2zm0-1.87h-2v-.93h2zm0-1.87h-2v-.93h2zm0-1.86h-2v-.93h2zM579.3 301.5h2v.5h-2z" />
                </g>
                <g>
                    <path d="M484.74 75.07h2v.5h-2zM486.74 84.9h-2v-.93h2zm0-1.86h-2v-.93h2zm0-1.87h-2v-.93h2zm0-1.87h-2v-.93h2zm0-1.87h-2v-.93h2zM484.74 85.84h2v.5h-2z" />
                </g>
                <g>
                    <path d="M253.16 635.98h.51v2h-.51zM243.62 637.98v-2h.95v2zm1.91 0v-2h.95v2zm1.91 0v-2h.95v2zm1.91 0v-2h.95v2zm1.9 0v-2h.95v2zM242.15 635.98h.51v2h-.51z" />
                </g>
                <g id="Bathroom-Sign-1" aria-hidden="true">
                    <g id="Bathroom-Sign-2" aria-hidden="true">
                        <path id="b-sign4" d="m247.23 446.19-.98 4.65c-.48 1.23-2.24.96-2.3-.38.5-2.06.71-4.32 1.27-6.36.31-1.11.98-1.67 2.15-1.75 1.38-.1 3.65-.1 5.03 0 1.02.08 1.8.58 2.09 1.58.25 2.01 1.05 4.21 1.27 6.2.17 1.58-1.52 2.08-2.24.77l-1.03-4.88v15.06s-.17.39-.19.41c-.01.01-.24.19-.27.21-.75.49-1.61.17-1.84-.7l-.02-8.62c-.05-.43-.52-.55-.57 0-.23 2.67.24 5.7 0 8.37-.07.85-.65 1.29-1.5 1.15-.3-.05-.62-.35-.74-.62-.02-.05-.14-.4-.14-.42v-14.67Z" />
                        <path id="b-sign1" d="M251.39 441.14c-1.9 1.97-4.95-.92-3-2.91s4.85.99 3 2.91" />
                    </g>
                </g>
                <g id="Bathroom-Sign-1-2" aria-hidden="true" data-name="Bathroom-Sign-1">
                    <g id="Bathroom-Sign-2-2" aria-hidden="true" data-name="Bathroom-Sign-2">
                        <path id="b-sign4-2" d="m247.23 517.19-.98 4.65c-.48 1.23-2.24.96-2.3-.38.5-2.06.71-4.32 1.27-6.36.31-1.11.98-1.67 2.15-1.75 1.38-.1 3.65-.1 5.03 0 1.02.08 1.8.58 2.09 1.58.25 2.01 1.05 4.21 1.27 6.2.17 1.58-1.52 2.08-2.24.77l-1.03-4.88v15.06s-.17.39-.19.41c-.01.01-.24.19-.27.21-.75.49-1.61.17-1.84-.7l-.02-8.62c-.05-.43-.52-.55-.57 0-.23 2.67.24 5.7 0 8.37-.07.85-.65 1.29-1.5 1.15-.3-.05-.62-.35-.74-.62-.02-.05-.14-.4-.14-.42v-14.67Z" data-name="b-sign4" />
                        <path id="b-sign1-2" d="M251.39 512.14c-1.9 1.97-4.95-.92-3-2.91s4.85.99 3 2.91" data-name="b-sign1" />
                    </g>
                </g>
                <g id="Bathroom-Sign-3" aria-hidden="true">
                    <path id="b-sin5" d="m245.16 490.65 2.15-7.52-2 4.41c-.73 1.12-2.43.47-2.17-.87l3.22-7.24c.33-.46.72-.57 1.26-.6 1.28-.08 3.43-.11 4.69 0 .46.04.8.19 1.06.58.94 2.22 2.07 4.38 2.99 6.61.17.41.33.66.27 1.14-.11.88-1.25 1.23-1.92.68-.2-.17-.27-.35-.39-.57-.69-1.33-1.2-2.84-1.86-4.18l-.24-.41 2.09 7.97h-1.81v6.87s-.11.25-.14.31c-.58 1.06-2.22.63-2.23-.65 0-.11.06-.22.06-.34-.01-2.02 0-4.03 0-6.05-.05-.25-.44-.11-.62-.14v6.92s-.14.3-.17.34c-.34.5-1.17.66-1.67.31-.15-.1-.48-.54-.48-.71v-6.78l-.08-.08z" />
                    <path id="b-sign2" d="M249.78 474.1c2.72-.13 2.92 4.09.15 4.17-2.69.08-2.87-4.04-.15-4.17" />
                </g>
                <g id="Bathroom-Sign-3-2" aria-hidden="true" data-name="Bathroom-Sign-3">
                    <path id="b-sin5-2" d="m245.16 561.65 2.15-7.52-2 4.41c-.73 1.12-2.43.47-2.17-.87l3.22-7.24c.33-.46.72-.57 1.26-.6 1.28-.08 3.43-.11 4.69 0 .46.04.8.19 1.06.58.94 2.22 2.07 4.38 2.99 6.61.17.41.33.66.27 1.14-.11.88-1.25 1.23-1.92.68-.2-.17-.27-.35-.39-.57-.69-1.33-1.2-2.84-1.86-4.18l-.24-.41 2.09 7.97h-1.81v6.87s-.11.25-.14.31c-.58 1.06-2.22.63-2.23-.65 0-.11.06-.22.06-.34-.01-2.02 0-4.03 0-6.05-.05-.25-.44-.11-.62-.14v6.92s-.14.3-.17.34c-.34.5-1.17.66-1.67.31-.15-.1-.48-.54-.48-.71v-6.78l-.08-.08z" data-name="b-sin5" />
                    <path id="b-sign2-2" d="M249.78 545.1c2.72-.13 2.92 4.09.15 4.17-2.69.08-2.87-4.04-.15-4.17" data-name="b-sign2" />
                </g>
            </g>
            <g id="Pathing" aria-hidden="true">
                <circle id="Junction_3" cx="326.33" cy="230.13" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-2" cx="326.33" cy="219.92" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-2"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-3" cx="326.33" cy="144.34" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-3"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-4" cx="344.88" cy="144.34" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-4"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-5" cx="208.45" cy="390.5" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-5"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-6" cx="296.65" cy="390.5" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-6"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-7" cx="294.43" cy="469.92" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-7"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-8" cx="294.43" cy="579.92" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-8"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-9" cx="444.04" cy="385.22" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-9"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-10" cx="475.22" cy="385.22" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-10"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-11" cx="326.33" cy="321.71" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-11"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-12" cx="386.13" cy="385.22" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-12"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-13" cx="370.41" cy="321.71" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-13"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-14" cx="386.13" cy="491.72" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-14"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-15" cx="475.22" cy="321.71" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-15"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-16" cx="326.33" cy="390.5" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-16"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-17" cx="370.41" cy="385.22" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-2:Junction_3-17"), transition: "opacity 0.3s" }} />
                <path id="Segment_1" d="M208.45 390.5h88.2" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_1"), transition: "opacity 0.3s" }} />
                <path id="Segment_2" d="M296.65 390.5v70.76h-2.22v8.66" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_2"), transition: "opacity 0.3s" }} />
                <path id="Segment_3" d="M294.43 579.92v-110" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_3"), transition: "opacity 0.3s" }} />
                <path id="Segment_4" d="M294.43 579.92h91.7v-88.2" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_4"), transition: "opacity 0.3s" }} />
                <path id="Segment_5" d="M386.13 385.22v106.5" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_5"), transition: "opacity 0.3s" }} />
                <path id="Segment_6" d="M386.13 385.22h-15.72" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_6"), transition: "opacity 0.3s" }} />
                <path id="Segment_7" d="M370.41 385.22h-21.29v5.28h-22.7" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_7"), transition: "opacity 0.3s" }} />
                <path id="Segment_8" d="M326.33 390.5v-68.79" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_8"), transition: "opacity 0.3s" }} />
                <path id="Segment_9" d="M326.33 390.5h-29.68" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_9"), transition: "opacity 0.3s" }} />
                <path id="Segment_10" d="M370.41 321.71h-44.08" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_10"), transition: "opacity 0.3s" }} />
                <path id="Segment_11" d="M370.41 321.71v63.51" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_11"), transition: "opacity 0.3s" }} />
                <path id="Segment_12" d="M326.33 230.13v91.58" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_12"), transition: "opacity 0.3s" }} />
                <path id="Segment_13" d="M326.33 230.13v-10.21" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_13"), transition: "opacity 0.3s" }} />
                <path id="Segment_14" d="M326.33 144.34v75.58" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_14"), transition: "opacity 0.3s" }} />
                <path id="Segment_15" d="M326.33 144.34h18.55" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_15"), transition: "opacity 0.3s" }} />
                <path id="Segment_16" d="M386.13 385.22h57.91" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_16"), transition: "opacity 0.3s" }} />
                <path id="Segment_17" d="M475.22 385.22h-31.18" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_17"), transition: "opacity 0.3s" }} />
                <path id="Segment_18" d="M475.22 385.22v-63.57" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:Segment_18"), transition: "opacity 0.3s" }} />
                <path id="ssc-183-seg" d="M208.45 390.5v40.43" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-183-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-201-seg" d="M190.25 306.43v84.07h18.2" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-201-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-221-seg" d="M315.04 133.8v10.54h11.29" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-221-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-222-seg" d="M313.28 230.13h13.05" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-222-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-223-seg" d="M339.37 230.13h-13.04" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-223-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-224-seg" d="M339.37 219.92h-13.04" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-224-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-230-seg" d="M475.22 306.43v15.22" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-230-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-238-seg" d="M344.88 144.34h116.98v28.58h22.88" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-238-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-255-seg" d="M444.04 398.46v-13.24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-255-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-256-seg" d="M475.22 385.22h56.04v12.3" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-256-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-290-seg" d="M376.02 491.72h10.11" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-290-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-291-seg" d="M281 592.8v-12.88h13.43" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-291-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-level2-womens-restroom" d="M278.68 484.41v-14.49h15.75" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-level2-womens-restroom"), transition: "opacity 0.3s" }} />
                <path id="ssc-level2-mens-restroom" d="M279.04 455.42v14.5h15.39" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:ssc-level2-mens-restroom"), transition: "opacity 0.3s" }} />
                <path id="exit-2to3-only" d="M370.41 321.71h47.3" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:exit-2to3-only"), transition: "opacity 0.3s" }} />
                <path id="exit-1to2-only" d="M475.22 321.71h-22.44" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-2:exit-1to2-only"), transition: "opacity 0.3s" }} />
            </g>
        </svg>
    );
});
