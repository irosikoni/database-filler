import "@total-typescript/ts-reset";

export default function Home() {
  return (
    <div className="flex flex-col items-center content-center justify-center p-24">
      <div className="flex flex-col items-center justify-center content-center p-10 m-10 border-black border-4">
        <form className="flex flex-col items-center justify-center p-10">
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Title</label>
            <input></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Description</label>
            <input></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Preparation</label>
            <input></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Advises</label>
            <input></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Image</label>
            <input></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Category</label>
            <input></input>
          </div>
        </form>
      </div>
    </div>
  );
}
