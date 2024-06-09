export default function decorate(block) {
    const bgs = block.children;

    for (let i = 0; i < bgs.length; i++) {
        const bg = bgs[i];
        bgs[i].className = `slide-${i}`;
    }
   
}