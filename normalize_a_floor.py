import re

def process_file1():
    with open('src/components/AFloor1.jsx', 'r') as f:
        content = f.read()

    # Remove defs/style
    content = re.sub(r'<defs>.*?</defs>', '', content, flags=re.DOTALL)

    # Add imports and component definition
    header = '''import React from 'react';

export const AFloor1 = React.memo(function AFloor1({ getColor, onHover, onClick }) {
    const r = (id) => ({
        fill: getColor(id),
        onMouseEnter: () => onHover(id, true),
        onMouseLeave: () => onHover(id, false),
        onClick: () => onClick(id),
        style: { cursor: "pointer", transition: "opacity 0.2s" }
    });

    return ('''

    footer = '''    );
});
export default AFloor1;'''

    # Replace class="st1" with fill="#e5e5e5"
    content = content.replace('class="st1"', 'fill="#e5e5e5"')

    # Replace class="st0" with {...r("id")}
    def replacer(match):
        id_val = match.group(1)
        return f'id="{id_val}" d="{match.group(2)}" {{...r("{id_val}")}}'

    content = re.sub(r'id="([^"]+)" d="([^"]+)" class="st0"', replacer, content)

    # Wrap in header/footer
    content = header + '\n' + content + '\n' + footer

    with open('src/components/AFloor1.jsx', 'w') as f:
        f.write(content)

def process_file2():
    with open('src/components/AFloor2.jsx', 'r') as f:
        content = f.read()

    # Add imports and component definition
    header = '''import React from 'react';

export const AFloor2 = React.memo(function AFloor2({ getColor, onHover, onClick }) {
    const r = (id) => ({
        fill: getColor(id),
        onMouseEnter: () => onHover(id, true),
        onMouseLeave: () => onHover(id, false),
        onClick: () => onClick(id),
        style: { cursor: "pointer", transition: "opacity 0.2s" }
    });

    return ('''

    footer = '''    );
});
export default AFloor2;'''

    content = content.replace('style="fill:#cac9c4"', 'fill="#e5e5e5"')

    # Replace style="fill:#00aeef" with {...r("id")}
    def replacer2(match):
        id_val = match.group(1)
        return f'id="{id_val}" d="{match.group(2)}" {{...r("{id_val}")}}'

    content = re.sub(r'id="([^"]+)" d="([^"]+)" style="fill:#00aeef"', replacer2, content)

    # Wrap in header/footer
    content = header + '\n' + content + '\n' + footer

    with open('src/components/AFloor2.jsx', 'w') as f:
        f.write(content)

process_file1()
process_file2()
