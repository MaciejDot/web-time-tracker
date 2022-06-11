export default function Piece({start, end, color}: {start:number, end: number, color:string}){
    const distance = end - start;

    if(distance < 25){
        const percentOf90Deg = distance / 25;
        const ctg = 1/Math.tan(percentOf90Deg * Math.PI / 4);
        const transform =  50 * ctg;
        return <div
        style={{
            backgroundColor: 'transparent',
            width: '0',
            height: '0',
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            borderBottom: `${transform}px solid transparent`,
            borderTop: `${transform}px solid ${color}`,
            transform: `rotate(${start* 3.6 + (percentOf90Deg * 45)}deg)`,
            marginTop: `${50 - transform}px`,
        }}
    />
    }
        return <div
        style={{
            backgroundColor: 'transparent',
            width: '0',
            height: '0',
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            borderBottom: '50px solid black',
            borderTop: '50px solid black',
            transform: `rotate(${start* 3.6+ 45}deg)`
        }}
    />
}