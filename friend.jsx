export default function Friend({friend}) {
    const {name, email} = friend;
    return(
        <div style={{textAlign : 'center', border : '2px solid red', borderRadius : '15px', marginBottom : '10px', width : '400px', margin: '10px auto'}}>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )
}