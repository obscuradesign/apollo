import React from 'react';

export const SSCLevel3 = React.memo(function SSCLevel3({ getColor, onHover, onClick, activeSegments = new Set() }) {

    
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
        <svg xmlns="http://www.w3.org/2000/svg" id="floor_3" data-name="floor 3" viewBox="0 0 720 720" role="img" aria-label="Student Services Center Floor 3 map">
            <path id="hallway" d="M208.48 671.59h47.02l3-80.22 23.22-3v14.61l12.85 3h9.19v-35.09h-7.11v-29.67h37.05v13.95h8.08l6.85-3v-69l-3-2.93-36.59-3v-68.81l63.92-2.99 3-4.83h180.35l2.97 5.35v265.63h69.79V397.28h-69.79l-3-85.69 48.79-8.87 24-27.79V45.5H559.8l-3 229.43-13.04 3v30.66h-62.61V133.15l7.89-3v-14.22h-17.28V86.07h44.61V60.5h-61.44v71.41l.98 3v90.72l-.52 3.13v71.41l-70.63 3v4.44H179.85l-2.22 3v85.63H50.85v275.35h78.39v-62.81h76.24z" style={{ fill: "#d0d2d3" }} aria-hidden="true" />
            <path id="ssc-301" d="M184.15 152.26h-6.78l-47.35 40.96v118.63h44.61l5.22-4.24h18.39l3-1.24v-8.41l-3-21.98-6-114.1-3-6.62z" {...r("ssc-301")} />
            <path id="ssc-302" d="M201.24 275.98h22.04v31.63h-22.04z" {...r("ssc-302")} />
            <path id="ssc-303" d="M223.28 272.98h-31.04v-35.74h31.04z" {...r("ssc-303")} />
            <path id="ssc-304" d="M192.24 199.28v24h23.71v-6.45h7.33v-17.55z" {...r("ssc-304")} />
            <path id="ssc-305" d="M192.24 172.58h31.04v23.71h-31.04z" {...r("ssc-305")} />
            <path id="ssc-306" d="M130.02 155.26h44.35v34.96h-44.35z" {...r("ssc-306")} />
            <path id="ssc-307" d="M192.24 138.24h31.04v31.34h-31.04z" {...r("ssc-307")} />
            <path id="ssc-308" d="M168.7 139.28v-7.69h-38.68v20.67h38.68z" {...r("ssc-308")} />
            <path id="ssc-309" d="M192.24 110.85h31.04v24.39h-31.04z" {...r("ssc-309")} />
            <path id="ssc-332" d="M189.24 152.26H168.7v-20.67l-5.68-3V95.26l3-24.13 6.91-3h44.16V45.5h167.28v81.91l-2.54 33.66v66.58h3.65v72.52l-3.72 7.44h-85.3v-34.63l-14.16 3h-43.04l-12.98-3V249.7h69.07V138.76h-69.07v-30.91h-34.04v27.39z" {...r("ssc-332")} />
            <path id="ssc-310" d="M130.02 105.76h33v22.83h-33z" {...r("ssc-310")} />
            <path id="ssc-311" d="M130.02 71.13h33v31.63h-33z" {...r("ssc-311")} />
            <path id="ssc-312" d="M130.02 45.5h51.13v22.63h-51.13z" {...r("ssc-312")} />
            <path id="ssc-313" d="M184.15 45.5h29.93v22.63h-29.93z" {...r("ssc-313")} />
            <path id="ssc-314" d="M313.22 108.3h8.48v23.61h-26.35V108.3z" {...r("ssc-314")} />
            <path id="ssc-315" d="M338 124.8v7.11h26.35V108.3H338z" {...r("ssc-315")} />
            <path id="ssc-316" d="M321.7 143.39v-8.48h-26.35v24.59h26.35z" {...r("ssc-316")} />
            <path id="ssc-317" d="M338 143.39v16.11h26.35v-24.59H338z" {...r("ssc-317")} />
            <path id="ssc-318" d="M321.7 170.98v-8.48h-26.35v24h26.35z" {...r("ssc-318")} />
            <path id="ssc-319" d="M338 162.5h26.35v24H338z" {...r("ssc-319")} />
            <path id="ssc-320" d="M295.35 189.5v24.2h26.35v-24.2z" {...r("ssc-320")} />
            <path id="ssc-321" d="M338 197.78v-8.28h26.35v34.17H338z" {...r("ssc-321")} />
            <path id="ssc-322" d="M339.17 234.17v-7.5h25.18v23.03h-25.18z" {...r("ssc-322")} />
            <path id="ssc-323" d="M381.83 130.41h24.39v30.65h-24.39z" {...r("ssc-323")} />
            <path id="ssc-326" d="M250.54 216.7h20.35v33h-20.35z" {...r("ssc-326")} />
            <path id="ssc-327" d="M273.89 275.98h19.57v31.63h-19.57z" {...r("ssc-327")} />
            <path id="ssc-328" d="M273.89 216.7h18.46v33h-18.46z" {...r("ssc-328")} />
            <path id="ssc-329" d="M250.54 275.98h20.35v31.63h-20.35z" {...r("ssc-329")} />
            <path id="ssc-330" d="M226.28 216.7h21.26v33h-21.26z" {...r("ssc-330")} />
            <path id="ssc-331" d="M226.28 275.98h21.26v31.63h-21.26z" {...r("ssc-331")} />
            <path id="ssc-336" d="M409.22 178.54h46.69v47.09l-3.52 3.13h-43.17z" {...r("ssc-336")} />
            <path id="ssc-337" d="m451.93 130.41 3.98 4.5v40.63h-46.69v-45.13z" {...r("ssc-337")} />
            <path id="mech-room" d="M381.83 164.07h24.39v64.69h-17.74v-4.11h-6.65z" {...d("mech-room")} />
            <path id="ssc-340" d="M540.76 308.59h-34.3v-22.96l.91-3V133.15h-8.54l-9.79-3v-14.22l6.39-3h8.61l15.33-16.43h8.28l29.15 3v37.57l-30.39 3v63.13h30.39v71.73h-16.04z" {...r("ssc-340")} />
            <path id="ssc-341" d="M481.15 285.63h25.3v22.96h-25.3z" {...r("ssc-341")} />
            <path id="ssc-342" d="M481.15 258.89h26.22v23.74h-26.22z" {...r("ssc-342")} />
            <path id="ssc-343" d="M507.37 238.09v-7.76h-26.22v25.56h26.22z" {...r("ssc-343")} />
            <path id="ssc-344" d="M481.15 190.28h26.22v37.04h-26.22z" {...r("ssc-344")} />
            <path id="ssc-345" d="M526.41 166.41h30.39v33.78h-30.39z" {...r("ssc-345")} />
            <path id="ssc-346" d="M507.37 170.91v-7.89h-26.22v24.26h26.22z" {...r("ssc-346")} />
            <path id="ssc-347" d="M526.41 140.07h30.39v23.35h-30.39z" {...r("ssc-347")} />
            <path id="ssc-348" d="M498.83 133.15h8.54v26.87h-26.22v-26.87z" {...r("ssc-348")} />
            <path id="ssc-349" d="M474.76 89.07h41.61v23.87h-41.61z" {...r("ssc-349")} />
            <path id="ssc-350" d="M527.65 96.5h-8.28v-51h37.43v51z" {...r("ssc-350")} />
            <path id="ssc-355" d="M540.5 400.61h15.81l2.97 5.35v10.37h-3v255.26h-145.3v-35.81h-10.76l-15.59-3-3-2.28H258.5v-24.52h45.26l32.81-3h7.76l8.15-7.21 1.14-3h57.75l3 7.34h126.52l-6.65-25.18V492.5h6.26z" {...r("ssc-355")} />
            <path id="ssc-356" d="M540.89 600.11h-41.48v-32.22h31.83v10.04h9.65z" {...r("ssc-356")} />
            <path id="ssc-357" d="M467.85 567.89h28.57v32.22h-28.57z" {...r("ssc-357")} />
            <path id="ssc-358" d="M451.09 600.11h-8.42v-29.22h22.18v29.22z" {...r("ssc-358")} />
            <path id="ssc-359" d="M439.67 570.89h-25.3v29.22h25.3z" {...r("ssc-359")} />
            <path id="ssc-360" d="M400.22 635.78h7.76v35.81h-23.35v-35.81z" {...r("ssc-360")} />
            <path id="ssc-361" d="M380.55 570.89h30.81v21.88h-30.81z" {...r("ssc-361")} />
            <path id="ssc-362" d="M352.48 570.89h25.08v21.88h-25.08z" {...r("ssc-362")} />
            <path id="ssc-363" d="M299.65 544.22h31.04v23.67h-31.04z" {...r("ssc-363")} />
            <path id="ssc-364" d="M306.76 602.98v-32.09h11.15v-3h8.29v3h23.28v32.09z" {...r("ssc-364")} />
            <path id="ssc-365" d="M356.26 630.5h25.37v41.09h-25.37z" {...r("ssc-365")} />
            <path id="ssc-366" d="M346.09 630.5h7.17v41.09H327.7V630.5z" {...r("ssc-366")} />
            <path id="ssc-367" d="M297.37 630.5h27.33v41.09h-27.33z" {...r("ssc-367")} />
            <path id="mech-room2" d="M174.24 534.11v33.78l-18.39 3v14.22h20.31l3.43 3.26h19.82v-54.26z" {...d("mech-room2")} />
            <path id="mech-room3" d="M258.5 591.37h23.22v11.61H258.5z" {...d("mech-room3")} />
            <path id="ssc-368" d="M258.5 630.5h35.87v41.09H258.5z" {...r("ssc-368")} />
            <path id="ssc-370" d="m464.2 438.53-3-37.92h-85.24v79.63h-27.33v18h28.83v50.22h65.21v-44.87l22.18-3v-8.09h-9.13l3-30h49.95l3-6.46v-7.5H461.2v-3h3z" {...r("ssc-370")} />
            <path id="ssc-370A" d="M464.2 400.61h73.3v44.94h-73.3z" {...r("ssc-370A")} />
            <path id="ssc-371" d="M458.72 462.5h24v27h-24z" {...r("ssc-371")} />
            <path id="ssc-372" d="M485.72 462.5h22.96v27h-22.96z" {...r("ssc-372")} />
            <path id="ssc-373" d="M511.67 456.04v-7.5h25.83v40.96h-25.83z" {...r("ssc-373")} />
            <path id="ssc-374" d="M442.67 503.59h22.17v30.39h-22.17z" {...r("ssc-374")} />
            <path id="ssc-375" d="M442.67 536.98h22.17v30.91h-22.17z" {...r("ssc-375")} />
            <path id="ssc-376" d="M421.15 548.46h18.52v19.44h-18.52z" {...r("ssc-376")} />
            <path id="ssc-377" d="M400.15 548.46h18v19.44h-18z" {...r("ssc-377")} />
            <path id="ssc-378" d="M377.46 548.46h19.7v19.44h-19.7z" {...r("ssc-378")} />
            <path id="ssc-391" d="M129.24 432.89h93.85v98.22h-93.85z" {...r("ssc-391")} />
            <path id="ssc-391a" d="M129.24 553.87v-19.76h3.98v-3h8.74v3h29.28v33.78h-42z" {...r("ssc-391a")} />
            <path id="ssc-395" d="M129.24 570.89h23.61v17.48h-23.61z" {...r("ssc-395")} />
            <path id="ssc-396" d="M129.24 608.78h76.24v62.8h-76.24z" {...r("ssc-396")} />
            <path id="ssc-3-lactation" d="M348.63 537.24h25.83v14.93h-25.83z" {...r("ssc-3-lactation")} />
            <path id="ssc-3-shower-1" d="M348.63 510.07v-8.83h25.83v14.54h-25.83z" {...r("ssc-3-shower-1")} />
            <path id="ssc-3-shower-2" d="M348.63 518.78h25.83v15.46h-25.83z" {...r("ssc-3-shower-2")} />
            <path id="ssc-3-shower-3" d="M333.7 555.17h40.76v12.72H333.7z" {...r("ssc-3-shower-3")} />
            <g id="walls" aria-hidden="true">
                <path d="M632.07 674.59H47.85V393.24h126.78v-78.39h-47.61V42.5h260.35v84.91h64.57V42.5h180.13v273.65h-72.78v78.13h72.78v280.3Zm-581.22-3h578.22v-274.3h-72.78v-84.13h72.78V45.5H454.94v84.91h-70.57V45.5H130.02v144.72h47.35v3h-47.35v118.63h47.61v84.39H50.85z" />
                <path d="M544.61 311.59h-3.85v-36.66h16.04V44h3v233.93h-16.04v30.66h.85zM559.28 314.65h-3v-3.06h-2.54v-3h5.54z" />
                <path d="M524.78 308.59h17.48v3h-17.48zM509.46 311.59h-31.31V130.15h20.68v3h-17.68v175.44h25.31v-15.85h3zM510.37 151.61h-3v-18.46h-.46v-3h3.46z" />
                <path d="M510.37 190.28h-30.72v-3h27.72v-16.37h3zM510.37 230.33h-30.72v-3h27.72v-29.55h3zM510.37 258.89h-30.72v-3h27.72v-17.8h3zM510.37 285.63h-30.72v-3h27.72v-16.37h3zM527.65 96.5h30.65v3h-30.65zM519.37 115.93h-15.33v-3h12.33V44h3z" />
                <path d="M495.43 115.93h-23.67V86.07h46.11v3h-43.11v23.86h20.67z" />
                <path d="M465.17 86.07h8.09v3h-8.09zM453.43 86.07h2.74v3h-2.74zM453.43 57.5h64.43v3h-64.43zM556.28 395.78h3v10.17h-3zM556.28 416.33h3v256.76h-3zM126.24 649.93h3v23.15h-3zM129.24 640.15h-3v-34.37h72.13v3h-69.13zM205.48 605.78h3v67.3h-3zM126.24 563.65h3v33.46h-3zM126.24 520.02h3v33.85h-3zM126.24 467.2h3v36.39h-3zM126.24 424.15h3v26.61h-3zM126.24 394.74h3v13.57h-3z" />
                <path d="M127.74 429.89h63.78v3h-63.78zM285.37 577.09h-62.28v-144.2h-15.13v-3h18.13v144.2h56.28v-17.55h-.85v-3h3.85zM407.98 632.78h3v40.3h-3zM384.63 673.09h-3v-40.31h18.59v3h-15.59z" />
                <path d="M384.63 634.28h-3v-3.78h-17.61v-3h20.61zM327.7 673.09h-3V627.5h21.39v3H327.7zM297.37 673.09h-3V627.5H317v3h-19.63zM217.09 71.13H192.7v-3h21.39V44h3zM128.52 68.13h44.41v3h-44.41z" />
                <path d="M163.02 69.63h3v25.63h-3zM128.52 102.76h37.5v3h-37.5zM166.02 131.59h-37.5v-3h34.5v-14.55h3z" />
                <path d="M164.52 128.59h7.17v3h-7.17zM171.7 155.26h-43.18v-3h40.18v-12.98h3z" />
                <path d="M177.37 181.74h-3v-26.48h-4.17v-3h7.17zM226.28 310.61h-30.26v-3h27.26V110.85h-31.04v10.04h-3v-13.04h37.04z" />
                <path d="M198.24 306.37h3v2.74h-3zM201.24 297.96h-3v-24.98h41.02v3h-38.02z" />
                <path d="M199.74 275.98h-10.5v-31.83h3v28.83h7.5zM224.78 307.61h96.46v3h-96.46zM384.76 310.61h-46.3v-3h43.3v-7.44H458v3h-73.24z" />
                <path d="M388.48 301.67h-3v-74.02h-6.65v-19.3h3v16.3h6.65z" />
                <path d="M455.39 301.67h-3v-69.91h-65.41v-3h68.41z" />
                <path d="M406.22 128.91h3v101.35h-3z" />
                <path d="M381.83 188.78h-3v-27.71h28.89v3h-25.89zM381.83 153.37h-3v-25.96h7.04v3h-4.04zM455.39 230.26h-3v-4.63h3.52v-4.76h3v7.76h-3.52zM455.91 148.09h3v64.17h-3zM458.91 139.87h-3v-4.96h-3.98v-6h3v3h3.98z" />
                <path d="M407.72 175.54h49.7v3h-49.7zM378.83 197.26h28.89v3h-28.89zM367.35 252.7h-31.18v-18.53h3v15.53h25.18V108.3H338v16.5h-3v-19.5h32.35zM324.7 216.7h-99.92v-3h96.92v-15.92h3zM295.35 140.26h-3V105.3h20.87v3h-17.87z" />
                <path d="M324.7 134.91h-30.85v-3h27.85V105.3h3zM324.7 162.5h-30.85v-3h27.85v-16.11h3zM324.7 189.5h-30.85v-3h27.85v-15.52h3zM335 131.91h30.85v3H335zM365.85 162.5H335v-19.11h3v16.11h27.85z" />
                <path d="M335 161h3v18h-3zM334.8 186.5h31.04v3H334.8zM365.85 226.67H335v-28.89h3v25.89h27.85zM189.24 129.5h3v32.38h-3zM192.24 188.1h-3v-18.52h35.54v3h-32.54z" />
                <path d="M190.74 135.24h34.04v3h-34.04zM181.15 44h3v27.13h-3zM192.24 216.3h-3v-20.02h35.54v3h-32.54zM273.89 309.3h-3v-33.32h-12.46v-3h15.46zM296.46 309.3h-3v-33.32H282.3v-3h14.16zM247.54 272.98h3v36.13h-3zM224.78 249.7h14.48v3h-14.48zM273.89 252.7h-15.46v-3h12.46v-34.5h3zM247.54 215.2h3v37.5h-3z" />
                <path d="M295.35 252.7H282.3v-3h10.05V141.76h-67.57v-3h70.57zM177.63 313.35h-3v-5.74h5.22v3h-2.22zM554.85 397.61h2.93v3h-2.93zM472.38 397.61H539v3h-66.62zM464.2 438.53h-3v-37.92h-26.09v-3h29.09z" />
                <path d="M540.5 448.54h-79.3v-3h76.3v-47.93h8.74v3h-5.74zM375.96 480.24h-69.91v-74.8h66.91v-7.83h53.54v3h-50.54zm-66.92-3h63.91v-68.8h-63.91zM258.5 673.09h-3v-70.11h39.07v3H258.5zM336.57 605.98h-32.81v-38.09h14.15v3h-11.15v32.09h29.81zM467.85 570.89H326.2v-3h138.65V489.5h43.82v-33.46h3v36.46h-43.82z" />
                <path d="M534.24 567.89h-67.89v-3h64.89V492.5h-21.07v-3h24.07z" />
                <path d="M543.89 603.11H507.3v-3h33.59v-22.18h-9.65v-11.54h3v8.54h9.65zM451.09 600.11h37.3v3h-37.3zM431.78 603.11h-20.41v-33.72h3v30.72h17.41zM496.41 566.39h3v36.72h-3z" />
                <path d="M464.85 569.39h3v32.22h-3zM439.67 544.09h3v59.02h-3zM442.67 526.35h-3v-25.76h26.68v3h-23.68zM540.5 492.5h-7.76v-3h4.76v-42.46h3zM492.43 459.5h17.74v3h-17.74zM485.72 491h-3v-28.5h-16.37v-3h19.37zM466.35 492.5h-10.63v-33h3v30h7.63zM257 627.5h27.85v3H257zM352.48 605.98h-8.15v-3h5.15v-33.59h3zM362.33 592.77h40.99v3h-40.99z" />
                <path d="M350.98 592.77h2.64v3h-2.64zM377.55 569.39h3v24.88h-3zM439.67 533.98h26.67v3h-26.67zM429.43 545.46h11.74v3h-11.74zM396.57 545.46h13.17v3h-13.17zM418.15 545.46h3v23.94h-3zM388.22 548.46h-13.76v-47.22h-28.83v-10.37h3v7.37h28.83v47.22h10.76zM345.63 478.74h3v4.43h-3z" />
                <path d="M374.46 546.96h3v22.44h-3zM397.15 546.96h3v22.44h-3zM305.26 570.89h-8.61v-29.67h37.05v28.17h-3v-25.17h-31.05v23.67h5.61z" />
                <path d="M341.78 552.17h34.17v3h-34.17zM345.63 510.07h3v9.78h-3zM345.63 528.52h3v9.91h-3z" />
                <path d="M345.63 546.11h3v7.57h-3zM347.13 515.78h28.83v3h-28.83zM347.13 534.24h28.83v3h-28.83zM567.76 311.59h-9.98v-3h6.98v-5.87h40.31v-24.79H569v-3h39.07v30.79h-40.31z" />
                <path d="M606.57 274.93h24v3h-24zM255.5 584.91h3v19.57h-3zM281.72 599.13h3v5.35h-3z" />
                <path d="M226.8 644.98H221v-3h2.8v-53.61h60.92v3H226.8zM206.98 641.98h2.54v3h-2.54zM174.24 570.89h-46.5v-3h43.5v-36.78h32.28v3h-29.28z" />
                <path d="M199.41 532.61h3V551h-3zM141.96 531.11h30.78v3h-30.78zM127.74 531.11h5.48v3h-5.48zM202.41 580.38h-3v-18.49h-26.67v-3h29.67zM200.91 591.37h-24.32v-20.48h-3.85v-3h6.85v20.48h21.32z" />
                <path d="M169.09 585.11h9v3h-9zM160.48 588.11h-7.63v-18.72h3v15.72h4.63z" />
                <path d="M155.85 591.37h-4.76v-3h1.76v-1.76h3zM127.74 588.37h15.78v3h-15.78zM282.37 482.96h3v48.31h-3zM285.37 459.3h-3v-13.23h-4.3v-10.7h-53.48v-3h56.48v10.7h4.3z" />
                <path d="M224.59 503.2h59.28v3h-59.28zM333.7 533.48h-3V506.2h-31.05v27.28h-3V503.2h37.05z" />
                <path d="M307.54 527.02H323v3h-15.46z" />
                <path d="M313.77 504.7h3v23.83h-3zM272.2 541.54h-47.61v-3h44.61v-10.3h5.02v3h-2.02z" />
                <g>
                    <path d="M224.78 235.74h-34.04v-10.96h26.71v-6.45h7.33z" />
                    <path d="M226.28 237.24h-37.04v-13.96h26.71v-6.46h10.34v20.41Zm-34.04-3h31.04v-14.41h-4.34v6.46h-26.71v7.96Z" />
                </g>
                <path d="M479.65 160.02h30.72v3h-30.72zM523.41 137.07h34.89v3h-34.89zM558.3 166.41h-34.89v-18.32h3v15.32h31.89zM523.41 174.04h3v18.91h-3zM523.41 200.2h34.89v3h-34.89zM274.09 485.98h-4.89V457.8h4.89v3h-1.89v22.18h1.89z" />
                <path d="M224.59 467.85h46.11v3h-46.11zM211.09 531.11h13.5v3h-13.5z" />
                <g>
                    <path d="M225.3 589.87H257v21.46h-31.7z" />
                    <path d="M258.5 612.83h-34.7v-24.46h34.7zm-31.7-3h28.7v-18.46h-28.7z" />
                </g>
                <g>
                    <path d="M257 650.65h-4.11v-39.32H257" />
                    <path d="M257 652.15h-5.61v-42.32H257v3h-2.61v36.32H257z" />
                </g>
                <path d="M238.15 622.48h3v30.26h-3z" />
                <path d="M225.3 623.98h27.59v2H225.3zM225.3 626.98h27.59v2H225.3zM225.3 629.98h27.59v2H225.3zM225.3 632.98h27.59v2H225.3zM225.3 635.98h12.85v2H225.3zM225.3 638.98h12.85v2H225.3zM225.3 641.98h12.85v2H225.3z" />
                <path d="M223.8 643.48h3v8.02h-3z" />
                <path d="M225.3 644.98h12.85v2H225.3zM225.3 647.98h12.85v2H225.3zM567.3 289.18h30.26v3H567.3z" />
                <path d="M594.07 276.34h2v27.59h-2zM591.07 276.34h2v27.59h-2zM588.07 276.34h2v27.59h-2zM585.07 276.34h2v27.59h-2zM582.07 276.34h2v12.85h-2zM579.07 276.34h2v12.85h-2zM576.07 276.34h2v12.85h-2zM573.07 276.34h2v12.85h-2zM570.07 276.34h2v12.85h-2zM470.37 71.2h30.26v3h-30.26z" />
                <path d="M497.13 59.35h2v27.59h-2zM494.13 59.35h2v27.59h-2zM491.13 59.35h2v27.59h-2zM488.13 59.35h2v27.59h-2zM485.13 59.35h2V71.2h-2zM482.13 59.35h2V71.2h-2zM479.13 59.35h2V71.2h-2zM476.13 59.35h2V71.2h-2zM473.13 59.35h2V71.2h-2zM456.24 330.08h-74.48v-20.97h3v17.97h71.48z" />
                <path d="M383.26 312.21h72.98v3h-72.98z" />
                <path d="M406.71 313.71h2v14.87h-2zM403.71 313.71h2v14.87h-2zM400.71 313.71h2v14.87h-2zM397.71 313.71h2v14.87h-2z" />
                <g>
                    <path d="M394.71 315.03h2v.5h-2zM396.71 325.65h-2v-1.01h2zm0-2.03h-2v-1.01h2zm0-2.02h-2v-1.01h2zm0-2.03h-2v-1.01h2zm0-2.02h-2v-1.01h2zM394.71 326.66h2v.5h-2z" />
                </g>
                <path d="M434.71 313.71h2v14.87h-2zM431.71 313.71h2v14.87h-2zM428.71 313.71h2v14.87h-2zM425.71 313.71h2v14.87h-2zM446.71 313.71h2v14.87h-2zM443.71 313.71h2v14.87h-2zM440.71 313.71h2v14.87h-2zM437.71 313.71h2v14.87h-2zM452.71 313.71h2v14.87h-2zM449.71 313.71h2v14.87h-2zM409.71 313.71h2v14.87h-2zM353.26 627.43h3v44.15h-3zM272.2 541.54v12h2.02l.01 3-5.03.03v-18.03zM454.93 45.5h61.43v12h-61.43zM608.07 277.93h21v35.22h-69.79v-1.56h8.48v-5.87h40.31zM486.04 123.92h3v6.23h-3zM184.15 152.26h5.09v3h-5.09zM223.09 432.89V408.5h62.28v23.87h-59.28z" />
                <path d="M486.13 74.2v11.87M583.07 292.18v10.54M241.15 636.98h10.24" style={{ fill: "none", stroke: "#000", strokeDasharray: 1, strokeMiterlimit: 10, strokeWidth: "2px" }} />
                <g id="Bathroom-Sign-1" aria-hidden="true">
                    <g id="Bathroom-Sign-2" aria-hidden="true">
                        <path id="b-sign4" d="m247.23 447.19-.98 4.65c-.48 1.23-2.24.96-2.3-.38.5-2.06.71-4.32 1.27-6.36.31-1.11.98-1.67 2.15-1.75 1.38-.1 3.65-.1 5.03 0 1.02.08 1.8.58 2.09 1.58.25 2.01 1.05 4.21 1.27 6.2.17 1.58-1.52 2.08-2.24.77l-1.03-4.88v15.06s-.17.39-.19.41c-.01.01-.24.19-.27.21-.75.49-1.61.17-1.84-.7l-.02-8.62c-.05-.43-.52-.55-.57 0-.23 2.67.24 5.7 0 8.37-.07.85-.65 1.29-1.5 1.15-.3-.05-.62-.35-.74-.62-.02-.05-.14-.4-.14-.42v-14.67Z" />
                        <path id="b-sign1" d="M251.39 442.14c-1.9 1.97-4.95-.92-3-2.91s4.85.99 3 2.91" />
                    </g>
                </g>
                <g id="Bathroom-Sign-1-2" aria-hidden="true" data-name="Bathroom-Sign-1">
                    <g id="Bathroom-Sign-2-2" aria-hidden="true" data-name="Bathroom-Sign-2">
                        <path id="b-sign4-2" d="m247.23 518.19-.98 4.65c-.48 1.23-2.24.96-2.3-.38.5-2.06.71-4.32 1.27-6.36.31-1.11.98-1.67 2.15-1.75 1.38-.1 3.65-.1 5.03 0 1.02.08 1.8.58 2.09 1.58.25 2.01 1.05 4.21 1.27 6.2.17 1.58-1.52 2.08-2.24.77l-1.03-4.88v15.06s-.17.39-.19.41c-.01.01-.24.19-.27.21-.75.49-1.61.17-1.84-.7l-.02-8.62c-.05-.43-.52-.55-.57 0-.23 2.67.24 5.7 0 8.37-.07.85-.65 1.29-1.5 1.15-.3-.05-.62-.35-.74-.62-.02-.05-.14-.4-.14-.42v-14.67Z" data-name="b-sign4" />
                        <path id="b-sign1-2" d="M251.39 513.14c-1.9 1.97-4.95-.92-3-2.91s4.85.99 3 2.91" data-name="b-sign1" />
                    </g>
                </g>
                <g id="Bathroom-Sign-3" aria-hidden="true">
                    <path id="b-sin5" d="m245.16 491.65 2.15-7.52-2 4.41c-.73 1.12-2.43.47-2.17-.87l3.22-7.24c.33-.46.72-.57 1.26-.6 1.28-.08 3.43-.11 4.69 0 .46.04.8.19 1.06.58.94 2.22 2.07 4.38 2.99 6.61.17.41.33.66.27 1.14-.11.88-1.25 1.23-1.92.68-.2-.17-.27-.35-.39-.57-.69-1.33-1.2-2.84-1.86-4.18l-.24-.41 2.09 7.97h-1.81v6.87s-.11.25-.14.31c-.58 1.06-2.22.63-2.23-.65 0-.11.06-.22.06-.34-.01-2.02 0-4.03 0-6.05-.05-.25-.44-.11-.62-.14v6.92s-.14.3-.17.34c-.34.5-1.17.66-1.67.31-.15-.1-.48-.54-.48-.71v-6.78l-.08-.08z" />
                    <path id="b-sign2" d="M249.78 475.1c2.72-.13 2.92 4.09.15 4.17-2.69.08-2.87-4.04-.15-4.17" />
                </g>
                <g id="Bathroom-Sign-3-2" aria-hidden="true" data-name="Bathroom-Sign-3">
                    <path id="b-sin5-2" d="m245.16 562.65 2.15-7.52-2 4.41c-.73 1.12-2.43.47-2.17-.87l3.22-7.24c.33-.46.72-.57 1.26-.6 1.28-.08 3.43-.11 4.69 0 .46.04.8.19 1.06.58.94 2.22 2.07 4.38 2.99 6.61.17.41.33.66.27 1.14-.11.88-1.25 1.23-1.92.68-.2-.17-.27-.35-.39-.57-.69-1.33-1.2-2.84-1.86-4.18l-.24-.41 2.09 7.97h-1.81v6.87s-.11.25-.14.31c-.58 1.06-2.22.63-2.23-.65 0-.11.06-.22.06-.34-.01-2.02 0-4.03 0-6.05-.05-.25-.44-.11-.62-.14v6.92s-.14.3-.17.34c-.34.5-1.17.66-1.67.31-.15-.1-.48-.54-.48-.71v-6.78l-.08-.08z" data-name="b-sin5" />
                    <path id="b-sign2-2" d="M249.78 546.1c2.72-.13 2.92 4.09.15 4.17-2.69.08-2.87-4.04-.15-4.17" data-name="b-sign2" />
                </g>
                <g id="Bathroom-Sign-1-3" aria-hidden="true" data-name="Bathroom-Sign-1">
                    <g id="Bathroom-Sign-2-3" aria-hidden="true" data-name="Bathroom-Sign-2">
                        <path id="b-sign4-3" d="m325.88 514.47.59 2.79a.71.71 0 0 0 1.38-.23c-.3-1.24-.43-2.59-.76-3.81-.18-.67-.59-1-1.29-1.05-.83-.06-2.19-.06-3.02 0-.61.05-1.08.35-1.26.95-.15 1.21-.63 2.53-.76 3.72-.1.95.91 1.25 1.35.46l.62-2.93v9.04s.1.23.11.24c0 0 .14.11.16.13.45.29.97.1 1.1-.42v-5.17c.05-.26.33-.33.36 0 .14 1.6-.14 3.42 0 5.02.04.51.39.77.9.69.18-.03.37-.21.44-.37.01-.03.08-.24.08-.25v-8.8Z" data-name="b-sign4" />
                        <path id="b-sign1-3" d="M323.39 511.44c1.14 1.18 2.97-.55 1.8-1.75s-2.91.6-1.8 1.75" data-name="b-sign1" />
                    </g>
                </g>
                <g id="Bathroom-Sign-3-3" aria-hidden="true" data-name="Bathroom-Sign-3">
                    <path id="b-sin5-3" d="m309.59 519.24-1.29-4.51 1.2 2.65c.44.67 1.46.28 1.3-.52l-1.93-4.34c-.2-.28-.43-.34-.76-.36-.77-.05-2.06-.07-2.82 0-.27.02-.48.12-.63.35-.57 1.33-1.24 2.63-1.8 3.97-.1.25-.2.4-.16.68.07.53.75.74 1.15.41.12-.1.16-.21.23-.34.41-.8.72-1.7 1.12-2.51l.14-.25-1.25 4.78h1.09v4.12s.07.15.09.18c.35.64 1.33.38 1.34-.39 0-.06-.04-.13-.04-.2v-3.63c.03-.15.26-.07.37-.08v4.15l.1.2c.2.3.7.39 1 .19.09-.06.29-.32.29-.42v-4.07l.05-.05h1.2Z" data-name="b-sin5" />
                    <path id="b-sign2-3" d="M306.82 509.31c-1.63-.08-1.75 2.46-.09 2.5 1.61.05 1.72-2.43.09-2.5" data-name="b-sign2" />
                </g>
            </g>
            <g id="Pathing" aria-hidden="true">
                <circle id="Junction_3" cx="466.77" cy="321.14" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-2" cx="466.77" cy="216.57" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-2"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-3" cx="466.77" cy="143.98" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-3"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-4" cx="517.12" cy="321.14" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-4"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-5" cx="517.12" cy="387.59" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-5"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-6" cx="295.71" cy="387.59" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-6"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-7" cx="329.85" cy="321.14" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-7"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-8" cx="187.93" cy="321.14" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-8"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-9" cx="199.74" cy="387.59" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-9"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-10" cx="295.71" cy="471.89" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-10"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-11" cx="337.74" cy="542.27" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-11"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-12" cx="329.85" cy="387.59" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-12"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-13" cx="466.77" cy="387.59" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-13"), transition: "opacity 0.3s" }} />
                <circle id="Junction_3-14" cx="430.8" cy="387.59" r="4" fill="#16a34a" style={{ opacity: jVis("SSC-3:Junction_3-14"), transition: "opacity 0.3s" }} />
                <path id="Segment_1" d="M295.71 471.89v19.83h42.03v50.55" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_1"), transition: "opacity 0.3s" }} />
                <path id="Segment_2" d="M295.71 387.59v84.3" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_2"), transition: "opacity 0.3s" }} />
                <path id="Segment_3" d="M295.71 387.59h-95.97" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_3"), transition: "opacity 0.3s" }} />
                <path id="Segment_4" d="M199.74 387.59h-11.81v-66.45" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_4"), transition: "opacity 0.3s" }} />
                <path id="Segment_5" d="M329.85 321.14H187.93" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_5"), transition: "opacity 0.3s" }} />
                <path id="Segment_6" d="M329.85 321.14v66.45" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_6"), transition: "opacity 0.3s" }} />
                <path id="Segment_7" d="M295.71 387.59h34.14" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_7"), transition: "opacity 0.3s" }} />
                <path id="Segment_8" d="M430.8 387.59H329.85" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_8"), transition: "opacity 0.3s" }} />
                <path id="Segment_9" d="M430.8 387.59h35.97" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_9"), transition: "opacity 0.3s" }} />
                <path id="Segment_10" d="M517.12 387.59h-50.35" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_10"), transition: "opacity 0.3s" }} />
                <path id="Segment_11" d="M517.12 321.14v66.45" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_11"), transition: "opacity 0.3s" }} />
                <path id="Segment_12" d="M517.12 321.14h-50.35" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_12"), transition: "opacity 0.3s" }} />
                <path id="Segment_13" d="M466.77 321.14v66.45" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_13"), transition: "opacity 0.3s" }} />
                <path id="Segment_14" d="M466.77 216.57v104.57" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_14"), transition: "opacity 0.3s" }} />
                <path id="Segment_15" d="M466.77 216.57v-72.59" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:Segment_15"), transition: "opacity 0.3s" }} />
                <path id="ssc-lactation-room-seg" d="M348.63 542.27h-10.89" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-lactation-room-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-shower-room-seg" d="M337.74 555.17v-12.9" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-shower-room-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-301-seg" d="M187.93 307.61v13.53" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-301-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-340-seg" d="M517.12 321.14v-12.55" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-340-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-355-seg" d="M517.12 387.59h33.42v13.02" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-355-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-370-seg" d="M430.8 400.61v-13.02" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-370-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-370a-seg" d="M466.77 400.61v-13.02" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-370a-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-391-seg" d="M199.74 432.89v-45.3" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-391-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-332-seg" d="M329.85 321.14v-13.53" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-332-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-336-seg" d="M466.77 216.57h-10.86" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-336-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-337-seg" d="M455.91 143.98h10.86" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-337-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-2to3-seg" d="M394.71 321.14h72.06" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-2to3-seg"), transition: "opacity 0.3s" }} />
                <path id="ssc-level3-womens-restroom" d="M278.23 485.98v-14.09h17.48" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-level3-womens-restroom"), transition: "opacity 0.3s" }} />
                <path id="ssc-level3-mens-restroom" d="M278.23 457.8v14.09h17.48" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sVis("SSC-3:ssc-level3-mens-restroom"), transition: "opacity 0.3s" }} />
            </g>
        </svg>
    );
});
