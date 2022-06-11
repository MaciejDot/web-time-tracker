import Piece from "./piece/Piece";

export default function Circle() {
    return <div style={{position: 'relative', minHeight: '100px', display:"flex", justifyContent:'space-between'}}>
        <section style={{
        width: '100px',
        height: '100px',
        overflow: 'hidden',
    }}></section>
        <section style={{
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        overflow: 'hidden',
        position: 'absolute',
    }}>
        <Piece start={0} end={12.5} color='red'/>
    </section>
    <section style={{
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        overflow: 'hidden',
        position: 'absolute',
    }}>
        <Piece start={10} end={25} color='blue'/>
    </section>
    
    <section style={{
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        overflow: 'hidden',
        position: 'absolute',
    }}>
        <Piece start={25} end={49} color='yellow'/>
    </section>
    <section style={{width:'100px'}}>
        <h3>Summary</h3>
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{backgroundColor:'red', width:'20px', height:'20px', display:'inline-block'}}/> Google
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{backgroundColor:'blue', width:'20px', height:'20px', display:'inline-block'}}/>  Youtube
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{backgroundColor:'yellow', width:'20px', height:'20px', display:'inline-block'}}/> 
         Stackoverflow
        </div>
    </section>
    </div>
}