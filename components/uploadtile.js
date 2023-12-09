export default function UploadTile({name, id}) {
    return (
      <div className='flex flex-col items-center border-2 border-pink hover:shadow-lg bg-purple-200' > 
         <h1> {name}</h1>
        <div className="flex flex-row">
          <p> {name} </p>
        </div>
      </div>
    )
  }