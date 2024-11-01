const Usercard=({user})=>{
    const{firstName,about}=user;
    return(
<div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}</h2>
    {about&&<p>{about}</p>}
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-Secondary">Interested</button>
    </div>
  </div>
</div>
    )
}
export default Usercard;