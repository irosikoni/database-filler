import "@total-typescript/ts-reset";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
config.autoAddCss = false;
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center content-center p-10 m-10 border-black border-4">
      <form className="flex flex-row items-center justify-around p-10">
        <div className="p-5 flex flex-col justify-start">
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Title</label>
            <input className=" w-72"></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Description</label>
            <input className=" h-44 w-72"></input>
          </div>
        </div>
        <div className="p-5 flex flex-col justify-start">
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Preparation</label>
            <input className=" h-44 w-72"></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Advises</label>
            <input className=" h-44 w-72"></input>
          </div>
        </div>

        <div className="p-5 flex flex-col ">
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Image</label>
            <input></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <label className="text-2xl font-bold">Category</label>
            <input></input>
          </div>

          <div className="border-t-4 border-black mt-5">
            <div className="flex flex-col items-center justify-center">
              <label className="text-2xl font-bold">Ingredients</label>
              <div className="flex flex-row items-center justify-center">
                <input className="w-12 m-2"></input>
                <input className="w-12 m-2"></input>
                <input className="w-12 m-2"></input>
              </div>
              <input className="w-44"></input>
              <div className="flex flex-row items-center justify-center">
                <input className="w-12 m-2"></input>
                <input className="w-12 m-2"></input>
                <input className="w-12 m-2"></input>
              </div>
              <input className="w-44"></input>
              <span className="text-2xl font-bold">
                <FontAwesomeIcon icon={faSquarePlus} />
              </span>
            </div>
          </div>
          <button className="border-4 bg-black text-white p-2 m-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
