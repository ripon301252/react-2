export default function Friend({friend}){
    const {id, name, email, address} = friend;
    return(
        <div className="box">
            <h4>Id : {id}</h4>
            <h4>Name : {name}</h4>
            <h4>Email : {email}</h4>
            <h4>Zipcode : {address.zipcode}</h4>
        </div>
    )
}